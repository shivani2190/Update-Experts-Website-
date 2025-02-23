import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, styled, useTheme, useMediaQuery, Container, Link, Dialog, Grid, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.3s ease',
  minWidth: '120px',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .category-image': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transform: 'scale(1.05)',
      '& img': {
        transform: 'scale(1.1)',
      }
    },
    '& .category-title': {
      color: '#000000',
    }
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '85px',
    padding: theme.spacing(1),
    margin: '0 4px',
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '90px',
  height: '90px',
  borderRadius: '20px',
  overflow: 'hidden',
  marginBottom: theme.spacing(1.5),
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid #e0e0e0',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
    borderRadius: '16px',
    marginBottom: theme.spacing(1),
  }
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#666666',
  textAlign: 'center',
  marginTop: theme.spacing(1),
  transition: 'color 0.3s ease',
  width: '100%',
  whiteSpace: 'normal',
  minHeight: '40px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    marginTop: theme.spacing(0.5),
    minHeight: '32px'
  }
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 1),
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    padding: theme.spacing(1.5, 0.5),
  }
}));

const ServiceDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '400px',
    width: '100%',
    margin: theme.spacing(2),
    borderRadius: '20px',
    overflow: 'hidden'
  }
}));

const ServiceGridContainer = styled(Box)(({ theme }) => ({
  height: '470px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#bbb',
    borderRadius: '4px',
    '&:hover': {
      background: '#999'
    }
  }
}));

const ServiceItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  height: '140px',
  '&:hover': {
    transform: 'translateY(-4px)',
    '& .service-name': {
      color: '#FF4D8D'
    }
  }
}));

const ServiceImage = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(1),
  borderRadius: '50%'
}));

const categories = [
  {
    id: 1,
    title: 'Salon At Home',
    image: '/assets/categories/salon-at-home.jpg',
    link: '/services/salon'
  },
  {
    id: 2,
    title: 'Spa At Home',
    image: '/assets/categories/spa-at-home.jpg',
    link: '/services/spa'
  },
  {
    id: 3,
    title: 'Advance Facials',
    image: '/assets/categories/salon-at-home.jpg',
    link: '/services/facials'
  },
  {
    id: 4,
    title: 'MakeUp At Home',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 5,
    title: 'Pre-bridal Makeup',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 6,
    title: 'Nail Art',
    image: '/assets/categories/makeup-at-home.jpg',
    link: '/services/makeup'
  },
  {
    id: 7,
    title: 'Other Services',
    image: '/assets/category/p7.jpg',
    link: '/services/other'
  }
];

const salonServices = [
  { id: 1, name: 'Waxing', image: '/assets/category/p1.jpg' },
  { id: 2, name: 'Facial', image: '/assets/category/p2.jpg' },
  { id: 3, name: 'Mani-Pedi', image: '/assets/category/p3.jpg' },
  { id: 4, name: 'Clean-Up', image: '/assets/category/p4.jpg' },
  { id: 5, name: 'De-Tan / Bleach', image: '/assets/category/p5.jpg' },
  { id: 6, name: 'Hair', image: '/assets/category/p6.jpg' },
  { id: 7, name: 'Body Polishing', image: '/assets/category/p7.jpg' },
  { id: 8, name: 'Threading', image: '/assets/category/p8.jpg' },
  { id: 9, name: 'Insta Light Pack', image: '/assets/category/p9.jpg' }
];

const spaServices = [
  { 
    id: 1, 
    name: 'Best Seller Packages', 
    image: '/assets/category/p1.jpg'
  },
  { 
    id: 2, 
    name: 'Massage Therapy', 
    image: '/assets/category/p2.jpg'
  },
  { 
    id: 3, 
    name: 'Energizing Therapies', 
    image: '/assets/category/p3.jpg'
  },
  { 
    id: 4, 
    name: 'Nourishing Massage', 
    image: '/assets/category/p4.jpg'
  },
  { 
    id: 5, 
    name: 'Special Care Massages', 
    image: '/assets/category/p5.jpg'
  },
  { 
    id: 6, 
    name: 'Scrubs & Polishing', 
    image: '/assets/category/p6.jpg'
  },
  { 
    id: 7, 
    name: 'Add-Ons', 
    image: '/assets/category/p7.jpg'
  }
];

const makeupServices = [
  { 
    id: 1, 
    name: 'Makeup Packages', 
    image: '/assets/category/p1.jpg'
  },
  { 
    id: 2, 
    name: 'Party Makeup', 
    image: '/assets/category/p2.jpg'
  },
  { 
    id: 3, 
    name: 'Engagement Makeup', 
    image: '/assets/category/p3.jpg'
  },
  { 
    id: 4, 
    name: 'Bridal Makeup', 
    image: '/assets/category/p4.jpg'
  },
  { 
    id: 5, 
    name: 'Hair Do / Saree Draping', 
    image: '/assets/category/p5.jpg'
  }
];

const preBridalServices = [
  { 
    id: 1, 
    name: 'Premium', 
    image: '/assets/category/p1.jpg'
  },
  { 
    id: 2, 
    name: 'Waxing', 
    image: '/assets/category/p2.jpg'
  },
  { 
    id: 3, 
    name: 'Facial', 
    image: '/assets/category/p3.jpg'
  },
  { 
    id: 4, 
    name: 'Mani-Pedi', 
    image: '/assets/category/p4.jpg'
  },
  { 
    id: 5, 
    name: 'Clean-Up', 
    image: '/assets/category/p5.jpg'
  },
  { 
    id: 6, 
    name: 'De-Tan / Bleach', 
    image: '/assets/category/p6.jpg'
  },
  { 
    id: 7, 
    name: 'Hair', 
    image: '/assets/category/p7.jpg'
  },
  { 
    id: 8, 
    name: 'Body Polishing', 
    image: '/assets/category/p8.jpg'
  },
  { 
    id: 9, 
    name: 'Threading', 
    image: '/assets/category/p9.jpg'
  },
  { 
    id: 10, 
    name: 'Insta Light Pack', 
    image: '/assets/category/p10.jpg'
  }
];

