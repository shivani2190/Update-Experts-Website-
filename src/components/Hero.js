import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, styled, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { keyframes } from '@mui/material/styles';
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
  background: `linear-gradient(135deg, #1a1a1a 0%, #000000 100%)`,
  padding: '20px 0 20px 0',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23808080\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.1,
  },
  [theme.breakpoints.down('md')]: {
    padding: '30px 0 30px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0 20px 0',
  }
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  animation: `${fadeIn} 1s ease-out`,
  fontSize: '3.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  }
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  marginBottom: theme.spacing(4),
  animation: `${fadeIn} 1s ease-out 0.3s both`,
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginBottom: theme.spacing(3),
  }
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: '12px 32px',
  fontSize: '1.1rem',
  backgroundColor: '#FFB6C1',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#FFC0CB',
    color: '#000000',
  },
  animation: `${fadeIn} 1s ease-out 0.6s both`,
  [theme.breakpoints.down('sm')]: {
    padding: '10px 24px',
    fontSize: '1rem',
  }
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
}));

const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
});

const CarouselButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  zIndex: 1,
}));

const CarouselDots = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: theme.spacing(1),
}));

const CarouselDot = styled(Box, {
  shouldComponentUpdate: true,
})(({ theme, active }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: active ? '#fff' : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&[data-active="true"]': {
    backgroundColor: '#fff'
  }
}));

const OfferBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(1, 2),
  marginTop: theme.spacing(2), 
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  animation: `${fadeIn} 1s ease-out 1.2s both`,
  '&:hover': {
    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.5, 1.5), 
    marginTop: theme.spacing(3),
    borderRadius: '12px',
  }
}));

const OfferText = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontWeight: 400,
  fontSize: '0.9rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  }
}));

const CarouselCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '16px',
  textAlign: 'center',
  transition: 'all 0.5s ease',
}));

const OfferTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#FFD700',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  }
}));

const OfferService = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  }
}));

const OfferDetails = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 500,
  color: '#ffffff',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  }
}));

const OfferPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#FFD700',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  }
}));

const BookNowButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: '#FF1493',
  color: 'white',
  padding: '12px 40px',
  borderRadius: '25px',
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#FF69B4',
  }
}));

const Hero = () => {
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
};

export default Hero;
