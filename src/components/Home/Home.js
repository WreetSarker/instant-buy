import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-dusk-39597.herokuapp.com/products')
            .then(resp => resp.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="product-container">
            {
                products.map(pd => <Product pd={pd}></Product>)
            }
        </div>
    );
};

export default Home;