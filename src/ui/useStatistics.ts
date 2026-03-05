import { useEffect, useState } from "react";

export function useStatistics(dataPointCount: number): Statistics[] {
    const [value, setvalue] = useState<Statistics[]>([]);

    useEffect(() => {
    if (!window.electron?.subscribeStatistics) {
      return;
    }

    const unsub = window.electron.subscribeStatistics((stats) => 
        setvalue((prev) => {
            const newData = [...prev, stats];

            if (newData.length > dataPointCount) {
                newData.shift();
            }


            return newData;
        })    
    );
    return unsub;
  }, [dataPointCount]);

  return value;
}
