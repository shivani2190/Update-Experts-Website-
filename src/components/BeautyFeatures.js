import React from 'react';
import { Box, Container, Typography, styled, keyframes, useTheme, useMediaQuery, Grid } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg) scale(1); filter: brightness(1); }
  50% { transform: translateY(-12px) rotate(3deg) scale(1.05); filter: brightness(1.2); }
  100% { transform: translateY(0) rotate(0deg) scale(1); filter: brightness(1); }
`;

const shine = keyframes`
  0% { background-position: -200% center; opacity: 0.5; }
  50% { opacity: 1; }
  100% { background-position: 200% center; opacity: 0.5; }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
`;

const glowText = keyframes`
  0% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3); }
  50% { text-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5); }
  100% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3); }
`;

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  borderRadius: '20px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: '#ffffff',
  border: '0.5px solid #000000',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
    '& .icon-wrapper': {
      background: 'linear-gradient(to right, #FFA07A, #FF6B6B)',
    }
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: '16px',
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  background: '#000000',
  transition: 'all 0.3s ease',
  animation: `${pulse} 2s infinite`,
  '& svg': {
    fontSize: '40px',
    color: '#ffffff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: '30px',
    },
  }
}));

const BeautyFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <SpaIcon />,
      title: "Spa & Massage",
      description: "Relax and rejuvenate with our professional spa and massage services."
    },
    {
      icon: <ContentCutIcon />,
      title: "Hair Styling",
      description: "Get the perfect look with our expert hair styling and treatment services."
    },
    {
      icon: <FaceRetouchingNaturalIcon />,
      title: "Facial & Cleanup",
      description: "Revitalize your skin with our premium facial and cleanup treatments."
    },
    {
      icon: <ColorLensIcon />,
      title: "Makeup",
      description: "Professional makeup services for any occasion or event."
    }
  ];

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      px: { xs: 2, sm: 3, md: 4 },
      background: '#f8f9fa'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6, md: 8 }
        }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"}
            sx={{ 
              fontWeight: 700,
              mb: { xs: 1, sm: 2 },
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              },
              animation: `${glowText} 3s infinite`
            }}
          >
            Our Beauty Services
          </Typography>
          <Typography 
            variant={isMobile ? "body1" : "h6"}
            color="text.secondary"
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: {
                xs: '1rem',
                sm: '1.25rem'
              }
            }}
          >
            Experience luxury beauty services in the comfort of your home
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  component="h3"
                  sx={{ 
                    mb: { xs: 1, sm: 2 },
                    fontWeight: 600,
                    fontSize: {
                      xs: '1.1rem',
                      sm: '1.25rem',
                      md: '1.5rem'
                    }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem'
                    }
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BeautyFeatures;
