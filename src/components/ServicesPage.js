import React, { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent, Grid, IconButton, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '25px',
    '&:hover fieldset': {
      borderColor: '#FF4D8D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF4D8D',
    },
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const PriceText = styled(Typography)(({ theme }) => ({
  color: '#FF4D8D',
  fontWeight: 'bold',
  fontSize: '1.5rem',
}));

const servicesData = [
  {
  id: 1,
  name: "Full Arms, Full Legs & Underarms",
  description: "Rica waxing - Full Arms & Full legs, Rica Wax - Underarms",
  originalPrice: 1598,
  discountedPrice: 799,
  duration: 65,
  type: "Rica",
  category: "Waxing"
}, 
{
  id: 2,
  name: "Underarms",
  description: "Rica waxing - Underarms",
  originalPrice: 150,
  discountedPrice: 89,
  duration: 10,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p5.jpg"
},
{
  id: 3,
  name: "Full Arms",
  description: "Rica waxing - Full Arms",
  originalPrice: 499,
  discountedPrice: 399,
  duration: 20,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p6.jpg"
},
{
  id: 4,
  name: "Half Arms",
  description: "Rica Waxing - Half Arms",
  originalPrice: 399,
  discountedPrice: 220,
  duration: 10,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p7.jpg"
},
{
  id: 5,
  name: "Full Legs",
  description: "Rica Waxing - Full legs",
  originalPrice: 600,
  discountedPrice: 495,
  duration: 20,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p8.jpg"
},
{
  id: 6,
  name: "Half Legs",
  description: "Rica Waxing - Half Legs",
  originalPrice: 399,
  discountedPrice: 290,
  duration: 15,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p9.jpg"
},
{
  id: 7,
  name: "Full Back",
  description: "Rica Waxing - Full Back",
  originalPrice: 399,
  discountedPrice: 299,
  duration: 15,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p10.jpg"
},
{
  id: 8,
  name: "Stomach (Tummy)",
  description: "Rica Waxing - Stomach",
  originalPrice: 299,
  discountedPrice: 199,
  duration: 15,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p11.jpg"
},
{
  id: 9,
  name: "Bikini Line + Butt",
  description: "Rica Waxing - Bikini Line + Butt",
  originalPrice: 599,
  discountedPrice: 449,
  duration: 20,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p12.jpg"
} , 
{
  id: 10,
  name: "Bikini + Butt",
  description: "Rica Waxing - Bikini Line + Butt",
  originalPrice: 1200,
  discountedPrice: 699,
  duration: 40,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p12.jpg"
},
{
  id: 11,
  name: "Full Body(Excld.Bikni)",
  description: "Rica Waxing - Full Body (Excld.Bikni)",
  originalPrice: 2100,
  discountedPrice: 1499,
  duration: 90,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p13.jpg"
},
{
  id: 12,
  name: "Full Body with Bikini",
  description: "Rica Waxing - Full Body with Bikini",
  originalPrice: 3200,
  discountedPrice: 1799,
  duration: 110,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p14.jpg"
},
{
  id: 13,
  name: "Blouse Line",
  description: "Rica Waxing - Blouse Line",
  originalPrice: 399,
  discountedPrice: 249,
  duration: 20,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p15.jpg"
},
{
  id: 14,
  name: "Full Arms, Half legs, Underarms",
  description: "Rica Waxing - Full Arms, Half legs, Underarms",
  originalPrice: 1100,
  discountedPrice: 699,
  duration: 40,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p16.jpg"
},
{
  id: 15,
  name: "Full arms & Underarms",
  description: "Rica Waxing - Full arms & Underarms",
  originalPrice: 700,
  discountedPrice: 450,
  duration: 30,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p17.jpg"
},
{
  id: 16,
  name: "Full Back & Front",
  description: "Rica Waxing - Full Back & Front",
  originalPrice: 750,
  discountedPrice: 499,
  duration: 25,
  type: "Rica",
  category: "Waxing",
  image: "/assets/category/p18.jpg"
},
{
  id: 17,
  name: "Full Arms (Normal)",
  description: "Aloevera Waxing - Full Arms (Normal)",
  originalPrice: 300,
  discountedPrice: 240,
  duration: 20,
  type: "Aloevera",
  category: "Waxing",
  image: "/assets/category/p19.jpg"
},
{
  id: 18,
  name: "Full Legs (Normal)",
  description: "Aloevera Waxing - Full Legs (Nornal)",
  originalPrice: 550,
  discountedPrice: 340,
  duration: 25,
  type: "Aloevera",
  category: "Waxing",
  image: "/assets/category/p20.jpg"
},
{
  id: 19,
  name: "Half Legs (Normal)",
  description: "Aloevera Waxing - Half Legs (Normal)",
  originalPrice: 450,
  discountedPrice: 200,
  duration: 20,
  type: "Aloevera",
  category: "Waxing",
  image: "/assets/category/p21.jpg"
},
{
  id: 20,
  name: "Full Arms & Underarms (Normal)",
  description: "Aloevera Waxing - Full Arms & Underarams (Normal)",
  originalPrice: 450,
  discountedPrice: 250,
  duration: 25,
  type: "Aloevera",
  category: "Waxing",
  image: "/assets/category/p22.jpg"
},
{
  id: 21,
  name: "Full Face",
  description: "Brazilian waxing - Full Face",
  originalPrice: 450,
  discountedPrice: 249,
  duration: 25,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p23.jpg"
},
{
  id: 22,
  name: "Chin",
  description: "Brazilian waxing - Chin",
  originalPrice: 60,
  discountedPrice: 35,
  duration: 5,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p24.jpg"
},
{
  id: 23,
  name: "Upperlips",
  description: "Brazilian waxing - Upperlips",
  originalPrice: 60,
  discountedPrice: 40,
  duration: 5,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p25.jpg"
},
{
  id: 24,
  name: "Sidelock",
  description: "Brazilian waxing - Sidelock",
  originalPrice: 60,
  discountedPrice: 35,
  duration: 10,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p26.jpg"
},
{
  id: 25,
  name: "Bikni",
  description: "Brazilian waxing - Bikni",
  originalPrice: 999,
  discountedPrice: 799,
  duration: 25,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p27.jpg"
},
{
  id: 26,
  name: "Upperlips and chin",
  description: "Brazilian waxing - Upperlips and chin",
  originalPrice: 150,
  discountedPrice: 70,
  duration: 15,
  type: "Brazilian",
  category: "Waxing",
  image: "/assets/category/p28.jpg"
},
{
  id: 27,
  name: "Half Legs",
  description: "Choco waxing - Half Legs",
  originalPrice: 250,
  discountedPrice: 150,
  duration: 20,
  type: "Choco",
  category: "Waxing",
  image: "/assets/category/p29.jpg"
},
{
  id: 28,
  name: "Full Arms & Underarms",
  description: "Choco waxing - Full Arms & Underarms",
  originalPrice: 299,
  discountedPrice: 290,
  duration: 20,
  type: "Choco",
  category: "Waxing",
  image: "/assets/category/p30.jpg"
},
{
  id: 29,
  name: "Full Legs",
  description: "Choco waxing - Full Legs",
  originalPrice: 399,
  discountedPrice: 299,
  duration: 20,
  type: "Choco",
  category: "Waxing",
  image: "/assets/category/p31.jpg"
},
{
  id: 30,
  name: "Full Arms, Full Legs & Underarms",
  description: "Choco waxing - Full Arms, Full Legs & Underarms",
  originalPrice: 750,
  discountedPrice: 550,
  duration: 40,
  type: "Choco",
  category: "Waxing",
  image: "/assets/category/p32.jpg"
},
{
  id: 31,
  name: "Full Arms, Half Legs & Underarms (Normal)",
  description: "Choco waxing - Full Arms, Half Legs & Underarms (Normal)",
  originalPrice: 800,
  discountedPrice: 300,
  duration: 30,
  type: "Choco",
  category: "Waxing",
  image: "/assets/category/p33.jpg"
},
{
  id: 32,
  name: "Underarms",
  description: "Honey waxing - Underarms",
  originalPrice: 75,
  discountedPrice: 59,
  duration: 10,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p34.jpg"
},
{
  id: 33,
  name: "Full Arms",
  description: "Honey waxing - Full Arms",
  originalPrice: 320,
  discountedPrice: 199,
  duration: 15,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p35.jpg"
},
{
  id: 34,
  name: "Half Arms",
  description: "Honey waxing - Half Arms",
  originalPrice: 200,
  discountedPrice: 150,
  duration: 10,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p36.jpg"
},
{
  id: 35,
  name: "Full Legs",
  description: "Honey waxing - Full Legs",
  originalPrice: 399,
  discountedPrice: 299,
  duration: 20,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p37.jpg"
},
{
  id: 36,
  name: "Half Legs",
  description: "Honey waxing -  Half Legs",
  originalPrice: 299,
  discountedPrice: 199,
  duration: 15,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p38.jpg"
},
{
  id: 37,
  name: "Full Back",
  description: "Honey waxing -  Full Back",
  originalPrice: 299,
  discountedPrice: 199,
  duration: 15,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p39.jpg"
},
{
  id: 38,
  name: "Stomach (Tummy)",
  description: "Honey waxing -  Stomach (Tummy)",
  originalPrice: 250,
  discountedPrice: 150,
  duration: 15,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p40.jpg"
},
{
  id: 39,
  name: "Bikini Line + Butt",
  description: "Honey waxing -  Bikini Line + Butt",
  originalPrice: 450,
  discountedPrice: 350,
  duration: 20,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p41.jpg"
},
{
  id: 40,
  name: "Bikni",
  description: "Honey waxing -  Bikni",
  originalPrice: 1199,
  discountedPrice: 599,
  duration: 25,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p42.jpg"
},
{
  id: 41,
  name: "Bikini + Butt",
  description: "Honey waxing -  Bikini + Butt",
  originalPrice: 999,
  discountedPrice: 649,
  duration: 35,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p43.jpg"
},
{
  id: 42,
  name: "Full Body(Excld.Bikni)",
  description: "Honey waxing -  Full Body (Excld.Bikni)",
  originalPrice: 1199,
  discountedPrice: 999,
  duration: 90,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p44.jpg"
},
{
  id: 43,
  name: "Full Body + Bikini",
  description: "Honey waxing - Full Body + Bikini",
  originalPrice: 1599,
  discountedPrice: 1299,
  duration: 110,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p45.jpg"
},
{
  id: 44,
  name: "Full Arms, Half legs, Underarms",
  description: "Honey waxing -  Full Arms, Half legs, Underarms",
  originalPrice: 694,
  discountedPrice: 399,
  duration: 50,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p46.jpg"
},
{
  id: 45,
  name: "Full Arms ,Full legs, Underarms",
  description: "Honey waxing - Full Arms ,Full legs, Underarms",
  originalPrice: 794,
  discountedPrice: 499,
  duration: 50,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p47.jpg"
},
{
  id: 46,
  name: "Half Arms, Half Legs & Underarms",
  description: "Honey waxing - Half Arms, Half Legs & Underarms",
  originalPrice: 500,
  discountedPrice: 320,
  duration: 30,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p48.jpg"
},
{
  id: 47,
  name: "Full arms & Underarms",
  description: "Honey waxing - Full arms & Underarms",
  originalPrice: 550,
  discountedPrice: 258,
  duration: 30,
  type: "Honey",
  category: "Waxing",
  image: "/assets/category/p49.jpg"
},
{
  id: 48,
  name: "BIKNI",
  description: "Liposoluble waxing - BIKNI",
  originalPrice: 1500,
  discountedPrice: 649,
  duration: 20,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p50.jpg"
},
{
  id: 49,
  name: "Full Arms",
  description: "Liposoluble waxing - Full Arms",
  originalPrice: 450,
  discountedPrice: 295,
  duration: 20,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p51.jpg"
},
{
  id: 50,
  name: "Full Legs",
  description: "Liposoluble waxing - Full Legs",
  originalPrice: 550,
  discountedPrice: 395,
  duration: 25,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p52.jpg"
},
{
  id: 51,
  name: "Underarms",
  description: "Liposoluble waxing - Underarms",
  originalPrice: 120,
  discountedPrice: 70,
  duration: 10,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p53.jpg"
},
{
  id: 52,
  name: "Full Arms, Full Legs, Underarms",
  description: "Liposoluble waxing - Full Arms, Full Legs, Underarms",
  originalPrice: 1150,
  discountedPrice: 750,
  duration: 50,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p54.jpg"
},
{
  id: 53,
  name: "Full arms, Half Legs and Underarms",
  description: "Liposoluble waxing - Full arms, Half Legs and Underarms",
  originalPrice: 1200,
  discountedPrice: 599,
  duration: 35,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p55.jpg"
},
{
  id: 54,
  name: "Half legs",
  description: "Liposoluble waxing - Half legs",
  originalPrice: 350,
  discountedPrice: 225,
  duration: 20,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p56.jpg"
},
{
  id: 55,
  name: "Full Body (excld.Bikni)",
  description: "Liposoluble waxing - Full Body (excld.Bikni)",
  originalPrice: 2400,
  discountedPrice: 1100,
  duration: 90,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p57.jpg"
},
{
  id: 56,
  name: "Full Arms & Underarms",
  description: "Liposoluble waxing - Full Arms & Underarms",
  originalPrice: 700,
  discountedPrice: 385,
  duration: 30,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p58.jpg"
},
{
  id: 57,
  name: "Full Body + Bikni",
  description: "Liposoluble waxing - Full Body + Bikni",
  originalPrice: 2500,
  discountedPrice: 1699,
  duration: 90,
  type: "liposoluble",
  category: "Waxing",
  image: "/assets/category/p59.jpg"
},
{
  id: 58,
  name: "Full Arms",
  description: "Waxing(Only Services) - Full Arms",
  originalPrice: 300,
  discountedPrice: 150,
  duration: 20,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p60.jpg"
},
{
  id: 59,
  name: "Full Legs",
  description: "Waxing(Only Services) - Full Legs",
  originalPrice: 400,
  discountedPrice: 199,
  duration: 25,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p61.jpg"
},
{
  id: 60,
  name: "Underarms",
  description: "Waxing(Only Services) - Underarms",
  originalPrice: 90,
  discountedPrice: 50,
  duration: 10,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p62.jpg"
},
{
  id: 61,
  name: "Full Arms & Underarms",
  description: "Waxing(Only Services) - Full Arms & Underarms",
  originalPrice: 400,
  discountedPrice: 258,
  duration: 30,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p63.jpg"
},
{
  id: 62,
  name: "Full arms, Full legs and Underarms",
  description: "Waxing(Only Services) - Full arms, Full legs and Underarms",
  originalPrice: 750,
  discountedPrice: 390,
  duration: 50,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p64.jpg"
},
{
  id: 63,
  name: "Full Arms, Half legs & Underarms",
  description: "Waxing(Only Services) - Full Arms, Half legs & Underarms",
  originalPrice: 500,
  discountedPrice: 350,
  duration: 30,
  type: "Waxing(Only Services)",
  category: "Waxing",
  image: "/assets/category/p65.jpg"
}
  // Add more services here
];

function ServicesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(servicesData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = servicesData.filter(service => 
      service.name.toLowerCase().includes(term) ||
      service.description.toLowerCase().includes(term) ||
      service.type.toLowerCase().includes(term) ||
      service.category.toLowerCase().includes(term)
    );
    setFilteredServices(filtered);
  };

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Our Services
      </Typography>
      
      <SearchBar
        fullWidth
        placeholder="Search services..."
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

<Grid container spacing={3}>
        {filteredServices.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard onClick={() => handleServiceClick(service.id)}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {service.description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                      ₹{service.originalPrice}
                    </Typography>
                    <PriceText>
                      ₹{service.discountedPrice}
                    </PriceText>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {service.duration} mins
                  </Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                  <Typography variant="caption" sx={{ backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '12px' }}>
                    {service.type}
                  </Typography>
                  <Typography variant="caption" sx={{ backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '12px' }}>
                    {service.category}
                  </Typography>
                </Box>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}

export default ServicesPage;
