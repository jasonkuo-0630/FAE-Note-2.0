/* data/notes/gv-vms/vms-camera-stream.js —— GV-VMS 底下「Camera 與串流設定」章節的正式筆記
   moduleId 對應 data/taxonomy.js 裡的 "vms-camera-stream"，兩邊要同一個字串。
   圖片資料夾用 areaId/moduleId 自動算出來，就是 "gv-vms/vms-camera-stream"，不用額外指定 imageFolder。

   第四批搬遷：Camera Settings（對應 v1 的 notes-camerasettings.js，共 9 篇）

   本次搬遷已重新對照 GV-VMS User's Manual V20 第 2.2 節與
   GV-VMS Quick Start Guide V20 第 3.2 節。官方文件可支撐的內容標為 official；
   同事說明或指定環境的操作結果仍保留 tested，避免把單次實測寫成通用規則。

   related 裡有幾個 ID（vms-systemconfig-01、vms-recordsetting-01、vms-recordsetting-03）
   還指向還沒搬過來的章節，這是正常的、故意保留的，健檢會提醒，等對應內容搬過來就會消失。
*/

window.FAE.notes.push(
  {
    id: "vms-camera-stream-01",
    title: "Camera Settings 入口與整體頁籤總覽",
    summary: "Camera Settings 入口跟 8 個頁籤總覽，說明各頁籤大致負責什麼性質的設定。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: [
      "vms-ip-device-setup-01",
      "vms-camera-stream-02",
      "vms-systemconfig-01"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Camera Settings", "總覽", "進入方式"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2 Configuring Individual IP Cameras",
        pages: "101–110",
        keywords: [
          "General Settings",
          "Video Settings",
          "Video Stream Settings",
          "Audio Settings",
          "Abnormality Settings",
          "Recording Settings",
          "Advanced Settings",
          "POE Switch Settings"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.2 Configuring Camera Settings",
        pages: "11–14",
        keywords: [
          "Setup button",
          "General Settings",
          "Video Settings",
          "Video Stream Settings",
          "Audio Settings"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Camera Settings 是針對單一 Camera 做細部設定的地方。<br>在 IP Device Setup 的 Camera 清單中，透過 Camera 左側的<strong>設定圖示</strong>進入。<br>也可以透過 Live View Layout 左側 Camera 列表右鍵該裝置，選擇<code>IP Device Setup</code>進入。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > Camera Install > Setting 圖示"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Camera Settings 入口",
        content: "可以由此進入 Camera Setting，針對單一 Camera 做細部設定。"
      },
      { type: "image", num: 1, label: "IP Device Setup 列表，紅框標示設定圖示位置" },
      {
        type: "list",
        title: "進入後左側選單共有 8 個頁籤",
        items: [
          "<strong>General Setting</strong>：Camera 名稱、連線資訊、時間同步",
          "<strong>Video Setting</strong>：畫面亮度對比、方向、鏡頭類型",
          "<strong>Video Stream</strong>：Main/Sub Stream、Codec、解析度、Bitrate",
          "<strong>Audio Setting</strong>：音量增益、播放、錄音模式",
          "<strong>Abnormality</strong>：Camera 異常時的反應方式（I/O、Alarm、Notification）",
          "<strong>Record</strong>：錄影編碼格式、幀率策略",
          "<strong>Advanced</strong>：Live View 顯示效能、解碼負擔",
          "<strong>POE Switch</strong>：透過具備 Web management 功能的 GV-POE Switch 遠端重啟指定 Camera"
        ]
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "8 個頁籤大致可分四類性質：基本資訊與畫面（General/Video）、串流與訊號（Stream/Audio）、異常與錄影策略（Abnormality/Record）、效能與設備控制（Advanced/POE）。"
      }
    ]
  },

  {
    id: "vms-camera-stream-02",
    title: "Camera · General Setting：基本資訊與連線設定",
    summary: "Camera 名稱、連線帳密與時間同步設定，包含 DST 日光節約時間的注意事項。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-01", "vms-camera-stream-03"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["General Setting", "時間同步", "DST"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.1 General Settings",
        pages: "102",
        keywords: [
          "Set Codec and Resolution Automatically",
          "Sync Device Time with PC",
          "Automatically Adjust DST"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.2 Configuring Camera Settings — General Settings",
        pages: "11–12",
        keywords: [
          "camera name",
          "time synchronization",
          "DST adjustment"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "General Setting 是 Camera 的基本設定頁面。<br>欄位包含 Camera Name、IP Address、Port、User Name、Password、Set codec and resolution automatically、Sync Device Time With PC、Automatically Adjust DST。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "General Setting 頁籤畫面",
        content: "此頁面可針對 Camera 進行基礎設定。"
      },
      { type: "image", num: 1, label: "General Setting 頁籤畫面" },
      {
        type: "list",
        title: "General Setting 各欄位說明",
        items: [
          "<strong>Camera Name</strong>：建議案場上可以依位置命名（例如 1F_Entrance），在 Live View / Playback / Event Log 中比較好辨識；<br>名稱旁的三角形按鈕可讀取並套用 Camera Web 端的裝置名稱設定。",
          "<strong>IP / Port / User Name / Password</strong>：這是 Camera 本身的連線資訊，<strong>不是 VMS 登入帳密</strong>。<br>官方說明這些欄位只能在 Camera 斷線時修改；實務上可先停止連線，或取消該 Camera 在 IP Device Setup 中的勾選後再調整。",
          "<strong>Sync Device Time With PC</strong>：同步方向是 Camera 對齊 GV-VMS 主機時間，不是 PC 配合 Camera；預設為 NO。<br>選擇 1～24 小時間隔後，Camera 會在連線時同步，之後再依指定間隔自動重新同步。<br>時間不準會影響錄影時間、Playback 查詢與 Event Log 的準確性。",
          "<strong>Automatically Adjust DST</strong>：啟用後，DST 開始或結束時，GV-IP Device Web 介面的時間會與系統時間同步。<br>海外案場要注意：DST 開始、時鐘往前調會少一段時間；DST 結束、時鐘往回調才會出現重複時段。"
        ]
      },
      {
        type: "note",
        title: "實務補充",
        content: "<code>Sync Device Time With PC</code>在選擇 1～24 小時間隔後，Camera 會在連線時同步，並依指定間隔重新同步。<br>若設備不是 GV-IP Camera，仍應依實際 Protocol 與設備支援狀況確認。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "General 管基本資料；IP/帳密是 Camera 本身的，不是 VMS 登入帳密；時間同步會牽動錄影、事件、Playback 查詢的準確性。"
      }
    ]
  },

  {
    id: "vms-camera-stream-03",
    title: "Camera · Video Setting：影像屬性與鏡頭設定",
    summary: "調整畫面亮度對比、影像方向與鏡頭類型的設定頁籤。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-02", "vms-camera-stream-04"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Video Setting", "Image Orientation", "Camera Lens"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.2 Video Settings",
        pages: "103–104",
        keywords: [
          "Video Attribute",
          "Image Orientation",
          "Image Orientation by Software",
          "Camera Lens",
          "Illumination Mode"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.2 Configuring Camera Settings — Video Settings",
        pages: "12",
        keywords: [
          "image attributes",
          "orientation",
          "lens options"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Video Setting 主要用來調整 Camera 畫面顯示效果與鏡頭相關設定，項目包含 Video Attribute、Image Orientation、Camera Lens。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Video Attribute 與 Image Orientation 設定",
        content: "對 Camera 的影像屬性與影像方向進行調整。"
      },
      { type: "image", num: 1, label: "Video Setting：Video Attribute 與 Image Orientation" },
      {
        type: "list",
        title: "Video Attribute（影像屬性）",
        items: [
          "<strong>Brightness</strong> 亮度：調整後影響整體畫面明暗",
          "<strong>Contrast</strong> 對比：對比越高，亮暗差異越明顯；對比太低，畫面可能會灰灰的",
          "<strong>Saturation</strong> 飽和度：調整後影響顏色鮮豔程度",
          "<strong>Sharpness</strong> 銳利度：調太高可能讓邊緣變得很硬，甚至出現雜訊感",
          "<strong>Gamma</strong>：中間調亮度曲線，不是單純把整張畫面變亮或變暗，而是影響暗部、中間調與亮部之間的明暗分布"
        ]
      },
      {
        type: "text",
        content: "簡單記：Brightness 是整體亮度，Gamma 比較像調整灰階/中間調曲線。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Image Orientation（影像方向）",
        content: "常見包含 Normal、Horizontal Mirror、Vertical Flip、Rotate 180°、Rotate 90° 與 Rotate 270°。<br>未勾選 <code>Image Orientation by Software</code> 時，由 IP Camera 端處理影像方向；勾選後則改由 GV-VMS 軟體處理。<br>Rotate 90°／270°（Corridor Format）僅支援部分 GV-IP Camera。"
      },
      {
        type: "text",
        content: "實務上若 Camera 本身支援，通常可優先由 Camera 端處理，避免把旋轉工作留給 VMS 軟體端；但實際效能差異仍會受 Camera 數量、解析度與主機硬體影響。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Camera Lens 選單",
        content: "設定 Camera 鏡頭種類。"
      },
      { type: "image", num: 2, label: "Video Setting：Camera Lens 下拉選單" },
      {
        type: "text",
        title: "Camera Lens",
        content: "告訴 VMS 這支 Camera 使用什麼鏡頭類型。<br>一般鏡頭通常使用 <code>General</code>；<code>Wide Angle</code> 用於修正廣角鏡頭邊緣變形；第三方魚眼 Camera 可依鏡頭選擇 <code>IMV1 Panorama</code> 或 <code>Fisheye</code>。<br>可用選項會依 Camera 型號與支援能力而異；部分 GV 特殊鏡頭可能由系統自動辨識，無法手動改成其他類型。"
      },
      {
        type: "note",
        title: "V20 補充：Illumination Mode",
        content: "部分 GV-IP Camera 會顯示 <code>Illumination Mode</code>，可選 Smart Supplement Light、White Light 或 Infrared Light。<br>此功能只適用於特定型號；沒有出現此欄位不代表設定異常。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "未勾 Image Orientation by Software 時由 Camera 端處理方向，勾選後才由 VMS 處理；Lens 與 Illumination Mode 的可用選項會依 Camera 型號與支援能力而異。"
      }
    ]
  },

  {
    id: "vms-camera-stream-04",
    title: "Camera · Video Stream：Main / Sub Stream 串流設定",
    summary: "Main/Sub Stream 的 Codec、FPS、GOP、Bitrate 設定，含 CBR/VBR/Smart Stream 說明。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: [
      "vms-camera-stream-03",
      "vms-camera-stream-05",
      "vms-ip-device-setup-06"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Video Stream", "Codec", "FPS", "Bitrate"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: true,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.3 Video Stream Settings；2.4 On-Demand Display",
        pages: "104–105、113–114",
        keywords: [
          "Codec Selection",
          "FPS",
          "GOP",
          "VBR",
          "CBR",
          "Smart Streaming",
          "Resolution",
          "On Demand Display"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings；3.2 Configuring Camera Settings — Video Stream Settings",
        pages: "10、13",
        keywords: [
          "Main Stream",
          "Sub Stream",
          "codec type",
          "frame rate",
          "camera resolution"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Video Stream 是設定 Camera 影像串流的地方，常見會分成 Main Stream（通常解析度較高，適合錄影或大畫面觀看）與 Sub Stream（通常解析度較低，適合多分割 Live View、降低 VMS 解碼負擔）。<br>實際錄哪一條 Stream 仍以 Record Setting 的 Main／Sub／Both 選擇為準；Live View 使用哪一條則可能受 On Demand Display 影響。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Video Stream 設定畫面",
        content: "此頁面可針對 Camera 的 Main Stream 與 Sub Stream 做細項串流設定。"
      },
      { type: "image", num: 1, label: "Video Stream 設定畫面：Codec / FPS / GOP / Bitrate / Resolution" },
      {
        type: "text",
        title: "Codec",
        content: "影像編碼與解碼方式，Camera 端先壓縮編碼後送出，VMS 端再解碼顯示或錄影。"
      },
      {
        type: "list",
        title: "Codec 選項與差異說明",
        items: [
          "<strong>MJPEG</strong>：每一張影格都獨立編碼，可視為每張都是 Key Frame，逐格存取與錯誤恢復較直接；<br>但在相近畫質下，通常會比 H.264／H.265 使用更多頻寬與儲存空間。畫質仍取決於解析度與壓縮品質，不能只因為是 MJPEG 就認定一定最清楚。",
          "<strong>H.264 / H.265</strong>：利用影格之間的時間相關性壓縮，不需要每張都保存完整畫面。<br>GOP 決定 Key Frame 的間隔；例如 GOP 設為 30，代表每 30 張插入 1 張 Key Frame，其餘為預測影格，因此通常能降低頻寬與儲存用量。"
        ]
      },
      {
        type: "text",
        content: "<strong>H.264 與 H.265 的主要差異在壓縮效率與相容性需求</strong>：H.265 在相近畫質下通常更省頻寬與儲存空間，但解碼需求也可能較高，需要 Camera、GV-VMS 與硬體解碼環境都支援。<br>實際選用仍要看設備相容性、主機效能與案場需求。"
      },
      {
        type: "text",
        title: "FPS",
        content: "每秒影格數，越高畫面越順，但也越吃頻寬、儲存、VMS 解碼資源、CPU/GPU 負載。"
      },
      {
        type: "text",
        title: "GOP",
        content: "一組影格群組，代表每幾張影格中會有一張 Key Frame（概念見上方 Codec 說明）。<br>GOP 越短，Key Frame 越頻繁，回放定位可能較方便，但資料量可能增加；GOP 越長，壓縮效率可能較好，但跳轉、回放或掉包恢復可能較不利。"
      },
      {
        type: "text",
        title: "Bitrate",
        content: "影像資料量，常見模式："
      },
      {
        type: "list",
        title: "Bitrate 模式差異",
        items: [
          "<strong>CBR（Constant Bitrate，固定位元率）</strong>：以設定的目標 Bitrate 傳輸，並透過調整影像品質盡量維持該資料率，因此頻寬與儲存需求較容易估算。<br>當畫面非常複雜或高速移動時，受限於既定位元率，畫質可能下降。",
          "<strong>VBR（Variable Bitrate，可變位元率）</strong>：以盡量維持影像品質為目標，Bitrate 會隨畫面複雜度改變；也可設定 Max. Bitrate 作為上限，或選 Auto 不啟用上限。<br>相較 CBR，頻寬與儲存用量較會隨場景變化。",
          "<strong>Smart Stream（智慧串流）</strong>：在 GV-VMS V20.1.0 的 Video Stream 介面中，Smart Stream 是與 VBR、CBR 並列的串流模式選項。啟用後，Camera 可在畫面較靜態時降低 Bitrate，以減少頻寬與錄影空間使用量；<br>實際調整方式仍取決於 Camera 型號與 Firmware。V20 的 VMS 介面不再顯示舊版的 Static Scene、Dynamic Scene 與 Bitrate Reduction Level 細部設定。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "VMS V17／V18 Smart Streaming 細部設定畫面",
        content: "在 GV-VMS V17／V18 時期的介面中，Smart Streaming 可針對 Static Scene、Dynamic Scene 分別設定 Quality 與 Max. Bitrate，並提供 Bitrate Reduction Level。"
      },
      { type: "image", num: 2, label: "GV-VMS V17／V18 時期的 Smart Streaming 細部設定畫面；此畫面不代表 V20.1.0 仍提供相同欄位" },
      {
        type: "note",
        title: "版本差異與官方文件注意事項",
        content: "GV-VMS V17／V18 時期的介面可針對 Static Scene、Dynamic Scene 分別設定 Quality 與 Max. Bitrate，並提供 Bitrate Reduction Level；這裡提供的畫面即屬於舊版介面。<br>GV-VMS V20 官方手冊 p.104 的設定畫面則只顯示 Smart Stream 模式選項，沒有上述細部欄位，但 p.105 的文字仍保留舊版欄位說明，文件內容存在前後不一致。<br>依目前 V20.1.0 介面與實測，筆記以「V20 僅選擇 Smart Stream 模式」為主，這裡僅作版本差異補充。"
      },
      {
        type: "text",
        title: "實務補充：V20 能設定到什麼程度",
        content: "在目前 GV-VMS V20.1.0 的 Video Stream 介面中，Smart Stream 主要以模式選項呈現，不再由 VMS 提供 Static Scene、Dynamic Scene 與 Bitrate Reduction Level 等細部調整。<br>選擇此模式後，相關串流設定會套用到 IP Camera，但實際的動靜態判斷與 Bitrate 調整仍由 Camera 端及其 Firmware 支援能力決定。<br>若需要進一步確認或調整 Smart Streaming 參數，可查看 Camera Web UI 的影像編碼／串流設定頁面；是否提供細部欄位需依 Camera 型號與 Firmware 確認。"
      },
      {
        type: "table",
        headers: ["版本／介面", "Smart Streaming 設定方式對比"],
        rows: [
          [
            "GV-VMS V17／V18",
            "可分別設定 Static Scene 與 Dynamic Scene 的 Quality、Max. Bitrate，並調整 Bitrate Reduction Level"
          ],
          [
            "GV-VMS V20.1.0",
            "VMS 端主要提供 Smart Stream 模式選項，不再顯示上述細部欄位"
          ],
          [
            "Camera Web UI",
            "是否可進一步調整 Smart Streaming 參數，依 Camera 型號與 Firmware 而異"
          ]
        ]
      },
      {
        type: "text",
        title: "Resolution",
        content: "可選解析度與畫面比例會依 Camera 型號、Stream 與 Firmware 而異；Fisheye 或其他特殊鏡頭可能提供 5:4、4:3 等比例，不能把一般 Camera 一律限定為只有 16:9。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "MJPEG 每張獨立編碼，通常較吃頻寬；H.264／H.265 以 GOP 控制 Key Frame 間隔。<br>CBR 較容易估算頻寬，VBR 會隨場景變化；Smart Stream 可在靜態場景降低 Bitrate。<br>V17／V18 可從 VMS 細調動靜態參數，V20.1.0 則主要只提供 Smart Stream 模式選擇，實際支援仍依 Camera 與 Firmware 而異。"
      }
    ]
  },

  {
    id: "vms-camera-stream-05",
    title: "Camera · Audio Setting：音訊相關設定",
    summary: "Camera 的音訊相關設定：Wave Out 播放聲音、Rec Audio 錄音與音訊格式。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-04", "vms-camera-stream-06"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Audio Setting", "Wave Out", "Rec Audio"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.4 Audio Settings",
        pages: "106",
        keywords: [
          "Audio Gain",
          "Wave Out",
          "Denoise",
          "Rec Audio",
          "By Sensitivity",
          "Round-the-Clock Audio",
          "Audio Format"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.2 Configuring Camera Settings — Audio Settings",
        pages: "14",
        keywords: [
          "Wave Out",
          "Rec Audio",
          "By Sensitivity",
          "Round-the-Clock Audio"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Audio Setting 是 Camera 音訊相關設定，常見項目包含 Audio Gain、Wave Out、Denoise、Rec Audio、By Sensitivity、Round-the-Clock Audio、Audio Format。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Audio Setting 設定畫面",
        content: "此頁面可針對 Camera 的音訊相關設定做調整。"
      },
      { type: "image", num: 1, label: "Audio Setting 設定畫面" },
      {
        type: "list",
        title: "Audio Setting 相關設定說明",
        items: [
          "<strong>Audio Gain</strong>：調整 Camera 麥克風的增益。實際能否調整會依 Camera 與連線狀態而異；欄位呈現灰階時代表目前不可設定",
          "<strong>Wave Out</strong>：不是 VMS 對 Camera 端喊話，而是決定是否讓該 IP Camera 在 VMS 裡具備播放聲音的功能。<br>開啟後分割畫面上會出現 Wave Out 按鈕，按下可聽到 Camera 回傳到 VMS 的聲音，聲音大小與 Audio Gain 有關",
          "<strong>Denoise</strong>：降噪功能，可降低部分背景雜音，但不代表能完全消除所有噪音"
        ]
      },
      {
        type: "list",
        title: "Rec Audio（錄音功能，不是錄影）",
        items: [
          "<strong>By Sensitivity</strong>：當音量達到指定的 Sensitivity Level 時啟動錄音。<br>官方手冊未進一步定義滑桿數值與實際分貝門檻的換算，不宜直接把數字當成固定音量值",
          "<strong>Round-the-Clock Audio</strong>：持續錄音，不依聲音大小觸發，而是持續記錄音訊"
        ]
      },
      {
        type: "text",
        title: "Audio Format",
        content: "常見有 16 kHz, 16 bit / 32 kHz, 16 bit。32 kHz 通常可以保留更多音訊細節，但資料量也可能較高。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Wave Out 是讓 VMS 播放 Camera 回傳聲音，不是喊話功能；Rec Audio 是錄音不是錄影，By Sensitivity 是依聲音靈敏度觸發。"
      }
    ]
  },

  {
    id: "vms-camera-stream-06",
    title: "Camera · Abnormality：異常事件設定",
    summary: "Camera 異常時的偵測與反應方式：I/O、Invoke Alarm、Notification 三種處理方式。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-05", "vms-camera-stream-07"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Abnormality", "I/O", "Invoke Alarm", "Notification"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.5 Abnormality Settings",
        pages: "107",
        keywords: [
          "Network Time Out",
          "video loss",
          "connection loss",
          "Message Box Setting",
          "Network Congestion"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Abnormality 不是調整影像品質，而是設定 Camera 出問題時，系統要怎麼偵測、通知或觸發後續動作。常見項目包含 Network Time Out、Video Lost / Connection Lost（I/O / Invoke Alarm / Notification）、MessageBox Setting。"
      },
      {
        type: "image",
        num: 1,
        label: "Abnormality 設定畫面"
      },
      {
        type: "text",
        title: "Network Time Out",
        content: "官方說明：當網路斷線時間超過指定秒數後，IP Device Setup 內的狀態圖示會變成黃色。設定較短會較快呈現逾時狀態；設定較長則會給短暫網路波動較多緩衝，但異常狀態也較晚顯示。"
      },
      {
        type: "note",
        title: "實務補充",
        content: "Network Time Out 可用來避免短暫網路抖動立刻被呈現為逾時狀態。不過 V20 官方手冊只明確記載「超過時間後狀態圖示變黃」，沒有說明所有斷線 Log 都會等到 Time Out 後才寫入，因此不要把它直接等同於 Log 防洗版功能。"
      },
      {
        type: "list",
        title: "三種異常反應方式的差異",
        items: [
          "<strong>I/O</strong>：偏向外部設備動作，把 Camera 異常轉成實體動作（警示燈、蜂鳴器、Relay）",
          "<strong>Invoke Alarm</strong>：偏向系統內部警報流程，例如跳出警示、觸發警報聲",
          "<strong>Notification</strong>：偏向通知使用者知道發生異常，不直接控制外部設備"
        ]
      },
      {
        type: "text",
        title: "MessageBox Setting",
        content: "啟用後，GV-VMS 在偵測到 Network Congestion 時會顯示 Message Box。若頻繁出現，可再從 Camera 數量、Bitrate、可用頻寬、Switch 負載、封包延遲或遺失等方向排查；這些是故障排除方向，不代表每次提示都由同一原因造成。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "I/O 讓外部設備動作，Invoke Alarm 觸發系統警報，Notification 通知有人要知道這件事——三者可以同時搭配使用。"
      }
    ]
  },

  {
    id: "vms-camera-stream-07",
    title: "Camera · Record：錄影格式與幀率策略",
    summary: "錄影編碼格式（Standard vs GeoVision codec）與事件幀率策略，會影響 Playback 呈現與隱私遮罩。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: [
      "vms-camera-stream-06",
      "vms-camera-stream-08",
      "vms-recordsetting-01",
      "vms-recordsetting-03"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Record", "Recording codec", "Frame rate", "Privacy Mask"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.6 Recording Settings；3.1 Privacy Mask Protection",
        pages: "107–108、142–144",
        keywords: [
          "Recording Codec Format",
          "Recording Frame Rate Control",
          "Urgent Event",
          "General Event",
          "Privacy Mask"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings",
        pages: "10",
        keywords: [
          "Urgent Event",
          "General Event",
          "full frame rates",
          "key frames only"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Record 設定主要包含 Recording codec format、Recording frame rate control，會影響錄影檔案格式、Playback 畫面呈現、錄影流暢度與儲存空間使用量。"
      },
      {
        type: "image",
        num: 1,
        label: "Record 設定畫面"
      },
      {
        type: "text",
        title: "Recording codec format：Standard vs GeoVision codec",
        content: "官方 V20 手冊明確說明此處可選 Standard 或 GeoVision codec，但沒有在 2.2.6 節直接解釋兩者對 Privacy Mask 的差異。下列 Playback 行為屬於目前內部操作／實測結論，應與官方定義分開閱讀。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Standard codec（內部實測）</strong>：若 Privacy Mask 是 VMS 軟體端處理，而不是 Camera 本身已輸出遮罩後畫面，Playback 可能回到未套用該軟體效果的影像",
          "<strong>GeoVision codec（內部實測）</strong>：Playback 可保留 GV-VMS 軟體端處理效果，例如 Privacy Mask"
        ]
      },
      {
        type: "text",
        content: "若案場要求回放時也必須維持遮罩，不能只憑 codec 名稱判斷；部署前應以實際 VMS 版本、Privacy Mask 類型（Recoverable／Unrecoverable）、Camera 與錄影格式做一次 Playback 驗證。"
      },
      {
        type: "text",
        title: "Recording frame rate control：Urgent Event vs General Event",
        content: "分成 Urgent Event（重要事件）跟 General Event（一般事件），各自可選 <code>Maximum record frame rate</code> 或 <code>Record key frame only</code>。"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Urgent Event</strong> 通常建議保留較完整的錄影資訊，設為 Maximum record frame rate：畫面流暢、細節完整，但檔案較大",
          "<strong>General Event</strong> 可設為 Record key frame only：節省儲存空間，但只錄 Key Frame，畫面連續性與細節還原能力會降低"
        ]
      },
      {
        type: "note",
        title: "Codec 條件",
        content: "使用 MJPEG 時每張都是 Key Frame，Maximum record frame rate 與 Record key frame only 會呈現灰階；使用 H.264／H.265 時，才可針對 Urgent／General Event 選擇完整影格率或只錄 Key Frame。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Standard 看原始，GeoVision 留處理；Maximum frame rate 錄得完整但佔空間，Key frame only 省空間但細節少。有隱私遮罩需求時要特別注意 codec 選項。"
      }
    ]
  },

  {
    id: "vms-camera-stream-08",
    title: "Camera · Advanced：進階效能設定",
    summary: "影響 Live View 顯示效能與解碼負擔的進階設定，例如 Caching、On Demand Display。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-07", "vms-camera-stream-09"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Advanced", "Caching", "On Demand Display"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.7 Advanced Settings；2.4 On-Demand Display",
        pages: "108–109、113–114",
        keywords: [
          "Caching",
          "On Demand Display",
          "Live View Frame Rate Control",
          "Set Sub Stream Frame Rate to All Cameras"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Advanced 設定主要影響 Live View 顯示效能、解碼負擔、多畫面觀看流暢度，包含 Caching、On Demand Display、Frame rate control for live view decoding、Set sub stream frame rate to all cameras。"
      },
      {
        type: "image",
        num: 1,
        label: "Advanced 設定畫面"
      },
      {
        type: "list",
        title: "",
        items: [
          "<strong>Caching</strong>：指定延後 Live View 解碼的毫秒數。網路不穩或影格到達間隔不平均時，可用少量延遲換取較平順的顯示；此欄位只能在 Camera 斷線時設定，且不會改變已錄下的影片內容",
          "<strong>On Demand Display</strong>：適用於已啟用不同解析度 Dual Stream 的 Camera。當畫面顯示尺寸超過 Sub Stream 解析度的指定倍率時，切換到較高解析度串流（通常為 Main Stream）；畫面較小時使用較低解析度串流，以兼顧畫質與 CPU 使用量",
          "<strong>Frame rate control for live view decoding</strong>：分 Main Stream / Sub Stream 各自設定 Maximum live-view frame rate（順但吃效能）或 Live-view key frame only（省效能但不夠順）",
          "<strong>Set sub stream frame rate to all cameras</strong>：快速統一所有 Camera 的 Sub Stream FPS，可在 1～15 fps 間調整。官方預設邏輯為 1～32 CH 設為 15 fps，超過 32 CH 設為 7 fps"
        ]
      },
      {
        type: "note",
        title: "On Demand Display 限制",
        content: "官方手冊註明：On Demand Display 不支援 Privacy Mask，也不支援 GV-Fisheye Camera。若功能沒有生效，先確認 Dual Stream、兩條 Stream 的解析度差異與 Camera 類型。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Caching 用延遲換穩定，而且只能在 Camera 斷線時設定；On Demand Display 依畫面大小自動切換高／低解析度串流，但不支援 Privacy Mask 與 GV-Fisheye Camera。"
      }
    ]
  },

  {
    id: "vms-camera-stream-09",
    title: "Camera · POE Switch：遠端重啟",
    summary: "透過 POE Switch 對指定 Camera 執行遠端重啟，不用到現場拔線。",

    areaId: "gv-vms",
    moduleId: "vms-camera-stream",
    type: "feature",
    status: "published",
    updated: "2026-07-31",

    relatedAreas: [],
    related: ["vms-camera-stream-08", "vms-camera-stream-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["POE Switch", "Reboot"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "2.2.8 POE Switch Settings",
        pages: "110",
        keywords: [
          "Reboot IP Camera via POE Switch",
          "GV-POE Switch",
          "Web management"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "POE Switch 頁籤主要是用來透過 POE Switch 管理 IP Camera，目前畫面中看到的功能是 <strong>Reboot IP Camera via POE Switch</strong>，可透過 GV-POE Switch 遠端重啟指定 IP Camera。"
      },
      {
        type: "image",
        num: 1,
        label: "POE Switch 設定畫面：Reboot IP Camera via POE Switch"
      },
      {
        type: "text",
        content: "這裡要注意：這個功能<strong>不是重啟整台 POE Switch</strong>，而是透過具備 Web management 功能的 GV-POE Switch 重啟指定 Camera。畫面中可以設定 Network Adapter、Port、POE Switch ID、POE Switch Password；實際可用欄位與掃描流程依 Switch 型號與介面為準。"
      },
      {
        type: "text",
        title: "2026/06/12 更新確認",
        content: "同事確認此功能的實務目的，是透過 Switch 端讓指定 Camera 重新上電，免於到現場拔線。官方 V20 手冊明確要求使用具備 Web management 功能的 GV-POE Switch，但沒有寫成「只有 APOE 型號支援」；實際支援型號仍應以該 Switch 規格與 Firmware 為準。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "此功能是透過具備 Web management 的 GV-POE Switch 重啟指定 Camera，不是重啟整台 Switch；支援型號需以 Switch 規格與 Firmware 為準。"
      }
    ]
  }
);