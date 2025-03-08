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

const ProductsManager = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    isNew: false,
    isActive: true,
    image: null
  });

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/beauty-products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError('Error fetching products: ' + error.message);
      console.error('Error fetching products:', error);
    }
  };

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

  const handleOpen = (product = null) => {
    setError('');
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        brand: product.brand?._id,
        isNew: product.isNew,
        isActive: product.isActive,
        image: null
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        brand: '',
        isNew: false,
        isActive: true,
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingProduct(null);
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

    if (!formData.brand) {
      setError('Brand is required');
      return;
    }

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const url = editingProduct
        ? `${API_URL}/beauty-products/${editingProduct._id}`
        : `${API_URL}/beauty-products`;
      const method = editingProduct ? 'PUT' : 'POST';

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
        throw new Error(errorData.message || 'Failed to save product');
      }

      await fetchProducts();
      handleClose();
    } catch (error) {
      setError('Error saving product: ' + error.message);
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          setError('Please login to perform this action');
          return;
        }

        const response = await fetch(`${API_URL}/beauty-products/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete product');
        }

        await fetchProducts();
      } catch (error) {
        setError('Error deleting product: ' + error.message);
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleToggleStatus = async (product, field) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Please login to perform this action');
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append(field, !product[field]);

      const response = await fetch(`${API_URL}/beauty-products/${product._id}`, {
        method: 'PUT',
        body: formDataObj,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update product status');
      }

      await fetchProducts();
    } catch (error) {
      setError('Error updating product status: ' + error.message);
      console.error('Error updating product status:', error);
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
        <Typography variant="h5">Beauty Products</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Product
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>New</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  {product.image && (
                    <img
                      src={`${API_URL}${product.image}`}
                      alt={product.name}
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                  )}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand?.name}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>
                  <Switch
                    checked={product.isNew}
                    onChange={() => handleToggleStatus(product, 'isNew')}
                  />
                </TableCell>
                <TableCell>
                  <Switch
                    checked={product.isActive}
                    onChange={() => handleToggleStatus(product, 'isActive')}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(product._id)}>
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
          {editingProduct ? 'Edit Product' : 'Add New Product'}
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
              <InputLabel>Brand</InputLabel>
              <Select
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                label="Brand"
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
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
                  New
                </Typography>
                <Switch
                  checked={formData.isNew}
                  onChange={(e) =>
                    setFormData({ ...formData, isNew: e.target.checked })
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
            {editingProduct ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductsManager;
