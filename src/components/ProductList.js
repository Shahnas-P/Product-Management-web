import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ()=>{
    const [products,setProducts]=useState([])
    const [error ,setError]=useState(null)
    useEffect(()=>{
        const fetchProducts = async()=>{
             try{
                const response = await axios.get('http://localhost:3000/api/products')
                setProducts(response.data.data)
                console.log(products);
                
             }catch(error){
setError(error.message)
             }
        }
        fetchProducts();
    },[])
    return (
        <>
        <div className="table-container">
        <h3>PRODUCT LIST </h3>
        {error &&  <p style={{color:'red'}}>Error:{error}</p>}
        <table>
            <thead>
                <tr>
                <th className="name-column">Name</th>
                <th className="purchase-price-column">Purchase Price</th>
                <th className="sales-price-column">Sales Price</th>
                <th>View Product Details</th>
                </tr>
            </thead>
            <tbody>
           {products.map(product =><tr key={product.product_id}>
                      <td>{product.name}</td>
                      <td>{product.purchase_price}</td>
                      <td>{product.sales_price}</td>
                      <td><Link className="link" to={`/view/${product.product_id}`} >View</Link></td>
                  </tr>)}
                  
              
            </tbody>
        </table>
        </div>
        </>
    )
}
export default ProductList;