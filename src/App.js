import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BeautyFeatures from './components/BeautyFeatures';
import KeyFeatures from './components/KeyFeatures';
import SalonServices from './components/SalonServices';
import HowItWorks from './components/HowItWorks';
import Brands from './components/Brands';
import TrendingServices from './components/TrendingServices';
import TrendingNearYou from './components/TrendingNearYou';
import WhatsNew from './components/WhatsNew';
import Cart from './components/Cart';
import ServicesPage from './components/ServicesPage';
import BottomNavigation from './components/BottomNavigation';
import { Box } from '@mui/material';
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              <KeyFeatures />
              <SalonServices />
              <BeautyFeatures />
              <HowItWorks />
              <Brands />
              <Testimonials />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
        <Footer />
        <BottomNavigation />
      </Box>
    </ThemeProvider>
  );
}

export default App;
