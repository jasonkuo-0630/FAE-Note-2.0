window.FAE.countNotesForView = function countNotesForView(viewId) {
  return window.FAE.notes.filter((note) =>
    window.FAE.noteMatchesView(note, viewId)
  ).length;
};

window.FAE.countNotesForModule = function countNotesForModule(
  areaId,
  moduleId
) {
  return window.FAE.notes.filter(
    (note) =>
      window.FAE.noteMatchesView(note, areaId) &&
      note.moduleId === moduleId
  ).length;
};

window.FAE.renderSidebar = function renderSidebar() {
  const homeActive = window.FAE.state.viewId === "home";
  const groups = window.FAE.getNavigationGroups()
    .map((group) => {
      const items = group.items
        .map((item) => {
          const modules = window.FAE.getModulesForArea(item.id);
          const areaSelected = window.FAE.state.viewId === item.id;
          const areaActive =
            areaSelected && window.FAE.state.moduleId === "all";
          const areaCurrent =
            areaSelected && window.FAE.state.moduleId !== "all";
          const expanded =
            modules.length > 0 &&
            window.FAE.state.expandedAreaId === item.id;
          const moduleItems = modules
            .map((module) => {
              const active =
                areaSelected &&
                window.FAE.state.moduleId === module.id;

              return `
                <button
                  class="nav-subitem${active ? " active" : ""}"
                  type="button"
                  data-view="${window.FAE.escapeHtml(item.id)}"
                  data-module="${window.FAE.escapeHtml(module.id)}"
                  title="${window.FAE.escapeHtml(module.description)}"
                >
                  <span>${window.FAE.escapeHtml(module.title)}</span>
                  <span class="nav-count">
                    ${window.FAE.countNotesForModule(item.id, module.id)}
                  </span>
                </button>
              `;
            })
            .join("");

          return `
            <div class="nav-tree-item">
              <div class="nav-parent-row">
                <div
                  class="nav-item${areaActive ? " active" : ""}${areaCurrent ? " current-area" : ""}"
                  data-view="${window.FAE.escapeHtml(item.id)}"
                  role="button"
                  tabindex="0"
                >
                  <span class="nav-icon">${window.FAE.escapeHtml(item.icon)}</span>
                  <span class="nav-item-title">${window.FAE.escapeHtml(item.title)}</span>
                  ${
                    modules.length
                      ? `
                        <button
                          class="nav-toggle${expanded ? " expanded" : ""}"
                          type="button"
                          data-toggle-area="${window.FAE.escapeHtml(item.id)}"
                          aria-label="${expanded ? "收合" : "展開"}${window.FAE.escapeHtml(item.title)}章節"
                          aria-expanded="${expanded}"
                          aria-controls="nav-children-${window.FAE.escapeHtml(item.id)}"
                        >
                          <span class="nav-chevron" aria-hidden="true">›</span>
                        </button>
                      `
                      : ""
                  }
                  <span class="nav-count">${window.FAE.countNotesForView(item.id)}</span>
                </div>
              </div>

              ${
                modules.length
                  ? `
                    <div
                      class="nav-children${expanded ? " expanded" : ""}"
                      id="nav-children-${window.FAE.escapeHtml(item.id)}"
                      aria-hidden="${expanded ? "false" : "true"}"
                    >
                      <div class="nav-children-inner">
                        ${moduleItems}
                      </div>
                    </div>
                  `
                  : ""
              }
            </div>
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