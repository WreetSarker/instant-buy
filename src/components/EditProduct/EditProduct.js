import React from 'react';

const EditProduct = (props) => {
    const { name, price, weight } = props.pd;
    const handleDelete = id => {
        console.log(id);
        fetch(`https://shrouded-dusk-39597.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE',
        })
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{weight}</p>
            <p>{price}</p>
            <button onClick={() => handleDelete(props.pd._id)} className="cancel-btn">Delete</button>
        </div>
    );
}
export default EditProduct;