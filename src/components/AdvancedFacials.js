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
  Rating,
  Chip
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

const facialServices = [
  {
    id: 1,
    title: 'Gold Radiance Facial',
    description: 'Luxury facial with 24K gold leaves',
    image: '/images/services/gold-facial.jpg',
    price: '₹2,499',
    originalPrice: '₹4,999',
    duration: '1hr 30mins',
    rating: 4.9,
    reviews: 850,
    discount: '50% Off',
    benefits: ['Skin brightening', 'Anti-aging', 'Collagen boost'],
    bestFor: ['Dull skin', 'Mature skin']
  },
  {
    id: 2,
    title: 'Pearl Glow Facial',
    description: 'Premium facial with pearl extract',
    image: '/images/services/pearl-facial.jpg',
    price: '₹1,999',
    originalPrice: '₹3,999',
    duration: '1hr 15mins',
    rating: 4.8,
    reviews: 620,
    discount: '50% Off',
    benefits: ['Skin whitening', 'Even tone'],
    bestFor: ['Pigmented skin', 'Uneven tone']
  },
  {
    id: 3,
    title: 'Hydra Boost Facial',
    description: 'Deep hydration treatment',
    image: '/images/services/hydra-facial.jpg',
    price: '₹1,799',
    originalPrice: '₹3,599',
    duration: '1hr',
    rating: 4.7,
    reviews: 480,
    discount: '50% Off',
    benefits: ['Deep hydration', 'Plump skin'],
    bestFor: ['Dry skin', 'Dehydrated skin']
  },
  {
    id: 4,
    title: 'Wine Facial',
    description: 'Anti-oxidant rich grape extract facial',
    image: '/images/services/wine-facial.jpg',
    price: '₹1,699',
    originalPrice: '₹3,399',
    duration: '1hr 15mins',
    rating: 4.8,
    reviews: 340,
    discount: '50% Off',
    benefits: ['Anti-oxidant', 'Skin repair'],
    bestFor: ['All skin types']
  }
];

const AdvancedFacials = () => {
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
        Advanced Facials
      </Typography>

      <Grid container spacing={1}>
        {facialServices.map((service) => (
          <Grid item xs={6} sm={6} md={3} key={service.id}>
            <ServiceCard>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: { xs: 120, md: 250 },
                    objectFit: 'cover',
                    borderRadius: { xs: '8px 8px 0 0', md: '20px 20px 0 0' }
                  }}
                />
                {service.discount && (
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
                    {service.discount}
                  </Box>
                )}
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
                  {service.title}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    display: 'block',
                    mb: 0.5,
                    fontSize: '0.75rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {service.description}
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: 0.5,
                  mb: 1
                }}>
                  {service.bestFor.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      size="small"
                      sx={{
                        height: '16px',
                        fontSize: '0.625rem',
                        backgroundColor: '#FFE4ED',
                        color: '#FF4D8D',
                        '& .MuiChip-label': {
                          px: 1,
                        }
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 0.5,
                  gap: 0.5
                }}>
                  <Rating
                    value={service.rating}
                    precision={0.1}
                    size="small"
                    readOnly
                    sx={{
                      fontSize: '0.75rem',
                      color: '#FF4D8D'
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#666',
                      fontSize: '0.75rem'
                    }}
                  >
                    ({service.reviews})
                  </Typography>
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between'
                }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontWeight: 600, 
                          color: '#FF4D8D',
                          fontSize: '0.875rem'
                        }}
                      >
                        {service.price}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#999',
                          textDecoration: 'line-through',
                          fontSize: '0.75rem'
                        }}
                      >
                        {service.originalPrice}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: '0.875rem', color: '#666' }} />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#666',
                          fontSize: '0.75rem'
                        }}
                      >
                        {service.duration}
                      </Typography>
                    </Box>
                  </Box>
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

export default AdvancedFacials;
