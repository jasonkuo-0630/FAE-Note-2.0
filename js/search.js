window.FAE.normalizeText = function normalizeText(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLocaleLowerCase("zh-Hant");
};

window.FAE.noteMatchesSearch = function noteMatchesSearch(note, query) {
  const normalizedQuery = window.FAE.normalizeText(query).trim();
  if (!normalizedQuery) return true;

  const searchable = [
    note.title,
    note.summary,
    note.type,
    note.status,
    ...(note.products || []),
    ...(note.modules || []),
    ...(note.versions || []),
    ...(note.devices || []),
    ...(note.tags || []),
    JSON.stringify(note.sections || [])
  ];

  return window.FAE.normalizeText(searchable.join(" ")).includes(normalizedQuery);
};
