// Preload：在渲染进程与 IPC 之间提供安全桥接
// 模板占位，后续按需用 ipcRenderer + contextBridge 暴露 API
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform
})
