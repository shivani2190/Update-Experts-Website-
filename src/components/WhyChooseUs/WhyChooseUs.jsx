import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const features = [
  {
    icon: <VerifiedUserIcon />,
    title: 'Verified Experts',
    description: 'All our experts are verified and highly skilled professionals'
  },
  {
    icon: <AccessTimeIcon />,
    title: 'On-Time Service',
    description: 'Punctual service delivery at your preferred time'
  },
  {
    icon: <ThumbUpIcon />,
    title: 'Quality Assured',
    description: 'Premium products and hygienic service guaranteed'
  },
  {
    icon: <LocalOfferIcon />,
    title: 'Best Prices',
    description: 'Competitive prices with regular offers and discounts'
  }
];

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        Why Choose Us
      </Typography>

      <Grid container spacing={1.5}>
        {features.map((feature, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: 'none',
                border: '1px solid #eee',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 1
                  }}
                >
                  <Box 
                    sx={{ 
                      color: '#FF4D8D',
                      '& svg': {
                        fontSize: { xs: '2rem', md: '2.5rem' }
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      fontWeight: 600,
                      color: '#333',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
