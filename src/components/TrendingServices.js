import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, styled, Chip } from '@mui/material';

const ServiceCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  position: 'relative',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
}));

const ServiceImage = styled(CardMedia)({
  width: '120px',
  height: '120px',
  flexShrink: 0,
  borderRadius: '8px',
  margin: '12px',
});

const AddButton = styled(Box)({
  position: 'absolute',
  bottom: '12px',
  left: '144px', // image width + margin
  padding: '8px 24px',
  borderRadius: '20px',
  background: '#ffffff',
  color: '#FF4D8D',
  border: '2px solid #FF4D8D',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#FF4D8D',
    color: '#ffffff',
  },
});

const TrendingChip = styled(Chip)({
  position: 'absolute',
  top: '12px',
  left: '12px',
  background: 'rgba(255, 77, 141, 0.1)',
  color: '#FF4D8D',
  fontWeight: 600,
  borderRadius: '16px',
  '& .MuiChip-label': {
    padding: '0 12px',
  },
});

const DurationChip = styled(Typography)({
  position: 'absolute',
  bottom: '12px',
  right: '12px',
  color: '#666666',
  fontSize: '0.9rem',
});

const services = [
  {
    id: 1,
    title: 'Korean Glow Facial',
    description: '9 Steps Facial | Includes FREE silicone facial brush',
    price: 1149,
    duration: '1hr 15mins',
    image: '/images/services/facial.jpg',
    category: 'Advance Facials'
  },
  {
    id: 2,
    title: 'Salon At Home',
    description: 'Professional salon services at your doorstep',
    price: 999,
    duration: '1hr',
    image: '/images/services/salon-at-home.jpg',
    category: 'Salon At Home'
  },
  {
    id: 3,
    title: 'Diamond Facial',
    description: 'Luxury facial treatment with diamond dust',
    price: 1499,
    duration: '1hr 30mins',
    image: '/images/services/diamond-facial.jpg',
    category: 'Advance Facials'
  },
  {
    id: 4,
    title: 'Hair Spa Treatment',
    description: 'Deep conditioning spa for healthy hair',
    price: 899,
    duration: '45mins',
    image: '/images/services/hair-spa.jpg',
    category: 'Salon At Home'
  }
];

const TrendingServices = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#fff5f8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#2C3E50'
          }}
        >
          Trending Services
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
          <Chip
            label="Salon At Home"
            sx={{
              background: 'rgba(255, 77, 141, 0.1)',
              color: '#FF4D8D',
              fontWeight: 600,
              '&:hover': {
                background: 'rgba(255, 77, 141, 0.2)',
              }
            }}
          />
          <Chip
            label="Advance Facials"
            sx={{
              background: '#F5F5F5',
              color: '#666666',
              fontWeight: 600,
              '&:hover': {
                background: '#EEEEEE',
              }
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <ServiceCard>
                <ServiceImage
                  image={service.image}
                  title={service.title}
                />
                <CardContent sx={{ flex: 1, position: 'relative', p: 2 }}>
                  <TrendingChip label={service.category} size="small" />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, mt: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    {service.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#2C3E50',
                      '& .currency': {
                        fontSize: '0.9rem',
                        verticalAlign: 'top',
                        marginRight: '1px'
                      }
                    }}
                  >
                    <span className="currency">₹</span>{service.price}
                  </Typography>
                  <DurationChip>{service.duration}</DurationChip>
                  <AddButton>ADD</AddButton>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrendingServices;
