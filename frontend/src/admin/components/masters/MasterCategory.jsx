import React, { useState } from 'react';
import './Masters.css';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CategoryGrid from './CategoryGrid';

const MasterCategory = () => {
    const [categories, setCategories] = useState([
        { 
            id: 1, 
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80', 
            name: 'Salon At Home', 
            status: 'Active'
        },
        { 
            id: 2, 
            image: 'https://images.unsplash.com/photo-1560830889-96266c6dbe96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
            name: 'Spa At Home', 
            status: 'Active'
        },
        { 
            id: 3, 
            image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
            name: 'Advance Facials', 
            status: 'Active'
        },
        { 
            id: 4, 
            image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
            name: 'MakeUp At Home', 
            status: 'Active'
        },
        { 
            id: 5, 
            image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80', 
            name: 'Pre-bridal Makeup', 
            status: 'Active'
        },
        { 
            id: 6, 
            image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
            name: 'Nail Art', 
            status: 'Active'
        },
        { 
            id: 7, 
            image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
            name: 'Other Services', 
            status: 'Active'
        }
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const handleDelete = (id) => {
        setCategories(categories.filter(category => category.id !== id));
    };

    const filteredCategories = categories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedFilter === 'All' || category.status === selectedFilter)
    );

    return (
        <div className="master-container">
            <div className="master-header">
                <h2>MASTER CATEGORIES</h2>
                <div className="header-actions">
                    <div className="view-toggle">
                        <button 
                            className={viewMode === 'grid' ? 'active' : ''} 
                            onClick={() => setViewMode('grid')}
                        >
                            <GridViewIcon fontSize="small" />
                            Grid
                        </button>
                        <button 
                            className={viewMode === 'table' ? 'active' : ''} 
                            onClick={() => setViewMode('table')}
                        >
                            <TableRowsIcon fontSize="small" />
                            Table
                        </button>
                    </div>
                    <button className="new-category-btn">
                        <AddIcon fontSize="small" />
                        New Category
                    </button>
                </div>
            </div>
            
            <div className="filters">
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
                                    <td>
                                        <span className={`status-badge ${category.status.toLowerCase()}`}>
                                            {category.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="edit-btn">
                                                <EditIcon fontSize="small" />
                                            </button>
                                            <button 
                                                className="delete-btn"
                                                onClick={() => handleDelete(category.id)}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MasterCategory;
