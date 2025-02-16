import React from 'react';
import { Box, Container, Typography, Grid, styled } from '@mui/material';

const ServiceCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const ServiceImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: '12px',
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
];

const HomeSalonServices = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#fff' }}>
      <Container>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            color: '#333',
          }}
        >
          Salon Services for Women
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={6} sm={3} key={service.id}>
              <ServiceCard>
                <ServiceImage src={service.image} alt={service.name} />
                <ServiceTitle>{service.name}</ServiceTitle>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeSalonServices;
