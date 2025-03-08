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
  Alert,
  Avatar
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';

const API_URL = 'http://localhost:5000/api';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories');
    }
  };

  const handleOpen = (category = null) => {
    setError(null);
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name || '',
        description: category.description || '',
        image: null
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: '',
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCategory(null);
    setError(null);
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
      setError(null);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Category name is required';
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
    formDataObj.append('name', formData.name.trim());
    formDataObj.append('description', formData.description.trim());
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    try {
      const url = editingCategory
        ? `${API_URL}/categories/${editingCategory._id}`
        : `${API_URL}/categories`;
      const method = editingCategory ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formDataObj
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save category');
      }

      await fetchCategories();
      handleClose();
    } catch (error) {
      console.error('Error saving category:', error);
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const response = await fetch(`${API_URL}/categories/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete category');
        }

        await fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        setError('Failed to delete category');
      }
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">Categories</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Category
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
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell>
                  <Avatar
                    src={category.image ? `${API_URL}${category.image}` : ''}
                    alt={category.name}
                    sx={{ width: 50, height: 50 }}
                    variant="rounded"
                  >
                    <ImageIcon />
                  </Avatar>
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(category)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(category._id)}>
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
          {editingCategory ? 'Edit Category' : 'Add New Category'}
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
            />
            <Box sx={{ mt: 2 }}>
              <input
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="category-image-upload"
              />
              <label htmlFor="category-image-upload">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<ImageIcon />}
                >
                  {formData.image ? 'Change Image' : 'Upload Image'}
                </Button>
              </label>
              {formData.image && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected file: {formData.image.name}
                </Typography>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingCategory ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CategoryManager;
