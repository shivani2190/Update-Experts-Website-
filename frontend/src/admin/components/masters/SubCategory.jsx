import React, { useState } from 'react';
import './Masters.css';

const SubCategory = () => {
    const [subCategories, setSubCategories] = useState([
        { 
            id: 1, 
            image: '', 
            name: 'Hair Cut', 
            masterCategory: 'Salon At Home',
            category: 'Hair Care',
            status: 'Active' 
        },
        { 
            id: 2, 
            image: '', 
            name: 'Facial', 
            masterCategory: 'Salon At Home',
            category: 'Skin Care',
            status: 'Active' 
        }
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const handleDelete = (id) => {
        setSubCategories(subCategories.filter(subCategory => subCategory.id !== id));
    };

    const filteredSubCategories = subCategories.filter(subCategory => 
        subCategory.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedFilter === 'All' || subCategory.status === selectedFilter)
    );

    return (
        <div className="master-container">
            <div className="master-header">
                <h2>Sub Categories</h2>
                <button className="new-btn">New Sub Category</button>
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
                    placeholder="Search Sub Category"
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className="table-container">
                <table className="master-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Sub Category</th>
                            <th>Category</th>
                            <th>Master Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSubCategories.map((subCategory) => (
                            <tr key={subCategory.id}>
                                <td>{subCategory.id}</td>
                                <td>
                                    <div className="image-placeholder">
                                        {subCategory.image ? (
                                            <img src={subCategory.image} alt={subCategory.name} />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </div>
                                </td>
                                <td>{subCategory.name}</td>
                                <td>{subCategory.category}</td>
                                <td>{subCategory.masterCategory}</td>
                                <td>
                                    <span className={`status-badge ${subCategory.status.toLowerCase()}`}>
                                        {subCategory.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="edit-btn">Edit</button>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => handleDelete(subCategory.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubCategory;
