import React, { useEffect, useState } from 'react';
import EditProduct from '../EditProduct/EditProduct';

const ManageProduct = () => {
    // const { name, date, email, imageURL, eventName } = props.ev;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-dusk-39597.herokuapp.com/products')
            .then(resp => resp.json())
            .then(data => setProducts(data))
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
                products.map(pd => <EditProduct pd={pd}></EditProduct>)
            }
        </div>
    );
};

export default ManageProduct;