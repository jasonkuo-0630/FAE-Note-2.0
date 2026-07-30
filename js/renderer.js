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
  const productChips = window.FAE.products
    .map(
      (product) =>
        `<span class="scope-chip">${window.FAE.escapeHtml(product.title)}</span>`
    )
    .join("");

  return `
    <section class="hero-panel">
      <div class="hero-copy">
        <h1 class="page-title">FAE Notes 2.0</h1>
        <div class="hero-status">
          <span class="hero-status-dot"></span>
          架構已建立，目前尚無正式筆記
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
    <div class="scope-row">${productChips}</div>
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

window.FAE.renderNoteCard = function renderNoteCard(note) {
  const tags = (note.tags || [])
    .map((tag) => `<span class="tag">${window.FAE.escapeHtml(tag)}</span>`)
    .join("");
  const metadata = [
    note.status,
    ...(note.versions || []),
    ...(note.devices || [])
  ]
    .filter(Boolean)
    .map((item) => `<span class="meta-pill">${window.FAE.escapeHtml(item)}</span>`)
    .join("");

  return `
    <article class="note-card" data-note-id="${window.FAE.escapeHtml(note.id)}">
      <h2>${window.FAE.escapeHtml(note.title)}</h2>
      <p>${window.FAE.escapeHtml(note.summary)}</p>
      <div class="note-meta">${metadata}</div>
      ${tags ? `<div class="note-tags">${tags}</div>` : ""}
    </article>
  `;
};

window.FAE.renderView = function renderView() {
  const view = window.FAE.getNavigationItem(window.FAE.state.viewId);
  const notes = window.FAE.getFilteredNotes();
  const hasQuery = Boolean(window.FAE.state.query.trim());
  const cards = notes.map(window.FAE.renderNoteCard).join("");

  return `
    <header class="view-header">
      <div class="eyebrow">KNOWLEDGE VIEW</div>
      <h1 class="page-title">${window.FAE.escapeHtml(view.title)}</h1>
      <p class="page-subtitle">${window.FAE.escapeHtml(view.description)}</p>
      <div class="results-meta">${notes.length} 篇符合目前條件</div>
    </header>
    ${
      notes.length
        ? `<section class="notes-list">${cards}</section>`
        : window.FAE.renderEmptyState(view, hasQuery)
    }
  `;
};
