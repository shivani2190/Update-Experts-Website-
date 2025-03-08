import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    CardMedia,
    InputBase,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';
import SearchIcon from '@mui/icons-material/Search';
import './Masters.css';

const Services = () => {
    const [servicesData, setServicesData] = useState([
        {
            id: 1,
            name: "Full Arms, Full Legs & Underarms",
            description: "Rica waxing - Full Arms & Full legs, Rica Wax - Underarms",
            originalPrice: 1598,
            discountedPrice: 799,
            duration: 65,
            type: "Rica",
            category: "Waxing",
            serviceType: "Salon At Home",
            image: "/assets/category/p4.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p5.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p6.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p7.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p8.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p9.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p10.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p11.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p12.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p12.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p13.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p14.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p15.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p16.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p17.jpg",
            status: "Active"
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
            serviceType: "Salon At Home",
            image: "/assets/category/p18.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p19.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p20.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p21.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p22.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p23.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p24.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p25.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p26.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p27.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p28.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p29.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p30.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p31.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p32.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p33.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p34.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p35.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p36.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p37.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p38.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p39.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p40.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p41.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p42.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p43.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p44.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p45.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p46.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p47.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p48.jpg",
            status: "Active"
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
            serviceType: "Spa At Home",
            image: "/assets/category/p49.jpg",
            status: "Active"
        },
        {
            id: 48,
            name: "BIKNI",
            description: "Liposoluble waxing - BIKNI",
            originalPrice: 1500,
            discountedPrice: 649,
            duration: 20,
            type: "Liposoluble",
            category: "Waxing",
            serviceType: "Spa At Home",
            image: "/assets/category/p50.jpg",
            status: "Active"
        },
        {
            id: 49,
            name: "Full Arms",
            description: "Liposoluble waxing - Full Arms",
            originalPrice: 450,
            discountedPrice: 295,
            duration: 20,
            type: "Liposoluble",
            category: "Waxing",
            serviceType: "Spa At Home",
            image: "/assets/category/p51.jpg",
            status: "Active"
        },
        {
            id: 50,
            name: "Full Legs",
            description: "Liposoluble waxing - Full Legs",
            originalPrice: 550,
            discountedPrice: 395,
            duration: 25,
            type: "Liposoluble",
            category: "Waxing",
            serviceType: "Spa At Home",
            image: "/assets/category/p52.jpg",
            status: "Active"
        },
        {
            id: 51,
            name: "Underarms",
            description: "Liposoluble waxing - Underarms",
            originalPrice: 120,
            discountedPrice: 70,
            duration: 10,
            type: "Liposoluble",
            category: "Waxing",
            serviceType: "Spa At Home",
            image: "/assets/category/p53.jpg",
            status: "Active"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleDelete = (id) => {
        setServicesData(servicesData.filter(service => service.id !== id));
    };

    const serviceTypes = [
        'Salon At Home',
        'Spa At Home',
        'Adavance Facials',
        'Make Up At Home',
        'Pre-bridal Makeup',
        'Nail Art',
        'Other Services'
    ];

    const types = [
        'Rica',
        'Aloe-Vera',
        'Honey',
        'Brazilian',
        'Choco',
        'Liposoluble'
    ];

    const categories = [
        'Waxing',
        'Facial',
        'Mani-Pedi',
        'Clean-Up',
        'De-Tan/Bleach',
        'Hair',
        'Body Polishing',
        'Threading',
        'Insta Light Pack'
    ];

    const statuses = [
        'Active',
        'Inactive'
    ];

    const filteredServices = servicesData.filter(service => 
        (selectedType === '' || selectedType === 'All' || service.type === selectedType) &&
        (selectedCategory === '' || selectedCategory === 'All' || service.category === selectedCategory) &&
        (selectedService === '' || selectedService === 'All' || service.serviceType === selectedService) &&
        (selectedStatus === '' || selectedStatus === 'All' || service.status === selectedStatus) &&
        (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         service.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const ServiceGrid = ({ services }) => (
        <Grid container spacing={1.5}>
            {services.map((service) => (
                <Grid item xs={12} sm={6} md={3} lg={2.4} key={service.id}>
                    <Card 
                        sx={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 'none',
                            border: '1px solid',
                            borderColor: 'grey.200',
                            borderRadius: 1,
                            '&:hover': {
                                borderColor: 'primary.main'
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={service.image}
                            alt={service.name}
                            sx={{ 
                                objectFit: 'cover',
                                borderBottom: '1px solid',
                                borderColor: 'grey.200'
                            }}
                        />
                        <CardContent sx={{ p: 1.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                    fontWeight: 500,
                                    mb: 0.5,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    fontSize: '0.875rem'
                                }}
                            >
                                {service.name}
                            </Typography>
                            <Typography 
                                variant="caption" 
                                color="text.secondary"
                                sx={{ 
                                    mb: 1,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical'
                                }}
                            >
                                {service.description}
                            </Typography>
                            <Box sx={{ mt: 'auto' }}>
                                <Box sx={{ display: 'flex', gap: 0.5, mb: 1, flexWrap: 'wrap' }}>
                                    <Chip
                                        label={`${service.duration} mins`}
                                        size="small"
                                        sx={{ 
                                            height: 16,
                                            bgcolor: 'grey.900',
                                            color: 'common.white',
                                            '& .MuiChip-label': {
                                                px: 0.75,
                                                py: 0,
                                                fontSize: '0.7rem',
                                                fontWeight: 500
                                            }
                                        }}
                                    />
                                    <Chip
                                        label={service.category}
                                        size="small"
                                        sx={{ 
                                            height: 16,
                                            bgcolor: 'primary.lighter',
                                            color: 'primary.dark',
                                            '& .MuiChip-label': {
                                                px: 0.75,
                                                py: 0,
                                                fontSize: '0.7rem',
                                                fontWeight: 500
                                            }
                                        }}
                                    />
                                    <Chip
                                        label={service.status}
                                        color={service.status === 'Active' ? 'success' : 'default'}
                                        size="small"
                                        sx={{ 
                                            height: 16,
                                            bgcolor: service.status === 'Active' ? 'success.lighter' : 'grey.100',
                                            color: service.status === 'Active' ? 'success.dark' : 'text.secondary',
                                            '& .MuiChip-label': {
                                                px: 0.75,
                                                py: 0,
                                                fontSize: '0.7rem',
                                                fontWeight: 500
                                            }
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography 
                                        variant="caption" 
                                        sx={{ 
                                            color: 'grey.500',
                                            textDecoration: 'line-through',
                                            display: 'block',
                                            fontSize: '0.7rem'
                                        }}
                                    >
                                        ₹{service.originalPrice}
                                    </Typography>
                                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, ml: 1, fontSize: '0.8rem' }}>
                                        ₹{service.discountedPrice}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    const ServiceTable = ({ services }) => (
        <TableContainer 
            component={Paper} 
            sx={{ 
                mt: 2,
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'grey.200',
                '& .MuiTableCell-root': {
                    py: 1.5,
                    px: 2,
                    fontSize: '0.875rem',
                    borderBottom: '1px solid',
                    borderColor: 'grey.200'
                },
                '& .MuiTableHead-root .MuiTableCell-root': {
                    color: 'text.secondary',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }
            }}
        >
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ bgcolor: 'grey.50' }}>
                        <TableCell sx={{ width: '35%' }}>Service Name</TableCell>
                        <TableCell sx={{ width: '15%' }}>Category</TableCell>
                        <TableCell sx={{ width: '15%' }}>Duration</TableCell>
                        <TableCell sx={{ width: '20%' }}>Price</TableCell>
                        <TableCell sx={{ width: '15%' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => (
                        <TableRow 
                            key={service.id}
                            sx={{ 
                                '&:hover': { 
                                    bgcolor: 'grey.50'
                                }
                            }}
                        >
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Box
                                        component="img"
                                        src={service.image}
                                        alt={service.name}
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            objectFit: 'cover',
                                            borderRadius: 0.5,
                                            border: '1px solid',
                                            borderColor: 'grey.200'
                                        }}
                                    />
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            fontWeight: 400,
                                        }}
                                    >
                                        {service.name}
                                    </Typography>
                                </Box>
                            </TableCell>
                            <TableCell>{service.category}</TableCell>
                            <TableCell>{service.duration} mins</TableCell>
                            <TableCell>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
                                        ₹{service.originalPrice}
                                    </Typography>
                                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                                        ₹{service.discountedPrice}
                                    </Typography>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label={service.status}
                                    color={service.status === 'Active' ? 'success' : 'default'}
                                    size="small"
                                    sx={{ 
                                        height: 20,
                                        bgcolor: service.status === 'Active' ? 'success.lighter' : 'grey.100',
                                        color: service.status === 'Active' ? 'success.dark' : 'text.secondary',
                                        '& .MuiChip-label': {
                                            px: 1,
                                            py: 0,
                                            fontSize: '0.75rem',
                                            fontWeight: 500
                                        }
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ color: 'grey.900', fontWeight: 600 }}>Services</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                        bgcolor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.dark' },
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        fontSize: '0.875rem',
                        fontWeight: 500
                    }}
                >
                    New Service
                </Button>
            </Box>
            
            <Box 
                sx={{ 
                    display: 'flex',
                    gap: 2, 
                    mb: 3,
                    flexWrap: { xs: 'wrap', md: 'nowrap' }
                }}
            >
                <FormControl 
                    size="small" 
                    sx={{ 
                        minWidth: { xs: '100%', sm: 120 },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey.300'
                            },
                            '&:hover fieldset': {
                                borderColor: 'grey.400'
                            }
                        }
                    }}
                >
                    <InputLabel sx={{ color: 'text.secondary' }}>Service</InputLabel>
                    <Select
                        value={selectedService}
                        onChange={handleServiceChange}
                        label="Service"
                    >
                        <MenuItem value="">All</MenuItem>
                        {serviceTypes.map((service) => (
                            <MenuItem key={service} value={service}>
                                {service}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl 
                    size="small" 
                    sx={{ 
                        minWidth: { xs: '100%', sm: 120 },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey.300'
                            },
                            '&:hover fieldset': {
                                borderColor: 'grey.400'
                            }
                        }
                    }}
                >
                    <InputLabel sx={{ color: 'text.secondary' }}>Type</InputLabel>
                    <Select
                        value={selectedType}
                        onChange={handleTypeChange}
                        label="Type"
                    >
                        <MenuItem value="">All</MenuItem>
                        {types.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl 
                    size="small" 
                    sx={{ 
                        minWidth: { xs: '100%', sm: 120 },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey.300'
                            },
                            '&:hover fieldset': {
                                borderColor: 'grey.400'
                            }
                        }
                    }}
                >
                    <InputLabel sx={{ color: 'text.secondary' }}>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Category"
                    >
                        <MenuItem value="">All</MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl 
                    size="small" 
                    sx={{ 
                        minWidth: { xs: '100%', sm: 120 },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey.300'
                            },
                            '&:hover fieldset': {
                                borderColor: 'grey.400'
                            }
                        }
                    }}
                >
                    <InputLabel sx={{ color: 'text.secondary' }}>Status</InputLabel>
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        label="Status"
                    >
                        <MenuItem value="">All</MenuItem>
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box 
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: { xs: '100%', sm: 200 },
                        border: '1px solid',
                        borderColor: 'grey.300',
                        borderRadius: 1,
                        px: 1,
                        '&:hover': {
                            borderColor: 'grey.400'
                        },
                        '&:focus-within': {
                            borderColor: 'primary.main',
                            boxShadow: '0 0 0 1px rgba(25, 118, 210, 0.1)'
                        }
                    }}
                >
                    <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                    <InputBase
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        sx={{ 
                            ml: 1,
                            flex: 1,
                            '& .MuiInputBase-input': {
                                py: 0.75,
                                fontSize: '0.875rem',
                                '&::placeholder': {
                                    color: 'text.secondary',
                                    opacity: 1
                                }
                            }
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, ml: { xs: 0, md: 'auto' } }}>
                    <IconButton 
                        onClick={() => setViewMode('grid')}
                        sx={{ 
                            p: 1,
                            color: viewMode === 'grid' ? 'primary.main' : 'grey.400',
                            bgcolor: viewMode === 'grid' ? 'grey.100' : 'transparent',
                            borderRadius: 1,
                            '&:hover': { 
                                bgcolor: viewMode === 'grid' ? 'grey.200' : 'grey.100'
                            }
                        }}
                    >
                        <GridViewIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton
                        onClick={() => setViewMode('table')}
                        sx={{ 
                            p: 1,
                            color: viewMode === 'table' ? 'primary.main' : 'grey.400',
                            bgcolor: viewMode === 'table' ? 'grey.100' : 'transparent',
                            borderRadius: 1,
                            '&:hover': { 
                                bgcolor: viewMode === 'table' ? 'grey.200' : 'grey.100'
                            }
                        }}
                    >
                        <TableViewIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>
            </Box>

            {viewMode === 'grid' ? (
                <ServiceGrid services={filteredServices} />
            ) : (
                <ServiceTable services={filteredServices} />
            )}
        </Box>
    );
};

export default Services;
