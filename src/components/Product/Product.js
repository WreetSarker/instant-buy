import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Product.css'

const Product = (props) => {
    const { name, price, imageURL, weight } = props.pd;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const handleAddProduct = (id) => {
        const url = `/checkout/${id}`;
        history.push(url);
    }
    return (
        <div className="container">
            <div className="card-holder">
                <img src={imageURL} alt="" />
                <h3 className="event-name">{name}</h3>
                <div>
                    <p>Price: ${price}</p>
                    <p>Quantity: {weight}</p>
                </div>
                <button onClick={() => handleAddProduct(props.pd._id)} className="event-btn">Buy Product </button>

            </div>
        </div>
    );
};

export default Product;