// ========================================================
// in main process
// ========================================================
const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron')
const appMenu = require('./menu')
const path = require("path")
const fs = require('fs')

// ========================================================
// app configurations
// ========================================================
require('dotenv').config()
// console.log(path.resolve(process.cwd(), '.env'))
const AppConfig = {
  debug: process.env.APP_DEBUG === 'true'
}

// ========================================================
// OS interaction
// ========================================================
// key: WebContents
// value: fs.StatWatcher
const openFiles = new Map()

/**
 * Open file selector.
 * @returns {{file: string, content: string}}
 */
const getFileFromUser = exports.getFileFromUser = (e) => {
  const files = dialog.showOpenDialogSync(window, {
    properties: ['openFile'],
    filters: [
      { name: 'All Files', extensions: ['*'] },
      { name: 'Markdown', extensions: ['md', 'markdown'] },
      { name: 'Text', extensions: ['txt'] },
    ]
  });
  if (AppConfig.debug) {
    console.log("files", files)
  }
  if (!files) { return {}; }
  const file = files[0];
  if (AppConfig.debug) {
    console.log("file", file)
  }
  app.addRecentDocument(file)

  const content = fs.readFileSync(file).toString()
  if (AppConfig.debug) {
    console.log("content", content)
  }


  return { file: file, content: content }
};

/**
 * Read file content.
 * @param {string} file file path
 * @returns {string} file content
 */
const readFile = (file) => {
  const content = fs.readFileSync(file).toString()
  if (AppConfig.debug) {
    console.log("content", content)
  }
  return content
}

/**
 * Watch file.
 * @param {import('electron/main').IpcMainInvokeEvent} e 
 * @param {string} file 
 */
const watchFile = (e, file) => {
  // debugger
  const watcher = fs.watchFile(file, (curr, prev) => {
    if (curr.mtimeMs !== prev.mtimeMs) {
      if (AppConfig.debug) {
        console.log("File change detected")
      }
      const content = fs.readFileSync(file).toString()
      // send to renderer WebContents
      // debugger
      if (e.sender) {
        e.sender.send('fileChanged', file, content)
        openFiles.set(e.sender, watcher)
      }
    }
  })
}

// ========================================================
// windows
// ========================================================
let mainWindow = null
let windows = new Set() // BrowserWindow

const createWindow = exports.createWindow = (e) => {
  const currentWindow = BrowserWindow.getFocusedWindow()

  let newWindow = new BrowserWindow({
    parent: currentWindow,
    x: currentWindow ? currentWindow.getPosition()[0] + 10 : 0,
    y: currentWindow ? currentWindow.getPosition()[1] + 10 : 0,
    width: currentWindow ? currentWindow.getSize()[0] - 20 : 0,
    height: currentWindow ? currentWindow.getSize()[1] - 20 : 0,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  newWindow.loadFile(path.join(__dirname, 'index.html'))

  newWindow.once('ready-to-show', () => {
    newWindow.show()

    if (AppConfig.debug) {
      newWindow.webContents.openDevTools()
      if (!currentWindow) {
        newWindow.maximize()
      }
    }

  })
  newWindow.on('close', (e) => {
    // TODO: main process query renderer process about its status
    // if (newWindow.isDocumentEdited()) {
    let closeResult = 1
    if (newWindow.webContents.getTitle().indexOf("(Edited)" !== -1)) {
      e.preventDefault()
      closeResult = dialog.showMessageBoxSync(newWindow, {
        type: 'warning',
        title: 'Quit with unsaved changes?',
        message: 'Your changes will be lost if you do not save.',
        buttons: [
          'Quit Anyway',
          'Cancel'
        ],
        defaultId: 0,
        cancelId: 1
      })
    }

    if (closeResult === 1) {
      return
    }

    // unwatch file in window
    if (openFiles.has(newWindow.webContents)) {
      if (AppConfig.debug) {
        console.log("unwatch file in ", newWindow.webContents)
      }
      openFiles.get(newWindow.webContents).stop()
      openFiles.delete(newWindow.webContents)
    }

    // destroy window
    newWindow.destroy()
    windows.delete(newWindow)
    newWindow = null
  })

  if (!mainWindow) {
    mainWindow = newWindow
  }
  windows.add(newWindow)
}

// ========================================================
// app life-cycle
// ========================================================
app.whenReady().then(() => {
  Menu.setApplicationMenu(appMenu)

  createWindow()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// ========================================================
// IPC
// ========================================================
ipcMain.handle('config', (e) => AppConfig)
ipcMain.handle('createWindow', (e) => createWindow(e))
ipcMain.handle('openFile', (e) => getFileFromUser(e))
ipcMain.handle('readFile', (e, file) => readFile(file))

ipcMain.handle('saveFile', (e, content) => {
  const file = dialog.showSaveDialogSync({
    title: 'Save Markdown',
    defaultPath: app.getPath('documents'),
    filters: [{ name: 'Markdown Files', extensions: ['markdown', 'md'] }]
  })
  if (file) {
    fs.writeFileSync(file, content)
    if (AppConfig.debug) {
      console.log("write to", file, content)
    }
  }
  return file
})

ipcMain.handle('saveHtml', (e, content) => {
  const file = dialog.showSaveDialogSync({
    title: 'Save HTML',
    defaultPath: app.getPath('documents'),
    filters: [{ name: 'HTML Files', extensions: ['html', 'htm'] }]
  })
  if (file) {
    fs.writeFileSync(file, content)
  }
})

ipcMain.handle('watchFile', (e, file) => {
  watchFile(e, file)
})
