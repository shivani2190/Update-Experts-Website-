import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, CardMedia, styled, IconButton, useTheme, useMediaQuery, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  borderRadius: '8px',
  backgroundColor: '#fff',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  minWidth: '80px',
  height: '32px',
  borderRadius: '16px',
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '60px',
    height: '28px',
    fontSize: '0.8rem',
  },
}));

const services = [
  {
    title: 'Pest Control',
    description: 'Professional pest control services to keep your home pest-free',
    image: '/images/services/pest-control.jpg',
    price: '₹499'
  },
  {
    title: 'Home Cleaning',
    description: 'Thorough home cleaning services for a spotless living space',
    image: '/images/services/home-cleaning.jpg',
    price: '₹399'
  },
  {
    title: 'Drivers',
    description: 'Professional drivers for your daily commute or special occasions',
    image: '/images/services/drivers.jpg',
    price: '₹599/day'
  },
  {
    title: 'AC Repairs',
    description: 'Expert AC repair and maintenance services',
    image: '/images/services/ac-repair.jpg',
    price: '₹299'
  },
];

const OtherServices = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAddService = (service) => {
    // TODO: Implement add to cart functionality
    console.log('Adding service:', service);
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 }, backgroundColor: '#f5f5f5', position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          align="left"
          gutterBottom 
          sx={{ 
            mb: { xs: 3, sm: 4 },
            fontWeight: 600,
            color: '#333'
          }}
        >
          Our Additional Services
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ position: 'relative' }}>
                <ServiceCard>
                  <Box sx={{ display: 'flex', p: 2, alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        width: '80px',
                        height: '80px',
                        borderRadius: '8px',
                        marginRight: 2
                      }}
                      image={service.image}
                      alt={service.title}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        component="h2"
                        sx={{ 
                          fontWeight: 600,
                          mb: 0.5,
                          color: '#333'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {service.description}
                      </Typography>
                      <Typography 
                        variant="subtitle1"
                        sx={{ 
                          color: theme.palette.primary.main,
                          fontWeight: 600
                        }}
                      >
                        {service.price}
                      </Typography>
                    </Box>
                    <AddButton
                      variant="contained"
                      onClick={() => handleAddService(service)}
                    >
                      ADD
                    </AddButton>
                  </Box>
                </ServiceCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OtherServices;
