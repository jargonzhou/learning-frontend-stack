// main process
const {app, BrowserWindow, ipcMain, shell} = require('electron');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname,'index.html'))
}

app.whenReady().then(() => {
  createWindow()

  ipcMain.handle('ping', () => 'pong')
  ipcMain.handle('openExternal', (_, target) => {
    console.log(target)
    
    // shell.openExternal(target) // open system browser
    new BrowserWindow().loadURL(target) // new window
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})