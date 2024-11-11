import axios from "axios";

export const products=async ()=>{
    try {
        const response=await axios.get ("http://localhost:2006/api/allproducts")
        console.log("response",response);
        return response.data;
        

    } catch (error) {
        console.log(error);
        
    }
}
 export const cartdetails=async (data,totalprice,id)=>{
    try {
        console.log({data});
        
        const response=await axios.post (`http://localhost:2006/api/cartdetail?id=${id}`,{data,totalprice})
        

        
    } catch (error) {
        console.log(error);
        
    }
 }