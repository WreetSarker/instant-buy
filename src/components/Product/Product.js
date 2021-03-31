import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import CheckOut from '../CheckOut/CheckOut';
import './Product.css'

const Product = (props) => {
    const { name, price, imageURL, weight } = props.pd;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleAddProduct = () => {

        const boughtProduct = {};
        boughtProduct.name = loggedInUser.name || loggedInUser.displayName;
        boughtProduct.date = new Date().toDateString('dd/MM/yyyy');
        boughtProduct.email = loggedInUser.email;
        boughtProduct.imageURL = imageURL;
        boughtProduct.productName = name;
        boughtProduct.price = price;
        boughtProduct.weight = weight;
        setLoggedInUser(boughtProduct);
        fetch('https://shrouded-dusk-39597.herokuapp.com/boughtProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(boughtProduct)
        })

    }
    return (
        <div className="container">
            <div className="card-holder">
                <img src={imageURL} alt="" />
                <h3 className="event-name">{name}</h3>
                <Link to="/checkout"><button onClick={handleAddProduct} className="event-btn">Buy Product </button></Link>

            </div>
        </div>
    );
};

export default Product;