import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, styled, useTheme, useMediaQuery } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  maxWidth: '280px',
  margin: '0 auto',
  background: '#ffffff',
  borderRadius: '16px',
  border: '1px solid #e0e0e0',
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
      backgroundColor: '#000000',
      '& svg': {
        color: '#ffffff',
      },
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '28px',
    color: '#000000',
    transition: 'all 0.3s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
    '& svg': {
      fontSize: '24px',
    },
  }
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'  // Hide scrollbar for Chrome, Safari, and newer Edge
  },
  '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
  'scrollbar-width': 'none',  // Hide scrollbar for Firefox
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

const WhyChooseUs = () => {
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
              color: '#000000',
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
        <ScrollContainer>
          <Grid 
            container 
            sx={{ 
              flexWrap: 'nowrap',
              minWidth: { xs: 'max-content', md: '100%' },
              pb: 1
            }}  
            spacing={{ xs: 2, sm: 2, md: 3 }}
          >
            {features.map((feature) => (
              <Grid item xs={8} sm={6} md={3} key={feature.id}>
                <FeatureCard>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    p: { xs: 2, sm: 2.5 }
                  }}>
                    <IconWrapper className="icon-wrapper">
                      {feature.icon}
                    </IconWrapper>
                    <Typography
                      variant={isMobile ? 'h6' : 'h5'}
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: '#000000',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.5,
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' }
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </ScrollContainer>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
