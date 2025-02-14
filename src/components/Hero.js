import React, { useState } from 'react';
import { Box, Typography, Button, styled, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/hero/salon-bg-bw.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(51, 51, 51, 0.5))',
    zIndex: 1
  },
  [theme.breakpoints.down('md')]: {
    height: '80vh',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(2),
  animation: `${fadeIn} 1s ease-out`,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 700,
  fontSize: '3.5rem',
  marginBottom: theme.spacing(2),
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  letterSpacing: '1px',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '1.2rem',
  marginBottom: theme.spacing(4),
  opacity: 0.9,
  maxWidth: '600px',
  margin: '0 auto',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF4D8D',
  color: '#ffffff',
  padding: '12px 32px',
  fontSize: '1rem',
  borderRadius: '25px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#FF1F71',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#ffffff',
  padding: '12px 32px',
  fontSize: '1rem',
  borderRadius: '25px',
  textTransform: 'none',
  border: '2px solid #ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#FF69B4',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  }
}));

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    { 
      type: 'card',
      style: { backgroundColor: '#4A0D4A' },
      title: 'FREE PEDICURE',
      mainService: 'WAXING + BLEACH + THREAD WORK',
      details: [
        'Full Arms, Legs and UA',
        // 'BLEACH + THREAD WORK',
        'Face & Neck'
      ],
      prices: [
        '₹775/- (Honey wax)',
        '₹1099/- (Rica wax)'
      ]
    },
    {
      type: 'card',
      style: { backgroundColor: '#8B008B' },
      title: 'SALON PACKAGE',
      mainService: 'UPTO 60% OFF + Free BIKINI',
      details: [
        'Facial: VLCC',
        'Choco wax: Full Arms & Underarms',
        'Choco wax: Full Legs',
        'Basic Mani-Pedi combo',
        'Bleach(oxy) Face | Thread Work'
      ],
      price: '₹1642/-',
      tag: 'ALL IN JUST'
    },
    {
      type: 'card',
      style: { backgroundColor: '#FF1493' },
      title: 'RICA WAXING',
      details: [
        'FULL ARMS | FULL LEGS | UNDERARMS',
        'FREE THREADING + BLEACH'
      ],
      price: '₹897/-',
      originalPrice: '₹1600',
      buttonText: 'BOOK NOW'
    },
    {
      type: 'card',
      style: { backgroundColor: '#FFD700', color: '#000000' },
      title: 'Festive Deals',
      subTitle: 'BIG SALE',
      details: [
        '₹100/- Off on 1st Booking',
        'Use Code: TE100'
      ],
      tag: 'UP TO 50% OFF'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Grid container spacing={isTablet ? 3 : 6} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroTitle variant={isMobile ? "h3" : "h2"}>
              Professional Beauty Services at Your Doorstep
            </HeroTitle>
            <HeroSubtitle variant={isMobile ? "h6" : "h5"}>
              Experience salon-quality treatments in the comfort of your home
            </HeroSubtitle>
            <HeroButton variant="contained" disableElevation>
              Book Now
            </HeroButton>
            
            <OfferBox>
              <OfferText variant={isMobile ? "subtitle1" : "h6"}>
                Rs. 100 OFF on your first booking! USE CODE: TE100
              </OfferText>
            </OfferBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <CarouselContainer>
              <CarouselButton
                sx={{ left: theme.spacing(2) }}
                onClick={handlePrevSlide}
              >
                <ArrowBackIosIcon />
              </CarouselButton>
              
              {offers.map((offer, index) => (
                <CarouselCard
                  key={index}
                  sx={{
                    ...offer.style,
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <OfferTitle>{offer.title}</OfferTitle>
                  
                  {offer.mainService && (
                    <OfferService>{offer.mainService}</OfferService>
                  )}
                  
                  {offer.subTitle && (
                    <OfferService>{offer.subTitle}</OfferService>
                  )}
                  
                  {offer.details && offer.details.map((detail, i) => (
                    <OfferDetails key={i}>{detail}</OfferDetails>
                  ))}
                  
                  {offer.prices && offer.prices.map((price, i) => (
                    <OfferPrice key={i}>{price}</OfferPrice>
                  ))}
                  
                  {offer.price && (
                    <Box sx={{ mt: 2 }}>
                      {offer.tag && (
                        <Typography variant="h6" sx={{ color: offer.style.color || '#ffffff' }}>
                          {offer.tag}
                        </Typography>
                      )}
                      {offer.originalPrice && (
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            textDecoration: 'line-through',
                            color: offer.style.color || '#ffffff',
                            mb: 1
                          }}
                        >
                          ₹{offer.originalPrice}
                        </Typography>
                      )}
                      <OfferPrice>{offer.price}</OfferPrice>
                    </Box>
                  )}
                  
                  {offer.buttonText && (
                    <BookNowButton variant="contained">
                      {offer.buttonText}
                    </BookNowButton>
                  )}
                </CarouselCard>
              ))}
              
              <CarouselButton
                sx={{ right: theme.spacing(2) }}
                onClick={handleNextSlide}
              >
                <ArrowForwardIosIcon />
              </CarouselButton>
              
              <CarouselDots>
                {offers.map((_, index) => (
                  <CarouselDot
                    key={index}
                    data-active={currentSlide === index}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </CarouselDots>
            </CarouselContainer>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}

export default Hero;
