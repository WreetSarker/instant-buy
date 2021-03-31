import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://shrouded-dusk-39597.herokuapp.com/products')
            .then(resp => resp.json())
            .then(data => setProducts(data))
        setLoading(true)
    }, [])

    return (
        <div className="product-container">
            {
                loading ? products.map(pd => <Product pd={pd}></Product>) : (<Spinner animation="grow" />)
            }
        </div>
    );
};

export default Home;