import React, { useRef } from 'react';
import { Box, Typography, IconButton, styled, useTheme, useMediaQuery, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.3s ease',
  minWidth: '120px',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .category-image': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transform: 'scale(1.05)',
      '& img': {
        transform: 'scale(1.1)',
      }
    },
    '& .category-title': {
      color: '#000000',
    }
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100px',
    padding: theme.spacing(1),
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '90px',
  height: '90px',
  borderRadius: '20px',
  overflow: 'hidden',
  marginBottom: theme.spacing(1.5),
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid #e0e0e0',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    marginBottom: theme.spacing(1),
  }
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#ffffff',
  width: '40px',
  height: '40px',
  minWidth: '40px',
  borderRadius: '50%',
  color: '#000000',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  border: '1px solid #e0e0e0',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    width: '32px',
    height: '32px',
    minWidth: '32px',
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
    title: 'Advance Facial',
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
    title: 'Pre-bridal Makeup',
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
      py: { xs: 4, sm: 6, md: 8 },
      backgroundColor: '#fff'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 700,
              color: '#000000',
              mb: 1,
              textAlign: 'center'
            }}
          >
            What are you looking for?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4
            }}
          >
            Choose from our wide range of professional beauty services
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <ScrollButton
            onClick={() => handleScroll('left')}
            sx={{ left: { xs: -16, sm: -20 } }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, ml: 1 }} />
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
              gap: { xs: 1, sm: 2, md: 3 },
              px: { xs: 1, sm: 2 },
              py: 2,
              '-webkit-overflow-scrolling': 'touch'
            }}
          >
            {categories.map((category) => (
              <CategoryItem 
                component={Link} 
                to={category.link} 
                key={category.id}
              >
                <ImageContainer className="category-image">
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.title}
                  />
                </ImageContainer>
                <Typography
                  className="category-title"
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: '#666666',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    textAlign: 'center',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {category.title}
                </Typography>
              </CategoryItem>
            ))}
          </Box>

          <ScrollButton
            onClick={() => handleScroll('right')}
            sx={{ right: { xs: -16, sm: -20 } }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
          </ScrollButton>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryBar;
