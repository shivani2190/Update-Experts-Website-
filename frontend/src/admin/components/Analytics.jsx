import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

const Analytics = ({ data = [] }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: { size: 14 }
        }
      },
      title: {
        display: true,
        text: 'Business Analytics',
        font: { size: 24 },
        padding: 20
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 14 }
        },
        grid: {
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: { size: 14 }
        }
      }
    }
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1000, 1150, 700, 1020, 900, 1200],
        borderColor: '#2ecc71',
        backgroundColor: '#2ecc71',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 8,
      },
      {
        label: 'Jobs',
        data: [40, 50, 35, 45, 38, 52],
        borderColor: '#3498db',
        backgroundColor: '#3498db',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 8,
      }
    ]
  };

  return (
    <Paper sx={{ p: 3, height: '400px' }}>
      <Line options={options} data={chartData} />
    </Paper>
  );
};

export default Analytics;
