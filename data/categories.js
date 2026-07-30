window.FAE.navigation = [
  {
    id: "systems-products",
    label: "系統與產品",
    items: [
      {
        id: "gv-vms",
        icon: "V",
        title: "GV-VMS",
        description: "GV-VMS 的系統架構、功能設定、操作流程、實測結果與異常排查。",
        filter: { field: "areaId", value: "gv-vms" }
      },
      {
        id: "cms",
        icon: "C",
        title: "CMS／集中監控",
        description: "Control Center、Center V2、VSM、Dispatch Server 等集中監控系統。",
        filter: { field: "areaId", value: "cms" }
      },
      {
        id: "access-control",
        icon: "A",
        title: "門禁管理",
        description: "GV-ASManager 與門禁系統的功能、設備及整合應用。",
        filter: { field: "areaId", value: "access-control" }
      },
      {
        id: "ai-recognition",
        icon: "AI",
        title: "AI 與辨識系統",
        description: "AIS、AI FR、Face Recognition 與相關辨識系統。",
        filter: { field: "areaId", value: "ai-recognition" }
      },
      {
        id: "devices",
        icon: "D",
        title: "IP Camera 與硬體設備",
        description: "Camera Web、設備本體、I/O Device 與特定硬體設備相關內容。",
        filter: { field: "areaId", value: "devices" }
      },
      {
        id: "cloud-services",
        icon: "☁",
        title: "Cloud 與遠端服務",
        description: "GV-Cloud、GV-VPN 與其他遠端服務的操作及應用。",
        filter: { field: "areaId", value: "cloud-services" }
      }
    ]
  },
  {
    id: "support-environment",
    label: "支援與環境",
    items: [
      {
        id: "support-tools",
        icon: "T",
        title: "工具與問題診斷",
        description: "IP Device Utility、Simulator、DebugView 與各項支援工具。",
        filter: { field: "areaId", value: "support-tools" }
      },
      {
        id: "system-environment",
        icon: "PC",
        title: "系統環境",
        description: "PC 硬體、Windows、Driver、GPU、儲存與測試環境。",
        filter: { field: "areaId", value: "system-environment" }
      },
      {
        id: "network",
        icon: "N",
        title: "網路與連線",
        description: "IP、網段、雙網卡、Local LAN、Internet 與連線異常排查。",
        filter: { field: "areaId", value: "network" }
      }
    ]
  }
];