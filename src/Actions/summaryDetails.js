import axios from "axios";

export const summaryDetails=async(data)=>{
    console.log("in summaryDetails action ");
    
    try {
        const response=await axios.post("http://localhost:2006/api/summaryDetails",data);
        console.log("response in summary",response);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export const allPickupDetails=async()=>{
    
    try {
        const response=await axios.get("http://localhost:2006/api/allPickupDetails");
        return response.data

    } catch (error) {
        console.log(error);
        
    }
}


