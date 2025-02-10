import React from 'react';
import { Box, Container, styled, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '20px 0',
  borderBottom: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  overflow: 'hidden',
}));

const CategoryItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#333333',
  padding: '12px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  flex: '1 0 auto',
  minWidth: '120px',
  maxWidth: '150px',
  margin: '8px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '100px',
    maxWidth: '120px',
    margin: '4px',
    padding: '8px',
  },
  '&:hover': {
    color: '#000000',
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 64, 129, 0.05)',
    '& img': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      transform: 'scale(1.05)',
    },
    '& span': {
      color: '#ff4081',
    }
  },
}));

const CategoryIcon = styled('img')(({ theme }) => ({
  width: '80px',
  height: '80px',
  marginBottom: '8px',
  borderRadius: '50%',
  objectFit: 'cover',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  },
}));

const CategoryText = styled('span')(({ theme }) => ({
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center',
  transition: 'color 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

const categories = [
  { name: 'Facial', icon: '/assets/category/p1.jpg', path: '/' },
  { name: 'Manicure', icon: '/assets/category/p2.jpg', path: '/' },
  { name: 'Pedicure', icon: '/assets/category/p3.jpg', path: '/' },
  { name: 'Waxing', icon: '/assets/category/p4.jpg', path: '/' },
  { name: 'Makeup', icon: '/assets/category/p5.jpg', path: '/' },
  { name: 'Threading', icon: '/assets/category/p6.jpg', path: '/' },
  { name: 'Hair Care', icon: '/assets/category/p7.jpg', path: '/' },
  { name: 'Spa', icon: '/assets/category/p8.jpg', path: '/' },
  { name: 'Massage', icon: '/assets/category/p9.jpg', path: '/' },
  { name: 'Hair Color', icon: '/assets/category/p10.jpg', path: '/' },
  { name: 'Nail Art', icon: '/assets/category/p11.jpg', path: '/' },
  { name: 'Body Scrub', icon: '/assets/category/p12.jpg', path: '/' }
];

const CategoryBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CategoryContainer>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: { xs: '8px', sm: '16px', md: '20px' },
            flexWrap: 'wrap',
            margin: { xs: '-4px', sm: '-8px' },
            padding: { xs: '4px', sm: '8px' },
          }}
        >
          {categories.map((category) => (
            <CategoryItem key={category.name} to={category.path}>
              <CategoryIcon src={category.icon} alt={category.name} />
              <CategoryText>{category.name}</CategoryText>
            </CategoryItem>
          ))}
        </Box>
      </Container>
    </CategoryContainer>
  );
};

export default CategoryBar;
