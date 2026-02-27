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

interface Window {
    electron: {
        subscribeStatistics: (callback: (staStatistics: Statistics) => void) => void;
        getStaticData: () => Promise<StaticData>;
    };
}
