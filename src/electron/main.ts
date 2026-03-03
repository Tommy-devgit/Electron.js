import { app, BrowserWindow} from "electron"
import { ipcMainHandle, isDev } from "./utils.js";
import pollResources, { getStaticData } from "./resourceManager.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { createTray } from "./tray.js";
import { createMenu } from "./menu.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = string;



app.on("ready", ()=> {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        },
        frame: false,
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

   createTray(mainWindow);
   handleCloseEvents(mainWindow);
   createMenu(mainWindow);
});

function handleCloseEvents(mainWindow: BrowserWindow) {

    let willClose = false;

    mainWindow.on('close', (e) => {
        if (willClose) {
            return;
        }
        e.preventDefault();
        mainWindow.hide();
    });

    app.on('before-quit', () => {
        willClose = true;
    });

    mainWindow.on("show", () => {
        willClose = false;
    })
}