const facialServices = [
  { 
    id: 1, 
    name: 'LED Photo Facial', 
    image: '/assets/categories/led-photo-facial.jpg'
  },
  { 
    id: 2, 
    name: 'LED Cleanup', 
    image: '/assets/categories/led-cleanup.jpg'
  },
  { 
    id: 3, 
    name: 'Add On', 
    image: '/assets/categories/add-on.jpg'
  }
];

const otherServices = [
  { 
    id: 1, 
    name: 'Pest Control', 
    image: '/assets/category/p1.jpg'
  },
  { 
    id: 2, 
    name: 'Home Cleaning', 
    image: '/assets/category/p2.jpg'
  },
  { 
    id: 3, 
    name: 'Drivers', 
    image: '/assets/category/p3.jpg'
  }
];

function CategoryBar() {
  const navigate = useNavigate();
  const [openSalonDialog, setOpenSalonDialog] = useState(false);
  const [openSpaDialog, setOpenSpaDialog] = useState(false);
  const [openFacialDialog, setOpenFacialDialog] = useState(false);
  const [openMakeupDialog, setOpenMakeupDialog] = useState(false);
  const [openPreBridalDialog, setOpenPreBridalDialog] = useState(false);
  const [openOtherDialog, setOpenOtherDialog] = useState(false);
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile ? 200 : 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category) => {
    switch(category.title) {
      case 'Salon At Home':
        setOpenSalonDialog(true);
        break;
      case 'Spa At Home':
        setOpenSpaDialog(true);
        break;
      case 'Advance Facials':
        setOpenFacialDialog(true);
        break;
      case 'MakeUp At Home':
        setOpenMakeupDialog(true);
        break;
      case 'Pre-bridal Makeup':
        setOpenPreBridalDialog(true);
        break;
      case 'Other Services':
        setOpenOtherDialog(true);
        break;
      default:
        break;
    }
  };

  const handleServiceClick = (service) => {
    if (service.name === 'Waxing') {
      navigate('/services/waxing');
    }
    // Add other service navigation handling here
  };

  return (
    <Box sx={{ 
      backgroundColor: '#fff',
      py: { xs: 1, md: 2 },
      position: 'relative'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            textAlign: 'center'
          }}
        >
          What are you looking for?
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <ScrollContainer ref={scrollContainerRef}>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                <ImageContainer className="category-image">
                  <img src={category.image} alt={category.title} />
                </ImageContainer>
                <CategoryTitle className="category-title">
                  {category.title}
                </CategoryTitle>
              </CategoryItem>
            ))}
          </ScrollContainer>
        </Box>
      </Container>

      <ServiceDialog 
        open={openSalonDialog} 
        onClose={() => setOpenSalonDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Salon At Home
            </Typography>
            <IconButton onClick={() => setOpenSalonDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {salonServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem onClick={() => handleServiceClick(service)}>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease',
                        mt: 1
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>

      <ServiceDialog 
        open={openSpaDialog} 
        onClose={() => setOpenSpaDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Spa At Home
            </Typography>
            <IconButton onClick={() => setOpenSpaDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {spaServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>

      <ServiceDialog 
        open={openFacialDialog} 
        onClose={() => setOpenFacialDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
               Advance Facials
            </Typography>
            <IconButton onClick={() => setOpenFacialDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {facialServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>

      <ServiceDialog 
        open={openMakeupDialog} 
        onClose={() => setOpenMakeupDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              MakeUp At Home
            </Typography>
            <IconButton onClick={() => setOpenMakeupDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {makeupServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>

      <ServiceDialog 
        open={openPreBridalDialog} 
        onClose={() => setOpenPreBridalDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 2,
            px: 1 
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem' 
            }}>
              Pre Bridal At Home
            </Typography>
            <IconButton 
              onClick={() => setOpenPreBridalDialog(false)}
              sx={{ p: 0.5 }}
            >
              <CloseIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {preBridalServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease',
                        mt: 1
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>

      <ServiceDialog 
        open={openOtherDialog} 
        onClose={() => setOpenOtherDialog(false)}
        maxWidth="md"
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 2,
            px: 1 
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem' 
            }}>
              Other Services
            </Typography>
            <IconButton 
              onClick={() => setOpenOtherDialog(false)}
              sx={{ p: 0.5 }}
            >
              <CloseIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
          <ServiceGridContainer>
            <Grid container spacing={2}>
              {otherServices.map((service) => (
                <Grid item xs={4} key={service.id}>
                  <ServiceItem>
                    <ServiceImage src={service.image} alt={service.name} />
                    <Typography 
                      className="service-name"
                      sx={{ 
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#333',
                        transition: 'color 0.3s ease',
                        mt: 1
                      }}
                    >
                      {service.name}
                    </Typography>
                  </ServiceItem>
                </Grid>
              ))}
            </Grid>
          </ServiceGridContainer>
        </Box>
      </ServiceDialog>
    </Box>
  );
}

export default CategoryBar;
