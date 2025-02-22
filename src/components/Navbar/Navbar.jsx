import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  styled,
  Container,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import { Link, useLocation } from 'react-router-dom';
import { useNavbar } from '../../context/NavbarContext';

const StyledAppBar = styled(AppBar)(({ theme, show }) => ({
  backgroundColor: '#000000',
  boxShadow: 'none',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transform: show ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'transform 0.3s ease',
}));

const SearchBox = styled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '50px',
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    margin: theme.spacing(2, 0),
  },
  '&:hover': {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#666',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 5, 1.5, 2),
    fontSize: '0.95rem',
    width: '100%',
    transition: 'all 0.3s ease',
    paddingRight: '48px', // Make room for the search icon
    '&::placeholder': {
      color: '#666',
      opacity: 0.8,
    },
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '40px',
  width: 'auto',
  marginRight: theme.spacing(2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
  },
}));

const NavLink = styled(Link)(({ theme, active }) => ({
  color: active ? '#FF6B6B' : '#fff',
  textDecoration: 'none',
  padding: theme.spacing(0.5, 2),
  borderRadius: '20px',
  fontSize: '0.95rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#FF6B6B',
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '85%',
    maxWidth: '320px',
    background: '#000000',
    color: '#ffffff',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const { showNavbar } = useNavbar();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Offers', path: '/offers', icon: <LocalOfferIcon /> },
    { text: "Tomorrow's Offers", path: '/tomorrows-offers', icon: <EventIcon /> },
  ];

  const drawer = (
    <Box sx={{ pt: 2 }}>
      <Box sx={{ px: 2, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <LogoImage src="/logo.png" alt="Logo" />
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            selected={isActiveRoute(item.path)}
          >
            <ListItemIcon sx={{ color: isActiveRoute(item.path) ? '#FF6B6B' : '#fff', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: isActiveRoute(item.path) ? '#FF6B6B' : '#fff',
                }
              }}
            />
          </StyledListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <SearchBox>
          <StyledInputBase
            placeholder="Search for Services..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </SearchBox>
      </Box>
    </Box>
  );

  return (
    <StyledAppBar show={showNavbar}>
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: '64px', sm: '70px' },
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LogoImage src="/logo.png" alt="Logo" />
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <NavLink 
                    key={item.text} 
                    to={item.path}
                    active={isActiveRoute(item.path)}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </Box>
            )}
          </Box>

          {!isMobile && (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', maxWidth: '600px' }}>
              <SearchBox>
                <StyledInputBase
                  placeholder="Search for Services..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              </SearchBox>
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            {!isMobile && (
              <>
                <NavLink to="/login" active={isActiveRoute('/login')}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Login
                </NavLink>
                <NavLink to="/seller" active={isActiveRoute('/seller')}>
                  Become an Expert
                </NavLink>
              </>
            )}
            <IconButton 
              color="inherit" 
              sx={{ 
                ml: { xs: 0, sm: 1 },
                '&:hover': { color: '#FF6B6B' }
              }}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, '&:hover': { color: '#FF6B6B' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </MobileDrawer>
    </StyledAppBar>
  );
};

export default Navbar;
