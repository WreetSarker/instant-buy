import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Orders from '../Orders/Orders';

const BoughtProducts = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [boughtProducts, setBoughtProducts] = useState([]);


    useEffect(() => {
        fetch('https://shrouded-dusk-39597.herokuapp.com/getBoughtProducts?email=' + loggedInUser.email)
            .then(resp => resp.json())
            .then(data => setBoughtProducts(data))
    }, [])


    return (
        <div>
            <h1>These are {loggedInUser.displayName || loggedInUser.name}'s products</h1>
            {
                boughtProducts.map(pd => <Orders pd={pd}></Orders>)
            }
        </div>
    );
};

export default BoughtProducts;