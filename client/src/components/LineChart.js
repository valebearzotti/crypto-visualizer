import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function LineChart({dataset, every, coin}) {

  const highest = dataset.map(e => e.highest).reverse();
  const lowest = dataset.map(e => e.lowest).reverse();

  const labels = dataset.map((e,i) => i%every===0 ? e.time : null).reverse();
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${coin}/USD`,
      },
      tooltip: {
        padding: 10,
      }
    },
    scales: {
      x: {
        labels: labels,
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          autoSkipPadding: 40,
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Highest price',
        data: highest,
        borderColor: '#60efff',
        backgroundColor: '#00ff87',
        tension: 0.1,
        spanGaps: true
      },
      {
        label: 'Lowest price',
        data: lowest,
        borderColor: '#ff0f7b',
        backgroundColor: '#f89b29',
        tension: 0.1,
        spanGaps: true
      }
    ]
  }
  
  return (
    <Container>
      <Line options={options} data={data}></Line>
    </Container>
  )
}

const Container = styled.div`
  width: 1200px;
  height: auto;
`

export default LineChart;
