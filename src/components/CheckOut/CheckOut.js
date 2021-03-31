import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-dusk-39597.herokuapp.com/getSingleProduct/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setItem(data[0]);
                const boughtProduct = {};
                boughtProduct.name = loggedInUser.name || loggedInUser.displayName;
                boughtProduct.date = new Date().toDateString('dd/MM/yyyy');
                boughtProduct.email = loggedInUser.email;
                boughtProduct.imageURL = data[0].imageURL;
                boughtProduct.productName = data[0].name;
                boughtProduct.price = data[0].price;
                boughtProduct.weight = data[0].weight;
                console.log(data[0]);
                setLoggedInUser(boughtProduct);
                fetch('https://shrouded-dusk-39597.herokuapp.com/boughtProduct', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(boughtProduct)
                })
            })
    }, [])


    // useEffect(() => {



    // }, [id])



    return (
        <div>
            <h1>Checkout</h1>
            <h3>Ordered Item: {item.name}</h3>
            <h4>Price: {item.price}</h4>
            <p>Weight: {item.weight}</p>

        </div>
    );
};

export default CheckOut;