window.FAE.state = {
  viewId: "home",
  status: "all",
  type: "all",
  moduleId: "all",
  expandedAreaId: null,
  query: "",
  expandedNotes: new Set()
};

/* 側邊欄分組，從 areas.js 動態算出來，不再另外維護一份清單。
   每個 area 物件本身就是 navigation item，filter 固定用 areaId 比對。 */
window.FAE.getNavigationGroups = function getNavigationGroups() {
  return window.FAE.areaGroups.map((group) => ({
    id: group.id,
    label: group.label,
    items: window.FAE.areas
      .filter((area) => area.group === group.id)
      .map((area) => ({
        id: area.id,
        icon: area.icon,
        title: area.title,
        description: area.description,
        filter: { field: "areaId", value: area.id }
      }))
  }));
};

window.FAE.getNavigationItem = function getNavigationItem(viewId) {
  for (const group of window.FAE.getNavigationGroups()) {
    const item = group.items.find((entry) => entry.id === viewId);
    if (item) return item;
  }
  return null;
};

window.FAE.noteMatchesView = function noteMatchesView(note, viewId) {
  if (viewId === "home") return true;
  const item = window.FAE.getNavigationItem(viewId);
  if (!item || !item.filter) return true;

  if (item.filter.field === "areaId") {
    return (
      note.areaId === item.filter.value ||
      (note.relatedAreas || []).includes(item.filter.value)
    );
  }

  const value = note[item.filter.field];
  return Array.isArray(value)
    ? value.includes(item.filter.value)
    : value === item.filter.value;
};

window.FAE.getCurrentAreaId = function getCurrentAreaId() {
  const item = window.FAE.getNavigationItem(window.FAE.state.viewId);
  return item?.filter?.field === "areaId" ? item.filter.value : null;
};

window.FAE.getModulesForArea = function getModulesForArea(areaId) {
  return window.FAE.modules[areaId] || [];
};

window.FAE.getModuleById = function getModuleById(areaId, moduleId) {
  return (
    window.FAE
      .getModulesForArea(areaId)
      .find((module) => module.id === moduleId) || null
  );
};

/* 判斷一篇筆記是否屬於某個章節：本身的 moduleId 相符，或是它額外標記了
   relatedModules（例如同時想在 License 章節底下也看得到這篇 Live View 筆記）。
   跟 relatedAreas 是同一種設計精神，只是換成章節層級。 */
window.FAE.noteMatchesModule = function noteMatchesModule(note, moduleId) {
  return (
    note.moduleId === moduleId ||
    (note.relatedModules || []).includes(moduleId)
  );
};

window.FAE.getFilteredNotes = function getFilteredNotes() {
  return window.FAE.notes.filter((note) => {
    const matchesView = window.FAE.noteMatchesView(note, window.FAE.state.viewId);
    const matchesStatus =
      window.FAE.state.status === "all" ||
      note.status === window.FAE.state.status;
    const matchesType =
      window.FAE.state.type === "all" ||
      note.type === window.FAE.state.type;
    const matchesModule =
      window.FAE.state.moduleId === "all" ||
      window.FAE.noteMatchesModule(note, window.FAE.state.moduleId);
    const matchesSearch = window.FAE.noteMatchesSearch(
      note,
      window.FAE.state.query
    );
    return (
      matchesView &&
      matchesStatus &&
      matchesType &&
      matchesModule &&
      matchesSearch
    );
  });
};