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
  image: "/assets/category/p5.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p6.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p7.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p8.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p9.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p10.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p11.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
  image: "/assets/category/p12.jpg",
  process: [
    "A professional therapist will arrive at your location with all necessary waxing equipment.",
    "The session will begin with a skin assessment to determine the right wax type for you.",
    "The therapist will cleanse the area and proceed with the waxing process.",
    "After waxing, a soothing lotion or gel will be applied to reduce redness and irritation.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  preServiceInstructions: [
    "Ensure your hair is at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
    "Avoid applying lotions, oils, or creams to the area before waxing.",
    "Inform the therapist if you have skin allergies, cuts, infections, or are on medication like retinoids.",
    "Waxing may cause temporary redness or sensitivity, which is normal and subsides within a few hours.",
    "Stay in a comfortable and well-lit area for the best service experience.",
    "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
  ],
  afterCare: [
    "Avoid hot showers, saunas, swimming, and workouts for 24 hours post-waxing to prevent irritation.",
    "Wear loose, breathable clothing to minimize friction on freshly waxed skin.",
    "Apply aloe vera gel or a soothing lotion to calm the skin.",
    "Exfoliate the waxed area after 48 hours to prevent ingrown hairs, but do so gently.",
    "Keep the skin moisturized and avoid perfumed products or alcohol-based toners on waxed areas."
  ]
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
