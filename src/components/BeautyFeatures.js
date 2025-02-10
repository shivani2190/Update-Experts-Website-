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
  }
}));

const IconWrapper = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  background: 'linear-gradient(to right, #FF6B6B, #FFA07A)',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '40px',
    color: '#ffffff'
  }
});

const BeautyFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      py: 8,
      background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: '#000000',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: '#000000',
            }
          }}
        >
          Our Beauty Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: '#666666',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Experience luxury beauty services in the comfort of your home
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard>
                <IconWrapper className="icon-wrapper">
                  {feature.icon}
                </IconWrapper>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: '#000000',
                    mb: 2
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666666',
                    lineHeight: 1.7
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
