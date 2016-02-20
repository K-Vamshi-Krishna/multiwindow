var app = require('app')
var Browserwindow = require('browser-window')
const  ipcMain = require('ipc-main')
app.on('ready', function () {
 var mainwindow = new Browserwindow({
    width: 800,
    height: 600,
    title: 'multiwindow',
    transparent: true,
    darkTheme: true
 })
  mainwindow.loadUrl('file://'+ __dirname + '/main.html')
  mainwindow.openDevTools()
console.log(ipcMain)
  var prefsWindow = new Browserwindow({
    width: 400,
    height: 400,
    show: false
  })
  //prefsWindow.loadUrl('file://'+ __dirname + '/prefs.html')
  prefsWindow.loadUrl('https://github.com')
  ipcMain.on('show-prefs', function (event, arg) {
          prefsWindow.show()
    })
})
