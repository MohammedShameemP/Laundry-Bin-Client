import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../Actions/products";

const initialState = {
    productcart:[],
    // totalprice:0,
    // service:"",
    
};

const cartSlice = createSlice({
    name: "cart",
    initialState, //state
    reducers: {
        addToCart(state, action) {  
            console.log("payload",action.payload);
            const{price,_id}=action.payload
            
                    
            const obj = {
                productId: _id,
                cartcount: 1,
                price:Number(price),

                
            }            
            console.log("object",obj);
            state.productcart.push(obj)
            
        }, 
        increment(state, action) {
           const {_id,price}=action.payload
            state.productcart.forEach(e=>{if(e.productId===_id){

                console.log("element",e);
                const count=e.cartcount+1
                e.cartcount=count
                e.price=price*count
                
            }})
            

          


        }, 
        decrement(state, action) {
            const {_id,price}=action.payload
        
            state.productcart.forEach((e,index)=>{
                if(e.productId===_id){
                    const count= e.cartcount-1
                    e.price=e.price-price
                    e.cartcount=count

                    if(e.cartcount===0){
                        state.productcart.splice(index,1)
                    }
                
                }
            })
        }, 

    },
});

export const { addToCart,increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;