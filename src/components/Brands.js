import React from 'react';
import { Container, Typography, Box, Grid, styled } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const BrandsSection = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    zIndex: 1,
    pointerEvents: 'none'
  },
  '& > *': {
    position: 'relative',
    zIndex: 2
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
  }
}));

const BrandCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '120px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '100px',
    padding: theme.spacing(2),
  }
}));

const BrandImage = styled('img')(({ theme }) => ({
  maxWidth: '80%',
  maxHeight: '80%',
  objectFit: 'contain',
  opacity: 0.9,
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    maxHeight: '90%',
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  color: '#000000',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: '#000000',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(4),
  }
}));

const Brands = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const brands = [
    { name: 'L\'Oreal', image: '/Update-Experts-Website-/assets/brands/loreal.png' },
    { name: 'Casmara', image: '/Update-Experts-Website-/assets/brands/casmara.png' },
    { name: 'Oxy', image: '/Update-Experts-Website-/assets/brands/oxy.jpeg' },
    { name: 'Professional', image: '/Update-Experts-Website-/assets/brands/professional.jpg' },
    { name: 'Raga', image: '/Update-Experts-Website-/assets/brands/raga.png' },
    { name: 'Rics', image: '/Update-Experts-Website-/assets/brands/rica.webp' },
  ];

  return (
    
      // <BrandsSection>
      <Box sx={{ 
      py: 8,
      background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
        <Container maxWidth="lg">
          <SectionTitle>
            Brands We Trust
          </SectionTitle>
          
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: isMobile ? 4 : 6,
              color: '#000000',
              fontSize: isMobile ? '1rem' : undefined,
            }}
          >
            We use only premium quality products from trusted brands
          </Typography>

          <Grid container spacing={isMobile ? 2 : 4}>
            {brands.map((brand, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <BrandCard>
                  <BrandImage
                    src={brand.image}
                    alt={brand.name}
                  />
                </BrandCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
      // </BrandsSection>
      
  );
};

export default Brands;
