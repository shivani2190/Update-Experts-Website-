import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  {
    id: 1,
    name: 'O3+',
    image: '/assets/brands/oxy.jpeg',
    description: 'Professional Skin Care'
  },
  {
    id: 2,
    name: 'L\'Oreal',
    image: '/assets/brands/loreal.png',
    description: 'Hair & Skin Care'
  },
  {
    id: 3,
    name: 'Casmara',
    image: '/assets/brands/casmara.png',
    description: 'Beauty & Wellness'
  },
  {
    id: 4,
    name: 'Professional',
    image: '/assets/brands/professional.jpg',
    description: 'Professional Hair Care'
  },
  {
    id: 5,
    name: 'Rica',
    image: '/assets/brands/rica.webp',
    description: 'Natural Beauty Care'
  },
  {
    id: 6,
    name: 'Raga',
    image: '/assets/brands/raga.png',
    description: 'Premium Waxing'
  }
];

const Brands = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#fff'
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#333',
          fontSize: '1rem'
        }}
      >
        Our Partner Brands
      </Typography>

      <Box 
        sx={{ 
          mx: -1,
          '.slick-track': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >
        <Slider {...settings}>
          {brands.map((brand) => (
            <Box 
              key={brand.id} 
              sx={{ 
                px: 1,
                display: 'flex !important',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '12px',
                  border: '1px solid #eee',
                  width: '100%',
                  height: { xs: 80, md: 100 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    border: '1px solid #FFE4ED'
                  }
                }}
              >
                <Box
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  sx={{
                    height: { xs: 40, md: 50 },
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1
                    }
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontSize: '0.75rem',
                    mt: 1,
                    textAlign: 'center'
                  }}
                >
                  {brand.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Brands;
