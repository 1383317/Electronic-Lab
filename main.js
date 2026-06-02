const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 800,
    minHeight: 550,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'app', 'credit', 'IUST.png'),
    title: 'آزمایشگاه الکترونیک',
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'app', 'launcher.html'));
  mainWindow.setMenuBarVisibility(false);
  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('open-lab', (event, filename) => {
  let labWin = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    title: filename,
    show: false
  });
  labWin.loadFile(path.join(__dirname, 'app', filename));
  labWin.setMenuBarVisibility(false);
  labWin.once('ready-to-show', () => labWin.show());
});