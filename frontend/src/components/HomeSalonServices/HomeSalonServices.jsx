import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, styled, CircularProgress, Alert } from '@mui/material';

const API_URL = 'http://localhost:5000/api';

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
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  padding: '16px',
  backgroundColor: '#f8f8f8',
  borderRadius: '12px',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
});

const ServiceImage = styled('img')({
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '12px',
});

const ServiceTitle = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#333',
  textAlign: 'center',
  marginBottom: '8px',
});

const ServiceDescription = styled(Typography)({
  fontSize: '0.9rem',
  color: '#666',
  textAlign: 'center',
  marginBottom: '8px',
});

const ServicePrice = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#2e7d32',
  textAlign: 'center',
});

const ServiceDuration = styled(Typography)({
  fontSize: '0.9rem',
  color: '#666',
  textAlign: 'center',
});

const HomeSalonServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/home-salon`);
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      setServices(data.filter(service => service.isActive));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching home salon services:', error);
      setError('Failed to load services. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Alert severity="error">{error}</Alert>
        </Container>
      </Box>
    );
  }

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
        {services.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#666' }}>
            No services available at the moment.
          </Typography>
        ) : (
          <ScrollContainer>
            {services.map((service) => (
              <ServiceCard key={service._id}>
                {service.image && (
                  <ServiceImage 
                    src={`${API_URL}${service.image}`} 
                    alt={service.name}
                    onError={(e) => {
                      e.target.src = '/assets/category/default.jpg';
                    }}
                  />
                )}
                <ServiceTitle>{service.name}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServicePrice>₹{service.price}</ServicePrice>
                <ServiceDuration>{service.duration} minutes</ServiceDuration>
              </ServiceCard>
            ))}
          </ScrollContainer>
        )}
      </Container>
    </Box>
  );
};

export default HomeSalonServices;
