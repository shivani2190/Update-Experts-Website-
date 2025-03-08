import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  styled,
  keyframes,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarIcon from '@mui/icons-material/Star';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const FeatureBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: '30px',
  background: '#ffffff',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    '& .feature-icon': {
      animation: `${pulse} 1s ease-in-out infinite`,
    },
    '& .background-shape': {
      transform: 'rotate(45deg) scale(1.2)',
    },
  },
}));

const IconWrapper = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  position: 'relative',
  zIndex: 1,
  '& svg': {
    color: '#ffffff',
    fontSize: '2.5rem',
  },
});

const BackgroundShape = styled(Box)({
  position: 'absolute',
  top: '-50px',
  right: '-50px',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)',
  zIndex: 0,
});

const Features = () => {
  const features = [
    {
      icon: <SecurityIcon />,
      title: 'Safety Assured',
      description: 'Experience worry-free services with our verified experts who follow strict safety protocols and use PPE kits.',
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Expert Care',
      description: 'Our highly skilled professionals are background verified and trained to deliver exceptional service quality.',
    },
    {
      icon: <InventoryIcon />,
      title: 'Premium Products',
      description: 'We use only branded, sealed products and single-use kits to ensure the highest standards of hygiene.',
    },
    {
      icon: <StarIcon />,
      title: 'Quality Service',
      description: 'Our commitment to excellence ensures you receive nothing but the best in beauty and wellness care.',
    },
  ];

  return (
    <Box sx={{
      py: 8,
      background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 2,
            fontWeight: 700,
            color: '#000000',
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{ 
            mb: 8,
            color: '#666666',
          }}
        >
          Experience the difference with our premium beauty services
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureBox>
                <BackgroundShape className="background-shape" />
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <IconWrapper className="feature-icon">
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: '#000000',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ 
                      color: '#666666',
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </FeatureBox>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 10,
            textAlign: 'center',
            borderTop: '2px solid rgba(0, 0, 0, 0.1)',
            pt: 8,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ 
              fontWeight: 700,
              color: '#000000',
              mb: 2,
            }}
          >
            YOUR TIME | YOUR PLACE
          </Typography>
          <Typography
            variant="h2"
            component="div"
            sx={{ 
              fontWeight: 800,
              color: '#000000',
            }}
          >
            YOUR BEAUTY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
