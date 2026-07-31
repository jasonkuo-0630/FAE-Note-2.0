/* data/notes/gv-vms/vms-ip-device-setup.js —— GV-VMS 底下「IP Device 加入與連線」章節的正式筆記
   GV-VMS 因為篇數多，改成一個章節一個檔案（對照 taxonomy.js 的 12 個章節）；
   其他篇數少的領域（CMS、門禁...）之後直接用 data/notes/<areaId>.js 一個檔案即可，不用再拆。

   moduleId 一定要跟 data/taxonomy.js 裡對應章節的 id 完全一致（現在是 "vms-ip-device-setup"），
   兩邊要同一個字串，不然側邊欄子分類篩不到筆記，健檢也會報「章節不屬於主要領域」。

   第一批搬遷：IP Device Setup（對應 v1 的 notes-ipdevice.js，共 6 篇）

   「主篇章 + 補充筆記」的規則：
   - 這幾篇都是「功能說明／操作流程」的穩定內容，之後如果驗收考出新東西、
     或實際上手遇到問題，請開新的一篇「實測紀錄」或「排查案例」筆記，
     用 related 連回這裡，不要回頭改寫這幾篇的 sections。

   related 裡有幾個 ID（vms-license-01、protocol-1）還指向 v1 尚未搬過來的筆記，
   這是正常的、故意保留的——健檢會提醒「還有幾篇尚未搬遷」，等對應分類搬過來就會消失，
   不是這批資料寫錯了。
*/

