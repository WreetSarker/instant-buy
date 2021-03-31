import React, { useContext } from 'react';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div>
            <h1>Checkout</h1>
            <h3>Ordered Item: {loggedInUser.productName}</h3>
            <h4>Price: {loggedInUser.price}</h4>
            <p>Order Placed On: {loggedInUser.date}</p>

        </div>
    );
};

export default CheckOut;