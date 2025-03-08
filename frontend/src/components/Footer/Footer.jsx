import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, styled, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useCurrentRoute from '../../hooks/useCurrentRoute';

const FooterContainer = styled(Box)`
  background: #000000;
  padding: 48px 0 24px 0;
  color: #ffffff;
`;

const FooterTitle = styled(Typography)`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

const SocialButton = styled(IconButton)`
  color: #ffffff;
  transition: all 0.3s ease;
  margin-right: 8px;
  
  &:hover {
    color: #f5f5f5;
    transform: translateY(-2px);
  }
`;

const ContactItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #f5f5f5;
  
  .MuiSvgIcon-root {
    margin-right: 12px;
    color: #ffffff;
  }
`;

const ServiceLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  margin-right: 16px;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

const FooterBottom = styled(Box)`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #f5f5f5;
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const currentRoute = useCurrentRoute();
  
  // Hide footer on mobile when on waxing services page
  if (isMobile && currentRoute === '/services/waxing') {
    return null;
  }

  const services = [
    'Facial At Home',
    'Waxing At Home',
    'Mani-Pedi At Home',
    'Home Salon Packages',
    'Threading',
    'Festive Beauty package',
    'Pre Bridal Packages',
    'Hair Color',
    'Hair Cutting',
    'Makeup'
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Contact Us</FooterTitle>
            <ContactItem>
              <LocationOnIcon />
              <Typography variant="body2">Gurugram</Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <Typography variant="body2">+91 9667934441</Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <Typography variant="body2">+91 9667917770 (For Booking)</Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon />
              <Typography variant="body2">info@theexperts.in</Typography>
            </ContactItem>
            <ContactItem>
              <AccessTimeIcon />
              <Typography variant="body2">Mon-Sun : 09:30am - 08:00pm</Typography>
            </ContactItem>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Quick Links</FooterTitle>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/become-expert">Become a Expert</FooterLink>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Company</FooterTitle>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Follow Us</FooterTitle>
            <Box sx={{ mb: 3 }}>
              <SocialButton href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </SocialButton>
              <SocialButton href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </SocialButton>
              <SocialButton href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </SocialButton>
              <SocialButton href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </SocialButton>
              <SocialButton href="https://pinterest.com" target="_blank">
                <PinterestIcon />
              </SocialButton>
            </Box>
          </Grid>
        </Grid>

        {/* Services Links */}
        <Box sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mb: 3
        }}>
          {services.map((service, index) => (
            <ServiceLink key={index} href={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`}>
              {service}
              {index < services.length - 1 && ' |'}
            </ServiceLink>
          ))}
        </Box>

        {/* Copyright */}
        <FooterBottom>
          <Typography 
            variant="body2" 
            align="center"
          >
            Copyright: ATR Technologies 2024, All rights reserved
          </Typography>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
