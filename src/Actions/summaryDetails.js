import axios from "axios";

export const summaryDetails=async(data)=>{
    console.log("in summaryDetails action ");
    
    try {
        const response=await axios.post("https://merry-frangollo-57785e.netlify.app/api/summaryDetails",data);
        console.log("response in summary",response);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export const allPickupDetails=async()=>{
    
    try {
        const response=await axios.get("https://merry-frangollo-57785e.netlify.app/api/allPickupDetails");
        return response.data

    } catch (error) {
        console.log(error);
        
    }
}


