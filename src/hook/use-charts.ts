import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';

export const useChart = (): [
  React.RefObject<HTMLDivElement>,
  echarts.EChartsType | undefined
] => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartInstance, setChartInstance] = useState<echarts.EChartsType>();
  useEffect(() => {
    const chart = echarts.init(chartRef.current as HTMLElement);
    setChartInstance(chart);
  }, []);

  return [chartRef, chartInstance];
};
