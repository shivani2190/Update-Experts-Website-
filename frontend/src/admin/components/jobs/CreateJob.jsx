import React, { useState } from 'react';
import './Jobs.css';

const services = [
    { id: 1, name: "Basic Facial", type: "service", cost: 899 },
    { id: 2, name: "Deep Cleansing", type: "service", cost: 1299 },
    { id: 3, name: "Anti-Aging Treatment", type: "service", cost: 1599 },
    { id: 4, name: "Hydrating Facial", type: "service", cost: 999 },
    { id: 5, name: "Body Massage", type: "service", cost: 1499 },
    { id: 6, name: "Manicure", type: "service", cost: 499 },
    { id: 7, name: "Pedicure", type: "service", cost: 699 },
    { id: 8, name: "Hair Spa", type: "service", cost: 1299 },
    { id: 9, name: "Hair Color", type: "service", cost: 1999 },
    { id: 10, name: "Waxing", type: "service", cost: 799 }
];

const packages = [
    { id: 11, name: "Bridal Package", type: "package", cost: 15999 },
    { id: 12, name: "Pre-Wedding Glow", type: "package", cost: 8999 },
    { id: 13, name: "Party Ready", type: "package", cost: 4999 },
    { id: 14, name: "Complete Makeover", type: "package", cost: 7999 }
];

