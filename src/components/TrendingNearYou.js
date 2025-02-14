import React, { useState } from 'react';
import { Box, Typography, Button, Chip, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const categories = [
  { id: 1, name: 'Waxing', active: true },
  { id: 2, name: 'Mani-Pedi' },
  { id: 3, name: 'Facial' },
  { id: 4, name: 'Hair' },
  { id: 5, name: 'Body Polishing' },
  { id: 6, name: 'Massage' },
  { id: 7, name: 'Threading' },
  { id: 8, name: 'Makeup' }
];

const services = [
  {
    id: 1,
    name: 'Rica Roll-On - Waxing',
    description: 'Full Arms + Full Legs + Underarms',
    image: '/assets/services/rica-waxing.jpg',
    price: 899,
    originalPrice: 1599,
    duration: '1hr 5mins',
    discount: '43% Off',
    tag: 'Rica Roll-On',
    rating: 4.8,
    reviews: 2345
  },
  {
    id: 2,
    name: 'Rica Roll-On - Waxing',
    description: 'Full Arms + Underarms',
    image: '/assets/services/rica-waxing-2.jpg',
    price: 499,
    originalPrice: 799,
    duration: '30mins',
    discount: '35% Off',
    tag: 'Rica Roll-On',
    rating: 4.7,
    reviews: 1890
  },
  {
    id: 3,
    name: 'Classic Manicure & Pedicure',
    description: 'Relaxing hand & foot treatment',
    image: '/assets/services/mani-pedi.jpg',
    price: 799,
    originalPrice: 1299,
    duration: '1hr 15mins',
    discount: '38% Off',
    tag: 'Bestseller',
    rating: 4.9,
    reviews: 3120
  },
  {
    id: 4,
    name: 'Diamond Facial',
    description: 'Premium facial for glowing skin',
    image: '/assets/services/facial.jpg',
    price: 1299,
    originalPrice: 2499,
    duration: '1hr',
    discount: '48% Off',
    tag: 'Premium',
    rating: 4.8,
    reviews: 1567
  },
  {
    id: 5,
    name: 'Hair Spa Treatment',
    description: 'Deep conditioning & head massage',
    image: '/assets/services/hair-spa.jpg',
    price: 999,
    originalPrice: 1799,
    duration: '45mins',
    discount: '44% Off',
    tag: 'Trending',
    rating: 4.6,
    reviews: 2789
  }
];

const TrendingNearYou = () => {
  const [activeCategory, setActiveCategory] = useState('Waxing');

  return (
    <Box sx={{ py: { xs: 3, md: 5 }, px: { xs: 2, md: 4 }, backgroundColor: '#fff' }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1.25rem', md: '1.75rem' },
          fontWeight: 600,
          color: '#333',
          mb: { xs: 2, md: 3 }
        }}
      >
        Trending Near You
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        gap: 1.5, 
        mb: 3, 
        overflowX: 'auto', 
        pb: 1,
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FF4D8D',
          borderRadius: '10px',
        }
      }}>
        {categories.map((category) => (
          <Chip 
            key={category.id}
            label={category.name}
            onClick={() => setActiveCategory(category.name)}
            sx={{ 
              backgroundColor: category.name === activeCategory ? '#FFE4ED' : '#f5f5f5',
              color: category.name === activeCategory ? '#FF4D8D' : '#666',
              fontWeight: 500,
              borderRadius: '16px',
              px: 1,
              '&:hover': {
                backgroundColor: category.name === activeCategory ? '#FFE4ED' : '#f0f0f0',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease'
            }}
          />
        ))}
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 2.5, 
        overflowX: 'auto', 
        pb: 1,
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FF4D8D',
          borderRadius: '10px',
        }
      }}>
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              minWidth: { xs: '280px', md: '320px' },
              maxWidth: { xs: '280px', md: '320px' },
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              position: 'relative',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              }
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                backgroundColor: '#4A2B29',
                color: '#fff',
                py: 0.5,
                px: 1.5,
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 500,
                zIndex: 1
              }}
            >
              {service.tag}
            </Box>

            <Box
              component="img"
              src={service.image}
              alt={service.name}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            />

            <Box sx={{ p: 2.5 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  mb: 0.5,
                  height: '2.6em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {service.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  mb: 1.5,
                  fontSize: '0.875rem',
                  height: '1.5em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {service.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Rating value={service.rating} precision={0.1} size="small" readOnly />
                <Typography sx={{ color: '#666', fontSize: '0.875rem' }}>
                  ({service.reviews.toLocaleString()})
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#333',
                      display: 'inline-block',
                      mr: 1
                    }}
                  >
                    ₹{service.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#999',
                      textDecoration: 'line-through',
                      display: 'inline-block'
                    }}
                  >
                    ₹{service.originalPrice}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: '1rem', color: '#666' }} />
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#666'
                    }}
                  >
                    {service.duration}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#4CAF50',
                    fontWeight: 500
                  }}
                >
                  {service.discount}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#FF4D8D',
                  color: '#fff',
                  borderRadius: '25px',
                  textTransform: 'none',
                  height: '40px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#FF1F71',
                  }
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendingNearYou;
