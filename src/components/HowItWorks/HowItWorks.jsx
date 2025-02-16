import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentsIcon from '@mui/icons-material/Payments';

const steps = [
  {
    icon: <CalendarMonthIcon />,
    title: 'Book Service',
    description: 'Choose your service and select your preferred time slot'
  },
  {
    icon: <PersonIcon />,
    title: 'Expert Assignment',
    description: 'We will assign the best expert for your service'
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Service Delivered',
    description: 'Get your service delivered at your doorstep'
  },
  {
    icon: <PaymentsIcon />,
    title: 'Easy Payment',
    description: 'Pay after the service with multiple payment options'
  }
];

const HowItWorks = () => {
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
        How It Works
      </Typography>

      <Grid container spacing={1.5}>
        {steps.map((step, index) => (
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
                    {step.icon}
                  </Box>
                  <Typography 
                    variant="subtitle2"
                    sx={{ 
                      fontWeight: 600,
                      color: '#333',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      lineHeight: 1.3
                    }}
                  >
                    {step.description}
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

export default HowItWorks;
