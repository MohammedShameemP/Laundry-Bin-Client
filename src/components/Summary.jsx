
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import "./Summary.css";
import { allPickupDetails, summaryDetails} from '../Actions/summaryDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setPickupAddress } from "../Redux/reducers/pickupAddress";
import Pickupdetails from './Pickupdetails';
import Pickupdate from './Pickupdate';



const Summary = () => { 

  const dispatch = useDispatch();
  const {pickupAddress}=useSelector((state)=>state.pickupAddress);
  console.log("pickupAddress",pickupAddress);
  
  

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    destination: "",
    phone: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  // Use useEffect to monitor formData changes
  useEffect(() => {
    console.log("formdata updated:", formData);
  }, [formData]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickSave =async () => {
    setOpen(false);
    

  };

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("input change detected:", name, value); // Log to check input
    setFormData({ ...formData, [name]: value });
    setErrorMsg("");
  };

  const handleSave =async (e) => {
    e.preventDefault();  // Prevent form submission
    console.log("Form saved with data:", formData);
    const response=await summaryDetails(formData);
    console.log("response",response);

  };
  useEffect(() => {
		FetchallPickupDetails();
	}, []);

  const FetchallPickupDetails=async()=>{
    console.log(" in FetchallPickupDetails");
    

    const response=await allPickupDetails();
    console.log("response",response.data);
    if(response.status){
      dispatch(setPickupAddress(response.data));
      

    }
    else{
      console.log(error);
      

    }
    
    

  }



  return (
    <div className='summary'>
      <div className='summaryhead'>
        <img src="./arrow-left.svg" alt="" />
        <h1>Summary</h1>
      </div>
      <div className='mainpickuppoint'>
        <div className='pickuppoint'>
        
          <div>
          <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
              +
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <form onSubmit={handleSave}>
                <DialogTitle>Pickuppoint</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="address"
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    margin="dense"
                    id="destination"
                    name="destination"
                    label="Destination"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" onClick={handleClickSave}>Save</Button>
                </DialogActions>
              </form>
            </Dialog>
          </React.Fragment>
          </div>
          <div><Pickupdetails pickupAddress={pickupAddress}/></div>
        
        </div>
        <div><Pickupdate/></div>
      </div>
    </div>
  );
};

export default Summary;
