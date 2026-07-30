(function startFAENotes() {
  const themeButton = document.getElementById("themeButton");
  const searchInput = document.getElementById("searchInput");
  const statusFilters = document.getElementById("statusFilters");
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

  function selectView(viewId) {
    window.FAE.state.viewId = viewId;
    render();
    contentScroll.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
  }

  document.getElementById("sidebarNav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (button) selectView(button.dataset.view);
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
  render();
})();
