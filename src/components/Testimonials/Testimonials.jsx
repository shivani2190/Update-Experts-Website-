import React from 'react';
import { Box, Typography, Avatar, Rating, useTheme, useMediaQuery, Container } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    image: '/assets/testimonials/user1.jpg',
    rating: 5,
    review: 'Amazing service! The beautician was very professional and used high-quality products. Will definitely book again.',
    service: 'Facial Treatment'
  },
  {
    id: 2,
    name: 'Neha Patel',
    image: '/assets/testimonials/user2.jpg',
    rating: 5,
    review: 'Very convenient and professional service. The expert was punctual and did a fantastic job with my waxing.',
    service: 'Waxing Service'
  },
  {
    id: 3,
    name: 'Anjali Gupta',
    image: '/assets/testimonials/user3.jpg',
    rating: 5,
    review: 'Best at-home salon service! The massage was so relaxing, and the therapist was very skilled.',
    service: 'Full Body Massage'
  },
  {
    id: 4,
    name: 'Riya Kapoor',
    image: '/assets/testimonials/user4.jpg',
    rating: 5,
    review: 'Excellent mani-pedi service. The expert was very thorough and professional. My nails look amazing!',
    service: 'Mani-Pedi Combo'
  }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: !isMobile,
    adaptiveHeight: true,
    customPaging: () => (
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#FFE4ED',
          '&.slick-active': {
            backgroundColor: '#FF4D8D'
          }
        }}
      />
    )
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
            What Our Customers Say
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
            Read what our satisfied customers have to say about their experience
          </Typography>
        </Box>

        <Box sx={{ mx: -2 }}>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} sx={{ px: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    border: '1px solid #eee',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ 
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    color: '#FFE4ED',
                    '& svg': {
                      fontSize: '2rem'
                    }
                  }}>
                    <FormatQuoteIcon />
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ 
                        width: 48, 
                        height: 48,
                        border: '2px solid #FFE4ED'
                      }}
                    />
                    <Box sx={{ ml: 1.5 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: '#333',
                          fontSize: '0.875rem'
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#666',
                          fontSize: '0.75rem',
                          display: 'block',
                          mb: 0.5
                        }}
                      >
                        {testimonial.service}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{
                      color: '#FF4D8D',
                      mb: 1.5
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      flexGrow: 1
                    }}
                  >
                    {testimonial.review}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
