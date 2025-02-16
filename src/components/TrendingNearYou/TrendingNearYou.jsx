import React from 'react';
import { Box, Container, Typography, Chip, styled, Card } from '@mui/material';

const ServiceCard = styled(Box)({
  display: 'flex',
  width: '100%',
  minWidth: '300px',
  maxWidth: '380px',
  height: '120px',
  marginRight: '16px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  '@media (max-width: 600px)': {
    minWidth: '280px',
    maxWidth: '320px',
  }
});

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '120px',
  height: '120px',
  '&:hover .add-button': {
    background: '#FF4D8D',
    color: '#ffffff',
  }
});

const ServiceImage = styled('img')({
  width: '120px',
  height: '120px',
  objectFit: 'cover',
});

const AddButton = styled(Box)({
  position: 'absolute',
  bottom: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '4px 16px',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  color: '#FF4D8D',
  border: '1px solid #FF4D8D',
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  zIndex: 1,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const ServiceContent = styled(Box)({
  flex: 1,
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: 0, // This helps with text truncation
});

const ServiceTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: '4px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ServiceDescription = styled(Typography)({
  color: '#666',
  fontSize: '0.85rem',
  marginBottom: '8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const PriceContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: 'auto',
});

const Duration = styled(Typography)({
  color: '#666',
  fontSize: '0.85rem',
  marginLeft: 'auto',
});

const DiscountTag = styled(Box)({
  position: 'absolute',
  top: 12,
  right: 12,
  background: '#4CAF50',
  color: '#fff',
  padding: '2px 6px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 500,
});

const categories = [
  { id: 1, name: 'Waxing', active: true },
  { id: 2, name: 'Mani-Pedi' },
  { id: 3, name: 'Facial' },
  { id: 4, name: 'Hair' },
  { id: 5, name: 'Body Polishing' },
  { id: 6, name: 'Massage' },
  { id: 7, name: 'Threading' },
  { id: 8, name: 'Makeup' }
];

const services = [
  {
    id: 1,
    name: 'Rica Roll-On - Waxing',
    description: 'Full Arms + Full Legs + Underarms',
    image: '/assets/category/p7.jpg',
    price: 899,
    originalPrice: 1599,
    duration: '1hr 5mins',
    discount: '43% Off',
    tag: 'Rica Roll-On',
    rating: 4.8,
    reviews: 2345
  },
  {
    id: 2,
    name: 'Rica Roll-On - Waxing',
    description: 'Full Arms + Underarms',
    image: '/assets/category/p5.jpg',
    price: 499,
    originalPrice: 799,
    duration: '30mins',
    discount: '35% Off',
    tag: 'Rica Roll-On',
    rating: 4.7,
    reviews: 1890
  },
  {
    id: 3,
    name: 'Classic Manicure & Pedicure',
    description: 'Relaxing hand & foot treatment',
    image: '/assets/category/p7.jpg',
    price: 799,
    originalPrice: 1299,
    duration: '1hr 15mins',
    discount: '38% Off',
    tag: 'Bestseller',
    rating: 4.9,
    reviews: 3120
  },
  {
    id: 4,
    name: 'Diamond Facial',
    description: 'Premium facial for glowing skin',
    image: '/assets/category/p3.jpg',
    price: 1299,
    originalPrice: 2499,
    duration: '1hr',
    discount: '48% Off',
    tag: 'Premium',
    rating: 4.8,
    reviews: 1567
  },
  {
    id: 5,
    name: 'Hair Spa Treatment',
    description: 'Deep conditioning & head massage',
    image: '/assets/category/p4.jpg',
    price: 999,
    originalPrice: 1799,
    duration: '45mins',
    discount: '44% Off',
    tag: 'Trending',
    rating: 4.6,
    reviews: 2789
  }
];

const TrendingNearYou = () => {
  const [activeCategory, setActiveCategory] = React.useState('Waxing');

  return (
    <Box sx={{ py: 3, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: '#000000'
          }}
        >
          Trending Near You
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 3, overflowX: 'auto', pb: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category.id}
              label={category.name}
              onClick={() => setActiveCategory(category.name)}
              sx={{
                background: category.name === activeCategory ? 'rgba(255, 77, 141, 0.1)' : '#F5F5F5',
                color: category.name === activeCategory ? '#FF4D8D' : '#666666',
                fontWeight: 500,
                borderRadius: '20px',
                '&:hover': {
                  background: category.name === activeCategory ? 'rgba(255, 77, 141, 0.2)' : '#EEEEEE',
                }
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            pb: 1,
            '::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ImageContainer>
                <ServiceImage
                  src={service.image}
                  alt={service.name}
                />
                <AddButton className="add-button">ADD</AddButton>
              </ImageContainer>
              <ServiceContent>
                <Box>
                  <ServiceTitle>
                    {service.name}
                  </ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                </Box>
                <PriceContainer>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#333',
                      display: 'inline',
                    }}
                  >
                    ₹{service.price}
                  </Typography>
                  <Duration>
                    {service.duration}
                  </Duration>
                </PriceContainer>
                <DiscountTag>{service.discount}% Off</DiscountTag>
              </ServiceContent>
            </ServiceCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingNearYou;
