import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Chip,
  Grid,
  IconButton,
  styled,
  Tabs,
  Tab,
  Stack,
  Divider
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// Styled components
const ServiceCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  position: 'relative'
}));

const ShareButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
}));

const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '20px',
  padding: '4px 16px',
  minWidth: '80px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  }
}));

const CategoryTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 'auto',
    padding: '6px 12px',
    marginRight: theme.spacing(1),
    borderRadius: '20px',
    border: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff'
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTabs-scrollButtons': {
    '&.Mui-disabled': {
      opacity: 0.3
    }
  }
}));

const ServiceCategories = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  padding: theme.spacing(2),
  gap: theme.spacing(3),
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  WebkitOverflowScrolling: 'touch',
  scrollBehavior: 'smooth'
}));

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '70px',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const CategoryImage = styled('img')({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  objectFit: 'cover'
});

const waxingServices = [
  {
    id: 1,
    name: "Full Arms, Full Legs & Underarms",
    description: "Rica waxing - Full Arms & Full legs Rica Waxing",
    brand: "Rica",
    type: "Full Body",
    mrp: 1598,
    price: 799,
    time: 65
  },
  {
    id: 2,
    name: "Underarms",
    description: "Rica waxing - Underarms",
    brand: "Rica",
    type: "Underarms",
    mrp: 150,
    price: 89,
    time: 10
  },
  {
    id: 3,
    name: "Full Arms",
    description: "Rica waxing - Full Arms",
    brand: "Rica",
    type: "Full Arms",
    mrp: 499,
    price: 399,
    time: 20
  },
  {
    id: 4,
    name: "Half Arms",
    description: "Rica Waxing - Half Arms",
    brand: "Rica",
    type: "Half Arms",
    mrp: 399,
    price: 220,
    time: 10
  },
  {
    id: 5,
    name: "Full Legs",
    description: "Rica Waxing - Full legs",
    brand: "Rica",
    type: "Full Legs",
    mrp: 600,
    price: 495,
    time: 20
  },
  {
    id: 6,
    name: "Half Legs",
    description: "Rica Waxing - Half Legs",
    brand: "Rica",
    type: "Half Legs",
    mrp: 399,
    price: 290,
    time: 15
  },
  {
    id: 7,
    name: "Full Back",
    description: "Rica Waxing - Full Back",
    brand: "Rica",
    type: "Full Back",
    mrp: 399,
    price: 299,
    time: 15
  },
  {
    id: 8,
    name: "Stomach (Tummy)",
    description: "Rica Waxing - Stomach",
    brand: "Rica",
    type: "Stomach",
    mrp: 299,
    price: 199,
    time: 15
  },
  {
    id: 9,
    name: "Bikini Line + Butt",
    description: "Rica Waxing - Bikini Line + Butt",
    brand: "Rica",
    type: "Bikini Line",
    mrp: 599,
    price: 449,
    time: 20
  },
  {
    id: 10,
    name: "Bikini + Butt",
    description: "Rica Waxing - Bikini Line + Butt",
    brand: "Rica",
    type: "Bikini Line",
    mrp: 1200,
    price: 699,
    time: 40
  },
  {
    id: 11,
    name: "Full Body (Excld Bikini)",
    description: "Rica Waxing - Full Body (Excld Bikini)",
    brand: "Rica",
    type: "Full Body",
    mrp: 2100,
    price: 1499,
    time: 90
  },
  {
    id: 12,
    name: "Full Body with Bikini",
    description: "Rica Waxing - Full Body with Bikini",
    brand: "Rica",
    type: "Full Body",
    mrp: 3200,
    price: 1799,
    time: 110
  },
  {
    id: 13,
    name: "Blouse Line",
    description: "Rica Waxing - Blouse Line",
    brand: "Rica",
    type: "Other",
    mrp: 399,
    price: 249,
    time: 20
  },
  {
    id: 14,
    name: "Full Arms, Half legs, Underarms",
    description: "Rica Waxing - Full Arms, Half legs, Underarms",
    brand: "Rica",
    type: "Full Body",
    mrp: 1100,
    price: 699,
    time: 40
  },
  {
    id: 15,
    name: "Full arms & Underarms",
    description: "Rica Waxing - Full arms & Underarms",
    brand: "Rica",
    type: "Full Arms",
    mrp: 700,
    price: 450,
    time: 30
  },
  {
    id: 16,
    name: "Full Back & Front",
    description: "Rica Waxing - Full Back & Front",
    brand: "Rica",
    type: "Full Back",
    mrp: 750,
    price: 499,
    time: 25
  },
  {
    id: 17,
    name: "Full Arms (Normal)",
    description: "Aloevera Waxing - Full Arms (Normal)",
    brand: "Aloe Vera",
    type: "Full Arms",
    mrp: 300,
    price: 199,
    time: 20
  },
  {
    id: 18,
    name: "Full Legs (Normal)",
    description: "Aloevera Waxing - Full Legs (Normal)",
    brand: "Aloe Vera",
    type: "Full Legs",
    mrp: 550,
    price: 340,
    time: 25
  },
  {
    id: 19,
    name: "Half Legs (Normal)",
    description: "Aloevera Waxing - Half Legs (Normal)",
    brand: "Aloe Vera",
    type: "Half Legs",
    mrp: 450,
    price: 200,
    time: 20
  },
  {
    id: 20,
    name: "Full Arms & Underarms (Normal)",
    description: "Aloevera Waxing - Full Arms & Underarms",
    brand: "Aloe Vera",
    type: "Full Arms",
    mrp: 450,
    price: 250,
    time: 25
  },
  {
    id: 21,
    name: "Full Face",
    description: "Brazilian waxing - Full Face",
    brand: "Brazilian",
    type: "Face",
    mrp: 450,
    price: 249,
    time: 25
  },
  {
    id: 22,
    name: "Chin",
    description: "Brazilian waxing - Chin",
    brand: "Brazilian",
    type: "Face",
    mrp: 60,
    price: 35,
    time: 5
  },
  {
    id: 23,
    name: "Upperlips",
    description: "Brazilian waxing - Upperlips",
    brand: "Brazilian",
    type: "Face",
    mrp: 60,
    price: 40,
    time: 5
  },
  {
    id: 24,
    name: "Sidelock",
    description: "Brazilian waxing - Sidelock",
    brand: "Brazilian",
    type: "Face",
    mrp: 60,
    price: 35,
    time: 10
  },
  {
    id: 25,
    name: "Bikini",
    description: "Brazilian waxing - Bikini",
    brand: "Brazilian",
    type: "Bikini Line",
    mrp: 999,
    price: 799,
    time: 25
  },
  {
    id: 26,
    name: "Upperlips and chin",
    description: "Brazilian waxing - Upperlips and chin",
    brand: "Brazilian",
    type: "Face",
    mrp: 150,
    price: 70,
    time: 15
  },
  {
    id: 27,
    name: "Half Legs",
    description: "Choco waxing - Half Legs",
    brand: "Choco",
    type: "Half Legs",
    mrp: 250,
    price: 150,
    time: 20
  },
  {
    id: 28,
    name: "Full Arms & Underarms",
    description: "Choco waxing - Full Arms & Underarms",
    brand: "Choco",
    type: "Full Arms",
    mrp: 299,
    price: 290,
    time: 20
  },
  {
    id: 29,
    name: "Full Legs",
    description: "Choco waxing - Full Legs",
    brand: "Choco",
    type: "Full Legs",
    mrp: 399,
    price: 290,
    time: 20
  },
  {
    id: 30,
    name: "Full Arms, Full Legs & Underarms",
    description: "Choco waxing - Full Arms, Full Legs & Underarms",
    brand: "Choco",
    type: "Full Body",
    mrp: 750,
    price: 550,
    time: 40
  },
  {
    id: 31,
    name: "Full Arms, Half Legs & Underarms",
    description: "Choco waxing - Full Arms, Half Legs & Underarms",
    brand: "Choco",
    type: "Full Body",
    mrp: 800,
    price: 300,
    time: 30
  },
  {
    id: 32,
    name: "Underarms",
    description: "Honey waxing - Underarms",
    brand: "Honey",
    type: "Underarms",
    mrp: 75,
    price: 59,
    time: 10
  },
  {
    id: 33,
    name: "Full Arms",
    description: "Honey waxing - Full Arms",
    brand: "Honey",
    type: "Full Arms",
    mrp: 320,
    price: 199,
    time: 15
  },
  {
    id: 34,
    name: "Half Arms",
    description: "Honey waxing - Half Arms",
    brand: "Honey",
    type: "Half Arms",
    mrp: 200,
    price: 150,
    time: 10
  },
  {
    id: 35,
    name: "Full Legs",
    description: "Honey waxing - Full Legs",
    brand: "Honey",
    type: "Full Legs",
    mrp: 399,
    price: 299,
    time: 20
  },
  {
    id: 36,
    name: "Half Legs",
    description: "Honey waxing - Half Legs",
    brand: "Honey",
    type: "Half Legs",
    mrp: 299,
    price: 199,
    time: 15
  },
  {
    id: 37,
    name: "Full Back",
    description: "Honey waxing - Full Back",
    brand: "Honey",
    type: "Full Back",
    mrp: 299,
    price: 199,
    time: 15
  },
  {
    id: 38,
    name: "Stomach (Tummy)",
    description: "Honey waxing - Stomach (Tummy)",
    brand: "Honey",
    type: "Stomach",
    mrp: 250,
    price: 150,
    time: 15
  },
  {
    id: 39,
    name: "Bikini Line + Butt",
    description: "Honey waxing - Bikini Line + Butt",
    brand: "Honey",
    type: "Bikini Line",
    mrp: 450,
    price: 350,
    time: 20
  },
  {
    id: 40,
    name: "Bikini",
    description: "Honey waxing - Bikini",
    brand: "Honey",
    type: "Bikini Line",
    mrp: 1199,
    price: 599,
    time: 25
  },
  {
    id: 41,
    name: "Bikini + Butt",
    description: "Honey waxing - Bikini + Butt",
    brand: "Honey",
    type: "Bikini Line",
    mrp: 999,
    price: 649,
    time: 35
  },
  {
    id: 42,
    name: "Full Body(Excld.Bikini)",
    description: "Honey waxing - Full Body (Excld.Bikini)",
    brand: "Honey",
    type: "Full Body",
    mrp: 1199,
    price: 999,
    time: 90
  },
  {
    id: 43,
    name: "Full Body + Bikini",
    description: "Honey waxing - Full Body + Bikini",
    brand: "Honey",
    type: "Full Body",
    mrp: 1599,
    price: 1299,
    time: 110
  },
  {
    id: 44,
    name: "Full Arms, Half legs, Underarms",
    description: "Honey waxing - Full Arms, Half legs, Underarms",
    brand: "Honey",
    type: "Full Body",
    mrp: 694,
    price: 399,
    time: 50
  },
  {
    id: 45,
    name: "Full Arms, Full legs, Underarms",
    description: "Honey waxing - Full Arms, Full legs, Underarms",
    brand: "Honey",
    type: "Full Body",
    mrp: 794,
    price: 499,
    time: 50
  },
  {
    id: 46,
    name: "Half Arms, Half Legs & Underarms",
    description: "Honey waxing - Half Arms, Half Legs & Underarms",
    brand: "Honey",
    type: "Full Body",
    mrp: 500,
    price: 320,
    time: 30
  },
  {
    id: 47,
    name: "Full arms & Underarms",
    description: "Honey waxing - Full arms & Underarms",
    brand: "Honey",
    type: "Full Arms",
    mrp: 550,
    price: 258,
    time: 30
  },
  {
    id: 48,
    name: "BIKINI",
    description: "Liposoluble waxing - BIKINI",
    brand: "Liposoluble",
    type: "Bikini Line",
    mrp: 1500,
    price: 649,
    time: 20
  },
  {
    id: 49,
    name: "Full Arms",
    description: "Liposoluble waxing - Full Arms",
    brand: "Liposoluble",
    type: "Full Arms",
    mrp: 450,
    price: 295,
    time: 20
  },
  {
    id: 50,
    name: "Full Legs",
    description: "Liposoluble waxing - Full Legs",
    brand: "Liposoluble",
    type: "Full Legs",
    mrp: 550,
    price: 395,
    time: 25
  },
  {
    id: 51,
    name: "Underarms",
    description: "Liposoluble waxing - Underarms",
    brand: "Liposoluble",
    type: "Underarms",
    mrp: 120,
    price: 70,
    time: 10
  },
  {
    id: 52,
    name: "Full Arms, Full Legs, Underarms",
    description: "Liposoluble waxing - Full Arms, Full Legs, Underarms",
    brand: "Liposoluble",
    type: "Full Body",
    mrp: 1150,
    price: 750,
    time: 50
  },
  {
    id: 53,
    name: "Full arms, Half Legs and Underarms",
    description: "Liposoluble waxing - Full arms, Half Legs and Underarms",
    brand: "Liposoluble",
    type: "Full Body",
    mrp: 1200,
    price: 599,
    time: 35
  },
  {
    id: 54,
    name: "Half legs",
    description: "Liposoluble waxing - Half legs",
    brand: "Liposoluble",
    type: "Half Legs",
    mrp: 550,
    price: 225,
    time: 20
  },
  {
    id: 55,
    name: "Full Body (excld.Bikini)",
    description: "Liposoluble waxing - Full Body (excld.Bikini)",
    brand: "Liposoluble",
    type: "Full Body",
    mrp: 2400,
    price: 1100,
    time: 90
  },
  {
    id: 56,
    name: "Full Arms & Underarms",
    description: "Liposoluble waxing - Full Arms & Underarms",
    brand: "Liposoluble",
    type: "Full Arms",
    mrp: 700,
    price: 385,
    time: 30
  },
  {
    id: 57,
    name: "Full Body + Bikini",
    description: "Liposoluble waxing - Full Body + Bikini",
    brand: "Liposoluble",
    type: "Full Body",
    mrp: 2500,
    price: 1699,
    time: 90
  },
  {
    id: 58,
    name: "Full Arms",
    description: "Waxing(Only Services) - Full Arms",
    brand: "Waxing(Only Services)",
    type: "Full Arms",
    mrp: 300,
    price: 150,
    time: 20
  },
  {
    id: 59,
    name: "Full Legs",
    description: "Waxing(Only Services) - Full Legs",
    brand: "Waxing(Only Services)",
    type: "Full Legs",
    mrp: 400,
    price: 199,
    time: 25
  },
  {
    id: 60,
    name: "Underarms",
    description: "Waxing(Only Services) - Underarms",
    brand: "Waxing(Only Services)",
    type: "Underarms",
    mrp: 90,
    price: 50,
    time: 10
  },
  {
    id: 61,
    name: "Full Arms & Underarms",
    description: "Waxing(Only Services) - Full Arms & Underarms",
    brand: "Waxing(Only Services)",
    type: "Full Arms",
    mrp: 400,
    price: 258,
    time: 30
  },
  {
    id: 62,
    name: "Full arms, Full legs and Underarms",
    description: "Waxing(Only Services) - Full arms, Full legs and Underarms",
    brand: "Waxing(Only Services)",
    type: "Full Body",
    mrp: 750,
    price: 390,
    time: 50
  },
  {
    id: 63,
    name: "Full Arms, Half legs & Underarms",
    description: "Waxing(Only Services) - Full Arms, Half legs & Underarms",
    brand: "Waxing(Only Services)",
    type: "Full Body",
    mrp: 500,
    price: 350,
    time: 30
  }
];

