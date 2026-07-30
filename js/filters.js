window.FAE.state = {
  viewId: "home",
  status: "all",
  query: ""
};

window.FAE.getNavigationItem = function getNavigationItem(viewId) {
  for (const group of window.FAE.navigation) {
    const item = group.items.find((entry) => entry.id === viewId);
    if (item) return item;
  }
  return null;
};

window.FAE.noteMatchesView = function noteMatchesView(note, viewId) {
  if (viewId === "home") return true;
  const item = window.FAE.getNavigationItem(viewId);
  if (!item || !item.filter) return true;
  const value = note[item.filter.field];
  return Array.isArray(value)
    ? value.includes(item.filter.value)
    : value === item.filter.value;
};

window.FAE.getFilteredNotes = function getFilteredNotes() {
  return window.FAE.notes.filter((note) => {
    const matchesView = window.FAE.noteMatchesView(note, window.FAE.state.viewId);
    const matchesStatus =
      window.FAE.state.status === "all" ||
      note.status === window.FAE.state.status;
    const matchesSearch = window.FAE.noteMatchesSearch(
      note,
      window.FAE.state.query
    );
    return matchesView && matchesStatus && matchesSearch;
  });
};
