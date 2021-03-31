import React, { useEffect, useState } from 'react';
import EditProduct from '../EditProduct/EditProduct';
import * as ReactBootStrap from 'react-bootstrap';


const ManageProduct = () => {
    // const { name, date, email, imageURL, eventName } = props.ev;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://shrouded-dusk-39597.herokuapp.com/products')
            .then(resp => resp.json())
            .then(data => setProducts(data))
        setLoading(true)
    }, [])


    const handleDelete = id => {
        console.log(id);
        fetch(`https://shrouded-dusk-39597.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE',
        })
    }
    return (
        <div >
            {
                loading ? products.map(pd => <EditProduct pd={pd}></EditProduct>) : (<ReactBootStrap.Spinner animation="border" />)
            }
        </div>
    );
};

export default ManageProduct;