import { app, BrowserWindow } from "electron"
import path from "path"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// type test = string;

app.on("ready", ()=> {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
})