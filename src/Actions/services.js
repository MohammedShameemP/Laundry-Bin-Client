import axios from 'axios'

export const all_services=async ()=>{
    console.log("in all pro actions");
    try {
        const response=await axios.get("https://merry-frangollo-57785e.netlify.app/api/all_services");
        console.log("products list successfully",response);


        return response;
    }
    catch (error) {
        console.log("Error fetching products", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : { error: true, message: error.message };

    }


};