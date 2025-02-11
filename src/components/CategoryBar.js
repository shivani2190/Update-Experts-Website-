import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '20px 0',
  borderBottom: '1px solid #e0e0e0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
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
  '&:hover': {
    color: '#000000',
    transform: 'translateY(-5px)',
    '& img': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
    '& span': {
      color: '#ff4081',
    }
  },
}));

const CategoryIcon = styled('img')({
  width: '80px',
  height: '80px',
  marginBottom: '8px',
  borderRadius: '50%',
  objectFit: 'cover',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
});

const CategoryText = styled('span')({
  fontSize: '15px',
  fontWeight: '600',
  textAlign: 'center',
  transition: 'color 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

const categories = [
  { name: 'Facial', icon: '/assets/category/p1.jpg', path: '/' },
  { name: 'Manicure', icon: '/assets/category/p2.jpg', path: '/' },
  { name: 'Pedicure', icon: '/assets/category/p3.jpg', path: '/' },
  { name: 'Waxing', icon: '/assets/category/p4.jpg', path: '/' },
  { name: 'Makeup', icon: '/assets/category/p5.jpg', path: '/' },
  { name: 'Threading', icon: '/assets/category/p6.jpg', path: '/' },
  { name: 'Hair Care', icon: '/assets/category/p7.jpg', path: '/' },
  { name: 'Spa', icon: '/assets/category/p8.jpg', path: '/' },
  { name: 'Massage', icon: '/assets/category/p9.jpg', path: '/' }
];

const CategoryBar = () => {
  return (
    <CategoryContainer>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(3, 1fr)', // 3 items per row on mobile
              sm: 'repeat(5, 1fr)', // 5 items per row on tablet
              md: 'repeat(7, 1fr)', // 7 items per row on laptop
              lg: 'repeat(9, 1fr)', // 9 items per row on desktop
            },
            gap: { xs: 1, sm: 2, md: 3 },
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden'
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
