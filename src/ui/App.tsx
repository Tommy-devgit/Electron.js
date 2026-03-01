import { useMemo } from 'react'
import './App.css'
import { useStatistics } from './useStatistics';
import { Chart } from './Chart';

function App() {

  const statistics = useStatistics(10);
  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );


  return (
      <div className='App'>
        <div style={{ height: 120, width: '100%' }}>
          <Chart data={cpuUsages} maxDataPoints={10}/>
        </div>
      </div>
  )
}

export default App
