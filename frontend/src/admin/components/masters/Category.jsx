import React, { useState } from 'react';
import './Masters.css';
import { Box, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CategoryGrid from './CategoryGrid';

const Category = () => {
    const [categories, setCategories] = useState([
        // Salon Services
        { id: 1, name: 'Waxing', image: '/assets/category/p1.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 2, name: 'Facial', image: '/assets/category/p2.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 3, name: 'Mani-Pedi', image: '/assets/category/p3.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 4, name: 'Clean-Up', image: '/assets/category/p4.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 5, name: 'De-Tan / Bleach', image: '/assets/category/p5.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 6, name: 'Hair', image: '/assets/category/p6.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 7, name: 'Body Polishing', image: '/assets/category/p7.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 8, name: 'Threading', image: '/assets/category/p8.jpg', masterCategory: 'Salon At Home', status: 'Active' },
        { id: 9, name: 'Insta Light Pack', image: '/assets/category/p9.jpg', masterCategory: 'Salon At Home', status: 'Active' },

        // Spa Services
        { id: 10, name: 'Best Seller Packages', image: '/assets/category/p1.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 11, name: 'Massage Therapy', image: '/assets/category/p2.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 12, name: 'Energizing Therapies', image: '/assets/category/p3.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 13, name: 'Nourishing Massage', image: '/assets/category/p4.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 14, name: 'Special Care Massages', image: '/assets/category/p5.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 15, name: 'Scrubs & Polishing', image: '/assets/category/p6.jpg', masterCategory: 'Spa At Home', status: 'Active' },
        { id: 16, name: 'Add-Ons', image: '/assets/category/p7.jpg', masterCategory: 'Spa At Home', status: 'Active' },

        // Makeup Services
        { id: 17, name: 'Makeup Packages', image: '/assets/category/p1.jpg', masterCategory: 'MakeUp At Home', status: 'Active' },
        { id: 18, name: 'Party Makeup', image: '/assets/category/p2.jpg', masterCategory: 'MakeUp At Home', status: 'Active' },
        { id: 19, name: 'Engagement Makeup', image: '/assets/category/p3.jpg', masterCategory: 'MakeUp At Home', status: 'Active' },
        { id: 20, name: 'Bridal Makeup', image: '/assets/category/p4.jpg', masterCategory: 'MakeUp At Home', status: 'Active' },
        { id: 21, name: 'Hair Do / Saree Draping', image: '/assets/category/p5.jpg', masterCategory: 'MakeUp At Home', status: 'Active' },

        // Pre-bridal Services
        { id: 22, name: 'Premium', image: '/assets/category/p1.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 23, name: 'Waxing', image: '/assets/category/p2.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 24, name: 'Facial', image: '/assets/category/p3.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 25, name: 'Mani-Pedi', image: '/assets/category/p4.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 26, name: 'Clean-Up', image: '/assets/category/p5.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 27, name: 'De-Tan / Bleach', image: '/assets/category/p6.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 28, name: 'Hair', image: '/assets/category/p7.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 29, name: 'Body Polishing', image: '/assets/category/p8.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 30, name: 'Threading', image: '/assets/category/p9.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },
        { id: 31, name: 'Insta Light Pack', image: '/assets/category/p10.jpg', masterCategory: 'Pre-bridal Makeup', status: 'Active' },

        // Facial Services
        { id: 32, name: 'LED Photo Facial', image: '/assets/categories/led-photo-facial.jpg', masterCategory: 'Advance Facials', status: 'Active' },
        { id: 33, name: 'LED Cleanup', image: '/assets/categories/led-cleanup.jpg', masterCategory: 'Advance Facials', status: 'Active' },
        { id: 34, name: 'Add On', image: '/assets/categories/add-on.jpg', masterCategory: 'Advance Facials', status: 'Active' },

        // Other Services
        { id: 35, name: 'Pest Control', image: '/assets/category/p1.jpg', masterCategory: 'Other Services', status: 'Active' },
        { id: 36, name: 'Home Cleaning', image: '/assets/category/p2.jpg', masterCategory: 'Other Services', status: 'Active' },
        { id: 37, name: 'Drivers', image: '/assets/category/p3.jpg', masterCategory: 'Other Services', status: 'Active' }
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [selectedMasterCategory, setSelectedMasterCategory] = useState('All');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const handleMasterCategoryChange = (event) => {
        setSelectedMasterCategory(event.target.value);
    };

    const handleDelete = (id) => {
        setCategories(categories.filter(category => category.id !== id));
    };

    const filteredCategories = categories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedFilter === 'All' || category.status === selectedFilter) &&
        (selectedMasterCategory === 'All' || category.masterCategory === selectedMasterCategory)
    );

    const masterCategories = [
        'All',
        'Salon At Home',
        'Spa At Home',
        'Advance Facials',
        'MakeUp At Home',
        'Pre-bridal Makeup',
        'Other Services'
    ];

    return (
        <Box className="master-container">
            <div className="master-header">
                <h2>CATEGORIES</h2>
                <div className="header-actions">
                    <div className="view-toggle">
                        <Button 
                            variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                            onClick={() => setViewMode('grid')}
                            startIcon={<GridViewIcon />}
                            size="small"
                        >
                            Grid
                        </Button>
                        <Button 
                            variant={viewMode === 'table' ? 'contained' : 'outlined'}
                            onClick={() => setViewMode('table')}
                            startIcon={<TableRowsIcon />}
                            size="small"
                        >
                            Table
                        </Button>
                    </div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<AddIcon />}
                        className="new-category-btn"
                    >
                        New Category
                    </Button>
                </div>
            </div>
            
            <div className="filters">
                <select 
                    className="filter-select"
                    value={selectedMasterCategory}
                    onChange={handleMasterCategoryChange}
                >
                    {masterCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <select 
                    className="filter-select"
                    value={selectedFilter}
                    onChange={handleFilterChange}
                >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                
                <input
                    type="text"
                    placeholder="Search Category"
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {viewMode === 'grid' ? (
                <CategoryGrid categories={filteredCategories} />
            ) : (
                <div className="table-container">
                    <table className="master-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Master Category</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCategories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>
                                        <div className="category-image">
                                            {category.image ? (
                                                <img src={category.image} alt={category.name} />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                        </div>
                                    </td>
                                    <td>{category.name}</td>
                                    <td>{category.masterCategory}</td>
                                    <td>
                                        <span className={`status-badge ${category.status.toLowerCase()}`}>
                                            {category.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <IconButton 
                                                size="small" 
                                                color="primary"
                                                className="edit-btn"
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton 
                                                size="small"
                                                color="error"
                                                className="delete-btn"
                                                onClick={() => handleDelete(category.id)}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Box>
    );
};

export default Category;