const CreateJob = () => {
    const [formData, setFormData] = useState({
        mobile: '',
        customerName: '',
        email: '',
        city: '',
        hub: '',
        society: '',
        category: '',
        address: '',
        source: ''
    });

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [showServiceSelect, setShowServiceSelect] = useState(false);
    const [showPackageSelect, setShowPackageSelect] = useState(false);
    const [serviceCost, setServiceCost] = useState(0);
    const [productCost, setProductCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [concession, setConcession] = useState(0);
    const [convenience, setConvenience] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateSelect = () => {
        // Implement date selection logic
    };

    const handleAddService = () => {
        setShowServiceSelect(true);
        setShowPackageSelect(false);
    };

    const handleAddPackage = () => {
        setShowPackageSelect(true);
        setShowServiceSelect(false);
    };

    const handleItemSelect = (e) => {
        const selectedId = e.target.value;
        const itemList = showServiceSelect ? services : packages;
        const selectedItem = itemList.find(item => item.id === parseInt(selectedId));
        
        if (selectedItem) {
            const newItem = {
                ...selectedItem,
                quantity: 1,
                amount: selectedItem.cost,
                productCost: 0
            };
            setSelectedItems([...selectedItems, newItem]);
            setShowServiceSelect(false);
            setShowPackageSelect(false);
            updateTotalCosts();
        }
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = selectedItems.map(item => {
            if (item.id === id) {
                const newQuantity = parseInt(quantity) || 0;
                return {
                    ...item,
                    quantity: newQuantity,
                    amount: item.cost * newQuantity
                };
            }
            return item;
        });
        setSelectedItems(updatedItems);
        updateTotalCosts();
    };

    const handleProductCostChange = (id, cost) => {
        const updatedItems = selectedItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    productCost: parseFloat(cost) || 0
                };
            }
            return item;
        });
        setSelectedItems(updatedItems);
        updateTotalCosts();
    };

    const handleRemoveItem = (id) => {
        setSelectedItems(selectedItems.filter(item => item.id !== id));
        updateTotalCosts();
    };

    const updateTotalCosts = () => {
        const newServiceCost = selectedItems.reduce((sum, item) => sum + item.amount, 0);
        const newProductCost = selectedItems.reduce((sum, item) => sum + item.productCost, 0);
        setServiceCost(newServiceCost);
        setProductCost(newProductCost);
    };

    const calculatePayableAmount = () => {
        return serviceCost + productCost - discount - concession + convenience;
    };

    return (
        <div className="create-job-container">
            <div className="page-header">
                <h2>Create New Job</h2>
                <button className="today-jobs-btn">Today's Jobs</button>
            </div>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <div className="customer-info-section">
                    <h3>Customer Info</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Mobile*</label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Customer Name*</label>
                            <input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Select City*</label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            >
                                <option value="">City</option>
                                <option value="gurugram">Gurugram</option>
                                <option value="manesar">Manesar</option>
                                <option value="palam vihar">Palam Vihar</option>
                                <option value="delhi">Delhi</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select HUB*</label>
                            <select
                                name="hub"
                                value={formData.hub}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Hub</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Society*</label>
                            <input
                                type="text"
                                name="society"
                                value={formData.society}
                                onChange={handleChange}
                                placeholder="Society"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Category*</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="salon">Salon At Home</option>
                                <option value="makeup">Make Up</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Address*</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Source*</label>
                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Source</option>
                                <option value="whatsapp">Whats app</option>
                                <option value="facebook">Facebook</option>
                                <option value="website">Website</option>
                                <option value="refer">Reffer</option>
                                <option value="gmb">GMB</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="item-details-section">
                    <div className="section-header">
                        <h3>Item Details</h3>
                        <div className="quantity-header">Quantity</div>
                        <div className="rate-header">Rate</div>
                        <div className="amount-header">Amount</div>
                        <div className="product-cost-header">Product Cost</div>
                    </div>

                    {selectedItems.map((item) => (
                        <div key={item.id} className="item-row">
                            <div className="item-name">{item.name}</div>
                            <div className="item-quantity">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                />
                            </div>
                            <div className="item-rate">{item.cost.toFixed(2)}</div>
                            <div className="item-amount">{item.amount.toFixed(2)}</div>
                            <div className="item-product-cost">
                                <input
                                    type="number"
                                    min="0"
                                    value={item.productCost}
                                    onChange={(e) => handleProductCostChange(item.id, e.target.value)}
                                />
                            </div>
                            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>×</button>
                        </div>
                    ))}

                    {(showServiceSelect || showPackageSelect) && (
                        <div className="item-row">
                            <div className="item-name">
                                <select onChange={handleItemSelect} defaultValue="">
                                    <option value="">Select {showServiceSelect ? 'Service' : 'Package'}</option>
                                    {(showServiceSelect ? services : packages).map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.name} - ₹{item.cost}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="item-quantity">
                                <input type="number" value="1" disabled />
                            </div>
                            <div className="item-rate">0.00</div>
                            <div className="item-amount">0.00</div>
                            <div className="item-product-cost">
                                <input type="number" value="0" disabled />
                            </div>
                        </div>
                    )}

                    <div className="action-buttons">
                        <button type="button" className="add-service-btn" onClick={handleAddService}>
                            Add Service
                        </button>
                        <button type="button" className="add-package-btn" onClick={handleAddPackage}>
                            Add Package
                        </button>
                    </div>

                    <div className="date-section">
                        <label>Date</label>
                        <input
                            type="text"
                            value={selectedDate}
                            placeholder="dd-mm-yyyy"
                            readOnly
                        />
                        <button type="button" className="select-date-btn" onClick={handleDateSelect}>
                            Select Job Date
                        </button>
                    </div>
                    <div className="cost-summary">
                        <div className="cost-row">
                            <span>Service Cost</span>
                            <input type="number" value={serviceCost} readOnly />
                        </div>
                        <div className="cost-row">
                            <span>Product Cost</span>
                            <input type="number" value={productCost} readOnly />
                        </div>
                        <div className="cost-row">
                            <span>Discount</span>
                            <input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                            />
                        </div>
                        <div className="cost-row">
                            <span>Concession</span>
                            <input
                                type="number"
                                value={concession}
                                onChange={(e) => setConcession(Number(e.target.value))}
                            />
                        </div>
                        <div className="cost-row">
                            <span>Convenience</span>
                            <input
                                type="number"
                                value={convenience}
                                onChange={(e) => setConvenience(Number(e.target.value))}
                            />
                        </div>
                        <div className="cost-row">
                            <span>Payable Amount</span>
                            <input type="number" value={calculatePayableAmount()} readOnly />
                        </div>
                    </div>
                </div>
                <button type="submit" className="create-lead-btn">Create Lead</button>
            </form>
        </div>
    );
};

export default CreateJob;
