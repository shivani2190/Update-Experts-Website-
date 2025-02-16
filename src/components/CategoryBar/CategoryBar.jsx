import React, { useRef } from 'react';
import { Box, Typography, IconButton, styled, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'transform 0.2s',
  minWidth: '100px',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: theme.spacing(0.5),
  backgroundColor: '#FFF1F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('md')]: {
    width: '80px',
    height: '80px',
    borderRadius: '16px',
    marginBottom: theme.spacing(1),
  }
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#000000',
  width: '32px',
  height: '32px',
  minWidth: '32px',
  borderRadius: '50%',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#333333',
  },
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    width: '28px',
    height: '28px',
    minWidth: '28px',
  }
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: { xs: 8, md: 16 },
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: '#000',
  padding: theme.spacing(0.5, 1),
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 3,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

const categories = [
  {
    id: 1,
    title: 'Salon At Home',
    image: '/assets/categories/salon-at-home.jpg',
    link: '/services/salon'
  },
  {
    id: 2,
    title: 'Spa At Home',
    image: '/assets/categories/spa-at-home.jpg',
    link: '/services/spa'
  },
  {
    id: 3,
    title: 'Advance facial treatment',
    image: '/assets/categories/salon-at-home.jpg',
    link: '/services/mehendi'
  },
  {
    id: 4,
    title: 'MakeUp At Home',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 5,
    title: 'Pre-bridal makeup',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 6,
    title: 'Nail Art',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 7,
    title: 'Other Services',
    image: '/assets/categories/other-services.jpg',
    link: '/services/other'
  }
];

const CategoryBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <Box sx={{ 
      py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 2, md: 4 },
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <Typography
        variant={isMobile ? "subtitle1" : "h4"}
        component="h2"
        sx={{
          fontWeight: { xs: 500, md: 600 },
          mb: { xs: 2, md: 3 },
          color: '#000000',
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' },
          textAlign: { xs: 'left', md: 'center' },
          display: 'block',
          width: '100%'
        }}
      >
        What are you looking for?
      </Typography>

      <Box sx={{ position: 'relative', px: { xs: 4, sm: 5 } }}>
        <ScrollButton
          onClick={() => handleScroll('left')}
          sx={{ 
            left: { xs: 0, sm: 8 },
            display: 'none'
          }}
          size="small"
        >
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
        </ScrollButton>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            gap: { xs: 0.5, md: 2 },
            px: { xs: 0.5, md: 1 },
            py: { xs: 0.5, md: 1 },
            '-webkit-overflow-scrolling': 'touch',
            position: 'relative'
          }}
        >
          {categories.map((category) => (
            <CategoryItem 
              component={Link} 
              to={category.link} 
              key={category.id}
              sx={{
                padding: { xs: theme.spacing(0.5), md: theme.spacing(1) }
              }}
            >
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
                variant="caption"
                align="center"
                sx={{
                  fontWeight: 500,
                  color: '#000000',
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  lineHeight: 1.2,
                  mt: { xs: 0.25, md: 0.5 },
                  width: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: { xs: '80px', md: '100px' }
                }}
              >
                {category.title}
              </Typography>
            </CategoryItem>
          ))}
        </Box>

        <ScrollButton
          onClick={() => handleScroll('right')}
          sx={{ 
            right: { xs: 0, sm: 8 }
          }}
          size="small"
        >
          <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
        </ScrollButton>
      </Box>
    </Box>
  );
};

export default CategoryBar;