const tabLabels = [
  'Top Selling',
  'Rica',
  'Brazilian',
  'Aloe-Vera',
  'Honey',
  'Choco',
  'Liposoluble',
  'Add On'
];

const services = waxingServices.map((service) => ({
  id: service.id,
  name: service.name,
  description: service.description,
  duration: `${service.time} mins`,
  price: service.price,
  mrp: service.mrp,
  discount: Math.floor((1 - service.price / service.mrp) * 100),
  isBestseller: service.price < 1000 && service.mrp > 1500, // Example bestseller logic
  bookings: '40K+ people booked this in last 30 days',
  image: '/images/rica-wax.jpg',
  // Add properties for filtering
  isRica: service.brand === 'Rica' || service.description.toLowerCase().includes('rica'),
  isBrazilian: service.description.toLowerCase().includes('brazilian'),
  isAloeVera: service.description.toLowerCase().includes('aloe') || service.description.toLowerCase().includes('aloe-vera'),
  isHoney: service.brand === 'Honey' || service.description.toLowerCase().includes('honey'),
  isChoco: service.description.toLowerCase().includes('chocolate') || service.description.toLowerCase().includes('choco'),
  isLiposoluble: service.description.toLowerCase().includes('liposoluble'),
  isAddOn: service.price < 500 // Assuming add-ons are lower priced services
}));

