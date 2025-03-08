import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  Box, 
  Typography, 
  Button, 
  Rating, 
  styled,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProductImage = styled('img')({
  width: '100%',
  maxHeight: '300px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: '16px',
});

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '8px 24px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  fontSize: '0.875rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#333',
    opacity: 0.9,
    boxShadow: 'none',
  }
}));

const ProductDetails = ({ product, open, onClose }) => {
  if (!product) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent sx={{ p: 3 }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#000'
          }}
        >
          <CloseIcon />
        </IconButton>

        <ProductImage src={product.image} alt={product.title} />
        
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          {product.title}
        </Typography>

        <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
          {product.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Rating value={product.rating} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ color: '#666' }}>
            ({product.reviews} reviews)
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 2,
          mb: 3
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {product.price}
          </Typography>
          <Typography
            sx={{
              color: '#666',
              textDecoration: 'line-through'
            }}
          >
            {product.originalPrice}
          </Typography>
          {product.discount && (
            <Typography
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              {product.discount}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <AddButton fullWidth>Add to Cart</AddButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
