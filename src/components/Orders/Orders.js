import React from 'react';
import './Orders.css'

const Orders = (props) => {
    const { name, date, email, imageURL, productName } = props.pd;
    return (
        <div className="orders-holder">
            <div className="img-container">
                <img src={imageURL} alt="" />
            </div>
            <div className="info">
                <h3>Product Name: {productName}</h3>
                <h4>Order Placed on: {date}</h4>

            </div>
        </div>
    );
};

export default Orders;