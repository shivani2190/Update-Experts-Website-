import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  styled,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const SearchContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '2px',
  },
}));

const TrendingChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '20px',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}));

const popularSearches = [
  'Hair Styling',
  'Makeup Artist',
  'Nail Care',
  'Spa Services',
  'Skin Treatment',
  'Wedding Makeup',
  'Hair Color',
  'Massage Therapy'
];

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.grey[50],
      py: 6,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${theme.palette.primary.light}22 0%, ${theme.palette.secondary.light}22 100%)`,
          zIndex: 0
        }}
      />
      <SearchContainer maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          What are you looking for?
        </Typography>
        
        <Paper
          elevation={3}
          sx={{
            p: 0.5,
            borderRadius: '32px',
            maxWidth: '700px',
            margin: '0 auto',
            mb: 4,
          }}
        >
          <SearchField
            fullWidth
            placeholder="Search for beauty services..."
            value={searchValue}
            onChange={handleSearchChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <TrendingUpIcon sx={{ mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="subtitle1" color="textSecondary">
              Popular Searches
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: 1
          }}>
            {popularSearches.map((search, index) => (
              <TrendingChip
                key={index}
                label={search}
                onClick={() => setSearchValue(search)}
                sx={{ 
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </SearchContainer>
    </Box>
  );
};

export default SearchSection;
