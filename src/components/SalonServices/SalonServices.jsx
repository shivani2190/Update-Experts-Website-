import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, styled } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CarouselContainer = styled(Box)({
  position: 'relative',
  minHeight: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #fff5f8 0%, #ffe4ed 100%)',
  overflow: 'hidden',
  padding: '40px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/assets/pattern-bg.png")',
    opacity: 0.1,
    zIndex: 0,
  }
});

const OctagonalCard = styled(Box)(({ position }) => ({
  position: 'absolute',
  width: '320px',
  height: '320px',
  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: '2px solid rgba(255, 77, 141, 0.3)',
  boxShadow: '0 10px 30px rgba(255, 77, 141, 0.2)',
  '&:hover': {
    transform: position === 'center' ? 'scale(1.05)' : 'scale(1.02)',
    boxShadow: '0 15px 40px rgba(255, 77, 141, 0.4)',
    border: '2px solid rgba(255, 77, 141, 0.6)',
    '& .card-overlay': {
      opacity: 1,
    }
  },
  ...(position === 'center' && {
    transform: 'translateX(0) scale(1.2)',
    zIndex: 3,
    boxShadow: '0 15px 40px rgba(255, 77, 141, 0.3)',
  }),
  ...(position === 'left' && {
    transform: 'translateX(-120%) scale(0.8)',
    zIndex: 2,
    opacity: 0.8,
  }),
  ...(position === 'right' && {
    transform: 'translateX(120%) scale(0.8)',
    zIndex: 2,
    opacity: 0.8,
  }),
  ...(position === 'far-left' && {
    transform: 'translateX(-220%) scale(0.6)',
    zIndex: 1,
    opacity: 0.5,
  }),
  ...(position === 'far-right' && {
    transform: 'translateX(220%) scale(0.6)',
    zIndex: 1,
    opacity: 0.5,
  }),
  ...(position === 'hidden' && {
    opacity: 0,
    visibility: 'hidden',
  }),
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.primary.main,
  padding: '16px',
  boxShadow: '0 4px 20px rgba(255, 77, 141, 0.2)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
  zIndex: 4,
  transition: 'all 0.3s ease',
}));

const CardOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  textAlign: 'center',
});

const PriceTag = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#A67F78',
  marginBottom: '15px',
  '& .currency': {
    fontSize: '1.5rem',
    verticalAlign: 'top',
    marginRight: '2px'
  }
}));

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
});

const ActionButton = styled(Box)(({ variant }) => ({
  padding: '8px 20px',
  borderRadius: '25px',
  fontWeight: 600,
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  ...(variant === 'primary' ? {
    background: '#A67F78',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(166, 127, 120, 0.3)',
    '&:hover': {
      background: '#8B6B66',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(166, 127, 120, 0.4)',
    }
  } : {
    background: '#ffffff',
    color: '#A67F78',
    border: '2px solid #A67F78',
    '&:hover': {
      background: 'rgba(166, 127, 120, 0.1)',
      transform: 'translateY(-2px)',
    }
  })
}));

const AddToCartButton = styled(Box)(({ theme }) => ({
  background: '#A67F78',
  color: '#ffffff',
  padding: '8px 24px',
  borderRadius: '25px',
  fontWeight: 600,
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  boxShadow: '0 4px 12px rgba(166, 127, 120, 0.3)',
  '&:hover': {
    background: '#8B6B66',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(166, 127, 120, 0.4)',
  }
}));

const products = [
  {
    id: 1,
    title: 'Face Serum',
    description: 'Hydrating face serum with vitamin C',
    price: 1149,
    image: '/assets/products/face-serum.jpg'
  },
  {
    id: 2,
    title: 'Hair Care Bundle',
    description: 'Complete hair care solution',
    price: 1499,
    image: '/assets/products/hair-care.jpg'
  },
  {
    id: 3,
    title: 'Luxury Makeup Kit',
    description: 'Professional makeup kit',
    price: 2999,
    image: '/assets/products/makeup-kit.jpg'
  },
  {
    id: 4,
    title: 'Natural Body Scrub',
    description: 'Exfoliating body scrub',
    price: 899,
    image: '/assets/products/body-scrub.jpg'
  },
  {
    id: 5,
    title: 'Anti-Aging Cream',
    description: 'Premium night repair cream',
    price: 1899,
    image: '/assets/products/face-cream.jpg'
  },
  {
    id: 6,
    title: 'Face Mask',
    description: 'Deep cleansing clay mask',
    price: 699,
    image: '/assets/products/face-mask.jpg'
  },
  {
    id: 7,
    title: 'Body Lotion',
    description: 'Nourishing body lotion',
    price: 999,
    image: '/assets/products/body-lotion.jpg'
  },
  {
    id: 8,
    title: 'Hair Oil',
    description: 'Natural hair growth oil',
    price: 849,
    image: '/assets/products/hair-oil.jpg'
  }
];

const SalonServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPosition = (index) => {
    const diff = (index - currentIndex + products.length) % products.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -4) return 'right';
    if (diff === -1 || diff === 4) return 'left';
    if (diff === 2 || diff === -3) return 'far-right';
    if (diff === -2 || diff === 3) return 'far-left';
    return 'hidden';
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <Box sx={{
      py: { xs: 4, sm: 6, md: 8 },
      background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE4ED 50%, #FFF5F8 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255, 77, 141, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255, 77, 141, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, sm: 4, md: 6 }, 
          position: 'relative' 
        }}>
          <Typography
            variant="overline"
            sx={{
              color: '#FF4D8D',
              fontSize: { xs: '0.9rem', sm: '1.1rem' },
              fontWeight: 600,
              letterSpacing: { xs: '2px', sm: '4px' },
              display: 'block',
              mb: { xs: 1, sm: 2 }
            }}
          >
            BUY NOW
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#2C3E50',
              position: 'relative',
              display: 'inline-block',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: { xs: '60px', sm: '80px' },
                height: '3px',
                background: 'linear-gradient(to right, #FF4D8D, #FF8DAF)',
                bottom: { xs: '-10px', sm: '-15px' },
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px'
              }
            }}
          >
            Beauty Products
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: { xs: 2, sm: 3 },
              color: '#666',
              fontWeight: 400,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
            }}
          >
            Buy best beauty products at your doorstep
          </Typography>
        </Box>
        <CarouselContainer>
          <NavigationButton
            onClick={handlePrevious}
            sx={{ left: '10%' }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 32 }} />
          </NavigationButton>

          {products.map((product, index) => (
            <OctagonalCard
              key={product.id}
              position={getPosition(index)}
              sx={{
                backgroundImage: `url(${product.image})`,
              }}
            >
              <CardOverlay className="card-overlay">
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: '#2C3E50',
                    fontFamily: 'Playfair Display, serif'
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: '#666666',
                    fontSize: '0.9rem'
                  }}
                >
                  {product.description}
                </Typography>
                <PriceTag>
                  <span className="currency">₹</span>
                  {product.price}
                </PriceTag>
                <ButtonGroup>
                  <ActionButton variant="primary">
                    Add to Cart
                  </ActionButton>
                  <ActionButton>
                    Buy Now
                  </ActionButton>
                </ButtonGroup>
              </CardOverlay>
            </OctagonalCard>
          ))}

          <NavigationButton
            onClick={handleNext}
            sx={{ right: '10%' }}
          >
            <NavigateNextIcon sx={{ fontSize: 32 }} />
          </NavigationButton>
        </CarouselContainer>
      </Container>
    </Box>
  );
};

export default SalonServices;
