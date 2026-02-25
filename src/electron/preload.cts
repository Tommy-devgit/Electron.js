import { getStaticData } from "./resourceManager";

const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatics: (callback: (statistics: any) => void) => {
        electron.ipcRenderer.on('statistics',  (_: any, stats: any) => {
            callback(stats)
        })
        callback({})
    },
    getStaticData: () => electron.ipcRenderer.invoke('getStaticData')
})