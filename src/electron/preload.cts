import { Stats } from "fs";
import { getStaticData } from "./resourceManager";

const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatistics: (callback) => {
        electron.ipcRenderer.on('statistics',  (_: any, stats: any) => {
            callback(stats)
        });
    },
    getStaticData: () => electron.ipcRenderer.invoke('getStaticData')
} satisfies Window['electron']);