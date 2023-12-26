import React from 'react'
import { connect } from 'react-redux'
import {  increaseQuantity, decreaseQuantity, updateAmount } from './action'

function Quantity({products,increaseQuantity,decreaseQuantity,updateAmount}){
  // React.useEffect(()=>{
  //   updateAmount();

  // },[quantity,updateAmount]);

  return (
    <div className='container row'>
    
      {products.map(product=>(
        <div key={product.id} className='card m-5 text-center bg-danger-subtle row' style={{width:500}}>
            <h2 >Title:{product.title}</h2>
            <p>Description:{product.description}</p>
            <h4>Brand:{product.brand}</h4>
            <p>Rating:{product.rating}</p>
      <button onClick={()=>decreaseQuantity(product.id)} className='btn bg-danger '>-</button>
      <span>Quantity:{product.quantity}</span>
      <button onClick={()=>increaseQuantity(product.id)} className='btn bg-success'>+</button>
      <p>Total amount:${product.price}</p>
      
    </div>)
  )}
  </div>
  )
      }
      
const mapStateToProps= state=>({
  products:state.products
})

const mapDispatchToProps={
  increaseQuantity,
  decreaseQuantity,
  updateAmount
};

export default connect (mapStateToProps,mapDispatchToProps)(Quantity);
