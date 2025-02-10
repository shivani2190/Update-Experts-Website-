import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  styled,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1.5),
  },
}));

const ServiceButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)',
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 40,
    padding: '0 20px',
    fontSize: '0.875rem',
  },
}));

const services = [
  {
    id: 1,
    title: 'Premium Hair Styling',
    description: 'Transform your look with our expert hair styling services. Includes consultation, wash, cut, and styling with premium products.',
    price: '₹400',
    duration: '60-90 min',
    rating: 4.9,
    image: '/assets/category/p10.jpg'
  },
  {
    id: 2,
    title: 'Luxury Spa Experience',
    description: 'Indulge in our signature spa treatments featuring aromatherapy, hot stone massage, and premium organic products.',
    price: 'From ₹400',
    duration: '90-120 min',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Advanced Skin Therapy',
    description: 'Revitalize your skin with our advanced treatments including microdermabrasion, chemical peels, and LED therapy.',
    price: 'From ₹400',
    duration: '60 min',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Luxury Nail Studio',
    description: 'Experience our premium nail care services with long-lasting gel options and artistic nail designs.',
    price: 'From ₹400',
    duration: '45-75 min',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Professional Makeup',
    description: 'Get ready for any occasion with our professional makeup services using high-end cosmetic brands.',
    price: 'From ₹400',
    duration: '60 min',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'VIP Beauty Package',
    description: 'Complete beauty transformation including hair, makeup, and nail services for special occasions.',
    price: 'From ₹400',
    duration: '180 min',
    rating: 5.0,
    image: '/assets/category/p5.jpg'
  }
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleBooking = (serviceId) => {
    // Implement booking logic
    console.log(`Booking service ${serviceId}`);
  };

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      px: { xs: 2, sm: 3, md: 4 },
      background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6, md: 8 }
        }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"}
            sx={{ 
              fontWeight: 700,
              background: '#000000',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 1, sm: 2 },
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              }
            }}
          >
            Luxury Services
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: {
                xs: '1rem',
                sm: '1.25rem'
              }
            }}
          >
            Experience the pinnacle of beauty and wellness with our premium services
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <ServiceCard>
                <CardMedia
                  component="img"
                  height={isMobile ? "200" : "240"}
                  image={service.image}
                  alt={service.title}
                  sx={{ 
                    objectFit: 'cover',
                    borderRadius: { xs: '12px 12px 0 0', sm: '16px 16px 0 0' }
                  }}
                />
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: { xs: 2, sm: 3 }
                }}>
                  <Typography 
                    gutterBottom 
                    variant={isMobile ? "h6" : "h5"} 
                    component="h2" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: {
                        xs: '1.1rem',
                        sm: '1.25rem',
                        md: '1.5rem'
                      }
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: { xs: 1, sm: 2 }
                  }}>
                    <StarIcon sx={{ 
                      color: '#FFD700', 
                      mr: 1,
                      fontSize: { xs: '1.2rem', sm: '1.5rem' }
                    }} />
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontSize: {
                          xs: '0.875rem',
                          sm: '1rem'
                        }
                      }}
                    >
                      {service.rating} Rating
                    </Typography>
                  </Box>
                  <Typography 
                    color="text.secondary" 
                    sx={{ 
                      mb: { xs: 2, sm: 3 },
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem'
                      }
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'stretch', sm: 'center' },
                    justifyContent: 'space-between',
                    gap: { xs: 1, sm: 2 }
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'row', sm: 'column' },
                      justifyContent: { xs: 'space-between', sm: 'center' },
                      alignItems: 'center',
                      mb: { xs: 1, sm: 0 }
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ 
                          mr: 1,
                          fontSize: { xs: '1.1rem', sm: '1.25rem' }
                        }} />
                        <Typography 
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: '0.875rem',
                              sm: '1rem'
                            }
                          }}
                        >
                          {service.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mt: { xs: 0, sm: 1 }
                      }}>
                        <LocalOfferIcon sx={{ 
                          mr: 1,
                          fontSize: { xs: '1.1rem', sm: '1.25rem' }
                        }} />
                        <Typography 
                          variant="body2"
                          sx={{
                            fontSize: {
                              xs: '0.875rem',
                              sm: '1rem'
                            }
                          }}
                        >
                          {service.price}
                        </Typography>
                      </Box>
                    </Box>
                    <ServiceButton 
                      fullWidth={isMobile}
                      onClick={() => handleBooking(service.id)}
                    >
                      Book Now
                    </ServiceButton>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
