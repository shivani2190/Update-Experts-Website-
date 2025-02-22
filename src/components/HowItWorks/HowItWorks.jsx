import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme, useMediaQuery, Container, styled } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentsIcon from '@mui/icons-material/Payments';

const StepCard = styled(Card)(({ theme }) => ({
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
      py: { xs: 4, sm: 6, md: 8 },
      backgroundColor: '#fff'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 700,
              color: '#000000',
              mb: 1,
              textAlign: 'center'
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Get started with our services in just a few simple steps
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
            spacing={2}
          >
            {steps.map((step, index) => (
              <Grid item xs={8} sm={6} md={3} key={index}>
                <StepCard>
                  <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <IconWrapper className="icon-wrapper">
                        {step.icon}
                      </IconWrapper>
                      <Typography 
                        variant="h6"
                        sx={{ 
                          fontWeight: 600,
                          color: '#000000',
                          mb: 1,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: '#666666',
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                          lineHeight: 1.5
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </StepCard>
              </Grid>
            ))}
          </Grid>
        </ScrollContainer>
      </Container>
    </Box>
  );
};

export default HowItWorks;
