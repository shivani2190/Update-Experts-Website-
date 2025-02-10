import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  styled,
  keyframes,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const shine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const PackageCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  background: featured 
    ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
    : '#ffffff',
  backgroundSize: '200% 200%',
  animation: featured ? `${shine} 15s ease infinite` : 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: featured ? 'none' : '2px solid #000000',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: featured 
      ? '0 20px 40px rgba(0, 0, 0, 0.3)'
      : '0 15px 30px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '16px',
  }
}));

const StyledButton = styled(Button)(({ theme, featured }) => ({
  background: featured 
    ? 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)'
    : 'transparent',
  border: featured ? 'none' : '2px solid #000000',
  borderRadius: '25px',
  color: featured ? '#ffffff' : '#000000',
  padding: '10px 30px',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: featured 
      ? 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)'
      : '#000000',
    color: '#ffffff',
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 20px',
    fontSize: '0.875rem',
  }
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '-35px',
  transform: 'rotate(45deg)',
  background: '#000000',
  color: '#ffffff',
  padding: '8px 40px',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  zIndex: 1,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  letterSpacing: '1px',
}));

const PriceText = styled(Typography)(({ theme, featured }) => ({
  color: featured ? '#ffffff' : '#000000',
  fontWeight: 800,
  fontSize: '2.75rem',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  fontFamily: 'inherit',
  letterSpacing: '-1px',
}));

const SaveText = styled(Typography)(({ theme, featured }) => ({
  color: featured ? '#ffffff' : '#000000',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '1.1rem',
  opacity: 0.9,
  padding: '8px 16px',
  background: featured ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  display: 'inline-block',
  margin: '0 auto',
}));

const StyledListItemIcon = styled(ListItemIcon)(({ featured }) => ({
  minWidth: '35px',
  '& .MuiSvgIcon-root': {
    color: featured ? '#ffffff' : '#000000',
    fontSize: '1.2rem',
  },
}));

const StyledListItemText = styled(ListItemText)(({ featured }) => ({
  '& .MuiListItemText-primary': {
    color: featured ? '#ffffff' : '#000000',
    fontSize: '1rem',
    fontWeight: 500,
  },
}));

const PackageTitle = styled(Typography)(({ theme, featured }) => ({
  color: featured ? '#ffffff' : '#000000',
  fontWeight: 800,
  fontSize: '1.75rem',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50px',
    height: '3px',
    background: featured ? '#ffffff' : '#000000',
  }
}));

const Packages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const packages = [
    {
      title: 'Essential Beauty',
      services: [
        'Basic Facial Treatment',
        'Classic Manicure',
        'Threading (Eyebrows & Upper Lip)',
        'Basic Hair Styling',
      ],
      price: '₹1,499',
      originalPrice: '₹2,499',
      save: '₹1,000',
      featured: false,
    },
    {
      title: 'Premium Glow Package',
      services: [
        'Advanced Facial with Gold Mask',
        'Spa Manicure & Pedicure',
        'Full Body Waxing',
        'Hair Spa Treatment',
        'Party Makeup with Lashes',
      ],
      price: '₹3,999',
      originalPrice: '₹6,999',
      save: '₹3,000',
      featured: true,
    },
    {
      title: 'Bridal Bliss',
      services: [
        'Complete Bridal Makeup',
        'Pre-Bridal Services',
        'Hair Styling & Treatment',
        'Nail Art',
        'Mehendi Application',
      ],
      price: '₹15,999',
      originalPrice: '₹25,999',
      save: '₹10,000',
      featured: false,
    },
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
              }
            }}
          >
            Exclusive Packages
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
            Choose the perfect package for your beauty needs
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PackageCard featured={pkg.featured} elevation={pkg.featured ? 12 : 2}>
                {pkg.featured && <FeaturedBadge>BEST VALUE</FeaturedBadge>}
                <CardContent sx={{ 
                  p: { xs: 2, sm: 3 },
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                    <PackageTitle featured={pkg.featured}>
                      {pkg.title}
                    </PackageTitle>

                    <PriceText featured={pkg.featured}>
                      {pkg.price}
                    </PriceText>

                    <Typography
                      align="center"
                      sx={{
                        textDecoration: 'line-through',
                        color: pkg.featured ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        mb: 2,
                      }}
                    >
                      {pkg.originalPrice}
                    </Typography>

                    <SaveText featured={pkg.featured}>
                      Save {pkg.save}
                    </SaveText>

                    <List sx={{ mb: 2, flexGrow: 1 }}>
                      {pkg.services.map((service, idx) => (
                        <ListItem 
                          key={idx} 
                          sx={{ 
                            p: { xs: 0.5, sm: 1 },
                            '&:last-child': { pb: 0 }
                          }}
                        >
                          <StyledListItemIcon featured={pkg.featured}>
                            <CheckCircleIcon 
                              sx={{ 
                                color: pkg.featured ? '#ffffff' : '#000000',
                                fontSize: {
                                  xs: '1.25rem',
                                  sm: '1.5rem'
                                }
                              }} 
                            />
                          </StyledListItemIcon>
                          <StyledListItemText featured={pkg.featured} primary={service} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: { xs: 2, sm: 3 }, pt: 0 }}>
                  <StyledButton 
                    fullWidth 
                    featured={pkg.featured}
                    variant={pkg.featured ? "contained" : "outlined"}
                    startIcon={<LocalOfferIcon />}
                  >
                    Book Now
                  </StyledButton>
                </CardActions>
              </PackageCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;
