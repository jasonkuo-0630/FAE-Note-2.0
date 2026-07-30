window.FAE.noteTypes = [
  { id: "all", label: "全部" },
  { id: "feature", label: "功能說明" },
  { id: "procedure", label: "操作流程" },
  { id: "troubleshooting", label: "排查案例" },
  { id: "test", label: "實測紀錄" },
  { id: "qa", label: "驗收 Q&A" },
  { id: "glossary", label: "名詞與架構" }
];

/* 證據類型主檔：note.evidenceTypes 裡存的是 id（如 "official"），
   畫面上顯示用 label（中文）。之後若要加新的證據類型，只改這裡。 */
window.FAE.evidenceTypes = [
  { id: "official", label: "官方資料" },
  { id: "tested", label: "實作驗證" },
  { id: "colleague", label: "同事補充" },
  { id: "inference", label: "推論" },
  { id: "pending", label: "待確認" }
];

window.FAE.modules = {
  "gv-vms": [
    {
      id: "overview-ui",
      title: "系統概觀與操作介面",
      description: "VMS 定位、主畫面、工具列與基本操作邏輯。"
    },
    {
      id: "live-view-layout",
      title: "Live View 與 Layout",
      description: "即時影像、分割、Layout 與顯示操作。"
    },
    {
      id: "vms-ip-device-setup",
      title: "IP Device 加入與連線",
      description: "Scan、Automatic Setup、Manual Add 與連線方式。"
    },
    {
      id: "camera-stream",
      title: "Camera 與串流設定",
      description: "Codec、Resolution、FPS、Bitrate、Stream 與 Camera Setting。"
    },
    {
      id: "recording-storage",
      title: "錄影、排程與儲存",
      description: "Record Mode、Schedule、Database 與錄影空間管理。"
    },
    {
      id: "device-control",
      title: "PTZ、Fisheye 與裝置控制",
      description: "Speed Dome、Motorized、Fisheye Dewarp、Joystick 與 Object Tracking。"
    },
    {
      id: "playback-export",
      title: "Playback、搜尋與匯出",
      description: "ViewLog、事件搜尋、Backup 與 Save as AVI。"
    },
    {
      id: "analytics-ai",
      title: "Video Analytics 與 AI Event",
      description: "Video Analytics、PVD、AI Event 與相關搜尋。"
    },
    {
      id: "pos",
      title: "POS 整合",
      description: "POS Text Sender、Data Capture、Software Capture 與查詢。"
    },
    {
      id: "io",
      title: "I/O 整合",
      description: "IP Device、I/O Box、Input、Output 與事件應用。"
    },
    {
      id: "remote-services",
      title: "遠端連線與服務",
      description: "WebCam Server 與由 GV-VMS 啟用的遠端存取功能。"
    },
    {
      id: "system-license",
      title: "License、系統設定與維護",
      description: "System Configure、System Log、Dongle、Software License 與維護設定。"
    }
  ]
};