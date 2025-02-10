import React from 'react';
import { Box, Container, Typography, Card, CardMedia, Button, List, ListItem, ListItemIcon, ListItemText, styled, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  background: '#fff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease',
  },
}));

const PackageImage = styled(Box)({
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%', // 16:9 aspect ratio for shorter height
  overflow: 'hidden',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '1',
  },
});

const PackageContent = styled(Box)({
  padding: '16px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const PackageTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: '12px',
  color: '#000000',
});

const ServiceList = styled(List)({
  padding: 0,
  marginBottom: '12px',
});

const ServiceItem = styled(ListItem)({
  padding: '2px 0',
  '& .MuiListItemIcon-root': {
    minWidth: '20px',
    marginRight: '8px',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '6px',
    color: '#666666',
  },
  '& .MuiListItemText-primary': {
    fontSize: '13px',
    color: '#333333',
    '& span': {
      fontWeight: 600,
    },
  },
});

const ViewMoreButton = styled(Button)({
  color: '#000000',
  padding: '0',
  fontSize: '14px',
  textTransform: 'none',
  '&:hover': {
    background: 'none',
    color: '#666666',
  },
});

const Duration = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#666666',
  fontSize: '14px',
  marginTop: 'auto',
  paddingTop: '12px',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
    marginRight: '4px',
    color: '#000000',
  },
});

const PriceSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  paddingTop: '12px',
});

const Price = styled(Box)({
  '& .original-price': {
    color: '#666666',
    textDecoration: 'line-through',
    fontSize: '12px',
    marginBottom: '2px',
  },
  '& .current-price': {
    color: '#000000',
    fontSize: '16px',
    fontWeight: 700,
  },
  '& .savings': {
    color: '#666666',
    fontSize: '12px',
  },
});

const AddButton = styled(Button)({
  minWidth: 'unset',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  padding: 0,
  background: '#000000',
  color: 'white',
  '&:hover': {
    background: '#333333',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
});

const DiscountBadge = styled(Box)(({ discount }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  background: '#000000',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 600,
  zIndex: 1,
}));

const RecommendedPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Sit, Back & Relax',
      image: 'assets/packages/a1.jfif',
      services: [
        { name: 'Threading', details: 'Eyebrows & Upperlips Threading' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Half Legs Honey' },
        { name: 'FREE', details: 'Head(10min) Massage' },
      ],
      duration: '100 min(Approx)',
      originalPrice: 1813,
      currentPrice: 907,
      discount: 50,
      totalServices: 6,
    },
    {
      id: 2,
      title: 'Express Yourself',
      image: 'assets/packages/a2.jpg',
      services: [
        { name: 'Threading', details: 'Eyebrows & Upperlips Threading' },
        { name: 'Bleach', details: 'Face Bleach' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Full Legs Honey' },
      ],
      duration: '170 min(Approx)',
      originalPrice: 3011,
      currentPrice: 1887,
      discount: 45,
      totalServices: 8,
    },
    {
      id: 3,
      title: 'Super Saving Deals',
      image: 'assets/packages/a3.jpg',
      services: [
        { name: 'Waxing', details: 'Bikni Honey' },
        { name: 'Waxing', details: 'Full Arms Rica' },
        { name: 'Waxing', details: 'Half Legs Rica' },
        { name: 'Pedicure', details: 'Pedicure Basic' },
      ],
      duration: '145 min(Approx)',
      originalPrice: 3645,
      currentPrice: 1757,
      discount: 52,
      totalServices: 6,
    },
    {
      id: 4,
      title: 'Wax It!',
      image: 'assets/packages/a4.jpg',
      services: [
        { name: 'Threading', details: 'Eyebrows Threading' },
        { name: 'Bleach', details: 'Face Bleach' },
        { name: 'Waxing', details: 'Full Arms Honey' },
        { name: 'Waxing', details: 'Full Legs Honey' },
      ],
      duration: '60 min(Approx)',
      originalPrice: 1128,
      currentPrice: 555,
      discount: 51,
      totalServices: 6,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
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
          Recommended Packages
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
          Choose from our most popular beauty packages
        </Typography>

        <Grid container spacing={3}>
          {packages.map((pkg) => (
            <Grid item xs={12} sm={6} md={3} key={pkg.id}>
              <StyledCard>
                <DiscountBadge>
                  {pkg.discount}% OFF
                </DiscountBadge>
                <PackageImage>
                  <img src={pkg.image} alt={pkg.title} />
                </PackageImage>
                <PackageContent>
                  <PackageTitle variant="h6">
                    {pkg.title}
                  </PackageTitle>
                  <ServiceList>
                    {pkg.services.slice(0, 4).map((service, index) => (
                      <ServiceItem key={index}>
                        <ListItemIcon>
                          <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <>
                              <span>{service.name}</span> {service.details}
                            </>
                          }
                        />
                      </ServiceItem>
                    ))}
                  </ServiceList>
                  {pkg.totalServices > 4 && (
                    <ViewMoreButton>
                      View {pkg.totalServices - 4} More
                    </ViewMoreButton>
                  )}
                  <Duration>
                    <AccessTimeIcon />
                    {pkg.duration}
                  </Duration>
                  <PriceSection>
                    <Price>
                      <div className="original-price">₹{pkg.originalPrice}</div>
                      <div className="current-price">Cost: ₹{pkg.currentPrice}</div>
                      <div className="savings">Save ₹{pkg.originalPrice - pkg.currentPrice}</div>
                    </Price>
                    <AddButton>
                      <AddIcon />
                    </AddButton>
                  </PriceSection>
                </PackageContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecommendedPackages;
