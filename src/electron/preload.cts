import { getStaticData } from "./resourceManager";

const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatics: (callback: (statistics: any) => void) => callback({}),
    getStaticData: () => console.log('static')
})