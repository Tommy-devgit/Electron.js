type Statistics = {
     cpuUsage: number;
      ramUsage: number;
      storageUsage: number;
};

type StaticData = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
}

type EventPayloadMapping = {
    statistics: Statistics;
    getStaticData: StaticData;
}

type UnsubscribeFunction = () => void;

interface Window {
    electron: {
        subscribeStatistics: (
            callback: (staStatistics: Statistics) => void) => UnsubscribeFunction;
        getStaticData: () => Promise<StaticData>;
    };
}
