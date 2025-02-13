import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, styled } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 77, 141, 0.1)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'visible',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 77, 141, 0.15)',
    '& .icon-wrapper': {
      transform: 'scale(1.1) rotate(5deg)',
      background: 'linear-gradient(135deg, #FF4D8D 0%, #FF8DAF 100%)',
      color: '#ffffff',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: 'rgba(255, 77, 141, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  transition: 'all 0.3s ease-in-out',
  color: '#FF4D8D',
  position: 'absolute',
  top: '-40px',
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0 10px 20px rgba(255, 77, 141, 0.1)',
  '& svg': {
    fontSize: '40px',
  }
}));

const features = [
  {
    icon: <LocalShippingOutlinedIcon />,
    title: 'Free Home Delivery',
    description: 'Enjoy complimentary shipping on all orders above ₹999. Your beauty essentials delivered to your doorstep.',
  },
  {
    icon: <VerifiedOutlinedIcon />,
    title: '100% Authentic Products',
    description: 'We guarantee the authenticity of all our products. Shop with confidence from authorized brands.',
  },
  {
    icon: <SpaOutlinedIcon />,
    title: 'Natural Ingredients',
    description: 'Our products are crafted with premium natural ingredients, ensuring gentle care for your skin and hair.',
  },
  {
    icon: <DiamondOutlinedIcon />,
    title: 'Premium Quality',
    description: 'Experience luxury beauty with our carefully curated selection of premium quality products.',
  },
];

const BeautyFeatures = () => {
  return (
    <Box 
      sx={{ 
        py: 12,
        background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE4ED 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/pattern-bg.png")',
          opacity: 0.05,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
          <Typography
            variant="overline"
            sx={{
              color: '#FF4D8D',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '4px',
              display: 'block',
              mb: 2
            }}
          >
            EXPERIENCE LUXURY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#2C3E50',
              position: 'relative',
              display: 'inline-block',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '4px solid #FF4D8D',
                borderRadius: '50%',
                top: '-20px',
                left: '-30px',
                opacity: 0.2
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(to right, #FF4D8D, #FF8DAF)',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px'
              }
            }}
          >
            Elevate Your Beauty Journey
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: 3,
              color: '#666',
              fontWeight: 400,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Discover premium services tailored just for you
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <CardContent sx={{ pt: 7, pb: 4, px: 3, textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: '#2C3E50',
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BeautyFeatures;
