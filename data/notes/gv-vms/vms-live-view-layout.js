/* data/notes/gv-vms/vms-live-view-layout.js —— GV-VMS 底下「Live View 與 Layout」章節的正式筆記
   moduleId 對應 data/taxonomy.js 裡的 "vms-live-view-layout"，兩邊要同一個字串。
   圖片資料夾用 areaId/moduleId 自動算出來，就是 "gv-vms/vms-live-view-layout"，不用額外指定 imageFolder。

   第二批搬遷：Live View（對應 v1 的 notes-liveview.js，共 2 篇）
*/

window.FAE.notes.push(
  {
    id: "vms-live-view-layout-01",
    title: "Live View：介面區域、Layout 與 Camera 工具列",
    summary: "Live View 畫面的三大區域、把 Camera 拖進 Layout 的方式，以及 Camera Live View Tools 選單的四個功能。",

    areaId: "gv-vms",
    moduleId: "vms-live-view-layout",
    type: "feature",
    status: "published",

    relatedAreas: [],
    related: ["vms-live-view-layout-02"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Live View", "Layout", "Monitor", "Bookmark"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.2.1 Main Screen；1.2.4 Accessing Live View；1.2.5 Enabling Recording；1.3.2 Setting Up Recording Settings for Individual Cameras；1.4.1 Utilizing Live View Functions；1.5 Start Monitoring；4.1.4 Bookmarking Video Events in ViewLog",
        pages: "11–12、15–16、21–22、32–35、52、189–190",
        keywords: [
            "Main Screen",
            "Accessing Live View",
            "Enabling Recording",
            "Setting Up Recording Settings for Individual Cameras",
            "Utilizing Live View Functions",
            "Start Monitoring",
            "Bookmarking Video Events in ViewLog"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Live View 不只是看即時畫面，也牽涉到 Camera 顯示、監控狀態、事件觸發、錄影設定與 Popup 顯示。<br>畫面大致分三區：左側功能區（Layout / Windows / E-Map / Camera List / I/O Device 等）、中間 Layout 影像顯示區、右側 Event List 瀑布流。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Live View 介面",
        content: "左側為功能區（Layout / Windows / E-Map / Camera List / I/O Device 等）、中間為 Layout 影像顯示區、右側為 Event List 瀑布流。"
      },
      { type: "image", num: 1, label: "Live View 介面" },
      {
        type: "note",
        title: "實務補充",
        content: "可以點擊左側功能區與右側瀑布流的箭頭 Icon 隱藏兩側欄位，只保留中間 Layout 來顯示 Camera 的影像畫面。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "將 Camera 加入 Layout",
        content: "從左側 Camera List 拖拉 Camera 到中間分割畫面即可顯示。<br>但 Camera 被拖到 Layout 中<strong>不代表一定正在錄影</strong>，錄影是否啟用仍要看 Monitor 狀態與 Record Setting。"
      },
      { type: "image", num: 2, label: "拖曳 Camera 至 Live View Layout 示意圖" },
      { type: "image", num: 3, label: "Camera 加入至 Live View Layout示意圖" },
      {
        type: "note",
        title: "實務提醒",
        content: "Camera 拖入 Layout 只代表顯示 Live View，不等於已啟用監控或錄影。<br>Recording、Video Analysis 與 Motion Event Trigger 等 Camera 功能需啟用 Camera Monitoring；I/O 功能則需啟用 I/O Monitoring，也可使用 Start All Monitoring 一併啟動。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Camera Live View Tools 選單",
        content: "可以針對當前的Camera畫面進行設定。"
      },
      { type: "image", num: 4, label: "Camera Live View Tools 選單" },
      {
        type: "list",
        title: "Camera Live View Tools 選單項目",
        items: [
          "<strong>Monitor</strong>：啟用或停止該 Camera 的監控狀態。<br>Camera 加入 Layout 後可觀看 Live View，但 Recording、Video Analysis 與 I/O Applications 等監控相關功能，需要 Start Monitoring 後才會正式啟用。",
          "<strong>Add to Bookmark</strong>：在目前錄影時間點建立書籤。",
          "<strong>Properties</strong>：調整顯示屬性。",
          "<strong>Close</strong>：將 Camera 從目前 Layout Grid 移除，只是關閉該格的 Live View 顯示；不會刪除 Camera，也不等於停止該 Camera 的 Monitoring / Recording。"
        ]
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Add to Bookmark 介面",
        content: "只有在該 Channel 正在錄影時，Camera Live View Tools 才會出現 Add to Bookmark。<br>此功能可在目前影像時間點建立書籤，之後可在 ViewLog / Playback 中快速定位該事件時間點。"
      },
      { type: "image", num: 5, label: "Add to Bookmark 介面" },
      {
        type: "note",
        title: "官方說明",
        content: "加入 Bookmark 的錄影事件會在 ViewLog 中標記為 Never Recycle，避免被循環錄影機制自動回收。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Properties 介面",
        content: "調整影像屬性"
      },
      { type: "image", num: 6, label: "Properties 介面" },
      {
        type: "list",
        title: "Properties 選項介紹",
        items: [
          "<strong>Show Caption</strong>：是否顯示該裝置名稱（名稱為該裝置在 VMS 中 IP Device Setup 列表的名稱）。",
          "<strong>Keep Image Ratio</strong>：是否保持影像原始比例。<br>關閉會拉伸變形但填滿 Layout Grid，開啟則維持 Camera Web 端傳來的畫面比例，但可能出現黑/灰邊。"
        ]
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "左邊選功能與裝置，中間看 Camera 畫面，右邊看事件瀑布流；Monitor 僅代表開啟監控，不代表一定會錄影。"
      }
    ]
  },

  {
    id: "vms-live-view-layout-02",
    title: "Live View：Zoom / Scan / Popup Window 介紹",
    summary: "Layout 裡三種特殊顯示容器的差異：放大顯示、多台輪播，以及事件觸發時的彈出畫面。",

    areaId: "gv-vms",
    moduleId: "vms-live-view-layout",
    type: "feature",
    status: "published",

    relatedAreas: [],
    related: ["vms-live-view-layout-01", "vms-live-view-layout-03"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Zoom Window", "Scan Window", "Popup Window"],

    evidenceTypes: ["official", "tested"],
    hasOpenQuestions: false,

    sources: [
      {
        sourceId: "manual-vms-v20",
        chapter: "1.4.1 Utilizing Live View Functions；1.4.3 Setting Up Zoom Window；1.4.4 Setting Up Scan Window；1.4.6 Setting Up Popup Window；1.5 Start Monitoring；1.11.1 Popping Up Live View",
        pages: "32–33、42–44、46、52、87",
        keywords: [
            "Utilizing Live View Functions",
            "Setting Up Zoom Window",
            "Setting Up Scan Window",
            "Setting Up Popup Window",
            "Start Monitoring",
            "Popping Up Live View"
        ]
      }
    ],

    sections: [
      {
        type: "text",
        content: "Live View 左側 Layout 中的 Windows 是特殊顯示容器，不是一般 Camera Channel。<br>Zoom Window 用於放大顯示、Scan Window 用於多台 Camera 輪播、Popup Window 用於事件觸發時顯示指定 Camera 畫面。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Zoom Window",
        content: "Zoom Window 是指定一個 Layout 分割畫面作為放大顯示區。<br>一般情況下，Camera Live View 右上角的 Zoom 會切換到全螢幕；若 Layout 中已放入 Zoom Window，按下 Zoom 後畫面會顯示到 Zoom Window，而不改變原本整體 Layout。"
      },
      { type: "image", num: 1, label: "Zoom Window 示意圖" },
      { type: "spacer" },
      {
        type: "text",
        title: "不指定 Zoom Window 的畫面表現",
        content: "不指定 Zoom Window 時，點擊 Camera Live View 右上角的 Zoom 會直接佔滿全螢幕。"
      },
      { type: "image", num: 2, label: "不指定 Zoom Window 時的畫面呈現" },
      { type: "spacer" },
      {
        type: "text",
        title: "指定 Zoom Window 的畫面表現",
        content: "指定 Zoom Window 時，點擊 Camera Live View 右上角的 Zoom 後畫面會顯示到 Zoom Window，不會改變原本整體 Layout。"
      },
      { type: "image", num: 3, label: "指定 Zoom Window 時的畫面呈現" },
      {
        type: "note",
        title: "Zoom Window 實務補充",
        content: "Zoom Window 的畫面左上角 Camera 名稱會多一個<code>+</code>。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Scan Window",
        content: "Scan Window 是用來輪播多台 Camera 的顯示容器。<br>可將多支 Camera 加入同一個 Scan Window，系統會依清單順序輪流顯示。"
      },
      { type: "image", num: 4, label: "Scan Window 示意圖" },
      {
        type: "note",
        title: "Scan Window 實務補充",
        content: "Scan Window 的畫面左上角 Camera 名稱會多一個<code>@</code>。"
      },
      { type: "spacer" },
      {
        type: "list",
        title: "Scan Window 設定介面",
        items: [
          "<strong>Default Scan Interval</strong>：決定每支 Camera 顯示幾秒，也可套用相同間隔到所有 Camera。",
          "<strong>Show Caption</strong>：決定是否顯示 Camera 資訊以及設定其字體大小。",
          "<strong>Keep Image Ratio</strong>：選擇是否保持影像原始畫面比例。"
        ]
      },
      { type: "image", num: 5, label: "Scan Window 設定介面" },
      { type: "spacer" },
      {
        type: "text",
        title: "Popup Window",
        content: "Popup Window 是事件觸發用的顯示容器，可指定某個 Layout 分割畫面專門顯示 Popup 事件影像。<br>官方流程是先建立另一個 Live View Layout，可選擇套用到指定 Monitor，再新增 Camera Popup Window 並拖曳到該 Layout 中。事件觸發時，指定 Camera 的 Live View 會顯示在這個 Popup Window 中。"
      },
      { type: "image", num: 6, label: "Popup Window 示意圖" },
      {
        type: "note",
        title: "Popup Window 實務補充",
        content: "Popup Window 的畫面左上角 Camera 名稱會多一個<code>!</code>。"
      },
      { type: "spacer" },
      {
        type: "text",
        title: "Popup Window 設定介面",
        content: "設定 Popup Window 的觸發條件、指定Camera畫面。"
      },
      { type: "image", num: 7, label: "Popup Window 設定介面" },
      {
        type: "list",
        title: "Popup Window 設定選項",
        items: [
          "<strong>Dwell Time</strong>：事件觸發後，Popup 畫面停留多久。",
          "<strong>Interrupt Interval</strong>：多個事件連續觸發時，下一個 Popup 畫面切進來前的間隔。",
          "<strong>Select the events you want to pop up</strong>：哪些事件類型、哪些 Camera 觸發後要顯示在這個 Popup Window。",
          "<strong>Input Invoke</strong>：例如門磁、紅外線感測器、按鈕、I/O Box Input 被觸發時，可以指定某支 Camera 畫面顯示在 Popup Window。"
        ]
      },
      { type: "spacer" },
      {
        type: "callout",
        label: "記憶點",
        content: "Zoom Window 是放大顯示區，Scan Window 是輪播顯示區，Popup Window 是事件專用顯示區。<br>Popup Window 決定事件畫面顯示位置；Camera Popup Setting 則設定事件彈窗規則，兩者設定介面相近但彼此獨立。<br>詳細差異可見 <code>Popup Window 與 Camera Popup Setting 差異</code>。"
      }
    ]
  },

  {
    id: "vms-live-view-layout-03",
    title: "Popup Window 與 Camera Popup Setting 差異",
    summary: "Layout 中的 Popup Window 與 Camera Popup Setting 差異",

    areaId: "gv-vms",
    moduleId: "vms-live-view-layout",
    relatedModules: ["vms-system-license"],
    type: "qa",
    status: "published",

    relatedAreas: [],
    related: ["vms-live-view-layout-02","vms-system-license-01"],

    versions: ["V20.1.0"],
    devices: [],
    tags: ["Popup Window", "Camera Popup Setting"],

    evidenceTypes: ["tested"],
    hasOpenQuestions: false,

    sources: [],

    sections: [
      {
        type: "text",
        content: "<code>Layout &gt; Popup Window</code> 與 <code>Home &gt; Toolbar &gt; Configure &gt; Camera Popup Setting</code> 都能在事件觸發時顯示 Camera 畫面，但兩者是獨立功能，設定不會互相共用。"
      },
      { type: "spacer" },
      {
        type: "table",
        headers: [
          "比較項目",
          "Layout > Popup Window",
          "Configure > Camera Popup Setting"
        ],
        rows: [
          [
            "設定對象",
            "針對指定的 Popup Window 容器設定。",
            "設定主系統的 Camera Popup 規則。"
          ],
          [
            "事件觸發後的顯示位置",
            "顯示在 Layout 中指定的 Popup Window 分割畫面。",
            "顯示位置會受到目前 Layout 是否設有 Zoom Window 影響。"
          ],
          [
            "沒有 Zoom Window",
            "不受影響，仍顯示於指定的 Popup Window。",
            "事件畫面會以單分割方式佔滿主顯示器。"
          ],
          [
            "已有 Zoom Window",
            "不受影響，仍顯示於指定的 Popup Window。",
            "事件畫面會顯示在 Zoom Window 中。"
          ],
          [
            "設定是否共用",
            "不會套用 Camera Popup Setting 的設定。",
            "不會套用 Popup Window 內的設定。"
          ]
        ]
      },
      {
        type: "note",
        title: "實測結論",
        content: "兩邊即使選擇相同 Camera 與事件，仍須分別設定。<br><code>Layout &gt; <br>Popup Window</code> 會將事件影像顯示在指定的 Popup Window；<code>Configure &gt; Camera Popup Setting</code> 則會依 Zoom Window 是否存在，決定事件影像顯示在 Zoom Window 或以單分割佔滿主顯示器。"
      },
      {
        type: "callout",
        label: "驗收回答",
        content: "Popup Window 是指定 Layout 裡的事件影像顯示容器；Camera Popup Setting 是主系統的事件彈出設定，兩者設定獨立、不會共用。<br>實測沒有 Zoom Window 時，Camera Popup 會以單分割佔滿主顯示器；有 Zoom Window 時，事件畫面會顯示在 Zoom Window。"
      }
    ]
  }
);