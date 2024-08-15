import axios from "axios";
import React, { useState } from "react";
import ProductList from "./ProductList";
const AddProductForm = ()=>{
const [name,setName]=useState('')
const [purchasePrice, setPurchasePrice] = useState('');
const [salesPrice, setSalesPrice] = useState('');
const [error, setError] = useState(null);
const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
         const response = await axios.post('http://localhost:3000/api/addProduct',{name,purchase_price:purchasePrice,sales_price:salesPrice})
         alert("Product added successfully!");
         console.log(response);
         
    }catch(error){
        setError(error.message);
    }

}
    return(
        <>
        <div className="container">  
<div className="add-product-box1">
        <h3>Product Management</h3>
        <form onSubmit={handleSubmit}>
        <div className="add-product-box">

        <div className="name">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div className="purchase-price">
            <label>Purchase Price:</label>
            <input type="number" value={purchasePrice} onChange={(e)=>{
                setPurchasePrice(e.target.value)
            }} />
        </div>
        <div className="sales-price">
            <label>Sales Price:</label>
            <input type="number" value={salesPrice} onChange={(e)=>{setSalesPrice(e.target.value)}} />
        </div>
<div className="button">
<button className="addButton" type="submit">Add Product</button>
</div>
       
        </div>

        </form>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
        </div>

<ProductList/>
        </>
    )
}
export default AddProductForm;