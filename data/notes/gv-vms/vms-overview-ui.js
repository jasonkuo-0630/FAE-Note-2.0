/* data/notes/gv-vms/vms-overview-ui.js —— GV-VMS 底下「系統概觀與操作介面」章節的正式筆記
   moduleId 對應 data/taxonomy.js 裡的 "vms-overview-ui"，兩邊要同一個字串。
   圖片資料夾用 areaId/moduleId 自動算出來，就是 "gv-vms/vms-overview-ui"，不用額外指定 imageFolder。

   第三批搬遷：VMS 總覽（對應 v1 的 notes-vms-overview.js，共 1 篇）

   related 裡有不少 ID（ipcam-1、arch-1、cms-1、asmgr-1、recorder-1、vms-systemconfig-01）
   還指向其他還沒搬過來的領域／章節，這是正常的、故意保留的，健檢會提醒「還沒搬遷」，
   等對應內容搬過來就會消失。
*/

window.FAE.notes.push(
  {
    id: "vms-overview-ui-01",
    title: "GV-VMS 是什麼？",
    summary: "GV-VMS 是什麼、主要負責哪些功能，以及跟 Camera 端的分工方式。",

    areaId: "gv-vms",
    moduleId: "vms-overview-ui",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01", "arch-1", "cms-1", "asmgr-1", "recorder-1", "vms-systemconfig-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["VMS", "核心軟體"],

    evidenceTypes: ["official", "colleague"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "datasheet-vms-v20",
        chapter: "Introduction；Features；Smart Recording & Playback；Alerts & Notifications；Central Monitoring Integration",
        pages: "1–3、6",
        keywords: [
        "Video Management System",
        "Live View",
        "Playback",
        "Event List",
        "Recording",
        "I/O",
        "Central Monitoring Integration"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "1.6 Main Screen of GV-VMS；Chapter 5 Video Processing；Chapter 6 Video Playback and Backup；7.1 Setting Up I/O Functions",
        pages: "4–6、23–30",
        keywords: [
        "Main Screen",
        "Event List",
        "Video Processing",
        "Playback",
        "Backup",
        "I/O Functions"
        ]
      },
      {
        sourceId: "feature-guide-vms-v20",
        chapter: "3.1 Local Face Recognition；3.2 Video Metadata；3.3 Easy AI Event Adjustment",
        pages: "14–21",
        keywords: [
        "Local Face Recognition",
        "Face Detection",
        "Video Metadata",
        "AI Event Adjustment"
        ]
      },
    ],

    sections: [
      {
        type: "text",
        content: "GV-VMS 是 GeoVision 的 Video Management Software，是整個影像監控系統的核心軟體，可以理解成「監控系統的主控台」。"
      },
      { type: "spacer" },
      {
        type: "list",
        title: "主要負責",
        items: [
            "新增與管理 IP Camera",
            "Live View 即時監看",
            "Recording 錄影 / Playback 回放 / Backup 備份",
            "Motion / AI / PVD 事件接收、監看、查詢與告警連動",
            "Video Analysis 軟體端分析與 Camera AI Event 整合",
            "I/O 裝置管理與事件連動",
            "與 CMS 中央監控軟體整合"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "實務理解",
        content: "IP Camera 負責提供影像來源，GV-VMS 負責集中管理 Camera，並處理即時監看、錄影、回放、備份、事件接收與告警連動等功能。"
      },
      {
        type: "text",
        content: "以支援的 AI-capable GV-IP Camera 為例，Cross Line、Intrusion、Face Detection 等 Camera AI Event 會由 Camera 端執行偵測；<br>GV-VMS 可遠端調整支援的事件設定，並接收 Camera 傳回的事件結果或 Metadata，用於 Event List 顯示、錄影、Popup、Alarm 與後續查詢。<br>另一方面，Local Face Recognition、PVD 等部分分析功能也可由 GV-VMS 本機處理，因此實際的事件判斷端仍需依功能類型區分。"
      },
      {
        type: "flow",
        steps: [
            "Camera 提供影像來源",
            "AI-capable Camera 可執行支援的 AI Event 偵測",
            "VMS 接收 Camera Event / Metadata，部分功能也可由 VMS 本機分析",
            "VMS 負責事件顯示、錄影、彈窗、告警、紀錄與回放查詢"
        ]
      },
      {
        type: "note",
        title: "實務補充",
        content: "Face Detection 與 Face Recognition 的處理位置不同：支援的 AI-capable GV-IP Camera 可先執行 Face Detection；GV-VMS V20 則可建立本機 Face Database，並使用內建 Face Recognition Engine，將 Camera 傳回的 Face Detection 事件進一步轉換成 Face Recognition 結果。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Camera 主要提供影像與 Camera Event；VMS 主要負責集中管理與事件應用。<br>Camera AI Event 通常由 Camera 端偵測，而 Local FR、PVD 等部分功能可由 VMS 本機分析，因此仍須依實際功能判斷事件處理位置。"
      }
    ]
  }
);