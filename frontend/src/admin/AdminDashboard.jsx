 import React, { useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryManager from './components/CategoryManager';
import ServicesManager from './components/ServicesManager';
import ProductsManager from './components/ProductsManager';
import BrandsManager from './components/BrandsManager';
import WhatsNewManager from './components/WhatsNewManager';
import TrendingManager from './components/TrendingManager';
import HomeSalonManager from './components/HomeSalonManager';
import Dashboard from './components/Dashboard';
import TodayJobs from './components/jobs/TodayJobs';
import UpcomingJobs from './components/jobs/UpcomingJobs';
import CanceledJobs from './components/jobs/CanceledJobs';
import CreateJob from './components/jobs/CreateJob';
import MasterCategory from './components/masters/MasterCategory';
import Category from './components/masters/Category';
import SubCategory from './components/masters/SubCategory';
import Services from './components/masters/Services';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const drawerWidth = 240;

const SidebarContainer = styled(Box)`
  background-color: #1a1a1a;
  color: white;
  height: 100vh;
`;

const StyledList = styled(List)`
  background-color: #1a1a1a;
`;

const StyledListItem = styled(ListItem)`
  background-color: #1a1a1a;
`;

const StyledCollapse = styled(Collapse)`
  background-color: #1a1a1a !important;
  & .MuiCollapse-wrapper {
    background-color: #1a1a1a !important;
  }
  & .MuiCollapse-wrapperInner {
    background-color: #1a1a1a !important;
  }
  & > * {
    background-color: #1a1a1a !important;
  }
`;

const NavItem = styled(ListItemButton)`
  padding: 15px 25px;
  color: white !important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333 !important;
  }

  &.Mui-selected {
    background-color: #444 !important;
    border-left: 4px solid #00a8e8;
  }
`;

const SubNavItem = styled(ListItemButton)`
  padding: 12px 45px;
  color: white !important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333 !important;
  }

  &.Mui-selected {
    background-color: #444 !important;
    border-left: 4px solid #00a8e8;
  }
`;

const NavIcon = styled.span`
  margin-right: 10px;
`;

const menuItems = [
  { text: 'Dashboard', icon: '📊' },
  {
    text: 'Jobs',
    icon: '💼',
    subItems: [
      { text: 'Today Jobs', component: 'TodayJobs' },
      { text: 'Upcoming Jobs', component: 'UpcomingJobs' },
      { text: 'Canceled Jobs', component: 'CanceledJobs' },
      { text: 'Create Job', component: 'CreateJob' },
    ],
  },
  {
    text: 'Masters',
    icon: '👨‍🏫',
    subItems: [
      { text: 'Master Category', component: 'MasterCategory' },
      { text: 'Category', component: 'Category' },
      { text: 'Sub Category', component: 'SubCategory' },
      { text: 'Services', component: 'Services' },
      { text: 'Packages', component: 'Packages' },
      { text: 'Service Providers', component: 'ServiceProviders' },
      { text: 'Users', component: 'Users' },
      { text: 'Customers', component: 'Customers' },
      { text: 'Slot Master', component: 'SlotMaster' },
      { text: 'Coupons', component: 'Coupons' },
      { text: 'HUB Master', component: 'HubMaster' },
      { text: 'Blog Master', component: 'BlogMaster' },
    ],
  },
  { text: 'Appearance', icon: '🎨' },
  { text: 'Contacts', icon: '📞' },
  { text: 'Experts Request', icon: '🤝' },
  { text: 'Categories', icon: '📁' },
  { text: 'Brands', icon: '🏢' },
  { text: "What's New", icon: '🆕' },
  { text: 'Trending', icon: '📈' },
  { text: 'Home Salon', icon: '🏠' }
];

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('MasterCategory');
  const [openSubMenu, setOpenSubMenu] = useState('Masters');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (text, hasSubItems) => {
    if (hasSubItems) {
      setOpenSubMenu(openSubMenu === text ? '' : text);
    } else {
      setSelectedComponent(text);
      setMobileOpen(false);
    }
  };

  const handleSubMenuClick = (component) => {
    setSelectedComponent(component);
    setMobileOpen(false);
  };

  const drawer = (
    <SidebarContainer>
      <Typography variant="h6" sx={{ p: 2 }}>
        Admin Dashboard
      </Typography>
      <StyledList>
        {menuItems.map(({ text, icon, subItems }) => (
          <React.Fragment key={text}>
            <StyledListItem disablePadding>
              <NavItem
                selected={!subItems && selectedComponent === text}
                onClick={() => handleMenuClick(text, !!subItems)}
              >
                <NavIcon>{icon}</NavIcon>
                <ListItemText primary={text} />
                {subItems && (
                  openSubMenu === text ? <ExpandLess /> : <ExpandMore />
                )}
              </NavItem>
            </StyledListItem>
            {subItems && (
              <StyledCollapse in={openSubMenu === text} timeout="auto" unmountOnExit>
                <StyledList component="div" disablePadding>
                  {subItems.map(({ text: subText, component }) => (
                    <StyledListItem key={subText} disablePadding>
                      <SubNavItem
                        selected={selectedComponent === component}
                        onClick={() => handleSubMenuClick(component)}
                      >
                        <ListItemText primary={subText} />
                      </SubNavItem>
                    </StyledListItem>
                  ))}
                </StyledList>
              </StyledCollapse>
            )}
          </React.Fragment>
        ))}
        <StyledListItem disablePadding>
          <NavItem
            selected={selectedComponent === 'Services'}
            onClick={() => handleSubMenuClick('Services')}
          >
            <NavIcon>💆‍♀️</NavIcon>
            <ListItemText primary="Services" />
          </NavItem>
        </StyledListItem>
      </StyledList>
    </SidebarContainer>
  );

  const getComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'TodayJobs':
        return <TodayJobs />;
      case 'UpcomingJobs':
        return <UpcomingJobs />;
      case 'CanceledJobs':
        return <CanceledJobs />;
      case 'CreateJob':
        return <CreateJob />;
      case 'Categories':
        return <CategoryManager />;
      case 'Brands':
        return <BrandsManager />;
      case "What's New":
        return <WhatsNewManager />;
      case 'Trending':
        return <TrendingManager />;
      case 'Home Salon':
        return <HomeSalonManager />;
      case 'MasterCategory':
        return <MasterCategory />;
      case 'Category':
        return <Category />;
      case 'SubCategory':
        return <SubCategory />;
      case 'Services':
        return <Services />;
      case 'Packages':
        return <Typography>Coming Soon: Packages</Typography>;
      case 'ServiceProviders':
        return <Typography>Coming Soon: Service Providers</Typography>;
      case 'Users':
        return <Typography>Coming Soon: Users</Typography>;
      case 'Customers':
        return <Typography>Coming Soon: Customers</Typography>;
      case 'SlotMaster':
        return <Typography>Coming Soon: Slot Master</Typography>;
      case 'Coupons':
        return <Typography>Coming Soon: Coupons</Typography>;
      case 'HubMaster':
        return <Typography>Coming Soon: HUB Master</Typography>;
      case 'BlogMaster':
        return <Typography>Coming Soon: Blog Master</Typography>;
      default:
        return <Typography>Coming Soon: {selectedComponent}</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            The Experts Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: 8 }}
      >
        {getComponent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
