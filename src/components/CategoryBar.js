import React from 'react';
import { Box, Typography, Grid, styled, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 50,
  height: 50,
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: theme.spacing(0.5),
  backgroundColor: '#FFF1F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('md')]: {
    maxWidth: 120,
    height: 120,
    borderRadius: '24px',
    marginBottom: theme.spacing(2),
    boxShadow: '0 8px 20px rgba(255, 77, 141, 0.1)',
    '&:hover': {
      boxShadow: '0 12px 28px rgba(255, 77, 141, 0.2)',
    }
  }
}));

const categories = [
  {
    id: 1,
    title: 'Salon At Home',
    image: '/images/categories/salon-at-home.jpg',
    link: '/services/salon'
  },
  {
    id: 2,
    title: 'Spa At Home',
    image: '/images/categories/spa-at-home.jpg',
    link: '/services/spa'
  },
  {
    id: 3,
    title: 'Mehendi At Home',
    image: '/images/mehendi.jpg',
    link: '/services/mehendi'
  },
  {
    id: 4,
    title: 'MakeUp At Home',
    image: '/images/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  }
];

const CategoryBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      py: { xs: 2, sm: 3, md: 6 },
      px: { xs: 2, sm: 3, md: 8 },
      backgroundColor: '#fff'
    }}>
      <Typography
        variant={isMobile ? "subtitle1" : "h4"}
        sx={{
          fontWeight: { xs: 500, md: 600 },
          mb: { xs: 2, md: 4 },
          color: '#2C3E50',
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' },
          textAlign: { xs: 'left', md: 'center' },
          position: 'relative',
          display: { xs: 'block', md: 'inline-block' },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: { md: '60px' },
            height: '3px',
            background: 'linear-gradient(to right, #FF4D8D, #FF8DAF)',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            display: { xs: 'none', md: 'block' }
          }
        }}
      >
        What are you looking for?
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mt: { md: 4 } }}>
        {categories.map((category) => (
          <Grid item xs={3} key={category.id}>
            <CategoryItem component={Link} to={category.link}>
              <ImageContainer>
                <Box
                  component="img"
                  src={category.image}
                  alt={category.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </ImageContainer>
              <Typography
                variant={isMobile ? "caption" : "h6"}
                align="center"
                sx={{
                  fontWeight: { xs: 400, md: 500 },
                  color: '#2C3E50',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.1rem' },
                  lineHeight: { xs: 1.2, md: 1.4 },
                  mt: { xs: 0.5, md: 1 }
                }}
              >
                {category.title}
              </Typography>
            </CategoryItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryBar;
