// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Dodaj preload script
      contextIsolation: true,
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
    },
  });

  // Załaduj stronę z Vite
  mainWindow.loadURL("http://localhost:5174");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});