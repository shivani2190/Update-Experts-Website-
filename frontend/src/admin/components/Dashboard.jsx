import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Select, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningIcon from '@mui/icons-material/Warning';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Analytics from './Analytics';
import SPPerformance from './SPPerformance';

const StatsCard = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(3),
  color: '#fff',
  backgroundColor: color,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 8,
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

const CardIcon = styled(Box)(({ theme }) => ({
  width: '3.5em',
  height: '3.5em',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& svg': {
    width: '1.8em',
    height: '1.8em',
    color: '#fff',
  },
}));

const FilterSelect = styled(Select)(({ theme }) => ({
  width: 150,
  backgroundColor: 'white',
  fontSize: 14,
  '& .MuiSelect-select': {
    padding: '8px 12px',
  },
}));

const Dashboard = () => {
  const date = new Date();
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [selectedYear, setSelectedYear] = useState(date.getFullYear().toString());
  const [selectedMonth, setSelectedMonth] = useState(
    date.toLocaleString('default', { month: 'short' })
  );

  const [stats, setStats] = useState({
    todayJobs: 0,
    closedJobs: 0,
    canceledJobs: 0,
    escalationJobs: 0,
    totalRevenue: 0,
    totalOutstanding: 0,
    avgTicketSize: 0,
    totalJobs: 0,
  });

  const statsCards = [
    {
      label: 'Total Revenue',
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      color: '#2ecc71',
      icon: <AttachMoneyIcon />,
    },
    {
      label: 'Total Jobs',
      value: stats.totalJobs,
      color: '#3498db',
      icon: <WorkIcon />,
    },
    {
      label: 'Closed Jobs',
      value: stats.closedJobs,
      color: '#9b59b6',
      icon: <CheckCircleIcon />,
    },
    {
      label: 'Canceled Jobs',
      value: stats.canceledJobs,
      color: '#e67e22',
      icon: <CancelIcon />,
    },
    {
      label: 'Escalations',
      value: stats.escalationJobs,
      color: '#e74c3c',
      icon: <WarningIcon />,
    },
    {
      label: 'Outstanding',
      value: `₹${stats.totalOutstanding.toLocaleString()}`,
      color: '#f1c40f',
      icon: <ReceiptIcon />,
    },
    {
      label: 'Avg Ticket Size',
      value: `₹${stats.avgTicketSize.toLocaleString()}`,
      color: '#34495e',
      icon: <TrendingUpIcon />,
    },
  ];

  // Fetch data effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Implement your data fetching logic here
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        // setStats(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, [selectedCategory, selectedYear, selectedMonth]);

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, color: '#474747' }}>
          Welcome back, Admin!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your business today.
        </Typography>
      </Box>

      {/* Stats Section */}
      <Paper sx={{ mb: 4, p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TrendingUpIcon /> Statistics
          </Typography>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
            <FilterSelect
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              size="small"
            >
              <MenuItem value="All Category">All Category</MenuItem>
              <MenuItem value="Beauty">Beauty</MenuItem>
              <MenuItem value="Wellness">Wellness</MenuItem>
            </FilterSelect>
            <FilterSelect
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              size="small"
            >
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </FilterSelect>
            <FilterSelect
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              size="small"
            >
              {[2023, 2024, 2025].map((year) => (
                <MenuItem key={year} value={year.toString()}>
                  {year}
                </MenuItem>
              ))}
            </FilterSelect>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {statsCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StatsCard color={card.color}>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                    {card.label}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {card.value}
                  </Typography>
                </Box>
                <CardIcon>
                  {card.icon}
                </CardIcon>
              </StatsCard>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Analytics Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Analytics />
        </Grid>
      </Grid>

      {/* SP Performance Section */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SPPerformance />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
