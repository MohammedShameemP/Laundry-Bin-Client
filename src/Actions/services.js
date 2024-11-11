import axios from 'axios'

export const all_services=async ()=>{
    console.log("in all pro actions");
    try {
        const response=await axios.get("http://localhost:2006/api/all_services");
        console.log("products list successfully",response);


        return response;
    }
    catch (error) {
        console.log("Error fetching products", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : { error: true, message: error.message };

    }


};