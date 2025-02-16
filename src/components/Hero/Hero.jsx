import React from 'react';
import { Box, Typography, Button, styled, TextField, InputAdornment, IconButton } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

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
  background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/assets/hero/salon-bg-bw.jpg")',
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: 0,
  right: 0,
  padding: '0 16px',
  backgroundColor: 'transparent',
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

const SearchField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: '50px',
    height: '48px',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 16px',
    fontSize: '15px',
    '&::placeholder': {
      color: '#757575',
      opacity: 1,
    }
  }
}));

const SearchIconButton = styled(IconButton)(({ theme }) => ({
  padding: '8px',
  marginRight: '8px',
  color: '#000',
}));

function Hero() {
  const navigate = useNavigate();

  const handleBookService = () => {
    navigate('/services');
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <SearchContainer>
        <SearchField
          placeholder="Search for Services"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIconButton>
                  <Search sx={{ fontSize: 24 }} />
                </SearchIconButton>
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
      <HeroSection>
        <ContentWrapper>
          <HeroTitle variant="h1">
            Beauty at Your Doorstep
          </HeroTitle>
          <HeroSubtitle>
            Professional salon services in the comfort of your home
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton variant="contained" onClick={handleBookService}>
              Book Service
            </PrimaryButton>
            <SecondaryButton variant="outlined">
              Shop Products
            </SecondaryButton>
          </ButtonGroup>
        </ContentWrapper>
      </HeroSection>
    </Box>
  );
}

export default Hero;
