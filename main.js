var remote = require('remote')
const ipcRenderer = require('ipc-renderer')
var Menu = remote.require('menu')

var menu = Menu.buildFromTemplate([
  {
    label: 'Electron',
    submenu:[
      {
        label: 'Prefs',
        click: function() {
          ipcRenderer.send('show-prefs', 'sairam')
        }
      }
    ]
  }
])
Menu.setApplicationMenu(menu)
