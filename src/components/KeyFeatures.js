import React from 'react';
import { Box, Container, Grid, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
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
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: '20px',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #ff6b6b, #ff8e53)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '40px',
    color: '#ffffff'
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: '30px',
    }
  }
}));

const KeyFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <SecurityIcon />,
      title: 'Safe & Hygienic',
      description: 'All our services follow strict hygiene protocols and safety measures.'
    },
    {
      icon: <SpaIcon />,
      title: 'Expert Care',
      description: 'Our certified professionals ensure the highest quality of service.'
    },
    {
      icon: <StarIcon />,
      title: 'Premium Experience',
      description: 'Luxury treatments using top-quality products and techniques.'
    },
    {
      icon: <LocalOfferIcon />,
      title: 'Best Value',
      description: 'Competitive prices for premium beauty and wellness services.'
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      px: { xs: 2, sm: 3, md: 4 },
      background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6, md: 8 }
        }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"}
            sx={{ 
              fontWeight: 700,
              mb: { xs: 1, sm: 2 },
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              }
            }}
          >
            Key Features
          </Typography>
          <Typography 
            variant={isMobile ? "body1" : "h6"}
            color="text.secondary"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: {
                xs: '1rem',
                sm: '1.25rem'
              }
            }}
          >
            What makes our services stand out from the rest
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  component="h3"
                  className="feature-title"
                  sx={{ 
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    fontSize: {
                      xs: '1.1rem',
                      sm: '1.25rem',
                      md: '1.5rem'
                    }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem'
                    },
                    lineHeight: 1.6
                  }}
                >
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