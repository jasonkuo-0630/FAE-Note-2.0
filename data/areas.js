/*
  areas.js —— 單一真相來源

  v1（categories.js + products.js）曾經把「側邊欄要顯示什麼」跟「有哪些領域／產品」
  分別寫成兩份幾乎一樣的清單，新增或改名領域要同時改兩處，容易兩邊對不齊。

  v2 只留這一份：每個領域只在這裡定義一次，navigation.js／validator.js／renderer.js
  都從這裡讀，不再各自維護一份清單。

  group  ：屬於側邊欄哪一個大群組（對照下面的 areaGroups）
  family ：原本 products.js 的產品家族分類，保留供未來需要時使用
*/

window.FAE.areaGroups = [
  { id: "systems-products", label: "系統與產品" },
  { id: "support-environment", label: "支援與環境" }
];

window.FAE.areas = [
  {
    id: "gv-vms",
    group: "systems-products",
    icon: "V",
    title: "GV-VMS",
    description: "GV-VMS 的系統架構、功能設定、操作流程、實測結果與異常排查。",
    family: "Video Management"
  },
  {
    id: "cms",
    group: "systems-products",
    icon: "C",
    title: "CMS／集中監控",
    description: "Control Center、Center V2、VSM、Dispatch Server 等集中監控系統。",
    family: "Central Monitoring"
  },
  {
    id: "access-control",
    group: "systems-products",
    icon: "A",
    title: "門禁管理",
    description: "GV-ASManager 與門禁系統的功能、設備及整合應用。",
    family: "Access Control"
  },
  {
    id: "ai-recognition",
    group: "systems-products",
    icon: "AI",
    title: "AI 與辨識系統",
    description: "AIS、AI FR、Face Recognition 與相關辨識系統。",
    family: "AI Recognition"
  },
  {
    id: "devices",
    group: "systems-products",
    icon: "D",
    title: "IP Camera 與硬體設備",
    description: "Camera Web、設備本體、I/O Device 與特定硬體設備相關內容。",
    family: "Devices"
  },
  {
    id: "cloud-services",
    group: "systems-products",
    icon: "☁",
    title: "Cloud 與遠端服務",
    description: "GV-Cloud、GV-VPN 與其他遠端服務的操作及應用。",
    family: "Cloud Services"
  },
  {
    id: "support-tools",
    group: "support-environment",
    icon: "T",
    title: "工具與問題診斷",
    description: "IP Device Utility、Simulator、DebugView 與各項支援工具。",
    family: "Support Tools"
  },
  {
    id: "system-environment",
    group: "support-environment",
    icon: "PC",
    title: "系統環境",
    description: "PC 硬體、Windows、Driver、GPU、儲存與測試環境。",
    family: "System Environment"
  },
  {
    id: "network",
    group: "support-environment",
    icon: "N",
    title: "網路與連線",
    description: "IP、網段、雙網卡、Local LAN、Internet 與連線異常排查。",
    family: "Network"
  }
];
