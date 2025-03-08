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
  Input
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';

const API_URL = 'http://localhost:5000/api';

const BrandsManager = () => {
  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isActive: true,
    image: null
  });

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${API_URL}/brands`);
      if (!response.ok) throw new Error('Failed to fetch brands');
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      setError('Error fetching brands: ' + error.message);
      console.error('Error fetching brands:', error);
    }
  };

  const handleOpen = (brand = null) => {
    setError('');
    if (brand) {
      setEditingBrand(brand);
      setFormData({
        name: brand.name,
        description: brand.description,
        isActive: brand.isActive,
        image: null
      });
    } else {
      setEditingBrand(null);
      setFormData({
        name: '',
        description: '',
        isActive: true,
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingBrand(null);
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

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const url = editingBrand
        ? `${API_URL}/brands/${editingBrand._id}`
        : `${API_URL}/brands`;
      const method = editingBrand ? 'PUT' : 'POST';

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
        throw new Error(errorData.message || 'Failed to save brand');
      }

      await fetchBrands();
      handleClose();
    } catch (error) {
      setError('Error saving brand: ' + error.message);
      console.error('Error saving brand:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          setError('Please login to perform this action');
          return;
        }

        const response = await fetch(`${API_URL}/brands/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete brand');
        }

        await fetchBrands();
      } catch (error) {
        setError('Error deleting brand: ' + error.message);
        console.error('Error deleting brand:', error);
      }
    }
  };

  const handleToggleStatus = async (brand) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Please login to perform this action');
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append('isActive', !brand.isActive);

      const response = await fetch(`${API_URL}/brands/${brand._id}`, {
        method: 'PUT',
        body: formDataObj,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update brand status');
      }

      await fetchBrands();
    } catch (error) {
      setError('Error updating brand status: ' + error.message);
      console.error('Error updating brand status:', error);
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
        <Typography variant="h5">Brands</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Brand
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand._id}>
                <TableCell>
                  {brand.image && (
                    <img
                      src={`${API_URL}${brand.image}`}
                      alt={brand.name}
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                  )}
                </TableCell>
                <TableCell>{brand.name}</TableCell>
                <TableCell>{brand.description}</TableCell>
                <TableCell>
                  <Switch
                    checked={brand.isActive}
                    onChange={() => handleToggleStatus(brand)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(brand)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(brand._id)}>
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
          {editingBrand ? 'Edit Brand' : 'Add New Brand'}
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
                  {formData.image ? 'Change Logo' : 'Upload Logo'}
                </Button>
              </label>
              {formData.image && (
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Selected: {formData.image.name}
                </Typography>
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingBrand ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BrandsManager;
