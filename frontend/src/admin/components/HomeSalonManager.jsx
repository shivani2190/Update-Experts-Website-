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
  Alert
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const API_URL = 'http://localhost:5000/api';

const HomeSalonManager = () => {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    image: null,
    isActive: true
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/home-salon`);
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching home salon services:', error);
      setError('Failed to fetch services');
    }
  };

  const handleOpen = (service = null) => {
    setError(null);
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name || '',
        description: service.description || '',
        price: service.price || '',
        duration: service.duration || '',
        isActive: service.isActive ?? true,
        image: null
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        duration: '',
        isActive: true,
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingService(null);
    setError(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.description.trim()) return 'Description is required';
    if (!formData.price) return 'Price is required';
    if (!formData.duration) return 'Duration is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formDataObj = new FormData();
    
    // Append all form data
    Object.keys(formData).forEach(key => {
      if (key === 'image' && formData[key]) {
        formDataObj.append('image', formData[key]);
      } else if (formData[key] !== null && key !== 'image') {
        formDataObj.append(key, formData[key].toString());
      }
    });

    try {
      const url = editingService
        ? `${API_URL}/home-salon/${editingService._id}`
        : `${API_URL}/home-salon`;
      const method = editingService ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formDataObj
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save service');
      }
      
      await fetchServices();
      handleClose();
    } catch (error) {
      console.error('Error saving home salon service:', error);
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`${API_URL}/home-salon/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete service');
        }
        
        await fetchServices();
      } catch (error) {
        console.error('Error deleting home salon service:', error);
        setError('Failed to delete service');
      }
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">Home Salon Services</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Service
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service._id}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>₹{service.price}</TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>
                  <Switch checked={service.isActive} disabled />
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
              error={!!error && !formData.name}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              margin="normal"
              required
              error={!!error && !formData.description}
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
              error={!!error && !formData.price}
            />
            <TextField
              fullWidth
              label="Duration (minutes)"
              type="number"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              margin="normal"
              required
              error={!!error && !formData.duration}
            />
            <Box sx={{ mt: 2 }}>
              <input
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button variant="outlined" component="span">
                  Upload Image
                </Button>
              </label>
              {formData.image && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected file: {formData.image.name}
                </Typography>
              )}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <Typography>Active:</Typography>
              <Switch
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.target.checked })
                }
                sx={{ ml: 1 }}
              />
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

export default HomeSalonManager;
