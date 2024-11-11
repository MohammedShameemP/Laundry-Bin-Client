import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/reducers/cart'

const Beforecart = (props) => {
  const {product}=props;

    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(addToCart(product))}>addToCart</button>
    </div>
  )
}

export default Beforecart