const brands = ["All", "Rica", "Aloe Vera", "Brazilian", "Choco", "Honey", "Liposoluble", "Waxing(Only Services)"];
const waxingTypes = [
  "All",
  "Full Body",
  "Full Arms",
  "Half Arms",
  "Full Legs",
  "Half Legs",
  "Underarms",
  "Full Back",
  "Stomach",
  "Bikini Line",
  "Face",
  "Other"
];

const categories = [
  { name: 'Waxing', image: '/assets/category/p1.jpg' },
  { name: 'Facial', image: '/assets/category/p2.jpg' },
  { name: 'Mani-Pedi', image: '/assets/category/p3.jpg' },
  { name: 'Clean-Up', image: '/assets/category/p4.jpg' },
  { name: 'De-Tan/Bleach', image: '/assets/category/p5.jpg' },
  { name: 'Hair', image: '/assets/category/p6.jpg' },
  { name: 'Body Polishing', image: '/assets/category/p7.jpg' },
  { name: 'Threading', image: '/assets/category/p8.jpg' },
  { name: 'Insta Light Pack', image: '/assets/category/p9.jpg' }
];

const WaxingServices = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredServices, setFilteredServices] = useState(services);

  const filterServices = (tabIndex) => {
    let filtered;
    switch (tabLabels[tabIndex]) {
      case 'Top Selling':
        filtered = services.filter(service => service.isBestseller);
        break;
      case 'Rica':
        filtered = services.filter(service => service.isRica);
        break;
      case 'Brazilian':
        filtered = services.filter(service => service.isBrazilian);
        break;
      case 'Aloe-Vera':
        filtered = services.filter(service => service.isAloeVera);
        break;
      case 'Honey':
        filtered = services.filter(service => service.isHoney);
        break;
      case 'Choco':
        filtered = services.filter(service => service.isChoco);
        break;
      case 'Liposoluble':
        filtered = services.filter(service => service.isLiposoluble);
        break;
      case 'Add On':
        filtered = services.filter(service => service.isAddOn);
        break;
      default:
        filtered = services;
    }
    setFilteredServices(filtered);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    filterServices(newValue);
  };

  // Initialize with Top Selling services
  useEffect(() => {
    filterServices(0);
  }, []);

  return (
    <Box sx={{ pb: { xs: 7, md: 0 } }}>
      {/* Header */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">Salon At Home</Typography>
      </Box>

      {/* Service Categories */}
      <ServiceCategories>
        {categories.map((category) => (
          <CategoryItem 
            key={category.name}
            onClick={() => console.log(`Selected category: ${category.name}`)}
          >
            <CategoryImage 
              src={category.image} 
              alt={category.name}
              loading="lazy"
            />
            <Typography 
              variant="body2" 
              align="center"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                maxWidth: '80px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {category.name}
            </Typography>
          </CategoryItem>
        ))}
      </ServiceCategories>

      {/* Filter Tabs */}
      <Box sx={{ px: 2 }}>
        <CategoryTabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons={false}
          sx={{
            maxWidth: '100%',
            '& .MuiTabs-scroller': {
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }
          }}
        >
          <Tab label="Top Selling" />
          <Tab label="Rica" />
          <Tab label="Brazilian" />
          <Tab label="Aloe-Vera" />
          <Tab label="Honey" />
          <Tab label="Choco" />
          <Tab label="Liposoluble" />
          <Tab label="Add On" />
        </CategoryTabs>
      </Box>

      {/* Service Cards */}
      <Box sx={{ p: 2 }}>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id}>
              <ShareButton size="small">
                <ShareIcon fontSize="small" />
              </ShareButton>
              <CardContent sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {service.duration}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {service.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="h6" color="primary">
                        ₹{service.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                        ₹{service.mrp}
                      </Typography>
                      <Chip 
                        label={`${service.discount}% OFF`} 
                        size="small" 
                        color="success"
                        sx={{ borderRadius: 1 }}
                      />
                      {service.isBestseller && (
                        <Chip 
                          label="BESTSELLER" 
                          size="small" 
                          color="warning"
                          sx={{ borderRadius: 1 }}
                        />
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                      {service.bookings}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button color="primary">VIEW DETAILS</Button>
                      <AddButton variant="outlined">
                        ADD
                      </AddButton>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </ServiceCard>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
            No services available in this category
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default WaxingServices;
