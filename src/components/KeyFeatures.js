import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, styled, useTheme, useMediaQuery } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: '#ffffff',
  borderRadius: '20px',
  border: '1px solid rgba(255, 77, 141, 0.1)',
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 77, 141, 0.1)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
      backgroundColor: theme.palette.primary.main,
      '& svg': {
        color: '#ffffff',
      },
    },
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '16px',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#FFF5F8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '40px',
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
    marginBottom: '16px',
    '& svg': {
      fontSize: '30px',
    },
  }
}));

const features = [
  {
    id: 1,
    title: 'Safety Assured',
    description: 'Rigorous safety protocols and premium hygiene standards for your complete peace of mind.',
    icon: <SecurityIcon />,
  },
  {
    id: 2,
    title: 'Expert Care',
    description: 'Highly skilled professionals delivering personalized luxury beauty experiences.',
    icon: <EmojiObjectsIcon />,
  },
  {
    id: 3,
    title: 'Premium Quality',
    description: 'Top-tier products and services that exceed industry standards for exceptional results.',
    icon: <StarIcon />,
  },
  {
    id: 4,
    title: 'Value for Money',
    description: 'Luxurious services at competitive prices, making beauty accessible to all.',
    icon: <LocalOfferIcon />,
  },
];

const KeyFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 10 }, 
      backgroundColor: '#ffffff' 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6, md: 8 } 
        }}>
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            sx={{
              fontWeight: 700,
              color: '#2C3E50',
              mb: { xs: 1, sm: 2 },
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            sx={{
              color: '#666666',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 400,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
            }}
          >
            Experience excellence in every detail of our premium beauty services
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {features.map((feature) => (
            <Grid item xs={6} sm={6} md={3} key={feature.id}>
              <FeatureCard>
                <CardContent sx={{ 
                  textAlign: 'center', 
                  p: { xs: 2, sm: 3, md: 4 }
                }}>
                  <IconWrapper className="icon-wrapper">
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    sx={{
                      fontWeight: 600,
                      mb: { xs: 1, sm: 2 },
                      color: '#2C3E50',
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
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

export default KeyFeatures;