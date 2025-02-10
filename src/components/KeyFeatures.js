import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpaIcon from '@mui/icons-material/Spa';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: '#FFFFFF',
  borderRadius: '25px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.4s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
    },
    '& .feature-title': {
      color: '#000000',
    }
  }
}));

const IconWrapper = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #ff6b6b, #ff8e53)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '40px',
    color: '#ffffff'
  }
});

const KeyFeatures = () => {
  const features = [
    {
      icon: <SecurityIcon />,
      title: 'Safety Assured',
      description: 'Rigorous safety protocols and premium hygiene standards for your complete peace of mind.',
    },
    {
      icon: <SpaIcon />,
      title: 'Expert Care',
      description: 'Highly skilled professionals delivering personalized luxury beauty experiences.',
    },
    {
      icon: <StarIcon />,
      title: 'Premium Quality',
      description: 'Top-tier products and services that exceed industry standards for exceptional results.',
    },
    {
      icon: <LocalOfferIcon />,
      title: 'Value for Money',
      description: 'Luxurious services at competitive prices, making beauty accessible to all.',
    },
  ];

  return (
    <Box sx={{ 
      py: 10,
      background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              color: '#000000',
              mb: 2
            }}
          >
            Why Choose Us
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Experience excellence in every detail of our premium beauty services
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <Typography 
                  variant="h5" 
                  className="feature-title"
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default KeyFeatures;