window.FAE.notes.push(
  {
    id: "vms-ip-device-setup-01",
    title: "IP Device Setup 總覽與加入方式比較",
    summary: "IP Device Setup 是加入與管理 Camera 的入口，這篇整理幾種加入方式的差異，以及狀態燈號代表的意義。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-02", "vms-ip-device-setup-03", "vms-ip-device-setup-04", "vms-ip-device-setup-05", "vms-ip-device-setup-06", "vms-license-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["IP Device Setup", "總覽", "Camera Install"],

    evidenceTypes: ["official"],
    hasOpenQuestions: false,

    sources: [{ sourceId: "manual-vms-v20", chapter: "1.2.3 Adding Cameras；2.1 Adding IP Cameras；2.1.1 Adding Cameras Manually", pages: "14、95–98", keywords: ["Automatic Setup", "Adding IP Cameras", "status icons"] }],

    sections: [
      {
        type: "text",
        content: "IP Device Setup 是 GV-VMS 中用來連接、加入與管理 IP Camera / IP Device 的設定入口，功能位置也可理解為 Camera Install。<br>不同設備的加入流程可能略有差異，實務上可依照設備狀態選擇手動新增、掃描、批次加入或匯入清單。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "IP Device Setup 介面",
        content: "此介面會列出目前已加入 VMS 管理清單的設備，並顯示每台設備的 IP、Port、解析度、Bitrate、Brand 與連線狀態。"
      },
      { type: "image", num: 1, label: "IP Device Setup 介面" },
      {
        type: "list",
        title: "IP Device狀態燈意義",
        items: [
          "<strong>🟢 Connected</strong>：設備連線正常。",
          "<strong>🟡 Connecting</strong>：設備正在嘗試連線 / 連線中。",
          "<strong>🔴 Connection Failed</strong>：設備斷線或連線失敗。",
          "<strong>⚪ Inactive</strong>：設備未啟用。",
          "<strong>🟥 Started Monitoring</strong>：設備已進入監控狀態。",
          "<strong>🟨 Pre-Rec Enabled</strong>：設備已啟用Record Setting -> Pre-Recording。"
        ]
      },
      {
        type: "note",
        title: "狀態燈補充",
        content: "紅燈代表 Connection Failed，表示 VMS 無法連線到 Camera。可將滑鼠移到紅色圖示上查看錯誤訊息，再依錯誤內容檢查 IP、Port、帳號密碼、設備電源、網路連線或防火牆設定。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Automatic Setup 初始畫面",
        content: "當 GV-VMS 第一次開啟，或目前沒有加入任何 Camera 時，系統可能會自動跳出 Automatic Setup。<br>可以理解成：VMS 偵測到目前沒有 Camera，所以主動提示使用者掃描並加入設備。如果當下還不想加入 Camera，可以先關閉視窗，之後再從 IP Device Setup 進入相關功能。"
      },
      { type: "image", num: 2, label: "IP Device Setup 初始畫面 - Automatic Setup " },
      {
        type: "list",
        title: "常用功能介紹",
        items: [
          "<strong>Add Camera</strong>：手動設定並加入 IP device。",
          "<strong>Scan Camera</strong>：掃描 LAN 上可偵測到的 IP devices。",
          "<strong>Automatic Setup</strong>：掃描並批次加入 LAN 上的多台 IP devices。",
          "<strong>Import Camera</strong>：從 GV-IP Device Utility 匯入已整理好的 IP device 清單。",
          "<strong>IP Device Utility</strong>：透過外部工具搜尋、整理或管理 IP devices。",
          "<strong>GeoVision License Activation Tool</strong>：用於 GV-VMS Pro 或第三方 Camera 授權。"
        ]
      },
      {
        type: "list",
        title: "實務注意",
        items: [
          "加入 Camera 前要確認 IP、Port、帳號密碼是否正確。",
          "PC 與 Camera 需位於可互通的網路環境。",
          "掃描得到設備，不代表一定能成功加入或寫入設定。",
          "批次加入前應確認 IP / MAC / Brand，避免加入錯設備。",
          "正式環境建議使用 Dual Streams，方便 Live View、錄影與效能分配。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "IP Device Setup = VMS 加入與管理 IP Camera / IP Device 的入口。"
      }
    ]
  },

  {
    id: "vms-ip-device-setup-02",
    title: "Add Camera：手動輸入加入",
    summary: "手動輸入 IP、Port、帳密與 Brand/Device 加入 Camera 的完整欄位說明與注意事項。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "procedure",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01", "protocol-1"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Add Camera", "手動設定"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [{ sourceId: "manual-vms-v20", chapter: "2.1.1 Adding Cameras Manually", pages: "97–98", keywords: ["Adding Cameras Manually", "Camera Streaming Settings"] }],

    sections: [
      {
        type: "text",
        content: "Add Camera 是手動新增 Camera 的方式。需要填寫的欄位包含 <code>Server IP</code>、<code>HTTP Port</code>、<code>User Name</code>、<code>Password</code>、<code>Brand</code>、<code>Device</code>。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > Add Camera➕"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Add Camera 介面",
        content: "此介面可手動輸入欲加入 VMS 的 IP Device Setup 連線列表的IP Device。"
      },
      { type: "image", num: 1, label: "Add Camera 介面" },
      {
        type: "list",
        title: "欄位介紹",
        items: [
          "<strong>Server IP</strong>：輸入 Camera 的 IP Address，例如 <code>192.168.0.10</code>",
          "<strong>HTTP Port</strong>：通常預設是 <code>80</code>，但如果 Camera Web Port 有被改過，就要依實際設定輸入",
          "<strong>User Name / Password</strong>：是 IP Camera 本身的帳號密碼，不是 VMS 的登入帳密",
          "<strong>Brand</strong>：是設備品牌或加入方式，常見可能包含 GeoVision、USAVision、Protocol。其中 Protocol 不是品牌，而是用協定方式加入設備，例如 ONVIF、PSIA、RTSP over HTTP、RTSP over TCP、RTSP over UDP。",
          "<strong>Device</strong> 會依照 Brand 不同而顯示不同選項。如果選 GeoVision，通常會看到自家 Camera 型號選單提供選擇；如果選 Protocol，則會看到 ONVIF、RTSP 等協定選項。"
        ]
      },
      {
        type: "text",
        content: "簡單記：<code>GeoVision 是自家品牌加入；Protocol 則是透過通用協定加入。</code>"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "不同 Brand 下， Device 的選單內容如下"
      },
      {
        type: "text",
        title: "Brand = GeoVision :",
        content: "GeoVision 的 Device 選單會顯示 GeoVision 自家品牌的產品名稱。"
      },
      { type: "image", num: 2, label: "Add Camera：選擇 Brand（GeoVision / USAVision / Protocol）" },
      { type: "image", num: 3, label: "Add Camera：Device 選項（Brand 選 GeoVision 時）" },
      {
        type: "note",
        title: "實務注意",
        content: "可以選擇 Auto Detect 自動偵測產品型號，後續新機種可能不會在選單列表中，這種狀況一律選擇<code>IP Device</code> "
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Brand = Protocol :",
        content: "Protocol 的 Device 選單會顯示所有通用通信協定。"
      },
      { type: "image", num: 4, label: "Add Camera：Device 選項（Brand 選 Protocol 時）" },
      { type: "spacer" },
      {
        type: "text",
        title: "加入與連線",
        content: "設定完成後，按下 Apply 可將 Camera 加入 IP Device Setup 列表中。 Camera 加入清單後不等於已經連線，仍需勾選 ID 欄位旁的 checkbox， VMS 才會開始連線該 Camera。"
      },
      { type: "image", num: 5, label: "Add Camera：Device 加入至 IP Device Setup 列表介面" },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Add Camera = 手動輸入 IP / Port / 帳密 / Brand / Device；Apply 只是加入清單，勾選 ID 旁 checkbox 才會開始連線。"
      }
    ]
  },

  {
    id: "vms-ip-device-setup-03",
    title: "Scan Camera：掃描網段加入",
    summary: "在 IP Device Setup 裡掃描同網段設備並加入，適合不確定 Camera IP 或少量加入的情境。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "procedure",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Scan Camera", "網段掃描"],

    evidenceTypes: ["official"],
    hasOpenQuestions: false,

    sources: [{ sourceId: "manual-vms-v20", chapter: "2.1.2 Scanning for Cameras", pages: "99", keywords: ["Scanning for Cameras", "Start Scan"] }],

    sections: [
      {
        type: "text",
        content: "Scan Camera 是在 IP Device Setup 中掃描 LAN 內 IP Camera / IP Device 的加入方式。適合用在不確定 Camera IP、想確認目前網段有哪些設備，或少量 Camera 需要快速加入的情境。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > Scan Camera🔄"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Scan Camera 介面",
        content: "此介面可掃描同網段 / 可被偵測的設備加入VMS IP Device Setup連線列表。"
      },
      { type: "image", num: 1, label: "Scan Camera 介面" },
      { type: "text", title: "操作順序" },
      {
        type: "flow",
        steps: [
          "選擇 Network Adapter",
          "點擊 Start Scan 開始掃描",
          "系統會根據所選 Network Adapter 掃描同網段 / 可被偵測的設備",
          "雙擊選擇 Device 並輸入帳密",
          "進入 Camera Streaming Settings",
          "點擊 Apply",
          "加入 IP Device Setup 列表並自動啟用連線"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "掃描結果 :",
        content: "<strong>雙擊左鍵</strong>欲加入連線的 IP Device，輸入帳密並完成 Camera Streaming Settings 後，點擊 Apply 即可加入 VMS。"
      },
      { type: "image", num: 2, label: "Scan Camera 掃描結果列表" },
      {
        type: "text",
        content: "掃描結果通常會看到 Device 以下資訊：<code>Name</code>、<code>IP Address</code>、<code>Port</code>、<code>MAC Address</code>、<code>Brand</code>。"
      },
      { type: "spacer" },
      {
        type: "note",
        title: "實務注意",
        content: "掃描得到 Camera 不代表一定能成功加入或連線。若 PC 與 Camera 網段不一致、IP / Port 不通、帳號密碼錯誤，或設備本身未正常運作，仍可能出現掃得到但加入失敗或連線失敗的情況。"
      }
    ]
  },

  {
    id: "vms-ip-device-setup-04",
    title: "Automatic Setup：批量掃描加入",
    summary: "跟 Scan Camera 類似，但可以批量勾選加入多台設備，適合大量部署時使用。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "procedure",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Automatic Setup", "網段掃描"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [{ sourceId: "manual-vms-v20", chapter: "1.2.3 Adding Cameras；2.1 Adding IP Cameras", pages: "14、95", keywords: ["Automatic Setup", "Apply All", "camera list is empty"] }],

    sections: [
      {
        type: "text",
        content: "Automatic Setup 和 Scan Camera 類似，也可以掃描網段中的 Camera ，與之不同的是允許使用者批量加入裝置。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > Automatic Setup⚙️"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Automatic Setup 介面",
        content: "此介面可掃描同網段 / 可被偵測的設備加入VMS IP Device Setup連線列表。"
      },
      { type: "image", num: 1, label: "Automatic Setup 介面" },
      { type: "text", title: "操作順序" },
      {
        type: "flow",
        steps: [
          "選擇 Network Adapter",
          "點擊 Automatic Setup 開始掃描",
          "系統會根據所選 Network Adapter 掃描同網段 / 可被偵測的設備",
          "勾選要加入的 IP Device",
          "點擊右下角 Apply 加入 VMS"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "掃描結果 :",
        content: "掃描完成後，會顯示同網段 / 可被偵測的設備於列表提供使用者批量勾選加入 VMS 。"
      },
      { type: "image", num: 2, label: "Automatic Setup 批次勾選畫面" },
      {
        type: "list",
        title: "加入前仍要確認",
        items: [
          "IP 是否正確",
          "MAC Address 是否符合設備",
          "Brand 是否正確",
          "是否有重複加入或加入錯設備"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "帳密修改與套用 :",
        content: "欲批量加入的 IP Device 可以<strong>雙擊左鍵</strong>輸入帳密，可以勾選 Apply All 一鍵套用帳密至所有裝置。"
      },
      { type: "image", num: 3, label: "Automatic Setup IP Device 帳密輸入介面" },
      {
        type: "note",
        title: "實務補充",
        content: "由於 IP Device 加入至 VMS 都需要帳密，為求測試效率與統一性，通常建議帳密保持一致。"
      }
    ]
  },

  {
    id: "vms-ip-device-setup-05",
    title: "IP Device Utility：搜尋、對應與匯入",
    summary: "透過外部工具 GV-IP Device Utility 整理裝置清單，再匯入 GV-VMS，減少逐台手動加入的時間。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "procedure",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["IP Device Utility", "Import Camera", ".ipcd"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      { 
        sourceId: "manual-vms-v20", 
        chapter: "2.1.3 Mapping GV-IP Cameras Using GV-IP Device Utility", 
        pages: "100", 
        keywords: ["Mapping GV-IP Cameras", "GV-IP Device Utility"] 
      }
    ],

    sections: [
      {
        type: "text",
        content: "GV-IP Device Utility 是 GeoVision 提供的外部 IP Device 管理工具，可用來偵測 LAN 內的 GV-IP Devices，並將偵測到的 Camera 對應到指定 channel。<br>整理完成後，可將設備清單或設定匯入 GV-VMS，減少逐台手動加入 Camera 的時間。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > Import Camera📑 / IP Device Utility📜"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "IP Device Utility 介面 :",
        content: "此工具可掃描同網段 / 可被偵測的設備，並將 Camera 對應到 Dispatch Pattern / 指定 Channel。"
      },
      { type: "image", num: 1, label: "IP Device Utility 介面" },
      { type: "text", title: "操作順序" },
      {
        type: "flow",
        steps: [
          "開啟 GV-IP Device Utility",
          "偵測 LAN 內的 IP Devices",
          "在 Camera List 中確認設備",
          "將 Camera 對應到 Dispatch Pattern / 指定 Channel",
          "匯出或整理設備清單",
          "回到 GV-VMS",
          "Import Camera📑",
          "匯入設備清單"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "選擇網卡",
        content: "選擇欲掃描網段的網卡。"
      },
      { type: "image", num: 2, label: "IP Device Utility：選擇要掃描的網卡" },
      { type: "spacer" },
      {
        type: "text",
        title: "IP Device Utility 掃描結果清單",
        content: "可將 Camera 拖曳至右側列表中。"
      },
      { type: "image", num: 3, label: "IP Device Utility：掃描結果清單" },
      { type: "spacer" },
      {
        type: "text",
        title: "Camera List / Dispatch Pattern",
        content: "GV-IP Device Utility 介面中，Camera List 可用來查看 LAN 內偵測到的設備；Dispatch Pattern 則可用來安排 Camera 要對應到的 channel。<br>整理完成後，再將清單匯入 GV-VMS 使用。"
      },
      { type: "image", num: 4, label: "IP Device Utility：把設備加入 Dispatch Pattern／清單" },
      {
        type: "note",
        title: "實務補充",
        content: "設備加入 Dispatch Pattern 的清單後，如果要修改某台設備的帳號密碼，<strong>右鍵點擊該筆 Device</strong> 即可跳出輸入帳密的介面。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "匯出Dispatch Pattern／清單",
        content: "匯出此列表成 <code>.ipcd</code> 檔案，提供 VMS 匯入。"
      },
      { type: "image", num: 5, label: "IP Device Utility：匯出 .ipcd 畫面" },
      { type: "spacer" },
      {
        type: "text",
        title: "IP Device Utility：匯入介面",
        content: "匯入此列表後， VMS 會依據此列表加載至對應 Channel 。"
      },
      { type: "image", num: 6, label: "IP Device Utility：匯入介面" },
      { type: "spacer" },
      {
        type: "note",
        title: "實務注意",
        content: "使用 GV-IP Device Utility 整理設備時，仍需確認 Camera IP、MAC Address、帳號密碼與 channel 對應是否正確，避免匯入後 Camera 順序或設備對應錯誤。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "GV-IP Device Utility = 外部搜尋與整理工具；Import Camera = 把整理好的 Camera 清單匯入 VMS。"
      }
    ]
  },

  {
    id: "vms-ip-device-setup-06",
    title: "Single Stream vs Dual Streams：串流模式選擇",
    summary: "加入 Camera 時常見的 Single Stream / Dual Streams 選擇，說明 Main/Sub Stream 的角色與正式環境建議。",

    areaId: "gv-vms",
    moduleId: "vms-ip-device-setup",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-ip-device-setup-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Single Stream", "Dual Streams", "串流"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [{ sourceId: "manual-vms-v20", chapter: "2.1.1 Adding Cameras Manually", pages: "97–98", keywords: ["Dual Streams", "Stream Type", "Camera Streaming Settings"] }],

    sections: [
      {
        type: "text",
        content: "加入 Camera 時，可能會遇到 Single Stream / Dual Streams 的選擇。這個選項與 Camera 本身支援的串流能力有關；有些 Camera 只支援單串流，有些支援雙串流，部分新機種甚至可能支援三串流以上。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "出現時機",
        content: "不是獨立選單頁面，而是在透過 Add Camera / Scan Camera / Automatic Setup 等方式加入裝置後，VMS 自動跳出的詢問視窗，讓使用者當下選擇 Single Stream 或 Dual Streams。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "基本概念",
        content: "GV-VMS 端可以依照 Camera 支援能力與使用需求，決定使用單一影像串流，或使用雙影像串流來分配 Live View、錄影與顯示效能。"
      },
      { type: "image", num: 1, label: "Single / Dual Streams 設定畫面" },
      {
        type: "list",
        title: "Main Stream / Sub Stream 角色",
        items: [
          "<strong>Main Stream</strong>：通常是高解析度、高畫質，適合錄影、放大觀看與需要保留細節的情境。",
          "<strong>Sub Stream</strong>：通常是較低解析度、較低流量，適合多分割 Live View、即時預覽與降低 VMS 解碼負擔。",
          "<strong>多串流支援</strong>：Camera 本身可能支援兩條以上串流，但 VMS 實際可使用幾條串流，仍要看設備型號、協定與 VMS 支援方式。"
        ]
      },
      { type: "spacer" },
      {
        type: "note",
        title: "實務補充",
        content: "若 Camera 支援三串流，代表 Camera 端本身可以提供更多組影像串流設定；但在 GV-VMS 加入 Camera 時，仍需依 VMS 介面可選項與實際用途決定使用 Single Stream 或 Dual Streams。支援多串流不代表 VMS 一定會同時使用全部串流。"
      },
      {
        type: "note",
        title: "選擇建議",
        content: "正式環境通常會優先考慮 Dual Streams，讓 VMS 可用 Main Stream 保留錄影畫質，同時用 Sub Stream 降低多畫面 Live View 負擔。Single Stream 則適合設定較簡單、測試環境、設備支援有限，或使用者明確只需要單一路影像流的情境。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Single Stream = VMS 使用一條影像流；Dual Streams = Main 看細節 / 錄影，Sub 省資源 / 多畫面預覽。Camera 支援多串流，不代表 VMS 一定全部使用。"
      }
    ]
  }
);