const { BrowserWindow, app } = require("electron");
require("./xsensDotServer.js");

let mainWindow = null;

function main() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 650,
  });
  mainWindow.loadURL("http://localhost:8080/");
  mainWindow.on("close", (event) => {
    mainWindow = null;
  });
}

app.on("ready", main);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
