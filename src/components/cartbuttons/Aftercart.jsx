import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement,increment} from "../../Redux/reducers/cart"




const Aftercart = ({product}) => {
  const {productcart}=useSelector((state)=>state.cart)


  const productitem=productcart.find(e => e.productId === product._id)
  
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch (decrement(product))}>-</button>
      <div>{productitem.cartcount}</div>
      <button onClick={()=>dispatch(increment(product))}>+</button>
    </div>
  )
}

export default Aftercart