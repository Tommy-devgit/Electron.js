import osUtils from 'os-utils';

const POLLING_INTERVAL = 500;

export default function pollResources() {
  setInterval(async () => {
    const cpuUsage = await getCpuUsage();
    const ramUsage = getRamUsage();

    console.log({ cpuUsage, ramUsage });
  }, POLLING_INTERVAL);
}

function getCpuUsage() {
    return new Promise(resolve => {
      osUtils.cpuUsage(resolve);  
    });
}

function getRamUsage() {
     return 1 - osUtils.freememPercentage();
}