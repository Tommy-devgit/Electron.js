import { app, BrowserWindow, Tray } from "electron"
import { ipcMainHandle, isDev } from "./utils.js";
import pollResources, { getStaticData } from "./resourceManager.js";
import { getAssetPath, getPreloadPath, getUIPath } from "./pathResolver.js";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = string;



app.on("ready", ()=> {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        }
    });

    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123");
    }
    else {
        mainWindow.loadFile(getUIPath());
    }

    pollResources(mainWindow);

    ipcMainHandle("getStaticData", () => {
        return getStaticData();
    });

    new Tray(path.join(getAssetPath(), 'trayIcon.png'));

});