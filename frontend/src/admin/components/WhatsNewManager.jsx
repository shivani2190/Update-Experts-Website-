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

const WhatsNewManager = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    image: null,
    isActive: true
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URL}/whats-new`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching whats new items:', error);
      setError('Failed to fetch items');
    }
  };

  const handleOpen = (item = null) => {
    setError(null);
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title || '',
        description: item.description || '',
        link: item.link || '',
        isActive: item.isActive ?? true,
        image: null
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        description: '',
        link: '',
        isActive: true,
        image: null
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingItem(null);
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
    if (!formData.title.trim()) return 'Title is required';
    if (!formData.description.trim()) return 'Description is required';
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
      const url = editingItem
        ? `${API_URL}/whats-new/${editingItem._id}`
        : `${API_URL}/whats-new`;
      const method = editingItem ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formDataObj
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save item');
      }

      await fetchItems();
      handleClose();
    } catch (error) {
      console.error('Error saving whats new item:', error);
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch(`${API_URL}/whats-new/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error('Failed to delete item');
        }

        await fetchItems();
      } catch (error) {
        console.error('Error deleting whats new item:', error);
        setError('Failed to delete item');
      }
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">What's New</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Item
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
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.link}</TableCell>
                <TableCell>
                  <Switch checked={item.isActive} disabled />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(item)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item._id)}>
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
          {editingItem ? 'Edit Item' : 'Add New Item'}
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              margin="normal"
              required
              error={!!error && !formData.title}
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
              label="Link"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              margin="normal"
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
            {editingItem ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WhatsNewManager;
