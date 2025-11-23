// ========================================================
// IPC between main process and renderer process
// ========================================================

const {contextBridge, ipcRenderer} = require('electron')
const { shell } = require('electron/common')

contextBridge.exposeInMainWorld('gv', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  // renderer => main
  config: () => ipcRenderer.invoke('config'),
  createWindow: async () => ipcRenderer.invoke('createWindow'),
  // return {file, content}
  openFile: async () => ipcRenderer.invoke('openFile'),
  readFile: async (file) => ipcRenderer.invoke('readFile', file),
  // setTitle: async (title) => ipcRenderer.invoke('setTitle', title),
  saveFile: async (content) => ipcRenderer.invoke('saveFile', content),
  saveHtml: async (content) => ipcRenderer.invoke('saveHtml', content),
  watchFile: async (file) => ipcRenderer.invoke('watchFile', file),

  // main => renderer
  onFileChanged: (callback) => ipcRenderer.on('fileChanged', (e, file, content) => {
    console.log("onFileChanged")
    callback(file, content)
  }),  
})

