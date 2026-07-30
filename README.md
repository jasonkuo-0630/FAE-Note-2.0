# FAE Notes 2.0

這個資料夾是可以獨立使用的離線版本。它只使用 HTML、CSS、JavaScript，
不需要安裝 React、Node.js 或 npm。

## 第一次開啟

1. 在 VS Code 選擇「檔案 → 開啟資料夾」。
2. 選擇整個 `fae-notes` 資料夾，不要只開啟單一檔案。
3. 在左側檔案總管找到 `index.html`。
4. 儲存所有修改後，直接雙擊 `index.html` 即可用瀏覽器開啟。
5. 如果瀏覽器日後限制本機檔案，再安裝 VS Code 的 Live Server；目前不需要。

## 資料夾架構

```text
fae-notes/
├─ index.html                 網站入口，平常不需要修改
│
├─ css/
│  ├─ tokens.css             顏色、字體、圓角等共用設定
│  ├─ base.css               全站基本樣式
│  ├─ layout.css             側邊欄、頂部與內容區配置
│  └─ components.css         卡片、按鈕、搜尋列等元件
│
├─ js/
│  ├─ app.js                 網站啟動與互動
│  ├─ navigation.js          側邊導覽
│  ├─ renderer.js            將筆記資料顯示成畫面
│  ├─ search.js              搜尋邏輯
│  ├─ filters.js             分類與狀態篩選
│  └─ validator.js           自動檢查資料錯誤
│
├─ data/
│  ├─ config.js              網站名稱、版本、筆記狀態
│  ├─ categories.js          側邊欄檢視與分類
│  ├─ products.js            產品主檔
│  ├─ sources.js             官方手冊與其他來源主檔
│  └─ notes/
│     └─ notes-empty.js      第一階段空資料檔
│
├─ images/                   正式筆記使用的圖片
└─ archive/
   └─ migration-notes.md     1.0 搬遷與修正紀錄
```

## 現在可以修改的地方

- 想改分類名稱或說明：`data/categories.js`
- 想新增產品：`data/products.js`
- 想登錄官方文件：`data/sources.js`
- 想改顏色：`css/tokens.css`

## 現在先不要修改的地方

- `index.html` 內的 `<script>` 載入順序
- `js/` 資料夾內的程式邏輯
- 每一筆資料的 `id`

顯示名稱日後可以更改，但 `id` 會用來建立分類、來源與相關筆記的連結。

## 第一階段驗收

- 首頁、側邊欄與各分類可以開啟。
- 搜尋與狀態篩選可以操作。
- 深色／淺色模式可以切換。
- 窄視窗會將側邊欄收進選單。
- 資料健檢顯示正常。
- 所有正式筆記數量保持為 0。

下一階段才會加入 I/O Device 與 Object Tracking 示範資料。
