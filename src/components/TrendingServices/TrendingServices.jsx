import React from 'react';
import { Box, Container, Typography, Grid, styled, Chip } from '@mui/material';

const ServiceCard = styled(Box)({
  display: 'flex',
  width: '100%',
  minWidth: '300px',
  maxWidth: '380px',
  height: '120px',
  marginRight: '16px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  '@media (max-width: 600px)': {
    minWidth: '280px',
    maxWidth: '320px',
  }
});

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '120px',
  height: '120px',
  '&:hover .add-button': {
    background: '#FF4D8D',
    color: '#ffffff',
  }
});

const ServiceImage = styled('img')({
  width: '120px',
  height: '120px',
  objectFit: 'cover',
});

const AddButton = styled(Box)({
  position: 'absolute',
  bottom: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '4px 16px',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#FF4D8D',
  border: '1px solid #FF4D8D',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  zIndex: 1,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const ServiceContent = styled(Box)({
  flex: 1,
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: 0, // This helps with text truncation
});

const ServiceTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: '4px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ServiceDescription = styled(Typography)({
  color: '#666',
  fontSize: '0.85rem',
  marginBottom: '8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const PriceContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: 'auto',
});

const Duration = styled(Typography)({
  color: '#666',
  fontSize: '0.85rem',
  marginLeft: 'auto',
});

const services = [
  {
    id: 1,
    title: 'Korean Glow Facial',
    description: '9 Steps Facial | Includes FREE silicone facial brush',
    price: 1149,
    duration: '1hr 15mins',
    image: '/assets/category/p1.jpg',
    category: 'Advance Facials'
  },
  {
    id: 2,
    title: 'Salon At Home',
    description: 'Professional salon services at your doorstep',
    price: 999,
    duration: '1hr',
    image: '/assets/category/p2.jpg',
    category: 'Salon At Home'
  },
  {
    id: 3,
    title: 'Diamond Facial',
    description: 'Luxury facial treatment with diamond dust',
    price: 1499,
    duration: '1hr 30mins',
    image: '/assets/category/p3.jpg',
    category: 'Advance Facials'
  },
  {
    id: 4,
    title: 'Hair Spa Treatment',
    description: 'Deep conditioning spa for healthy hair',
    price: 899,
    duration: '45mins',
    image: '/assets/category/p4.jpg',
    category: 'Salon At Home'
  }
];

const TrendingServices = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: '#000000'
          }}
        >
          Trending Services
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Chip
            label="Salon At Home"
            sx={{
              background: 'rgba(255, 77, 141, 0.1)',
              color: '#FF4D8D',
              fontWeight: 500,
              borderRadius: '20px',
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
              fontWeight: 500,
              borderRadius: '20px',
              '&:hover': {
                background: '#EEEEEE',
              }
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            pb: 1,
            '::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ImageContainer>
                <ServiceImage
                  src={service.image}
                  alt={service.title}
                />
                <AddButton className="add-button">ADD</AddButton>
              </ImageContainer>
              <ServiceContent>
                <Box>
                  <ServiceTitle>
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                </Box>
                <PriceContainer>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#333',
                      display: 'inline',
                    }}
                  >
                    ₹{service.price}
                  </Typography>
                  <Duration>
                    {service.duration}
                  </Duration>
                </PriceContainer>
              </ServiceContent>
            </ServiceCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingServices;
