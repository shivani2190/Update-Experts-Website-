import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Rating,
  Chip,
  styled,
  Badge,
  IconButton,
  Divider,
  Tooltip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'visible',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
    transform: 'scale(1.02)',
  },
}));

const products = [
  {
    id: 1,
    name: 'Luxury Hair Care Collection',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    category: 'Hair Care',
    description: 'Premium collection of salon-grade shampoo, conditioner, and treatment masks',
    inStock: true,
    freeShipping: true,
    bestseller: true
  },
  {
    id: 2,
    name: 'Professional Skincare Set',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    category: 'Skin Care',
    description: 'Complete skincare routine with cleanser, toner, serum, and moisturizer',
    inStock: true,
    freeShipping: true,
    bestseller: true
  },
  {
    id: 3,
    name: 'Spa Therapy Equipment',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    category: 'Equipment',
    description: 'Professional-grade massage and therapy equipment for home use',
    inStock: true,
    freeShipping: true
  },
  {
    id: 4,
    name: 'Luxury Makeup Collection',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    category: 'Makeup',
    description: 'High-end makeup collection featuring premium brushes and palettes',
    inStock: true,
    freeShipping: true,
    bestseller: true
  },
  {
    id: 5,
    name: 'Professional Nail Care Kit',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    category: 'Nail Care',
    description: 'Complete nail care kit with professional tools and premium polishes',
    inStock: true,
    freeShipping: false
  },
  {
    id: 6,
    name: 'Aromatherapy Collection',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    category: 'Wellness',
    description: 'Premium essential oils and diffuser for ultimate relaxation',
    inStock: true,
    freeShipping: true
  }
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    // You would typically also update this in your global state management
  };

  const handleToggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Premium Products
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Discover our curated collection of professional beauty and wellness products
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard>
                {product.bestseller && (
                  <Chip
                    label="Bestseller"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 1,
                      backgroundColor: '#FFD700',
                      color: '#000',
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="280"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                      {product.name}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => handleToggleFavorite(product.id)}
                      sx={{ color: favorites.includes(product.id) ? '#FF1744' : 'grey.400' }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  
                  <Chip 
                    label={product.category}
                    size="small"
                    sx={{ mb: 2, backgroundColor: '#E3F2FD', color: '#1976D2' }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                      ({product.rating})
                    </Typography>
                  </Box>

                  <Typography color="text.secondary" sx={{ mb: 3, minHeight: '60px' }}>
                    {product.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {product.inStock ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        variant="dot"
                      >
                        <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
                          <VerifiedIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          In Stock
                        </Typography>
                      </StyledBadge>
                    ) : (
                      <Typography variant="body2" color="error">Out of Stock</Typography>
                    )}
                    {product.freeShipping && (
                      <Tooltip title="Free Shipping">
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                          <LocalShippingIcon sx={{ color: '#2196F3', fontSize: 16, mr: 0.5 }} />
                          <Typography variant="body2" color="primary">Free Shipping</Typography>
                        </Box>
                      </Tooltip>
                    )}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" component="p" sx={{ fontWeight: 600 }}>
                      ${product.price}
                    </Typography>
                  </Box>

                  <AddToCartButton
                    fullWidth
                    variant="contained"
                    onClick={() => handleAddToCart(product)}
                    startIcon={<ShoppingCartIcon />}
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </AddToCartButton>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
