import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon,
  ListItemText, 
  Button, 
  styled,
  Snackbar,
  Alert
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF4D8D',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#FF1F71',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  borderRadius: '16px',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
  },
}));

const ServiceImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const BulletPoint = styled(FiberManualRecordIcon)(({ theme }) => ({
  fontSize: '8px',
  marginRight: theme.spacing(1),
  color: '#FF4D8D',
}));

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const servicesData = [
    {
      id: 1,
      name: "Full Arms, Full Legs & Underarms",
      description: "Rica waxing - Full Arms & Full legs, Rica Wax - Underarms",
      originalPrice: 1598,
      discountedPrice: 799,
      duration: 65,
      type: "Rica",
      category: "Waxing",
      image: "/assets/category/p4.jpg", // Add appropriate image path
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
      },
      {
        id: 10,
        name: "Bikini + Butt",
        description: "Rica Waxing - Bikini Line + Butt",
        originalPrice: 1200,
        discountedPrice: 699,
        duration: 40,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p13.jpg",
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
        id: 11,
        name: "Full Body (Excld.Bikni)",
        description: "Rica Waxing - Full Body (Excld.Bikni)",
        originalPrice: 2100,
        discountedPrice: 1499,
        duration: 90,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p14.jpg",
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
        id: 12,
        name: "Full Body with Bikini",
        description: "Rica Waxing - Full Body with Bikini",
        originalPrice: 3200,
        discountedPrice: 1799,
        duration: 110,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p15.jpg",
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
        id: 13,
        name: "Blouse Line",
        description: "Rica Waxing - Blouse Line",
        originalPrice: 399,
        discountedPrice: 249,
        duration: 20,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p16.jpg",
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
        id: 14,
        name: "Full Arms, Half legs, Underarms",
        description: "Rica Waxing - Full Arms, Half legs, Underarms",
        originalPrice: 1100,
        discountedPrice: 699,
        duration: 40,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p17.jpg",
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
        id: 15,
        name: "Full arms & Underarms",
        description: "Rica Waxing - Full arms & Underarms",
        originalPrice: 700,
        discountedPrice: 450,
        duration: 30,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p18.jpg",
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
        id: 16,
        name: "Full Back & Front",
        description: "Rica Waxing - Full Back & Front",
        originalPrice: 750,
        discountedPrice: 499,
        duration: 25,
        type: "Rica",
        category: "Waxing",
        image: "/assets/category/p19.jpg",
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
        id: 17,
        name: "Full Arms (Normal)",
        description: "Aloevera Waxing - Full Arms (Normal)",
        originalPrice: 300,
        discountedPrice: 240,
        duration: 20,
        type: "Aloevera",
        category: "Waxing",
        image: "/assets/category/p20.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Aloe Vera waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Aloe Vera wax.",
          "The therapist will cleanse the skin to remove oil, sweat, or dirt.",
          "Warm Aloe Vera wax will be applied in the direction of hair growth, followed by gentle removal using waxing strips.",
          "Post-waxing, a soothing Aloe Vera gel or lotion will be applied to calm the skin and reduce redness.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for best results.",
          "Aloe Vera wax is gentler on sensitive skin and provides a soothing effect compared to regular wax.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are on any skin medication.",
          "Some mild redness or sensitivity may occur but typically fades within a few hours.",
          "Choose a clean, comfortable, and well-ventilated space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and exercise for at least 24 hours to prevent irritation.",
          "Wear loose, breathable cotton clothing to minimize friction on waxed skin.",
          "Apply pure Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate after 48 hours with a mild scrub to prevent ingrown hairs, but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based toners on waxed areas for at least a day.",
          "Stay hydrated and keep the skin moisturized for long-lasting smoothness."
        ]
      },
      {
        id: 18,
        name: "Full Legs (Normal)",
        description: "Aloevera Waxing - Full Legs (Normal)",
        originalPrice: 550,
        discountedPrice: 340,
        duration: 25,
        type: "Aloevera",
        category: "Waxing",
        image: "/assets/category/p21.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Aloe Vera waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Aloe Vera wax.",
          "The therapist will cleanse the skin to remove oil, sweat, or dirt.",
          "Warm Aloe Vera wax will be applied in the direction of hair growth, followed by gentle removal using waxing strips.",
          "Post-waxing, a soothing Aloe Vera gel or lotion will be applied to calm the skin and reduce redness.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for best results.",
          "Aloe Vera wax is gentler on sensitive skin and provides a soothing effect compared to regular wax.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are on any skin medication.",
          "Some mild redness or sensitivity may occur but typically fades within a few hours.",
          "Choose a clean, comfortable, and well-ventilated space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and exercise for at least 24 hours to prevent irritation.",
          "Wear loose, breathable cotton clothing to minimize friction on waxed skin.",
          "Apply pure Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate after 48 hours with a mild scrub to prevent ingrown hairs, but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based toners on waxed areas for at least a day.",
          "Stay hydrated and keep the skin moisturized for long-lasting smoothness."
        ]
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
        image: "/assets/category/p22.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Aloe Vera waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Aloe Vera wax.",
          "The therapist will cleanse the skin to remove oil, sweat, or dirt.",
          "Warm Aloe Vera wax will be applied in the direction of hair growth, followed by gentle removal using waxing strips.",
          "Post-waxing, a soothing Aloe Vera gel or lotion will be applied to calm the skin and reduce redness.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for best results.",
          "Aloe Vera wax is gentler on sensitive skin and provides a soothing effect compared to regular wax.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are on any skin medication.",
          "Some mild redness or sensitivity may occur but typically fades within a few hours.",
          "Choose a clean, comfortable, and well-ventilated space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and exercise for at least 24 hours to prevent irritation.",
          "Wear loose, breathable cotton clothing to minimize friction on waxed skin.",
          "Apply pure Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate after 48 hours with a mild scrub to prevent ingrown hairs, but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based toners on waxed areas for at least a day.",
          "Stay hydrated and keep the skin moisturized for long-lasting smoothness."
        ]
      },
      {
        id: 20,
        name: "Full Arms & Underarms (Normal)",
        description: "Aloevera Waxing - Full Arms & Underarms (Normal)",
        originalPrice: 450,
        discountedPrice: 250,
        duration: 25,
        type: "Aloevera",
        category: "Waxing",
        image: "/assets/category/p23.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Aloe Vera waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Aloe Vera wax.",
          "The therapist will cleanse the skin to remove oil, sweat, or dirt.",
          "Warm Aloe Vera wax will be applied in the direction of hair growth, followed by gentle removal using waxing strips.",
          "Post-waxing, a soothing Aloe Vera gel or lotion will be applied to calm the skin and reduce redness.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for best results.",
          "Aloe Vera wax is gentler on sensitive skin and provides a soothing effect compared to regular wax.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are on any skin medication.",
          "Some mild redness or sensitivity may occur but typically fades within a few hours.",
          "Choose a clean, comfortable, and well-ventilated space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and exercise for at least 24 hours to prevent irritation.",
          "Wear loose, breathable cotton clothing to minimize friction on waxed skin.",
          "Apply pure Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate after 48 hours with a mild scrub to prevent ingrown hairs, but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based toners on waxed areas for at least a day.",
          "Stay hydrated and keep the skin moisturized for long-lasting smoothness."
        ]
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
        image: "/assets/category/p24.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
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
        image: "/assets/category/p25.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
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
        image: "/assets/category/p26.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
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
        image: "/assets/category/p27.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
      },
      {
        id: 25,
        name: "Bikini",
        description: "Brazilian waxing - Bikini",
        originalPrice: 999,
        discountedPrice: 799,
        duration: 25,
        type: "Brazilian",
        category: "Waxing",
        image: "/assets/category/p28.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
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
        image: "/assets/category/p29.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic Brazilian waxing kit.",
          "The session will begin with a skin assessment to ensure suitability for Brazilian waxing.",
          "The therapist will cleanse the area to remove oil, sweat, or dirt for better wax adhesion.",
          "Warm wax will be applied in sections, following the natural hair growth pattern, and removed swiftly for minimal discomfort.",
          "A soothing post-wax gel or lotion will be applied to reduce redness and irritation.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Brazilian waxing removes all or most pubic hair, including from the front, back, and in-between. You can customize the style based on your preference.",
          "Avoid applying lotions, oils, or creams to the area before waxing.",
          "If you have skin sensitivity, cuts, infections, or are on medications like retinoids, inform the therapist before starting.",
          "Waxing might cause temporary redness, sensitivity, or slight discomfort, but this usually subsides within a few hours.",
          "Schedule your session at least two days before a special event to allow any redness or irritation to heal."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, or workouts for 24-48 hours to prevent irritation.",
          "Wear loose, breathable cotton underwear to reduce friction and allow the skin to recover.",
          "Apply pure Aloe Vera gel or fragrance-free moisturizer to soothe the area.",
          "Avoid touching or scratching the waxed area to prevent irritation or infection.",
          "Exfoliate the area gently after 48 hours to prevent ingrown hairs but avoid harsh scrubbing.",
          "Do not use perfumed products, deodorants, or alcohol-based lotions on the waxed area for at least 24 hours.",
          "Stay hydrated and moisturize daily to maintain soft and smooth skin."
        ]
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
        image: "/assets/category/p30.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Choco wax kit.",
          "The session begins with a skin assessment to ensure Choco wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm chocolate-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin nourished.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Choco wax is gentler on sensitive skin and enriched with antioxidants to nourish and hydrate the skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are using retinoid-based medications.",
          "Waxing may cause temporary redness or mild sensitivity, which typically fades within a few hours.",
          "Choose a clean and comfortable space for the service to ensure a smooth experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and workouts for 24 hours to prevent irritation.",
          "Wear loose cotton clothing to minimize friction on waxed areas.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed skin for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p31.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Choco wax kit.",
          "The session begins with a skin assessment to ensure Choco wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm chocolate-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin nourished.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Choco wax is gentler on sensitive skin and enriched with antioxidants to nourish and hydrate the skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are using retinoid-based medications.",
          "Waxing may cause temporary redness or mild sensitivity, which typically fades within a few hours.",
          "Choose a clean and comfortable space for the service to ensure a smooth experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and workouts for 24 hours to prevent irritation.",
          "Wear loose cotton clothing to minimize friction on waxed areas.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed skin for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p32.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Choco wax kit.",
          "The session begins with a skin assessment to ensure Choco wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm chocolate-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin nourished.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Choco wax is gentler on sensitive skin and enriched with antioxidants to nourish and hydrate the skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are using retinoid-based medications.",
          "Waxing may cause temporary redness or mild sensitivity, which typically fades within a few hours.",
          "Choose a clean and comfortable space for the service to ensure a smooth experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and workouts for 24 hours to prevent irritation.",
          "Wear loose cotton clothing to minimize friction on waxed areas.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed skin for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p33.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Choco wax kit.",
          "The session begins with a skin assessment to ensure Choco wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm chocolate-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin nourished.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Choco wax is gentler on sensitive skin and enriched with antioxidants to nourish and hydrate the skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are using retinoid-based medications.",
          "Waxing may cause temporary redness or mild sensitivity, which typically fades within a few hours.",
          "Choose a clean and comfortable space for the service to ensure a smooth experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and workouts for 24 hours to prevent irritation.",
          "Wear loose cotton clothing to minimize friction on waxed areas.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed skin for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p34.jpg",
        process: [
          "A professional therapist will arrive at your location with a hygienic Choco wax kit.",
          "The session begins with a skin assessment to ensure Choco wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm chocolate-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin nourished.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for the best results.",
          "Choco wax is gentler on sensitive skin and enriched with antioxidants to nourish and hydrate the skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin conditions, sunburn, cuts, or are using retinoid-based medications.",
          "Waxing may cause temporary redness or mild sensitivity, which typically fades within a few hours.",
          "Choose a clean and comfortable space for the service to ensure a smooth experience."
        ],
        afterCare: [
          "Avoid hot showers, steam, swimming, and workouts for 24 hours to prevent irritation.",
          "Wear loose cotton clothing to minimize friction on waxed areas.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed skin for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p35.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic honey wax kit.",
          "The session will begin with a skin assessment to ensure honey wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm natural honey-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin hydrated.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
          "Honey wax is gentle on the skin and has antibacterial properties, making it ideal for sensitive skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin allergies, infections, sunburn, or are using retinoid-based medications.",
          "Some temporary redness or mild irritation may occur but usually fades within a few hours.",
          "Choose a clean and well-lit space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, and exercise for 24 hours to prevent irritation.",
          "Wear loose, breathable clothing to minimize friction on waxed skin.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the waxed area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed areas for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p36.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic honey wax kit.",
          "The session will begin with a skin assessment to ensure honey wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm natural honey-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin hydrated.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
          "Honey wax is gentle on the skin and has antibacterial properties, making it ideal for sensitive skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin allergies, infections, sunburn, or are using retinoid-based medications.",
          "Some temporary redness or mild irritation may occur but usually fades within a few hours.",
          "Choose a clean and well-lit space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, and exercise for 24 hours to prevent irritation.",
          "Wear loose, breathable clothing to minimize friction on waxed skin.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the waxed area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed areas for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p37.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic honey wax kit.",
          "The session will begin with a skin assessment to ensure honey wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm natural honey-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin hydrated.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
          "Honey wax is gentle on the skin and has antibacterial properties, making it ideal for sensitive skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin allergies, infections, sunburn, or are using retinoid-based medications.",
          "Some temporary redness or mild irritation may occur but usually fades within a few hours.",
          "Choose a clean and well-lit space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, and exercise for 24 hours to prevent irritation.",
          "Wear loose, breathable clothing to minimize friction on waxed skin.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the waxed area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed areas for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
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
        image: "/assets/category/p38.jpg",
        process: [
          "A professional waxing expert will arrive at your home with a hygienic honey wax kit.",
          "The session will begin with a skin assessment to ensure honey wax is suitable for your skin type.",
          "The therapist will cleanse the area to remove oil, dirt, and sweat for better wax adherence.",
          "Warm natural honey-infused wax will be applied in the direction of hair growth and removed using waxing strips.",
          "A soothing post-wax lotion or gel will be applied to reduce redness and keep the skin hydrated.",
          "AC is highly recommened for waxing services durring summers, monsoon & even in winters."
        ],
        preServiceInstructions: [
          "Hair should be at least ¼ inch long (about the size of a grain of rice) for effective waxing.",
          "Honey wax is gentle on the skin and has antibacterial properties, making it ideal for sensitive skin.",
          "Avoid applying lotions, oils, or creams before the waxing session.",
          "Inform the therapist if you have skin allergies, infections, sunburn, or are using retinoid-based medications.",
          "Some temporary redness or mild irritation may occur but usually fades within a few hours.",
          "Choose a clean and well-lit space for the best waxing experience."
        ],
        afterCare: [
          "Avoid hot showers, saunas, swimming, and exercise for 24 hours to prevent irritation.",
          "Wear loose, breathable clothing to minimize friction on waxed skin.",
          "Apply Aloe Vera gel or a fragrance-free moisturizer to soothe and hydrate the skin.",
          "Exfoliate the waxed area after 48 hours using a mild scrub to prevent ingrown hairs.",
          "Avoid perfumed products, deodorants, or alcohol-based toners on waxed areas for at least 24 hours.",
          "Keep the skin moisturized and hydrated for long-lasting smoothness."
        ]
      },
      

  ];

  const serviceData = servicesData.find(service => service.id === parseInt(id));

  if (!serviceData) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5">Service not found</Typography>
      </Container>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <BackButton 
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/services')}
      >
        Back to Services
      </BackButton>
      
      <StyledPaper>
        <ImageContainer>
          <ServiceImage 
            src={serviceData.image} 
            alt={serviceData.name}
            onError={(e) => {
              e.target.src = '/images/services/default-service.jpg'; // Fallback image
            }}
          />
        </ImageContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
              {serviceData.name}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                ₹{serviceData.discountedPrice}
              </Typography>
              <Typography 
                component="span" 
                sx={{ 
                  textDecoration: 'line-through', 
                  color: 'text.secondary',
                  fontSize: '1.2rem'
                }}
              >
                ₹{serviceData.originalPrice}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Typography variant="body2" sx={{ backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '16px' }}>
                {serviceData.type}
              </Typography>
              <Typography variant="body2" sx={{ backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '16px' }}>
                {serviceData.category}
              </Typography>
              <Typography variant="body2" sx={{ backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '16px' }}>
                {serviceData.duration} mins
              </Typography>
            </Box>
          </Box>

          <AddToCartButton
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </AddToCartButton>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
            Service Process
          </Typography>
          <List>
            {serviceData.process.map((step, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <BulletPoint />
                </ListItemIcon>
                <ListItemText 
                  primary={step}
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      color: '#555',
                      fontSize: '1rem',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
            Pre-Service Instructions
          </Typography>
          <List>
            {serviceData.preServiceInstructions.map((instruction, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <BulletPoint />
                </ListItemIcon>
                <ListItemText 
                  primary={instruction}
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      color: '#555',
                      fontSize: '1rem',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
            After Care Instructions
          </Typography>
          <List>
            {serviceData.afterCare.map((care, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: '24px' }}>
                  <BulletPoint />
                </ListItemIcon>
                <ListItemText 
                  primary={care}
                  sx={{ 
                    '& .MuiListItemText-primary': { 
                      color: '#555',
                      fontSize: '1rem',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </StyledPaper>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Service added to cart successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ServiceDetails;