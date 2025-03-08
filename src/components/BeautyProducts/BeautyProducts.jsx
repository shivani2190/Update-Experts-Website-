import React, { useState } from 'react';
import { Box, Typography, Button, Rating, styled } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProductDetails from '../ProductDetails/ProductDetails';

const ScrollContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  padding: '10px 0',
  marginBottom: '16px',
  '&::-webkit-scrollbar': {
    display: 'none'  // Hide scrollbar for Chrome, Safari, and newer Edge
  },
  '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
  'scrollbar-width': 'none',  // Hide scrollbar for Firefox
  scrollBehavior: 'smooth',
  '-webkit-overflow-scrolling': 'touch',
});

const CarouselCard = styled(Box)({
  flex: '0 0 auto',
  width: '280px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  padding: '8px',
  backgroundColor: '#FFF5F5',
  borderRadius: '12px',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const CarouselImage = styled('img')({
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: '8px',
});

const CarouselTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#333',
  textAlign: 'center',
  marginBottom: '4px',
});

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '4px 16px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  fontSize: '0.75rem',
  minWidth: '60px',
  height: '24px',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#333',
    opacity: 0.9,
    boxShadow: 'none',
  }
}));

const products = [
  {
    id: 1,
    title: 'L\'Oreal Hair Serum',
    description: 'Advanced hair repair serum with keratin',
    image: '/assets/products/face-serum.jpg',
    price: '₹499',
    originalPrice: '₹999',
    rating: 4.8,
    reviews: 245,
    discount: '50% Off',
    brand: 'L\'Oreal'
  },
  {
    id: 2,
    title: 'Maybelline Fit Me Foundation',
    description: 'Matte + Poreless foundation for all skin types',
    image: '/assets/products/hair-care.jpg',
    price: '₹399',
    originalPrice: '₹799',
    rating: 4.7,
    reviews: 189,
    discount: '50% Off',
    brand: 'Maybelline'
  },
  {
    id: 3,
    title: 'Lakme Lip Color',
    description: 'Long-lasting matte lipstick',
    image: '/assets/products/body-lotion.jpg',
    price: '₹299',
    originalPrice: '₹599',
    rating: 4.6,
    reviews: 156,
    discount: '50% Off',
    brand: 'Lakme'
  },
  {
    id: 4,
    title: 'Nivea Face Cream',
    description: 'Moisturizing cream for soft & smooth skin',
    image: '/assets/products/face-cream.jpg',
    price: '₹199',
    originalPrice: '₹399',
    rating: 4.5,
    reviews: 134,
    discount: '50% Off',
    brand: 'Nivea'
  }
];

const BeautyProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ 
      py: { xs: 2, md: 4 }, 
      px: { xs: 2, md: 4 },
      backgroundColor: '#fff'
    }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#000',
          fontSize: '1rem'
        }}
      >
        Beauty Products
      </Typography>

      <ScrollContainer>
        {products.map((product) => (
          <CarouselCard 
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <Box sx={{ position: 'relative', width: '100%' }}>
              <CarouselImage src={product.image} alt={product.title} />
              {product.discount && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '50px',
                    fontSize: '0.625rem',
                    fontWeight: 600
                  }}
                >
                  {product.discount}
                </Box>
              )}
            </Box>
            <CarouselTitle>{product.title}</CarouselTitle>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#000'
                }}
              >
                {product.price}
              </Typography>
              <Typography
                sx={{
                  color: '#666',
                  fontSize: '0.75rem',
                  textDecoration: 'line-through'
                }}
              >
                {product.originalPrice}
              </Typography>
            </Box>
            <AddButton>ADD</AddButton>
          </CarouselCard>
        ))}
      </ScrollContainer>

      <ProductDetails 
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={handleCloseDetails}
      />
    </Box>
  );
};

export default BeautyProducts;
