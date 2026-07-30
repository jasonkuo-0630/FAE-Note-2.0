window.FAE.validateData = function validateData() {
  const issues = [];
  const ids = new Set();
  const sourceIds = new Set(window.FAE.sources.map((source) => source.id));
  const noteIds = new Set(window.FAE.notes.map((note) => note.id));
  const validTypes = new Set(
    window.FAE.noteTypes
      .filter((type) => type.id !== "all")
      .map((type) => type.id)
  );
  const validAreas = new Set(window.FAE.areas.map((area) => area.id));
  const validModules = new Map(
    Object.entries(window.FAE.modules).flatMap(([areaId, modules]) =>
      modules.map((module) => [module.id, areaId])
    )
  );

  window.FAE.notes.forEach((note) => {
    if (!note.id) issues.push("發現缺少 ID 的筆記");
    if (ids.has(note.id)) issues.push(`重複的 Note ID：${note.id}`);
    ids.add(note.id);

    if (!note.title) issues.push(`筆記 ${note.id || "(無 ID)"} 缺少標題`);
    if (!validTypes.has(note.type)) {
      issues.push(`筆記 ${note.id} 使用未知類型：${note.type}`);
    }
    if (!validAreas.has(note.areaId)) {
      issues.push(`筆記 ${note.id} 使用未知領域：${note.areaId}`);
    }
    if (
      note.moduleId &&
      (!validModules.has(note.moduleId) ||
        validModules.get(note.moduleId) !== note.areaId)
    ) {
      issues.push(`筆記 ${note.id} 的章節不屬於主要領域：${note.moduleId}`);
    }
    (note.relatedAreas || []).forEach((areaId) => {
      if (!validAreas.has(areaId)) {
        issues.push(`筆記 ${note.id} 的相關領域不存在：${areaId}`);
      }
    });

    (note.related || []).forEach((relatedId) => {
      if (!noteIds.has(relatedId)) {
        issues.push(`筆記 ${note.id} 的關聯不存在：${relatedId}`);
      }
    });

    (note.sources || []).forEach((citation) => {
      if (!sourceIds.has(citation.sourceId)) {
        issues.push(`筆記 ${note.id} 的來源不存在：${citation.sourceId}`);
      }
    });

    if (
      (note.evidenceTypes || []).includes("official") &&
      !(note.sources || []).length
    ) {
      issues.push(`筆記 ${note.id} 標為官方依據，但沒有來源`);
    }

    if (!note.sections || !note.sections.length) {
      issues.push(`筆記 ${note.id} 沒有任何 sections 內容`);
    }
  });

  return issues;
};
