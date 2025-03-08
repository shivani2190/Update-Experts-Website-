import React from 'react';
import { Paper, BottomNavigation as MuiBottomNavigation, BottomNavigationAction, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WomanIcon from '@mui/icons-material/Woman';
import { Store, HomeOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';

const StyledBottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#ffffff',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  '& .MuiBottomNavigationAction-root': {
    color: '#666666',
    '&.Mui-selected': {
      color: '#FF4D8D',
    },
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const BottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper elevation={3} sx={{ display: { md: 'none' } }}>
      <StyledBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction 
          label="Women" 
          icon={<WomanIcon />} 
          component={Link} 
          to="/"
        />
        <BottomNavigationAction 
          label="Store" 
          icon={<Store />} 
          component={Link} 
          to="/store"
        />
        <BottomNavigationAction 
          label="Cart" 
          icon={<ShoppingCartIcon />}
          component={Link}
          to="/cart"
          sx={{
            '& .MuiBottomNavigationAction-label': {
              marginTop: '-12px'
            },
            '& .MuiSvgIcon-root': {
              position: 'relative',
              backgroundColor: '#FF4D8D',
              color: '#fff',
              padding: '8px',
              borderRadius: '50%',
              transform: 'translateY(-15px)',
              width: '40px',
              height: '40px',
            }
          }}
        />
        <BottomNavigationAction 
          label="Booking" 
          icon={<CalendarTodayIcon />}
          component={Link}
          to="/booking"
        />
        <BottomNavigationAction 
          label="Account" 
          icon={<PersonIcon />}
          component={Link}
          to="/account"
        />
      </StyledBottomNavigation>
    </Paper>
  );
};

export default BottomNavigation;
