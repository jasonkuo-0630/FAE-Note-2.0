window.FAE = window.FAE || {};

window.FAE.config = {
  name: "FAE Notes",
  version: "2.0",
  subtitle: "產品知識、操作流程、實測結果與問題排查",
  defaultTheme: "dark",
  updated: "2026-07-30"
};

window.FAE.areaGroups = [];
window.FAE.areas = [];
window.FAE.noteTypes = [];
window.FAE.evidenceTypes = [];
window.FAE.modules = {};
window.FAE.sources = [];
window.FAE.notes = [];

window.FAE.statuses = [
  { id: "all", label: "全部" },
  { id: "published", label: "已完成" },
  { id: "draft", label: "草稿" },
  { id: "review", label: "待確認" },
  { id: "archived", label: "已停用" }
];