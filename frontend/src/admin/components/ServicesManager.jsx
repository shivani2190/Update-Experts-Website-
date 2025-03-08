import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Switch,
  Alert,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';

const API_URL = 'http://localhost:5000/api';

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    isTrending: false,
    isHomeSalon: false,
    isActive: true,
    image: null
  });

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/services`);
      if (!response.ok) throw new Error('Failed to fetch services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      setError('Error fetching services: ' + error.message);
      console.error('Error fetching services:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError('Error fetching categories: ' + error.message);
      console.error('Error fetching categories:', error);
    }
  };

  const handleOpen = (service = null) => {
    setError('');
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        description: service.description,
        price: service.price,
        category: service.category._id,
        isTrending: service.isTrending,
        isHomeSalon: service.isHomeSalon,
        isActive: service.isActive,
        image: null
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        isTrending: false,
        isHomeSalon: false,
        isActive: true,
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingService(null);
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      setFormData({ ...formData, image: file });
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    if (!formData.category) {
      setError('Category is required');
      return;
    }

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const url = editingService
        ? `${API_URL}/services/${editingService._id}`
        : `${API_URL}/services`;
      const method = editingService ? 'PUT' : 'POST';

      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Please login to perform this action');
        return;
      }

      const response = await fetch(url, {
        method,
        body: formDataObj,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save service');
      }

      await fetchServices();
      handleClose();
    } catch (error) {
      setError('Error saving service: ' + error.message);
      console.error('Error saving service:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          setError('Please login to perform this action');
          return;
        }

        const response = await fetch(`${API_URL}/services/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete service');
        }

        await fetchServices();
      } catch (error) {
        setError('Error deleting service: ' + error.message);
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleToggleStatus = async (service, field) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Please login to perform this action');
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append(field, !service[field]);

      const response = await fetch(`${API_URL}/services/${service._id}`, {
        method: 'PUT',
        body: formDataObj,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update service status');
      }

      await fetchServices();
    } catch (error) {
      setError('Error updating service status: ' + error.message);
      console.error('Error updating service status:', error);
    }
  };

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">Services</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Service
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Trending</TableCell>
              <TableCell>Home Salon</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service._id}>
                <TableCell>
                  {service.image && (
                    <img
                      src={`${API_URL}${service.image}`}
                      alt={service.name}
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                  )}
                </TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.category?.title}</TableCell>
                <TableCell>₹{service.price}</TableCell>
                <TableCell>
                  <Switch
                    checked={service.isTrending}
                    onChange={() => handleToggleStatus(service, 'isTrending')}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    checked={service.isHomeSalon}
                    onChange={() => handleToggleStatus(service, 'isHomeSalon')}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    checked={service.isActive}
                    onChange={() => handleToggleStatus(service, 'isActive')}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(service)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(service._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingService ? 'Edit Service' : 'Add New Service'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              margin="normal"
              multiline
              rows={3}
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                label="Category"
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-input"
              />
              <label htmlFor="image-input">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<ImageIcon />}
                >
                  {formData.image ? 'Change Image' : 'Upload Image'}
                </Button>
              </label>
              {formData.image && (
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Selected: {formData.image.name}
                </Typography>
              )}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Box>
                <Typography component="label" sx={{ mr: 2 }}>
                  Trending
                </Typography>
                <Switch
                  checked={formData.isTrending}
                  onChange={(e) =>
                    setFormData({ ...formData, isTrending: e.target.checked })
                  }
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ mr: 2 }}>
                  Home Salon
                </Typography>
                <Switch
                  checked={formData.isHomeSalon}
                  onChange={(e) =>
                    setFormData({ ...formData, isHomeSalon: e.target.checked })
                  }
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ mr: 2 }}>
                  Active
                </Typography>
                <Switch
                  checked={formData.isActive}
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.target.checked })
                  }
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingService ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServicesManager;
