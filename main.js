import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'
import { ipcMain } from 'electron'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: join(process.cwd(), 'bridge.js'),
    },
  })

  mainWindow.loadFile('dist/index.html')

  // mainWindow.webContents.openDevTools()

  const messages = []

  ipcMain.on('message', async (_, message) => {
    console.log(`main.js: received message ${message}.`)
    messages.push(message)
    mainWindow.webContents.send('count', messages.length)
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
