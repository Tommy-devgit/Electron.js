import { app, BrowserWindow } from "electron"
import path from "path"
import { ipcMainHandle, isDev } from "./utils.js";
import pollResources, { getStaticData } from "./resourceManager.js";
import { getPreloadPath } from "./pathResolver.js";

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
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
    }

    pollResources(mainWindow);

    ipcMainHandle("getStaticData", () => {
        return getStaticData();
    })

})