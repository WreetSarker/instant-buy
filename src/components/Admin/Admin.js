import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Link to="/addProduct"><button className="event-btn">Add Product </button></Link>
            <br />
            <Link to="/editProduct"><button className="event-btn">Manage Product </button></Link>
        </div>
    );
};

export default Admin;