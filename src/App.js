import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import BeautyProducts from './components/BeautyProducts/BeautyProducts';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Brands from './components/Brands/Brands';
import TrendingServices from './components/TrendingServices/TrendingServices';
import TrendingNearYou from './components/TrendingNearYou/TrendingNearYou';
import WhatsNew from './components/WhatsNew/WhatsNew';
import Cart from './components/Cart/Cart';
import ServicesPage from './pages/ServicesPage';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import { Box } from '@mui/material';
import ServiceDetails from './pages/ServiceDetails';
import OtherServices from './pages/OtherServices';
import HomeSalonServices from './components/HomeSalonServices/HomeSalonServices';
import { NavbarProvider } from './context/NavbarContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarProvider>
        <Box sx={{ 
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          pb: { xs: 7, md: 0 } // Add padding bottom for mobile to account for bottom navigation
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CategoryBar />
                <TrendingServices />
                <TrendingNearYou />
                <WhatsNew />
                <HomeSalonServices />
                <WhyChooseUs />
                <BeautyProducts />
                <HowItWorks />
                <Brands />
                <Testimonials />
              </>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/services/other" element={<OtherServices />} />
          </Routes>
          <Footer />
          <BottomNavigation />
        </Box>
      </NavbarProvider>
    </ThemeProvider>
  );
}

export default App;
