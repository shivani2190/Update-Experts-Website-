import React, { useRef } from 'react';
import { Box, Typography, IconButton, styled, useTheme, useMediaQuery, Container, Link } from '@mui/material';
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
    minWidth: '85px',
    padding: theme.spacing(1),
    margin: '0 4px',
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

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#666666',
  textAlign: 'center',
  marginTop: theme.spacing(1),
  transition: 'color 0.3s ease',
  width: '100%',
  whiteSpace: 'normal',
  minHeight: '40px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    marginTop: theme.spacing(0.5),
    minHeight: '32px'
  }
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#ffffff',
  width: '32px',
  height: '32px',
  minWidth: '32px',
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
    width: '24px',
    height: '24px',
    minWidth: '24px',
  }
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 1),
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    padding: theme.spacing(1.5, 0.5),
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
    title: 'Advance Facials',
    image: '/assets/categories/salon-at-home.jpg',
    link: '/services/facials'
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

function CategoryBar() {
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile ? 200 : 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: '#fff',
      py: { xs: 1, md: 2 },
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            textAlign: 'center'
          }}
        >
          What are you looking for?
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <ScrollButton
            onClick={() => scroll('left')}
            sx={{ left: { xs: -8, md: -16 } }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          </ScrollButton>

          <ScrollContainer ref={scrollContainerRef}>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                component={Link}
                to={category.link}
              >
                <ImageContainer className="category-image">
                  <img src={category.image} alt={category.title} />
                </ImageContainer>
                <CategoryTitle className="category-title">
                  {category.title}
                </CategoryTitle>
              </CategoryItem>
            ))}
          </ScrollContainer>

          <ScrollButton
            onClick={() => scroll('right')}
            sx={{ right: { xs: -8, md: -16 } }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          </ScrollButton>
        </Box>
      </Container>
    </Box>
  );
}

export default CategoryBar;
