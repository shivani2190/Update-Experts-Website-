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

const PackageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  background: '#ffffff',
  backgroundSize: '200% 200%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '2px solid #000000',
  '&[data-featured="true"]': {
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
    animation: `${shine} 15s ease infinite`,
    border: 'none',
  },
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
    border: '2px solid #000000',
    '&[data-featured="true"]': {
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      border: 'none',
    },
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

const PriceText = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontWeight: 800,
  fontSize: '2.75rem',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  fontFamily: 'inherit',
  letterSpacing: '-1px',
  '[data-featured="true"] &': {
    color: '#ffffff',
  },
}));

const SaveText = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '1.1rem',
  opacity: 0.9,
  padding: '8px 16px',
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: '20px',
  display: 'inline-block',
  margin: '0 auto',
  '[data-featured="true"] &': {
    color: '#ffffff',
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const BookButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #FF6B6B, #FFA07A)',
  color: '#ffffff',
  borderRadius: '25px',
  padding: '12px 35px',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(to right, #FFA07A, #FF6B6B)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '35px',
  '& .MuiSvgIcon-root': {
    color: '#000000',
    fontSize: '1.2rem',
  },
  '[data-featured="true"] &': {
    '& .MuiSvgIcon-root': {
      color: '#ffffff',
    },
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: '#000000',
    fontSize: '1rem',
    fontWeight: 500,
  },
  '[data-featured="true"] &': {
    '& .MuiListItemText-primary': {
      color: '#ffffff',
    },
  },
}));

const PackageTitle = styled(Typography)(({ theme }) => ({
  color: '#000000',
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
    background: '#000000',
  },
  '[data-featured="true"] &': {
    color: '#ffffff',
    '&:after': {
      background: '#ffffff',
    },
  },
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
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PackageCard data-featured={pkg.featured}>
                {pkg.featured && <FeaturedBadge>BEST VALUE</FeaturedBadge>}
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <PackageTitle>
                    {pkg.title}
                  </PackageTitle>

                  <PriceText>
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

                  <SaveText>
                    Save {pkg.save}
                  </SaveText>

                  <List sx={{ mb: 2 }}>
                    {pkg.services.map((service, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <StyledListItemIcon>
                          <CheckCircleIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <BookButton
                    fullWidth
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
