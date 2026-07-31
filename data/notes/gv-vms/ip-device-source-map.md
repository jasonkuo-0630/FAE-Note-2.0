# IP Device Setup 官方來源對照

這份清單用來核對 `data/notes/gv-vms/vms-ip-device-setup.js` 的 6 篇核心筆記。
官方連結找到後，統一填入 `data/sources.js` 的 `manual-vms-v20.url`，不必在 6 篇
筆記重複貼相同網址。

## 共用官方文件

- 文件：`GV-VMS User's Manual V20`
- 出版者：GeoVision
- 文件代碼：`VMS201-UM-A`
- 語言：English
- 官網搜尋方向：`GeoVision Download > GV-VMS > User's Manual V20`
- URL：待補

## 各篇對照

| Note ID | 筆記 | 章節 | 頁碼 | PDF 搜尋關鍵字 |
| --- | --- | --- | --- | --- |
| `vms-ip-device-setup-01` | IP Device Setup 總覽與加入方式比較 | 1.2.3 Adding Cameras；2.1 Adding IP Cameras；2.1.1 Adding Cameras Manually | 14、95–98 | `Automatic Setup`、`Adding IP Cameras`、`status icons` |
| `vms-ip-device-setup-02` | Add Camera：手動輸入加入 | 2.1.1 Adding Cameras Manually | 97–98 | `Adding Cameras Manually`、`Camera Streaming Settings` |
| `vms-ip-device-setup-03` | Scan Camera：掃描網段加入 | 2.1.2 Scanning for Cameras | 99 | `Scanning for Cameras`、`Start Scan` |
| `vms-ip-device-setup-04` | Automatic Setup：批次掃描加入 | 1.2.3 Adding Cameras；2.1 Adding IP Cameras | 14、95 | `Automatic Setup`、`Apply All`、`camera list is empty` |
| `vms-ip-device-setup-05` | IP Device Utility：搜尋、對應與匯入 | 2.1.3 Mapping GV-IP Cameras Using GV-IP Device Utility | 100 | `Mapping GV-IP Cameras`、`GV-IP Device Utility` |
| `vms-ip-device-setup-06` | Single Stream vs Dual Streams：串流模式選擇 | 2.1.1 Adding Cameras Manually | 97–98 | `Dual Streams`、`Stream Type`、`Camera Streaming Settings` |

## 補充原則

- 同一份手冊只在 `sources.js` 登錄一次，各篇以 `sourceId` 引用。
- 章節與頁碼放在每篇 `sources` citation 內，方便維護，但不強制顯示在正文。
- `Network Adapter`、`.ipcd`、Camera 三串流等畫面或實作細節，仍保留
  `tested` 證據類型，不因引用同一份手冊就改成純官方結論。
