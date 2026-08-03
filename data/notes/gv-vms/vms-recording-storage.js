/* data/notes/gv-vms/vms-recording-storage.js —— GV-VMS 底下「錄影、排程與儲存」章節的正式筆記
   moduleId 對應 data/taxonomy.js 裡的 "vms-recording-storage"，兩邊要同一個字串。
   圖片資料夾用 areaId/moduleId 自動算出來，就是 "gv-vms/vms-recording-storage"，不用額外指定 imageFolder。

   第五批搬遷：Record Setting（對應 v1 的 notes-recordsetting.js，共 5 篇）

   本次搬遷已重新對照 GV-VMS User's Manual V20 第 1.3 節、
   GV-VMS Quick Start Guide V20 第 3.1 節、ANR Technical Notice 與 V20 Version History。
   官方文件可支撐的內容標為 official；指定環境的操作結果仍保留 tested，
   避免把單次實測寫成所有版本與所有 Camera 都適用的規則。

   related 裡有幾個 ID（vms-playback-06、vms-playback-10、vms-systemconfig-10）
   還指向尚未搬過來的章節，這是正常的、故意保留的，等對應內容搬過來即可。
*/

window.FAE.notes.push(
  {
    id: "vms-recording-storage-01",
    title: "Record Setting 入口與整體錄影設定",
    summary: "Record Setting 的進入路徑，以及 Max Video Clip、Recycle、Storyline、Event Database 與 Digital Watermark 等整體設定。",

    areaId: "gv-vms",
    moduleId: "vms-recording-storage",
    type: "feature",
    status: "published",
    updated: "2026-08-03",

    relatedAreas: [],
    related: [
      "vms-recording-storage-02",
      "vms-camera-stream-07",
      "vms-playback-06",
      "vms-playback-10",
      "vms-systemconfig-10"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Record Setting", "Recycle", "Storyline", "Digital Watermark", "進入方式"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3 Recording Settings；1.3.1 Setting Up Global Recording Settings for All Cameras",
        pages: "18–20",
        keywords: [
          "Record Setting",
          "Max Video Clip",
          "Recycle",
          "Register Event",
          "Storyline",
          "Database Folder",
          "Use Digital Watermark Protection"
        ]
      },
      {
        sourceId: "manual-vms-v20",
        chapter: "1.13 Storyline；9.2 Watermark Viewer",
        pages: "91–94、299–300",
        keywords: [
          "Storyline",
          "Add Copyright Text",
          "Activating Watermark Protection",
          "Watermark Proof"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings",
        pages: "10",
        keywords: [
          "Record Setting",
          "Recycle Threshold",
          "Event Detection",
          "Round-the-Clock"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Record Setting 用來設定整體錄影規則、各 Camera 的錄影模式與儲存位置。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "進入路徑",
        content: "Home👁️ > Toolbar🛠️ > Configure⚙️ > System Configure > System Configure"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Record Setting 設定畫面",
        content: "此畫面可設定整體錄影規則、各 Camera 的錄影模式與儲存位置。"
      },
      { type: "image", num: 1, label: "Record Setting 整體設定畫面" },
      {
        type: "list",
        title: "整體錄影設定",
        items: [
          "<strong>Max Video Clip</strong>：設定每個錄影檔案的最大長度，可選 1～5 分鐘。<br>例如設為 5 分鐘，連續 30 分鐘的錄影會切成 6 個 5 分鐘檔案；它是切檔長度，不是事件最長只能錄 5 分鐘。",
          "<strong>Recycle</strong>：啟用後，系統需要空間存放新檔案時會刪除較舊的錄影；未啟用時，磁碟空間用完後系統會停止錄影。<br>實際開始回收的空間門檻由 Add Recording Location 裡的 Recycle Threshold 管理。",
          "<strong>Register Event</strong>：用來將錄影／回收相關的錯誤或事件記錄到 System Log。<br>V20 英文手冊此句用詞較不清楚，不能直接解讀成每次正常 Recycle 都一定新增一筆 Log；需要驗證時，應實際查看 System Log 的記錄結果。",
          "<strong>Storyline</strong>：設定 Storyline 影片的 Keep Image Ratio、Resolution、儲存 Path、Add Copyright Text 與 Position。<br>Add Copyright Text 是加上可見文字，不等於 Digital Watermark 的防竄改驗證。"
        ]
      },
      { type: "spacer" },
      { type: "image", num: 2, label: "Storyline 設定彈窗" },
      {
        type: "list",
        title: "Event Database 與 Digital Watermark",
        items: [
          "<strong>Database Folder</strong>：指定 Event Database（<code>.db</code>）的儲存位置，V20 官方預設為 <code>D:\\CameraDBs\\</code>。<br>這裡存的是事件／錄影查詢所需的 Database，不是錄影檔本體；錄影檔路徑由 Add Recording Location 設定。變更前應先確認既有 Database 與錄影查詢的搬移方式，不宜直接任意改路徑。",
          "<strong>Use Digital Watermark Protection</strong>：在錄影時加入數位簽章／浮水印，之後可使用 <code>WMProof.exe</code> 驗證錄影是否遭修改或損壞。<br>它不是畫面上可見的 Logo。"
        ]
      },
      {
        type: "note",
        title: "V20 介面注意事項",
        content: "GV-VMS V20.1.0 官方 Record Setting 畫面與 1.3.1 節沒有 <code>Enable AES Encryption</code>。<br>WebCam／Mobile Service 內的 AES 是傳輸加密設定，不能直接當成錄影檔加密放在這篇。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "錄影檔本體的位置由 Add Recording Location 管理；Database Folder 存 Event Database；Digital Watermark 用來驗證錄影是否被改。<br>V20 的 Record Setting 不要再混入 WebCam／Mobile Service 的 AES 傳輸加密。"
      }
    ]
  },

  {
    id: "vms-recording-storage-02",
    title: "Record · Camera 個別錄影設定：Record Type / Storage / Stream",
    summary: "設定每支 Camera 是否錄影、何時錄影、錄到哪個 Storage，以及要錄 Main、Sub 或兩條 Stream。",

    areaId: "gv-vms",
    moduleId: "vms-recording-storage",
    type: "feature",
    status: "published",
    updated: "2026-08-03",

    relatedAreas: [],
    related: [
      "vms-recording-storage-01",
      "vms-recording-storage-03",
      "vms-recording-storage-04",
      "vms-recording-storage-05",
      "vms-ip-device-setup-06"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Record Type", "Storage", "Stream"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3.2 Setting Up Recording Settings for Individual Cameras",
        pages: "21–22",
        keywords: [
          "Record Type",
          "Disable",
          "Event Detection",
          "Round-the-Clock",
          "Storage",
          "Main and Sub Stream"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings",
        pages: "10",
        keywords: [
          "Record Type",
          "Storage",
          "Main Stream",
          "Sub Stream",
          "Main and Sub Stream"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Record Setting 下半部可針對選取的 Camera 設定 Record Type、Storage、Stream、Advanced 與 Motion。若同時選取多支 Camera，套用前要確認是否會改到原本不想變更的頻道。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Record Type 下拉選單畫面",
        content: "此選單可設定 Camera 的錄影方式。"
      },
      { type: "image", num: 1, label: "Record Type 下拉選單：Disable / Event Detection / Round-the-Clock" },
      {
        type: "list",
        title: "Record Type 選項說明",
        items: [
          "<strong>Disable</strong>：停用該 Camera 的影像錄影。音訊是否另有錄製行為，仍需搭配 Camera Settings → Audio Setting 的 Rec Audio 設定與實際測試判斷。",
          "<strong>Event Detection</strong>：只有在已設定並啟用的錄影事件被觸發時才錄影。<br>Motion／PVD Motion 是可設定的事件來源；I/O 或 AI Event 是否會觸發該頻道錄影，仍取決於對應功能、Action、Schedule 與 Camera 支援，不能只靠 Record Type 下拉選單一概而論。",
          "<strong>Round-the-Clock（RTC）</strong>：24 小時不間斷地持續保存影像，不以 Motion 是否發生決定有沒有影片；若 Motion、I/O、AI 或 PVD 等事件功能另有啟用，事件仍可在 Timeline／Event List 以對應類型呈現。"
        ]
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Event Detection 是事件觸發才錄；RTC 是持續錄影。<br>RTC 下的事件功能仍有用，它們負責標示事件與後續查詢，不是決定影片本體是否存在。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Storage",
        content: "Storage 決定該 Camera 的錄影要寫入哪個儲存群組，例如 <code>Storage 1</code>。<br>Storage 群組與 Path 要先由 Add Recording Location 建立；也可再用 Automatically Assign Partition to Camera 平均分配 Camera。"
      },
      { type: "image", num: 2, label: "Stream 下拉選單：Main / Sub / Main and Sub Stream" },
      {
        type: "list",
        title: "Stream",
        items: [
          "<strong>Main Stream</strong>：錄製較高解析度的串流，適合需要保留較多影像細節的情境；實際畫質與檔案大小仍取決於 Camera 的 Resolution、FPS、Codec 與 Bitrate。",
          "<strong>Sub Stream</strong>：錄製較低解析度的串流，通常可降低頻寬與儲存用量，但可辨識細節也會較少。",
          "<strong>Main and Sub Stream</strong>：同時錄製兩條串流，V20 官方預設為此選項；可供不同播放需求使用，但會增加儲存用量。"
        ]
      },
      {
        type: "note",
        title: "不要任意切換 Storage",
        content: "V20 官方手冊特別警告：任意變更 Camera 的錄影 Storage Group 可能打亂錄影檔序列，造成錄影失敗或非預期的 Recycle 行為。<br>正式案場變更前要先確認現有錄影狀態、儲存路徑與後續查詢。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Main／Sub 指的是實際要錄哪條 Camera Stream，不是單純控制 Live View。<br>兩條都錄最有彈性，但容量規劃也要把兩條串流一起算進去。"
      }
    ]
  },

  {
    id: "vms-recording-storage-03",
    title: "Record · Advanced：ANR 回補、Pre/Post-Record 與錄影幀率",
    summary: "Camera 個別錄影設定裡的 Advanced 選項：SD 卡 ANR 回補、事件前後錄影，以及 Urgent／General Event 幀率策略。",

    areaId: "gv-vms",
    moduleId: "vms-recording-storage",
    type: "feature",
    status: "published",
    updated: "2026-08-03",

    relatedAreas: [],
    related: [
      "vms-camera-stream-02",
      "vms-camera-stream-07",
      "vms-recording-storage-02"
    ],

    versions: ["V20.1.0"],
    devices: ["GV-GVD4910", "GV-QFER12700", "GV-SD4834-IR"],
    tags: ["Advanced", "ANR", "SD Card", "Pre-Record", "Post-Rec"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3.2 Setting Up Recording Settings for Individual Cameras",
        pages: "21–22",
        keywords: [
          "Sync recording from camera SD card when reconnected",
          "Pre-Record",
          "Post-Rec",
          "Urgent Event",
          "General Event"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings；6.1 Playing Back Recorded Videos",
        pages: "10、26",
        keywords: [
          "Urgent Event",
          "General Event",
          "recordings retrieved from the SD cards",
          "yellow"
        ]
      },
      {
        sourceId: "technical-notice-vms-anr",
        chapter: "How to Sync Camera's Recorded Files Back to GV-VMS",
        pages: "1–8",
        keywords: [
          "Automatic Network Replenishment",
          "ANR",
          "Sync Device Time with PC",
          "GV-Q Series",
          "GV-G, P and R series",
          "ONVIF Profile G"
        ]
      },
      {
        sourceId: "version-history-vms-v20",
        chapter: "Version 20.0.0 — Modified",
        pages: "9",
        keywords: [
          "No more support for GV-SD Card Sync Utility"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "點開 Camera 欄位中的 Advanced，可設定 SD 卡 ANR 回補、Pre-Record／Post-Rec，以及錄影要套用的 Urgent／General Event 幀率策略。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Record Setting Advanced 設定畫面",
        content: "此可設定斷線回補以及相關的錄影策略。"
      },
      { type: "image", num: 1, label: "Advanced 彈窗：Sync recording from camera SD card when reconnected 與 Pre-Record" },
      {
        type: "text",
        title: "Sync recording from camera SD card when reconnected（ANR）",
        content: "此功能屬於 Automatic Network Replenishment（ANR）。<br>Camera 與 GV-VMS 暫時斷線期間，錄影先保存在 Camera 記憶卡；重新連線後，再把相容的 SD 卡錄影取回 GV-VMS。<br>回補成功的錄影在 ViewLog Timeline 以黃色顯示。"
      },
      {
        type: "list",
        title: "官方必要條件",
        items: [
          "GV-VMS 端：在該 Camera 的 Advanced 勾選 <code>Sync recording from camera SD card when reconnected</code>。",
          "時間一致性：官方 Technical Notice 建議在 Camera Settings → General Setting 啟用 <code>Sync Device Time with PC</code>，依需求選擇 1～24 小時間隔，避免回補後 Timeline 時間不一致。",
          "Camera 端：必須是支援 ANR 的 Camera，並依系列完成必要設定。<br>GV-A／B／E／F／S／T 系列中的相容型號多半不需額外設定；GV-Q 系列、GV-G／P／R 系列及支援 ONVIF Profile G 的第三方 Camera，則需在 Camera 端啟用 RTC 錄影與 SD Card 錄影。",
          "儲存媒體：SD Card 必須已正確安裝、格式化並可正常寫入；只有勾 VMS 選項，不代表 Camera 端一定已在斷線期間留下可回補的錄影。"
        ]
      },
      {
        type: "note",
        title: "V20 名稱不要混淆",
        content: "V20 Version History 所寫的「不再支援 GV-SD Card Sync Utility」是指舊的獨立 Utility，不代表 Record Setting 內建的 ANR 回補選項被移除。<br>兩者不是同一個功能入口。"
      },
      {
        type: "note",
        title: "實測補充：GV-GVD4910／ONVIF Profile G 類型",
        content: "目前實測顯示，只在 VMS 勾選回補仍不夠；Camera 端要先持續錄影到 SD Card，VMS 與 Camera 時間也要同步，斷線期間才會有可取回的檔案。<br>這與官方對 GV-G／P／R 系列及第三方 ONVIF Profile G Camera 的 ANR 條件一致。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Pre-Record / Post-Rec",
        content: "<strong>Pre-Record</strong> 是事件開始前的預錄，可設定 Clip 數量與每個 Clip 秒數；例如 3 Clips × 5 秒，理論設定值為事件前 15 秒。<br><strong>Post-Rec</strong> 是事件停止後繼續錄影的時間。<br>實際 Timeline 長度仍可能受事件持續時間、切檔、FPS／Key Frame 與觸發判定影響。"
      },
      { type: "image", num: 2, label: "Advanced 彈窗：Record Type 為 RTC 時的 Video record frame rate" },
      {
        type: "note",
        title: "目前實測範例",
        content: "在目前測試環境中，Pre-Record 設為 2 Clips × 10 秒、Motion 約持續 16～17 秒、Post-Rec 設為 13 秒時，最後片段約 32 秒。<br>這是指定環境觀察值，不應直接用 20 + 17 + 13 推定檔案一定等於 50 秒。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Urgent Event / General Event",
        content: "Advanced 內選擇的是要套用 Urgent Event 還是 General Event 類別；兩個類別實際錄 Maximum frame rate 或 Key frame only，應回到 Camera Settings → Record 的 Recording Frame Rate Control 確認。<br>官方 Quick Guide 以 Urgent＝full frame rates、General＝key frames only 說明其預設／典型用途，但若 Camera Settings → Record 已更改對應關係，仍以實際設定為準。"
      },
      { type: "image", num: 3, label: "Advanced 彈窗：Post-Rec 與 Pre-Record 設定" },
      {
        type: "note",
        title: "RTC 介面實測",
        content: "於目前 V20.1.0 介面中，Record Type 設為 Round-the-Clock 時，Advanced 會顯示 <code>Video record frame rate</code>，用來選擇 RTC 錄影套用 Urgent Event 或 General Event 類別。"
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "ANR 回補要 VMS、相容 Camera、SD Card 與時間同步一起成立；Pre-Record 補事件前，Post-Rec 補事件後；Urgent／General 的實際幀率要回 Camera Settings → Record 確認。"
      }
    ]
  },

  {
    id: "vms-recording-storage-04",
    title: "Record · Add Recording Location：建立錄影儲存位置",
    summary: "手動建立 Storage Group、指定錄影 Path，並設定 Keep Days 與 Recycle Threshold。",

    areaId: "gv-vms",
    moduleId: "vms-recording-storage",
    type: "procedure",
    status: "published",
    updated: "2026-08-03",

    relatedAreas: [],
    related: [
      "vms-recording-storage-05",
      "vms-recording-storage-02"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: [
      "Add Recording Location",
      "Storage Group",
      "Keep Days",
      "Recycle Threshold"
    ],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3.3 Setting Up Video Storage Location — Add Recording Location",
        pages: "23",
        keywords: [
          "maximum of 24 storage groups",
          "Add Recording Location",
          "storage folder",
          "one folder per partition",
          "Keep Days",
          "Enlarge Recycle Threshold"
        ]
      },
      {
        sourceId: "quick-guide-vms-v20",
        chapter: "3.1 Configuring Recording Settings",
        pages: "10",
        keywords: [
          "Add Recording Location",
          "Storage",
          "Recycle Threshold"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Add Recording Location 用來手動建立 Storage Group，並指定每個 Storage 實際使用的錄影資料夾。V20 官方最多可建立 24 個 Storage Group，預設錄影位置為 <code>D:\\Record\\</code>。"
      },
      {
        type: "text",
        content: "Storage Group 名稱／編號與磁碟代號沒有固定綁定，可依規劃指定不同 Path；例如 <code>Storage 1 = D:\\Data</code>、<code>Storage 2 = E:\\Record</code>。重點是分配 Camera 前，要先確認每個 Storage 實際指向哪個磁碟分割區。"
      },
      {
        type: "image",
        num: 1,
        label: "Add Recording Location 設定畫面"
      },
      {
        type: "list",
        title: "常見欄位",
        items: [
          "<strong>Storage / Path</strong>：Storage 是錄影儲存群組；Path 是群組內實際存放錄影檔的資料夾。",
          "<strong>Total Space / Available Space</strong>：顯示該儲存位置的總容量與目前可用空間。",
          "<strong>Power on hour</strong>：介面顯示的硬碟通電時數，可輔助了解硬碟已運作多久；它不是錄影保留或回收規則。實際是否能正確讀取，仍依磁碟與控制器是否提供資訊而異。",
          "<strong>Keep Days</strong>：指定錄影預計保留的天數；時間到後可進入回收，但若空間不足，可能在保留天數到期前就被 Recycle Threshold 規則回收。",
          "<strong>Enlarge Recycle Threshold</strong>：調整開始回收的可用空間門檻，V20 官方可設定 5～999 GB；當空間不足以同時滿足 Keep Days 時，此門檻優先於 Keep Days。"
        ]
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Keep Days 管預計保留多久，Recycle Threshold 管磁碟至少要留下多少可用空間；兩者衝突時，Recycle Threshold 優先。"
      },
      {
        type: "note",
        title: "一個 Partition 只能指定一個錄影資料夾",
        content: "V20 官方明確限制：同一個磁碟分割區只能指定 1 個錄影資料夾。例如同時把 <code>D:\\A</code> 與 <code>D:\\B</code> 當成兩個錄影 Path 不可行。這裡指的是 Partition，不是整顆實體硬碟；若同一顆硬碟切成不同分割區，系統會把它們視為不同 Partition。"
      },
      {
        type: "note",
        title: "建立 Path 不等於已分配 Camera",
        content: "完成 Add Recording Location 後，還要在每支 Camera 的 Storage 欄位手動指定 Storage，或使用 Automatically Assign Partition to Camera 進行平均分配。"
      }
    ]
  },

  {
    id: "vms-recording-storage-05",
    title: "Record · Automatically Assign Partition to Camera：自動分配錄影路徑",
    summary: "選取可用的錄影 Path，讓 GV-VMS 將 Camera 平均分配到這些儲存位置。",

    areaId: "gv-vms",
    moduleId: "vms-recording-storage",
    type: "procedure",
    status: "published",
    updated: "2026-08-03",

    relatedAreas: [],
    related: [
      "vms-recording-storage-04",
      "vms-recording-storage-02"
    ],

    versions: ["V20.1.0"],
    devices: [],
    tags: [
      "Automatically Assign Partition",
      "Storage",
      "Camera Distribution"
    ],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3.3 Setting Up Video Storage Location — Automatically Assign Partition to Camera",
        pages: "24",
        keywords: [
          "Automatically Assign Partition to Camera",
          "recording paths",
          "evenly dispersed"
        ]
      },
      {
        sourceId: "manual-vms-v20",
        chapter: "1.3.2 Setting Up Recording Settings for Individual Cameras",
        pages: "21",
        keywords: [
          "recording storage group",
          "recording file sequence",
          "recording failures",
          "unexpected recycling behavior"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Automatically Assign Partition to Camera 用來從既有或可選的錄影 Path 中選取至少一個位置，讓 GV-VMS 將 Camera 平均分配到選定的錄影路徑。官方手冊明確支撐的是「選 Path」與「平均分配 Camera」這兩件事。"
      },
      {
        type: "image",
        num: 1,
        label: "Automatically Assign Partition to Camera 設定畫面"
      },
      {
        type: "note",
        title: "目前 V20.1.0 實測：初次自動分配",
        content: "在尚未手動建立自訂 Path 的測試環境中，勾選磁碟後按 OK，GV-VMS 會以預設的 <code>Record</code> 資料夾建立錄影位置，並將 Camera 平均分配到各 Storage。此段是目前環境的實測結果；官方 V20 手冊沒有逐字承諾所有既有設定與版本都會重新建立相同名稱的資料夾。"
      },
      {
        type: "note",
        title: "目前 V20.1.0 實測：已存在自訂 Path",
        content: "先在 Add Recording Location 將 Storage 改為自訂 Path 後，再開啟 Automatically Assign Partition to Camera，清單會顯示該自訂 Path；本次實測按 OK 後，Camera 會重新平均分配，但自訂 Path 沒有被改回預設 <code>Record</code>。這應記錄為 V20.1.0 指定環境的實測行為，不宜改寫成所有版本下「OK 永遠只改分配、絕不改路徑」的通則。"
      },
      {
        type: "table",
        headers: ["功能", "主要負責內容", "官方／實測界線"],
        rows: [
          [
            "Add Recording Location",
            "建立 Storage Group、指定 Path、Keep Days 與 Recycle Threshold",
            "V20 官方手冊明確說明"
          ],
          [
            "Automatically Assign Partition to Camera",
            "選擇錄影 Path，將 Camera 平均分配到各 Path",
            "平均分配為官方說明；保留既有自訂 Path 為目前 V20.1.0 實測"
          ]
        ]
      },
      {
        type: "note",
        title: "正式案場操作前注意",
        content: "自動分配會改變 Camera 對應的 Storage。V20 官方警告，任意變更錄影 Storage Group 可能打亂錄影檔序列，造成錄影失敗或非預期 Recycle；已有正式錄影資料時，不要把此功能當成無風險的平均分配按鈕反覆操作。"
      },
      {
        type: "callout",
        label: "記憶點",
        content: "Add Recording Location 先定義 Storage 與 Path；Automatically Assign 再把 Camera 平均分配到選定 Path。自訂 Path 是否保留要標成實測，不要寫成跨版本絕對規則。"
      }
    ]
  }
);