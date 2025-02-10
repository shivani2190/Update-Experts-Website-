import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  styled,
  Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000000',
  boxShadow: 'none',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#ffffff',
  borderRadius: '2px',
  marginLeft: theme.spacing(2),
  width: '600px',
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#000000',
  position: 'absolute',
  right: 0,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
  },
}));

const LogoImage = styled('img')({
  height: '40px',
  width: 'auto',
  marginRight: '10px',
});

const NavLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  marginLeft: theme.spacing(3),
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
}));

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <LogoImage src="/logo.png" alt="Logo" />
          </NavLink>

          <Box sx={{ display: 'flex', gap: 3, ml: 3, mr: 3 }}>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/offers">
              Offers
            </NavLink>
            <NavLink to="/tomorrows-offers">
              Tomorrow's offers
            </NavLink>
          </Box>

          <SearchBox>
            <StyledInputBase
              placeholder="Search for Products, Brands and More"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearch}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </SearchBox>

          <Box sx={{ flexGrow: 1 }} />

          <NavLink to="/login">
            <PersonIcon sx={{ mr: 1 }} />
            Login
          </NavLink>

          <NavLink to="/seller">
            Become an Expert
          </NavLink>

          <NavLink to="/cart">
            <Badge badgeContent={0} color="error" sx={{ mr: 1 }}>
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;