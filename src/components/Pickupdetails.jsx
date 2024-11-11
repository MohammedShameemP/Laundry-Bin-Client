import React from 'react';
import "./Pickupdetails.css"

const Pickupdetails = ({ pickupAddress }) => {
  console.log("pickupAddress in Pickupdetails.jsx", pickupAddress);

  return (
    <div className='pickupmain'>
      <div>
      <h1 className='pickuph1'>Pickup Point</h1></div>
      <div className='pickupsecondmain'>
      {pickupAddress && pickupAddress.length > 0 ? (
        pickupAddress.map((item, index) => (
          <div className="Allpickup" key={index}>
            <p>{item.address}</p>
            <p>{item.destination}</p>
            <p>{item.phone}</p>
          </div>
        ))
      ) : (
        <p>No pickup details available.</p>
      )}
      </div>
    </div>
  );
};

export default Pickupdetails;



