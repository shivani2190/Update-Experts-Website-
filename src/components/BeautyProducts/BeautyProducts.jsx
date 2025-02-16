import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Rating, styled } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '4px 16px',
  backgroundColor: '#FF4D8D',
  color: '#fff',
  border: 'none',
  fontSize: '0.75rem',
  minWidth: '60px',
  height: '24px',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#FF4D8D',
    opacity: 0.9,
    boxShadow: 'none',
  }
}));

const products = [
  {
    id: 1,
    title: 'L\'Oreal Hair Serum',
    description: 'Advanced hair repair serum with keratin',
    image: '/assets/products/hair-serum.jpg',
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
    image: '/assets/products/foundation.jpg',
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
    image: '/assets/products/lipstick.jpg',
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
          color: '#333',
          fontSize: '1rem'
        }}
      >
        Beauty Products
      </Typography>

      <Grid container spacing={1.5}>
        {products.map((product) => (
          <Grid item xs={6} sm={6} md={3} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: 'none',
                border: '1px solid #eee'
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: { xs: 100, sm: 120, md: 160 },
                    objectFit: 'cover'
                  }}
                />
                {product.discount && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: '#4CAF50',
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      fontWeight: 600
                    }}
                  >
                    {product.discount}
                  </Box>
                )}
              </Box>
              
              <CardContent sx={{ p: 1.5 }}>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="subtitle2"
                    color="secondary.main"
                    sx={{
                      fontSize: '0.75rem',
                      color: '#FF4D8D',
                      mb: 0.5
                    }}
                  >
                    {product.brand}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      lineHeight: 1.2,
                      color: '#333',
                      mb: 0.5
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#666',
                      display: 'block',
                      fontSize: '0.75rem',
                      mb: 0.5
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 0.5,
                    mb: 1
                  }}>
                    <Rating
                      value={product.rating}
                      precision={0.1}
                      size="small"
                      readOnly
                      sx={{
                        fontSize: '0.75rem',
                        color: '#FF4D8D'
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#666',
                        fontSize: '0.75rem'
                      }}
                    >
                      ({product.reviews})
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Typography 
                      component="span"
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#333',
                        mr: 0.5
                      }}
                    >
                      {product.price}
                    </Typography>
                    <Typography 
                      component="span"
                      sx={{ 
                        color: '#666',
                        fontSize: '0.75rem',
                        textDecoration: 'line-through'
                      }}
                    >
                      {product.originalPrice}
                    </Typography>
                  </Box>
                  <AddButton>
                    ADD
                  </AddButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BeautyProducts;
