window.FAE.escapeHtml = function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

window.FAE.getStats = function getStats() {
  const notes = window.FAE.notes;
  return {
    total: notes.length,
    published: notes.filter((note) => note.status === "published").length,
    tested: notes.filter((note) =>
      (note.evidenceTypes || []).includes("tested")
    ).length,
    review: notes.filter(
      (note) => note.status === "review" || note.hasOpenQuestions
    ).length
  };
};

window.FAE.renderMiniEmpty = function renderMiniEmpty(message) {
  return `
    <div class="empty-mini">
      <div class="empty-mini-icon">·</div>
      <p>${window.FAE.escapeHtml(message)}</p>
    </div>
  `;
};

window.FAE.renderHome = function renderHome() {
  const stats = window.FAE.getStats();
  const areaChips = window.FAE.areas
    .map(
      (area) =>
        `<span class="scope-chip">${window.FAE.escapeHtml(area.title)}</span>`
    )
    .join("");

  return `
    <section class="hero-panel">
      <div class="hero-copy">
        <div class="eyebrow">FAE 工作知識庫</div>
        <h1 class="page-title">把每次學會的事，變成下次能直接找到的答案。</h1>
        <p class="page-subtitle">
          從產品定位、操作流程，到實測結果與問題排查；每項重要結論都保留來源、版本與適用環境。
        </p>
        <div class="hero-status">
          <span class="hero-status-dot"></span>
          2.0 架構已建立，目前尚無正式筆記
        </div>
      </div>
    </section>

    <section class="stats-grid" aria-label="筆記統計">
      <article class="stat-card">
        <strong>${stats.total}</strong>
        <span>全部筆記</span>
      </article>
      <article class="stat-card" data-tone="blue">
        <strong>${stats.published}</strong>
        <span>已完成</span>
      </article>
      <article class="stat-card" data-tone="green">
        <strong>${stats.tested}</strong>
        <span>含實測證據</span>
      </article>
      <article class="stat-card" data-tone="amber">
        <strong>${stats.review}</strong>
        <span>待確認</span>
      </article>
    </section>

    <div class="section-heading">
      <div>
        <h2>工作台</h2>
        <p>正式資料加入後會自動更新</p>
      </div>
    </div>

    <section class="dashboard-grid">
      <article class="dashboard-card">
        <div class="dashboard-card-header">
          <h3>最近更新</h3>
          <span class="card-kicker">Recent</span>
        </div>
        ${window.FAE.renderMiniEmpty("尚無更新紀錄")}
      </article>
      <article class="dashboard-card">
        <div class="dashboard-card-header">
          <h3>待確認</h3>
          <span class="card-kicker">Review</span>
        </div>
        ${window.FAE.renderMiniEmpty("目前沒有待確認項目")}
      </article>
      <article class="dashboard-card">
        <div class="dashboard-card-header">
          <h3>實測紀錄</h3>
          <span class="card-kicker">Lab</span>
        </div>
        ${window.FAE.renderMiniEmpty("尚未加入實測資料")}
      </article>
    </section>

    <div class="section-heading">
      <div>
        <h2>預定涵蓋範圍</h2>
        <p>先建立架構，再逐篇搬遷</p>
      </div>
    </div>
    <div class="scope-row">${areaChips}</div>
  `;
};

window.FAE.renderEmptyState = function renderEmptyState(view, hasQuery) {
  const title = hasQuery ? "找不到符合條件的筆記" : "這個分類還是空的";
  const message = hasQuery
    ? "可以換個關鍵字，或將狀態切回「全部」再試一次。"
    : "第一階段先確認分類與畫面是否順手，驗收後再加入示範資料。";

  return `
    <section class="empty-state">
      <div class="empty-state-inner">
        <div class="empty-state-icon">${window.FAE.escapeHtml(view.icon || "+")}</div>
        <h2>${title}</h2>
        <p>${message}</p>
      </div>
    </section>
  `;
};

