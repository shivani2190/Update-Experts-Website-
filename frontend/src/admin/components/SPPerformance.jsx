import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 600,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#f5f5f5',
  },
  '&:hover': {
    backgroundColor: '#eee',
  },
}));

const SPPerformance = ({ data = [] }) => {
  // Sample data - replace with actual data from API
  const spData = [
    {
      name: 'John Doe',
      totalJobs: 45,
      completedJobs: 42,
      canceledJobs: 3,
      revenue: 52000,
      rating: 4.8,
    },
    {
      name: 'Jane Smith',
      totalJobs: 38,
      completedJobs: 35,
      canceledJobs: 3,
      revenue: 45000,
      rating: 4.9,
    },
    {
      name: 'Mike Johnson',
      totalJobs: 52,
      completedJobs: 48,
      canceledJobs: 4,
      revenue: 63000,
      rating: 4.7,
    },
    {
      name: 'Sarah Williams',
      totalJobs: 41,
      completedJobs: 39,
      canceledJobs: 2,
      revenue: 49000,
      rating: 4.9,
    },
  ];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #eee' }}>
        <Typography variant="h6">Service Provider Performance</Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Total Jobs</StyledTableCell>
              <StyledTableCell align="right">Completed</StyledTableCell>
              <StyledTableCell align="right">Canceled</StyledTableCell>
              <StyledTableCell align="right">Revenue (₹)</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spData.map((row, index) => (
              <StyledTableRow key={index}>
                <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.totalJobs}</TableCell>
                <TableCell align="right">{row.completedJobs}</TableCell>
                <TableCell align="right">{row.canceledJobs}</TableCell>
                <TableCell align="right">{row.revenue.toLocaleString()}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SPPerformance;
