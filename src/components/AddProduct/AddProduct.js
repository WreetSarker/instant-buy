import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL,
        }


        fetch('https://shrouded-dusk-39597.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(resp => console.log('server resp', resp))
    }

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3dacd4bde4736caf7263e39e48f3a316');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(async function (response) {
                await setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Add your products here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input name="name" placeholder="Product Name" ref={register} />
                    {/* <br /> */}
                    <input name="price" placeholder="Price" ref={register} />
                </div>
                {/* <br /> */}
                <div>
                    <input name="weight" placeholder="Weight" ref={register} />
                    {/* <br /> */}
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    {/* <br /> */}
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;