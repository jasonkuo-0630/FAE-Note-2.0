(function startFAENotes() {
  const themeButton = document.getElementById("themeButton");
  const searchInput = document.getElementById("searchInput");
  const statusFilters = document.getElementById("statusFilters");
  const typeFilters = document.getElementById("typeFilters");
  const content = document.getElementById("content");
  const contentScroll = document.getElementById("contentScroll");
  const menuButton = document.getElementById("menuButton");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");

  function getStoredTheme() {
    try {
      return localStorage.getItem("fae-notes-theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("fae-notes-theme", theme);
    } catch (error) {
      // file:// 或瀏覽器限制 localStorage 時，主題仍可在本次使用期間切換。
    }
  }

  function themeIcon(theme) {
    return theme === "light"
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"></path></svg>`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.2 8.2 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"></path></svg>`;
  }

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    themeButton.innerHTML = themeIcon(theme);
    storeTheme(theme);
  }

  function renderStatusFilters() {
    statusFilters.innerHTML = window.FAE.statuses
      .map(
        (status) => `
          <button
            type="button"
            class="filter-pill${window.FAE.state.status === status.id ? " active" : ""}"
            data-status="${window.FAE.escapeHtml(status.id)}"
          >
            ${window.FAE.escapeHtml(status.label)}
          </button>
        `
      )
      .join("");
  }

  function renderTypeFilters() {
    typeFilters.innerHTML = window.FAE.noteTypes
      .map(
        (type) => `
          <button
            type="button"
            class="filter-pill${window.FAE.state.type === type.id ? " active" : ""}"
            data-type="${window.FAE.escapeHtml(type.id)}"
          >
            ${window.FAE.escapeHtml(type.label)}
          </button>
        `
      )
      .join("");
  }

  function renderHealth() {
    const issues = window.FAE.validateData();
    const healthDot = document.getElementById("healthDot");
    const healthText = document.getElementById("healthText");
    healthDot.classList.toggle("has-issues", issues.length > 0);
    healthText.textContent = issues.length
      ? `資料健檢：${issues.length} 個提醒`
      : "資料健檢：正常";
    healthText.title = issues.join("\n");
    document.getElementById("sidebarNoteCount").textContent =
      `${window.FAE.notes.length} 篇筆記`;
  }

  function render() {
    window.FAE.renderSidebar();
    renderStatusFilters();
    renderTypeFilters();
    renderHealth();
    content.innerHTML =
      window.FAE.state.viewId === "home" && !window.FAE.state.query
        ? window.FAE.renderHome()
        : window.FAE.state.viewId === "home"
          ? renderSearchResults()
          : window.FAE.renderView();
  }

  function renderSearchResults() {
    const notes = window.FAE.getFilteredNotes();
    return `
      <header class="view-header">
        <div class="eyebrow">SEARCH</div>
        <h1 class="page-title">搜尋結果</h1>
        <p class="page-subtitle">關鍵字：${window.FAE.escapeHtml(window.FAE.state.query)}</p>
        <div class="results-meta">${notes.length} 篇符合目前條件</div>
      </header>
      ${
        notes.length
          ? `<section class="notes-list">${notes.map(window.FAE.renderNoteCard).join("")}</section>`
          : window.FAE.renderEmptyState({ icon: "?" }, true)
      }
    `;
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function getStoredNavigation() {
    try {
      return JSON.parse(localStorage.getItem("fae-notes-navigation")) || null;
    } catch (error) {
      return null;
    }
  }

  function storeNavigation() {
    try {
      localStorage.setItem(
        "fae-notes-navigation",
        JSON.stringify({
          viewId: window.FAE.state.viewId,
          moduleId: window.FAE.state.moduleId,
          expandedAreaId: window.FAE.state.expandedAreaId
        })
      );
    } catch (error) {
      // file:// 或瀏覽器限制 localStorage 時，導覽仍可正常使用。
    }
  }

  function restoreNavigation() {
    const stored = getStoredNavigation();
    if (!stored) return;

    if (
      stored.viewId === "home" ||
      window.FAE.getNavigationItem(stored.viewId)
    ) {
      window.FAE.state.viewId = stored.viewId;
    }

    const areaId = window.FAE.getCurrentAreaId();
    const storedModule =
      stored.moduleId === "all"
        ? "all"
        : window.FAE.getModuleById(areaId, stored.moduleId)?.id;

    window.FAE.state.moduleId = storedModule || "all";

    if (
      stored.expandedAreaId &&
      window.FAE.getModulesForArea(stored.expandedAreaId).length
    ) {
      window.FAE.state.expandedAreaId = stored.expandedAreaId;
    }
  }

  function selectView(viewId) {
    window.FAE.state.viewId = viewId;
    window.FAE.state.moduleId = "all";
    storeNavigation();
    render();
    contentScroll.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
  }

  function jumpToNote(noteId) {
    const note = window.FAE.notes.find((n) => n.id === noteId);
    if (!note) return;
    window.FAE.state.viewId = note.areaId;
    window.FAE.state.moduleId = note.moduleId || "all";
    window.FAE.state.query = "";
    searchInput.value = "";
    window.FAE.state.expandedNotes.add(noteId);
    storeNavigation();
    render();
    contentScroll.scrollTo({ top: 0, behavior: "smooth" });
    requestAnimationFrame(() => {
      const el = document.getElementById("note-" + noteId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("flash");
        setTimeout(() => el.classList.remove("flash"), 1200);
      }
    });
    closeSidebar();
  }

  function scrollExpandedNoteToTop(noteId) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const card = document.getElementById("note-" + noteId);
        if (!card) return;
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function toggleNote(noteId) {
    const card = document.getElementById("note-" + noteId);
    const willExpand = !window.FAE.state.expandedNotes.has(noteId);

    if (willExpand) {
      window.FAE.state.expandedNotes.add(noteId);
    } else {
      window.FAE.state.expandedNotes.delete(noteId);
    }

    if (!card) {
      render();
      return;
    }

    card.classList.toggle("expanded", willExpand);
    card
      .querySelector("[data-note-toggle]")
      ?.setAttribute("aria-expanded", String(willExpand));
    card
      .querySelector(".note-body-shell")
      ?.setAttribute("aria-hidden", String(!willExpand));

    if (willExpand) {
      scrollExpandedNoteToTop(noteId);
    }
  }

  content.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-note-toggle]");
    if (toggle) {
      toggleNote(toggle.dataset.noteToggle);
      return;
    }

    const relatedChip = event.target.closest(".related-chip");
    if (relatedChip) {
      jumpToNote(relatedChip.dataset.noteId);
      return;
    }

    const miniListItem = event.target.closest(".mini-list-item");
    if (miniListItem) {
      jumpToNote(miniListItem.dataset.noteId);
    }
  });

  content.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const toggle = event.target.closest("[data-note-toggle]");
    if (!toggle) return;
    event.preventDefault();
    toggleNote(toggle.dataset.noteToggle);
  });

  document.getElementById("sidebarNav").addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-area]");
    if (toggleButton) {
      const areaId = toggleButton.dataset.toggleArea;
      window.FAE.state.expandedAreaId =
        window.FAE.state.expandedAreaId === areaId ? null : areaId;
      storeNavigation();
      render();
      return;
    }

    const button = event.target.closest("[data-view]");
    if (!button) return;

    const isAreaRow = !button.dataset.module;
    const areaId = button.dataset.view;

    window.FAE.state.viewId = areaId;
    window.FAE.state.moduleId = button.dataset.module || "all";

    if (isAreaRow && window.FAE.getModulesForArea(areaId).length) {
      window.FAE.state.expandedAreaId =
        window.FAE.state.expandedAreaId === areaId ? null : areaId;
    }

    storeNavigation();
    render();
    contentScroll.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
  });

  document.getElementById("sidebarNav").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest("[data-view], [data-toggle-area]");
    if (!target) return;
    event.preventDefault();
    target.click();
  });

  document.getElementById("brandHomeButton").addEventListener("click", () => {
    searchInput.value = "";
    window.FAE.state.query = "";
    selectView("home");
  });

  statusFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-status]");
    if (!button) return;
    window.FAE.state.status = button.dataset.status;
    render();
  });

  typeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-type]");
    if (!button) return;
    window.FAE.state.type = button.dataset.type;
    render();
  });

  searchInput.addEventListener("input", (event) => {
    window.FAE.state.query = event.target.value;
    render();
  });

  themeButton.addEventListener("click", () => {
    const nextTheme =
      document.body.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  });

  menuButton.addEventListener("click", () => {
    const open = document.body.classList.toggle("sidebar-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  sidebarBackdrop.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      document.activeElement !== searchInput &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape") {
      closeSidebar();
      searchInput.blur();
    }
  });

  const preferredTheme =
    getStoredTheme() ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : window.FAE.config.defaultTheme);

  setTheme(preferredTheme);
  restoreNavigation();
  render();
})();