import React, { useState } from 'react';
import './Masters.css';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import TableRowsIcon from '@mui/icons-material/TableRows';

const ServiceProviders = () => {
    const [serviceProviders, setServiceProviders] = useState([
        {
            id: 1,
            userId: 'TE1299',
            spName: 'Sobha',
            contactNo: '9518468893',
            email: 'abc@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 2,
            userId: 'TE1623',
            spName: 'Sapna Bhadouria',
            contactNo: '7251849001',
            email: 'sapnabhadouriabhadouria@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 3,
            userId: 'TE2042',
            spName: 'Varsha',
            contactNo: '9643822282',
            email: 'abc@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 4,
            userId: 'TE2405',
            spName: 'Sita',
            contactNo: '7479158177',
            email: 'abc@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 5,
            userId: 'TE2608',
            spName: 'Meenu Bhardwaj',
            contactNo: '9911515565',
            email: 'experts@experts.in',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 6,
            userId: 'TE2643',
            spName: 'Shivani Savita',
            contactNo: '8527034288',
            email: 'savitashivani019@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 7,
            userId: 'TE3739',
            spName: 'Laxmi',
            contactNo: '7414050907',
            email: 'Pintusain607@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 8,
            userId: 'TE5451',
            spName: 'Mona',
            contactNo: '9205503036',
            email: 'theexperts0622@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 9,
            userId: 'TE5523',
            spName: 'Kritika Rawat',
            contactNo: '8299573181',
            email: 'kritikarawat14march@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 10,
            userId: 'TE5789',
            spName: 'Ritu Sharma',
            contactNo: '9876543210',
            email: 'ritusharma@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 11,
            userId: 'TE5901',
            spName: 'Priya Gupta',
            contactNo: '8765432109',
            email: 'priyagupta@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 12,
            userId: 'TE6023',
            spName: 'Neha Singh',
            contactNo: '7654321098',
            email: 'nehasingh@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 13,
            userId: 'TE6234',
            spName: 'Anjali Verma',
            contactNo: '6543210987',
            email: 'anjaliverma@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 14,
            userId: 'TE6456',
            spName: 'Pooja Rani',
            contactNo: '5432109876',
            email: 'poojarani@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 15,
            userId: 'TE6678',
            spName: 'Sunita Devi',
            contactNo: '4321098765',
            email: 'sunitadevi@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 16,
            userId: 'TE6789',
            spName: 'Meenakshi Kumari',
            contactNo: '3210987654',
            email: 'meenakshikumari@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 17,
            userId: 'TE6901',
            spName: 'Deepika Yadav',
            contactNo: '2109876543',
            email: 'deepikayadav@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 18,
            userId: 'TE7012',
            spName: 'Kavita Sharma',
            contactNo: '1098765432',
            email: 'kavitasharma@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        },
        {
            id: 19,
            userId: 'TE7123',
            spName: 'Radha Kumari',
            contactNo: '0987654321',
            email: 'radhakumari@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Inactive'
        },
        {
            id: 20,
            userId: 'TE7234',
            spName: 'Anita Rani',
            contactNo: '9876543210',
            email: 'anitarani@gmail.com',
            city: 'Gurgaon',
            category: 'Beauty',
            status: 'Active'
        }
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [viewMode, setViewMode] = useState('table');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const handleDelete = (id) => {
        setServiceProviders(serviceProviders.filter(provider => provider.id !== id));
    };

    const filteredProviders = serviceProviders.filter(provider => 
        provider.spName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedFilter === 'All' || provider.status === selectedFilter)
    );

    return (
        <div className="master-container">
            <div className="master-header">
                <h2>SERVICE PROVIDERS</h2>
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
                        New Service Provider
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
                    placeholder="Search Provider"
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
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProviders.map((provider) => (
                            <tr key={provider.id}>
                                <td>{provider.id}</td>
                                <td>{provider.userId}</td>
                                <td>{provider.spName}</td>
                                <td>{provider.contactNo}</td>
                                <td>{provider.email}</td>
                                <td>{provider.city}</td>
                                <td>{provider.category}</td>
                                <td>
                                    <span className={`status-badge ${provider.status.toLowerCase()}`}>
                                        {provider.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="edit-btn">
                                            <EditIcon fontSize="small" />
                                        </button>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => handleDelete(provider.id)}
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
        </div>
    );
};

export default ServiceProviders;
