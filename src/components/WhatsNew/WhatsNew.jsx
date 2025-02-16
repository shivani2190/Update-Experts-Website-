import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const ServiceCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.breakpoints.down('sm') ? '8px' : '20px',
  background: '#ffffff',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: 'none',
  border: '1px solid #eee',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  }
}));

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '4px',
  padding: '4px 16px',
  backgroundColor: '#FF4D8D',
  color: '#fff',
  border: 'none',
  fontSize: '0.75rem',
  minWidth: 'unset',
  '&:hover': {
    backgroundColor: '#FF4D8D',
    opacity: 0.9,
  }
}));

const offers = [
  {
    id: 1,
    title: 'Berry Bomb Ice Cream Facial',
    description: 'Refreshing facial treatment with natural berry extracts',
    image: '/assets/services/facial.jpg',
    price: '₹999',
    originalPrice: '₹2,999',
    tag: '50% Off',
    duration: '1hr 5mins'
  },
  {
    id: 2,
    title: 'Nutri Secret Hair Spa',
    description: 'Deep conditioning treatment for healthy hair',
    image: '/assets/services/hair-care.jpg',
    price: '₹499',
    originalPrice: '₹999',
    tag: '50% Off',
    duration: '45mins'
  }
];

const WhatsNew = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      py: { xs: 2, md: 6 }, 
      px: { xs: 2, md: 4 },
      backgroundColor: '#fff'
    }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
          mb: 2,
          color: '#2C3E50',
          fontSize: '1rem'
        }}
      >
        What's New?
      </Typography>

      <Grid container spacing={1}>
        {offers.map((offer) => (
          <Grid item xs={6} sm={6} key={offer.id}>
            <ServiceCard>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={offer.image}
                  alt={offer.title}
                  sx={{
                    width: '100%',
                    height: { xs: 120, md: 250 },
                    objectFit: 'cover',
                    borderRadius: { xs: '8px 8px 0 0', md: '20px 20px 0 0' }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    padding: '2px 8px',
                    borderRadius: '2px',
                    fontSize: '0.625rem',
                    fontWeight: 600
                  }}
                >
                  {offer.tag}
                </Box>
              </Box>
              
              <Box sx={{ p: 1.5 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    mb: 0.5,
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {offer.title}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#FF4D8D',
                      fontSize: '0.875rem',
                      mr: 1 
                    }}
                  >
                    {offer.price}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#999',
                      textDecoration: 'line-through',
                      fontSize: '0.75rem'
                    }}
                  >
                    {offer.originalPrice}
                  </Typography>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between'
                }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#666',
                      fontSize: '0.75rem'
                    }}
                  >
                    {offer.duration}
                  </Typography>
                  <AddButton>
                    ADD
                  </AddButton>
                </Box>
              </Box>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatsNew;
