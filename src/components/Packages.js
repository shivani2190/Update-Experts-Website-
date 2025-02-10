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
    border: featured ? 'none' : '2px solid #000000',
  },
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

const BookButton = styled(Button)(({ theme, featured }) => ({
  background: featured 
    ? 'linear-gradient(to right, #FF6B6B, #FFA07A)'
    : 'linear-gradient(to right, #FF6B6B, #FFA07A)',
  color: '#ffffff',
  borderRadius: '25px',
  padding: '12px 35px',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: featured 
      ? 'linear-gradient(to right, #FFA07A, #FF6B6B)'
      : 'linear-gradient(to right, #FFA07A, #FF6B6B)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
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
            background: 'linear-gradient(45deg, #000000 30%, #333333 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Exclusive Packages
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8 }}
        >
          Choose the perfect package for your beauty needs
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PackageCard featured={pkg.featured ? true : undefined} elevation={pkg.featured ? 10 : 2}>
                {pkg.featured && <FeaturedBadge>BEST VALUE</FeaturedBadge>}
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <PackageTitle featured={pkg.featured ? true : undefined}>
                    {pkg.title}
                  </PackageTitle>

                  <PriceText featured={pkg.featured ? true : undefined}>
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

                  <SaveText featured={pkg.featured ? true : undefined}>
                    Save {pkg.save}
                  </SaveText>

                  <List sx={{ mb: 2 }}>
                    {pkg.services.map((service, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <StyledListItemIcon featured={pkg.featured}>
                          <CheckCircleIcon />
                        </StyledListItemIcon>
                        <StyledListItemText featured={pkg.featured} primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <BookButton
                    fullWidth
                    featured={pkg.featured ? true : undefined}
                    variant="contained"
                    size="large"
                    startIcon={<LocalOfferIcon />}
                  >
                    Book Now
                  </BookButton>
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
