import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, styled } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  background: '#ffffff',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 77, 141, 0.1)',
  overflow: 'visible',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 77, 141, 0.1)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    }
  }
}));

const ImageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '20px 20px 0 0',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(255,77,141,0) 0%, rgba(255,77,141,0.1) 100%)',
    transition: 'all 0.3s ease'
  }
});

const ProductImage = styled(CardMedia)({
  height: 200,
  transition: 'transform 0.3s ease-in-out'
});

const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '1.25rem',
  marginTop: '8px'
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#FF4D8D',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: '#FF4D8D',
    color: '#ffffff',
  },
  '&.Mui-disabled': {
    backgroundColor: '#f5f5f5',
    color: '#bdbdbd',
  }
}));

const products = [
  {
    id: 1,
    title: 'Face Serum',
    description: 'Hydrating face serum with vitamin C',
    price: '₹1149',
    image: '/assets/products/face-serum.jpg'
  },
  {
    id: 2,
    title: 'Hair Oil',
    description: 'Natural hair growth oil',
    price: '₹899',
    image: '/assets/products/hair-oil.jpg'
  },
  {
    id: 3,
    title: 'Face Cream',
    description: 'Anti-aging moisturizing cream',
    price: '₹1299',
    image: '/assets/products/face-cream.jpg'
  },
  {
    id: 4,
    title: 'Body Lotion',
    description: 'Nourishing body lotion',
    price: '₹799',
    image: '/assets/products/body-lotion.jpg'
  },
  {
    id: 5,
    title: 'Face Mask',
    description: 'Deep cleansing clay mask',
    price: '₹499',
    image: '/assets/products/face-mask.jpg'
  }
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box sx={{ py: 8, backgroundColor: '#fff5f8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: '#2C3E50'
          }}
        >
          Beauty Products
        </Typography>
        <Grid container spacing={4}>
          {currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <ImageWrapper>
                  <ProductImage
                    image={product.image}
                    title={product.title}
                  />
                </ImageWrapper>
                <CardContent sx={{ textAlign: 'center', pt: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Price>
                    {product.price}
                  </Price>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
          <NavigationButton
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            <NavigateBeforeIcon />
          </NavigationButton>
          <NavigationButton
            onClick={handleNext}
            disabled={currentPage >= pageCount - 1}
          >
            <NavigateNextIcon />
          </NavigationButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
