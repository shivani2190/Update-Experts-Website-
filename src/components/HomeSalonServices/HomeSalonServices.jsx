import React from 'react';
import { Box, Container, Typography, Grid, styled } from '@mui/material';

const ScrollContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  padding: '10px 0',
  '&::-webkit-scrollbar': {
    display: 'none'  // Hide scrollbar for Chrome, Safari, and newer Edge
  },
  '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
  'scrollbar-width': 'none',  // Hide scrollbar for Firefox
  scrollBehavior: 'smooth',
  '-webkit-overflow-scrolling': 'touch',
});

const ServiceCard = styled(Box)({
  flex: '0 0 auto',
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  padding: '8px',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const ServiceImage = styled('img')({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: '8px',
});

const ServiceTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#333',
  textAlign: 'center',
});

const services = [
  {
    id: 1,
    name: 'Waxing',
    image: '/assets/category/p12.jpg',
  },
  {
    id: 2,
    name: 'Facial',
    image: '/assets/category/p11.jpg',
  },
  {
    id: 3,
    name: 'Body Polishing',
    image: '/assets/category/p10.jpg',
  },
  {
    id: 4,
    name: 'De-Tan / Bleach',
    image: '/assets/category/p9.jpg',
  },
  {
    id: 5,
    name: 'Hair Care',
    image: '/assets/category/p8.jpg',
  },
  {
    id: 6,
    name: 'Manicure',
    image: '/assets/category/p7.jpg',
  },
  {
    id: 7,
    name: 'Pedicure',
    image: '/assets/category/p6.jpg',
  },
  {
    id: 8,
    name: 'Threading',
    image: '/assets/category/p5.jpg',
  },
  {
    id: 9,
    name: 'Hair Cut',
    image: '/assets/category/p4.jpg',
  },
  {
    id: 10,
    name: 'Hair Color',
    image: '/assets/category/p3.jpg',
  },
  {
    id: 11,
    name: 'Makeup',
    image: '/assets/category/p2.jpg',
  },
  {
    id: 12,
    name: 'Massage',
    image: '/assets/category/p1.jpg',
  }
];

const HomeSalonServices = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            color: '#333',
          }}
        >
          Home Salon for Women
        </Typography>
        <ScrollContainer>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage src={service.image} alt={service.name} />
              <ServiceTitle>{service.name}</ServiceTitle>
            </ServiceCard>
          ))}
        </ScrollContainer>
      </Container>
    </Box>
  );
};

export default HomeSalonServices;
