const { app, Menu } = require('electron')
const mainProcess = require("./main")

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New File',
        acclerator: 'CommandOrControl+N',
        click() {
          mainProcess.createWindow();
        }
      },
      {
        label: 'Open File',
        acclerator: 'CommandOrControl+O',
        click(item, window) {
          mainProcess.getFileFromUser(window)
        }
      }
    ]
  }
  ,{
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        acclerator: 'CommandOrControl+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        acclerator: 'Shift+CommandOrControl+C',
        role: 'redo'
      },
      {
        label: 'Cut',
        acclerator: 'CommandOrControl+X',
        role: 'cut'
      },
      {
        label: 'Copy',
        acclerator: 'CommandOrControl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        acclerator: 'CommandOrControl+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        acclerator: 'CommandOrControl+A',
        role: 'selectall'
      },
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        acclerator: 'CommandOrControl+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        acclerator: 'CommandOrControl+W',
        role: 'close'
      }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Visit Website',
        click() {}
      },
      {
        label: 'Toggle Developer Tools',
        click(item, window) {
          if (window) window.webContents.toggleDevTools()
        }
      }
    ]
  }
]

// TODO: os portable

module.exports = Menu.buildFromTemplate(template)
