window.FAE.countNotesForView = function countNotesForView(viewId) {
  return window.FAE.notes.filter((note) =>
    window.FAE.noteMatchesView(note, viewId)
  ).length;
};

window.FAE.renderSidebar = function renderSidebar() {
  const homeActive = window.FAE.state.viewId === "home";
  const groups = window.FAE.navigation
    .map((group) => {
      const items = group.items
        .map((item) => {
          const active = window.FAE.state.viewId === item.id;
          return `
            <button
              class="nav-item${active ? " active" : ""}"
              type="button"
              data-view="${window.FAE.escapeHtml(item.id)}"
            >
              <span class="nav-icon">${window.FAE.escapeHtml(item.icon)}</span>
              <span>${window.FAE.escapeHtml(item.title)}</span>
              <span class="nav-count">${window.FAE.countNotesForView(item.id)}</span>
            </button>
          `;
        })
        .join("");

      return `
        <div class="nav-group-title">${window.FAE.escapeHtml(group.label)}</div>
        ${items}
      `;
    })
    .join("");

  document.getElementById("sidebarNav").innerHTML = `
    <button
      class="nav-home${homeActive ? " active" : ""}"
      type="button"
      data-view="home"
    >
      <span class="nav-icon">⌂</span>
      <span>首頁</span>
      <span class="nav-count">${window.FAE.notes.length}</span>
    </button>
    ${groups}
  `;
};
