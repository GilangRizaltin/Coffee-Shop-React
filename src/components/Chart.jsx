import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = (props) => {
  const { dataStatistic } = props;

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const productName = dataStatistic.map(item => item.Product)
    const productSold = dataStatistic.map(item => item.Total_Quantity)
    console.log(dataStatistic)


    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: productName,
 
        datasets: [{
          label: 'Product Selled',
          data: productSold,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          tension: 0.2,
        }]
      },
      options: {
        
      }
    });
    chartInstanceRef.current = newChartInstance;
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}  width={230} height={50}/>;
};

export default ChartComponent;
