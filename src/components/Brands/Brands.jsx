import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Container, styled } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '16px',
  border: '1px solid #e0e0e0',
  width: '100%',
  height: '140px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#ffffff',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    border: '1px solid #000000',
    '& img': {
      transform: 'scale(1.1)',
      filter: 'grayscale(0%)',
      opacity: 1
    }
  },
  [theme.breakpoints.down('sm')]: {
    height: '120px',
    padding: theme.spacing(1.5),
  }
}));

const BrandImage = styled('img')({
  height: '60px',
  width: 'auto',
  maxWidth: '100%',
  objectFit: 'contain',
  marginBottom: '12px',
  filter: 'grayscale(100%)',
  opacity: 0.8,
  transition: 'all 0.3s ease',
});

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
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 2 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: '#fff'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 700,
              color: '#000000',
              mb: 1,
              textAlign: 'center'
            }}
          >
            Our Partner Brands
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4
            }}
          >
            We collaborate with premium beauty brands to deliver excellence
          </Typography>
        </Box>

        <Box 
          sx={{ 
            mx: { xs: -1, md: -2 },
            '.slick-track': {
              display: 'flex',
              alignItems: 'center',
              gap: 2
            },
            '.slick-dots': {
              bottom: '-40px',
              '& li button:before': {
                fontSize: '8px',
                color: '#000000'
              },
              '& li.slick-active button:before': {
                color: '#000000'
              }
            }
          }}
        >
          <Slider {...settings}>
            {brands.map((brand) => (
              <Box 
                key={brand.id} 
                sx={{ 
                  px: { xs: 1, md: 2 }
                }}
              >
                <BrandCard>
                  <BrandImage
                    src={brand.image}
                    alt={brand.name}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#000000',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      fontWeight: 600,
                      textAlign: 'center',
                      lineHeight: 1.2
                    }}
                  >
                    {brand.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#666666',
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      mt: 0.5,
                      textAlign: 'center'
                    }}
                  >
                    {brand.description}
                  </Typography>
                </BrandCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Brands;
