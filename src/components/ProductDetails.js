import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ()=>{
    const {id} = useParams()
    const [product ,setProduct]=useState(null)
    const [error ,setError]=useState(null)
useEffect(()=>{
fetchProduct()
},[id])
const fetchProduct =async ()=>{
    try{
        const response = await axios.get(`http://localhost:3000/api/productDetails/${id}`)
        console.log(response.data);
        setProduct(response.data)

    }catch(error){
        setError(error.message)
    }

}
if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return(
    <>
   <div className="container">
{ product ?( <div className="product-details-box">
    <div className="product-name">
    <h1>{product.product.name}</h1>
    <h5><strong>Record Id:</strong>{product.profitRecord[0].record_id}</h5> 
    </div>
     

    <h4><strong>Purchase Price:</strong> {product.product.purchase_price}</h4>
    <h4><strong>Sales Price:</strong> {product.product.sales_price}</h4>
    <h4><strong>Profit:</strong>{product.product.profit}</h4>

     </div>): <p>Loading...</p>}
   
    </div>
   
    </>)
}
export default ProductDetails;