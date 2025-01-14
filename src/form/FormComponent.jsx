import React, { useState } from 'react'
import useSquare from './useSquare';

const FormComponent = (props) => {
    const [name, setName] = useState();
    const [products, setProducts] = useState();
    const sq = useSquare(5);
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products', {
            method: 'GET'
        })
        const data = await response.json();
        setProducts(data.products);
    }

    const setProductName = (value)=> {
         setTimeout(()=> {
            setName(value);
         },0);
    }

    return (
        <>
            <div>FormComponent</div>
             <label for="pName">Product Name  </label>
            <input type="text" id='pName' value={name} onChange={(event) => setProductName(event.target.value)} />
        
            <div>{name}</div>
            <button onClick={getProducts}>Get Products</button>
            <div>List of Producst</div>
            {
                 products?.map((data, index) => (

                    <div key={index}>
                        <div>{props.name}</div>
                        <div>{data.brand}</div>
                    </div>
                ))
            }
        </>
    )
}

export default FormComponent