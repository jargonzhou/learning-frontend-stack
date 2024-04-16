// bridge main process and renderer process

const {contextBridge, ipcRenderer} = require('electron')

// expose 'versions' global variable in renderer process
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  openExternal: (target) => ipcRenderer.invoke('openExternal', target)

  // we can also expose variables, not just functions
})
