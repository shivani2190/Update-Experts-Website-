import React from 'react';
import './Masters.css';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const CategoryGrid = ({ categories }) => {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={3}>
                {categories.map((category) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                '&:hover': {
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={category.image || '/assets/placeholder.jpg'}
                                alt={category.name}
                                sx={{
                                    objectFit: 'cover',
                                    backgroundColor: category.image ? 'transparent' : '#f5f5f5'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="h3" noWrap>
                                    {category.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {category.masterCategory}
                                </Typography>
                                <Box 
                                    sx={{ 
                                        mt: 1, 
                                        display: 'inline-block',
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 1,
                                        bgcolor: category.status === 'Active' ? 'success.light' : 'error.light',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="caption">
                                        {category.status}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoryGrid;
