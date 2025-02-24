import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
  Divider,
  Paper,
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartItemCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)',
  },
}));

const QuantityButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid #FF6B6B',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: '#FFE0E0',
  },
}));

const Cart = () => {
  // This would typically come from your global state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Professional Hair Care Kit',
      price: 79.99,
      quantity: 1,
      image: '/assets/haircare.jpg',
      category: 'Hair Care',
    },
    {
      id: 2,
      name: 'Luxury Face Serum',
      price: 59.99,
      quantity: 2,
      image: '/assets/serum.jpg',
      category: 'Skincare',
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <ShoppingCartIcon sx={{ fontSize: 60, color: '#FF6B6B', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add some products to your cart and they will show up here
          </Typography>
        </Box>
        <ActionButton href="/services">
          Continue Shopping
        </ActionButton>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ 
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <CartItemCard key={item.id}>
              <CardMedia
                component="img"
                sx={{ width: 140 }}
                image={item.image}
                alt={item.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Category: {item.category}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ${item.price}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <QuantityButton
                      size="small"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <RemoveIcon />
                    </QuantityButton>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      {item.quantity}
                    </Typography>
                    <QuantityButton
                      size="small"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <AddIcon />
                    </QuantityButton>
                    <IconButton
                      sx={{ ml: 2 }}
                      onClick={() => removeItem(item.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </CartItemCard>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">${calculateSubtotal().toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">Tax (10%)</Typography>
                <Typography variant="body1">${calculateTax().toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" color="primary">
                  ${calculateTotal().toFixed(2)}
                </Typography>
              </Box>
              <ActionButton fullWidth>
                Proceed to Checkout
              </ActionButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
