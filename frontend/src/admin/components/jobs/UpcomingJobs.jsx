import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const UpcomingJobs = () => {
    const jobsData = [
        {
            id: "1730204269",
            spName: "",
            date: "2024-11-01",
            timeSlot: "13:30 - 14:00",
            rescheduleCount: 0,
            category: "Salon At Home",
            customer: {
                name: "Riya",
                email: "riyagupta1994.rg@gmail.com",
                phone: "8690355744"
            },
            address: {
                line1: "E2-1101, Vatika Lifestyle homes, Vatika india next",
                society: "Vatika lifestyle"
            }
        }
    ];

    const [activeDropdownId, setActiveDropdownId] = useState(null);
    const dropdownRef = useRef(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const toggleDropdown = (jobId, event) => {
        if (activeDropdownId === jobId) {
            setActiveDropdownId(null);
        } else {
            const rect = event.target.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX
            });
            setActiveDropdownId(jobId);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdownId(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const fetchUpcomingJobs = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/jobs/upcoming`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch upcoming jobs');
            }

            const data = await response.json();
            return data.jobs;
        } catch (error) {
            console.error('Error fetching upcoming jobs:', error);
            return [];
        }
    };

    return (
        <div className="jobs-container">
            <div className="jobs-header">
                <div className="total-count">Total Jobs : {jobsData.length}</div>
                <div className="action-buttons">
                    <button className="export-btn">Export</button>
                    <button className="generate-btn">Generate Lead</button>
                </div>
            </div>

            <div className="jobs-table">
                <table>
                    <thead>
                        <tr>
                            <th>Job id</th>
                            <th>SP Name</th>
                            <th>Scheduled Date & Time</th>
                            <th>HUB</th>
                            <th>Category</th>
                            <th>Customer details</th>
                            <th>Customer Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobsData.map((job) => (
                            <tr key={job.id}>
                                <td>
                                    <div>{job.id}</div>
                                    <button className="schedule-btn">Schedule</button>
                                </td>
                                <td>{job.spName}</td>
                                <td>
                                    <div>{job.date}</div>
                                    <div className="time-slot">{job.timeSlot}</div>
                                </td>
                                <td>
                                    <div>Reschedule Count</div>
                                    <div>({job.rescheduleCount})</div>
                                </td>
                                <td>
                                    <span className="category-tag">{job.category}</span>
                                </td>
                                <td>
                                    <div>{job.customer.name}</div>
                                    <div>{job.customer.email}</div>
                                    <div>{job.customer.phone}</div>
                                </td>
                                <td>
                                    <div>{job.address.line1}</div>
                                    <div>Society Name : {job.address.society}</div>
                                </td>
                                <td>
                                    <div className="dropdown" ref={dropdownRef}>
                                        <button
                                            className="job-action-btn"
                                            onClick={(event) => toggleDropdown(job.id, event)}
                                        >
                                            Action
                                        </button>
                                        {activeDropdownId === job.id && (
                                            <div
                                                className="dropdown-content"
                                                style={{
                                                    position: 'absolute',
                                                    top: dropdownPosition.top,
                                                    left: dropdownPosition.left,
                                                    zIndex: 9999
                                                }}
                                            >
                                                <Link to={`/assign-sp/${job.id}`}>Assign SP</Link>
                                                <Link to={`/edit-job/${job.id}`}>Edit Job</Link>
                                                <Link to={`/duplicate-job/${job.id}`}>Duplicate Job</Link>
                                                <Link to={`/reschedule/${job.id}`}>Reschedule</Link>
                                                <Link to={`/close-job/${job.id}`}>Close</Link>
                                                <Link to={`/cancel-job/${job.id}`}>Cancel</Link>
                                            </div>
                                        )}
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

export default UpcomingJobs;
