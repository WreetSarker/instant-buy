import React from 'react';

const Orders = (props) => {
    const { name, date, email, imageURL, productName } = props.pd;
    return (
        <div className="events-holder">
            <div className="img-container">
                <img src={imageURL} alt="" />
            </div>
            <div className="info">
                <h3>{productName}</h3>
                <h4>{date}</h4>

            </div>
        </div>
    );
};

export default Orders;