/* ============ 筆記詳細內容（sections）渲染 ============
   延續 v1 已經驗證過的 Block 概念：text / list / image / flow / table / note / callout / spacer。
   之後要新增新的 Block 類型，只要在 renderSection() 這個 switch 裡加一個 case 即可。 */

window.FAE.imagePlaceholder = function imagePlaceholder(folder, noteId, num, label) {
  const n = String(num).padStart(2, "0");
  const relPath = `${folder}/${noteId}-${n}.png`;
  return `
    <div class="img-placeholder">
      <span>[images/${relPath}] 待補上傳 — ${window.FAE.escapeHtml(label || "")}</span>
    </div>
  `;
};

window.FAE.handleImageError = function handleImageError(imgEl, folder, noteId, num, label) {
  imgEl.outerHTML = window.FAE.imagePlaceholder(folder, noteId, num, label);
};

window.FAE.openLightbox = function openLightbox(src) {
  const box = document.createElement("div");
  box.className = "img-lightbox";
  box.innerHTML = `<img src="${src}">`;
  box.onclick = () => box.remove();
  document.body.appendChild(box);
};

function renderImageSection(note, sec) {
  const folder = `${note.areaId}/${note.moduleId || "general"}`;
  const filename = `${note.id}-${String(sec.num).padStart(2, "0")}.png`;
  const path = `images/${folder}/${filename}`;
  const safeLabel = window.FAE.escapeHtml(sec.label || "").replace(/'/g, "\\'");
  return `<img src="${path}" alt="${window.FAE.escapeHtml(sec.label || "")}" loading="lazy"
    onclick="window.FAE.openLightbox('${path}')"
    onerror="window.FAE.handleImageError(this, '${folder}', '${note.id}', ${sec.num}, '${safeLabel}')">`;
}

function renderSection(note, sec) {
  switch (sec.type) {
    case "text":
      return `${sec.title ? `<p class="section-kicker">${window.FAE.escapeHtml(sec.title)}</p>` : ""}<p>${sec.content || ""}</p>`;

    case "list":
      return `${sec.title ? `<p class="section-kicker">${window.FAE.escapeHtml(sec.title)}</p>` : ""}<ul>${(sec.items || []).map((item) => `<li>${item}</li>`).join("")}</ul>`;

    case "flow":
      return `<div class="flow">${(sec.steps || [])
        .map((step, i, arr) => `<div class="flow-step">${step}</div>${i < arr.length - 1 ? '<div class="flow-arrow">↓</div>' : ""}`)
        .join("")}</div>`;

    case "image":
      return renderImageSection(note, sec);

    case "table": {
      const head = sec.headers ? `<tr>${sec.headers.map((h) => `<th>${window.FAE.escapeHtml(h)}</th>`).join("")}</tr>` : "";
      const rows = (sec.rows || []).map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
      return `<table>${head}${rows}</table>`;
    }

    case "note":
      return `<p class="section-note">${sec.title ? `<strong>${window.FAE.escapeHtml(sec.title)}：</strong>` : ""}${sec.content || ""}</p>`;

    case "callout":
      return `<div class="memory-hook"><span class="hook-label">${window.FAE.escapeHtml(sec.label || "記憶點")}</span><span>${sec.content || ""}</span></div>`;

    case "spacer":
      return `<div class="section-spacer"></div>`;

    default:
      return "";
  }
}

window.FAE.renderSections = function renderSections(note) {
  if (!note.sections || !note.sections.length) return "";
  return `<div class="note-sections">${note.sections.map((sec) => renderSection(note, sec)).join("")}</div>`;
};

window.FAE.renderNoteSources = function renderNoteSources(note) {
  const citations = (note.sources || [])
    .map((citation) => {
      const source = window.FAE.sources.find((s) => s.id === citation.sourceId);
      return source ? { citation, source } : null;
    })
    .filter(Boolean);

  if (!citations.length) return "";

  const entries = citations
    .map(({ citation, source }) => {
      const titleHtml = source.url
        ? `<a class="source-chip" href="${window.FAE.escapeHtml(source.url)}" target="_blank" rel="noopener">${window.FAE.escapeHtml(source.title)}</a>`
        : `<span class="source-chip">${window.FAE.escapeHtml(source.title)}</span>`;

      const locationParts = [];
      if (citation.chapter) locationParts.push(`章節：${window.FAE.escapeHtml(citation.chapter)}`);
      if (citation.pages) locationParts.push(`頁碼：${window.FAE.escapeHtml(citation.pages)}`);
      const locationHtml = locationParts.length
        ? `<div class="source-location">${locationParts.join("　")}</div>`
        : "";

      const keywords = citation.keywords || [];
      const keywordsHtml = keywords.length
        ? `
          <div class="source-keywords">
            <span class="meta-label">PDF 搜尋關鍵字</span>
            ${keywords
              .map(
                (kw) => `
                <span
                  class="keyword-chip"
                  data-tooltip="複製關鍵字"
                  data-keyword="${window.FAE.escapeHtml(kw)}"
                  onclick="window.FAE.copyKeyword(this)"
                >${window.FAE.escapeHtml(kw)}</span>
              `
              )
              .join("")}
          </div>
        `
        : "";

      return `<div class="source-entry">${titleHtml}${locationHtml}${keywordsHtml}</div>`;
    })
    .join("");

  return `
    <div class="source-row">
      <span class="related-label">參考來源</span>
      <div class="source-list">${entries}</div>
    </div>
  `;
};

/* 點擊關鍵字複製到剪貼簿。file:// 環境下 navigator.clipboard 常會被拒絕權限，
   所以優先試 Clipboard API，失敗就退回傳統 execCommand 複製，確保雙擊開啟本機檔案也能用。 */
function fallbackCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (err) {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

window.FAE.copyKeyword = function copyKeyword(el) {
  const text = el.dataset.keyword || el.textContent.trim();

  const showResult = (ok) => {
    el.classList.toggle("copied", ok);
    el.classList.toggle("copy-failed", !ok);
    el.dataset.tooltip = ok ? "已複製" : "複製失敗，請手動選取";
    clearTimeout(el._copyTimer);
    el._copyTimer = setTimeout(() => {
      el.classList.remove("copied", "copy-failed");
      el.dataset.tooltip = "複製關鍵字";
    }, 1400);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showResult(true))
      .catch(() => showResult(fallbackCopyText(text)));
  } else {
    showResult(fallbackCopyText(text));
  }
};

window.FAE.renderRelatedNotes = function renderRelatedNotes(note) {
  const related = (note.related || [])
    .map((id) => window.FAE.notes.find((n) => n.id === id))
    .filter(Boolean);
  const missingCount = (note.related || []).length - related.length;
  if (!related.length && !missingCount) return "";
  const chips = related
    .map(
      (n) =>
        `<button type="button" class="related-chip" data-note-id="${window.FAE.escapeHtml(n.id)}">${window.FAE.escapeHtml(n.title)}</button>`
    )
    .join("");
  const pending = missingCount > 0
    ? `<span class="related-pending">還有 ${missingCount} 篇尚未搬遷</span>`
    : "";
  return `<div class="related-row"><span class="related-label">相關筆記</span>${chips}${pending}</div>`;
};

/* 把 status / evidenceTypes 的 id 換成中文顯示名稱 */
function getStatusLabel(statusId) {
  const status = window.FAE.statuses.find((s) => s.id === statusId);
  return status ? status.label : statusId;
}

function getEvidenceLabel(evidenceId) {
  const evidence = window.FAE.evidenceTypes.find((e) => e.id === evidenceId);
  return evidence ? evidence.label : evidenceId;
}

/* 適用版本要顯示成「GV-VMS V20」這種完整寫法，不只是單獨的版本號，
   所以要先查出這篇筆記的領域名稱，當作版本前綴。 */
function getVersionLabel(note) {
  const area = window.FAE.areas.find((a) => a.id === note.areaId);
  const prefix = area ? area.title : note.areaId;
  return (note.versions || []).map((v) => `${prefix} ${v}`).join("、");
}

function renderMetaGroup(label, pills) {
  if (!pills.length) return "";
  const chips = pills.map((p) => `<span class="meta-pill">${window.FAE.escapeHtml(p)}</span>`).join("");
  return `<div class="meta-group"><span class="meta-label">${label}</span>${chips}</div>`;
}

window.FAE.renderNoteCard = function renderNoteCard(note) {
  const metaGroups = [
    renderMetaGroup("狀態", [getStatusLabel(note.status)]),
    note.versions && note.versions.length ? renderMetaGroup("適用版本", [getVersionLabel(note)]) : "",
    note.evidenceTypes && note.evidenceTypes.length
      ? renderMetaGroup("參考資料", note.evidenceTypes.map(getEvidenceLabel))
      : "",
    note.devices && note.devices.length ? renderMetaGroup("設備", note.devices) : ""
  ].join("");

  const tags = (note.tags || [])
    .map((tag) => `<span class="tag">${window.FAE.escapeHtml(tag)}</span>`)
    .join("");
  const tagRow = tags
    ? `<div class="meta-group note-tags"><span class="meta-label">標籤</span>${tags}</div>`
    : "";

  const hasSections = Boolean(note.sections && note.sections.length);
  const expanded = hasSections && window.FAE.state.expandedNotes.has(note.id);
  const noteId = window.FAE.escapeHtml(note.id);

  return `
    <article class="note-card${expanded ? " expanded" : ""}" id="note-${noteId}">
      <div
        class="note-card-header"
        ${
          hasSections
            ? `data-note-toggle="${noteId}" role="button" tabindex="0" aria-expanded="${expanded}" aria-controls="note-body-${noteId}"`
            : ""
        }
      >
        <div class="note-card-header-main">
          <h2>${window.FAE.escapeHtml(note.title)}</h2>
          <p>${window.FAE.escapeHtml(note.summary)}</p>
          <div class="note-meta-groups">${metaGroups}${tagRow}</div>
        </div>
        ${hasSections ? `<span class="note-expand-icon" aria-hidden="true"></span>` : ""}
      </div>
      ${
        hasSections
          ? `
            <div
              class="note-body-shell"
              id="note-body-${noteId}"
              aria-hidden="${!expanded}"
            >
              <div class="note-body-overflow">
                <div class="note-body">
                  ${window.FAE.renderSections(note)}
                  ${window.FAE.renderNoteSources(note)}
                  ${window.FAE.renderRelatedNotes(note)}
                </div>
              </div>
            </div>
          `
          : ""
      }
    </article>
  `;
};

window.FAE.renderView = function renderView() {
  const view = window.FAE.getNavigationItem(window.FAE.state.viewId);
  const areaId = window.FAE.getCurrentAreaId();
  const module = window.FAE.getModuleById(
    areaId,
    window.FAE.state.moduleId
  );
  const notes = window.FAE.getFilteredNotes();
  const hasQuery = Boolean(window.FAE.state.query.trim());
  const cards = notes.map(window.FAE.renderNoteCard).join("");

  return `
    <header class="view-header">
      <div class="eyebrow">
        ${module ? window.FAE.escapeHtml(view.title) : "KNOWLEDGE VIEW"}
      </div>
      <h1 class="page-title">
        ${window.FAE.escapeHtml(module?.title || view.title)}
      </h1>
      <p class="page-subtitle">
        ${window.FAE.escapeHtml(module?.description || view.description)}
      </p>
      <div class="results-meta">${notes.length} 篇符合目前條件</div>
    </header>
    ${
      notes.length
        ? `<section class="notes-list">${cards}</section>`
        : window.FAE.renderEmptyState(view, hasQuery)
    }
  `;
};