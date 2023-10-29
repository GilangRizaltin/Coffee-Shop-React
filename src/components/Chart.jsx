import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { statisticProduct } from '../https/dashboard';

const ChartComponent = (props) => {
  const [dataStatistic, setDataStatistic] = useState(null);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const body = {
    dateStart: props.dateStart,
    dateEnd: props.dateEnd,
  }

  const formattedDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    statisticProduct()
      .then((res) => {
        // console.log(res);
        setDataStatistic(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (dataStatistic) {
      const productDate = dataStatistic.map((item) => formattedDate(item.orderdate));
      const productSold = dataStatistic.map((item) => item.totalquantity);

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      } 

      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: productDate,
          datasets: [
            {
              label: 'Product Selled',
              data: productSold,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              tension: 0.2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      chartInstanceRef.current = newChartInstance;
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }
  }, [dataStatistic]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
