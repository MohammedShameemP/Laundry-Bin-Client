
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/reducers/user";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { all_services } from "../Actions/services";

function HomePage() {
  const [services, setServices] = useState([]);
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("data"));
    dispatch(setUser(user));
  }, [dispatch]);


  // useEffect(() => {
  //   setServices([
  //     { _id: '1', image: 'https://example.com/image1.png', servicename: 'Service 1' },
  //     { _id: '2', image: 'https://example.com/image2.png', servicename: 'Service 2' }
  //   ]);
  // }, []);

  useEffect(() => {
    Fetchallproducts();
  }, []);

  const Fetchallproducts = async () => {
    console.log("in fetchallproduct funct");
    try {
      const response = await all_services();
      console.log("response", response);
      console.log("response.data", response?.data);
      if (response && response.data && Array.isArray(response.data.data)) {
        setServices(response.data.data);
      }
      else {
        console.error("Invalid response structure", response);
      }

    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    dispatch(setUser(null));
  };

  return (
    <div className="main">
      <div>
        <Navbar />
        <div className="nameandbutton">
          <div className="name">
            {user?.username ? (
              <h1 className="homeh1">Hello {user.username}</h1>
            ) : (
              <h1 className="homeh1">Hello Customer</h1>
            )}
            <div className="place">
              <img className="houseimg" src="./house.svg" alt="" />
              <h2 className="placename">Parappanangadi</h2>
            </div>
          </div>

          <div>
            {user ? (
              <button className="buttonlog" name="Login" onClick={handlelogout}>
                Logout
              </button>
            ) : (
              <Link to="/AuthPage">Join</Link>
            )}
          </div>

          <div className="log"></div>
        </div>
        <div className="limgdiv">
          <div>
            <img className="Limg" src="./Limg.webp" alt="" />
          </div>
          <div>
            <img className="Limg" src="./limg2.webp" alt="" />
          </div>
        </div>
        <div className="offrmain">
          <div className="offh1">
            <img className="offrimg" src="./fi_16260.svg" alt="" />
            <div className="offrh">
              <h1>Offers</h1>
            </div>
          </div>
          <div className="Offers">
            <div className="offer1">
              <h2>Free delivery on every orders for 6 months</h2>
              <h1>Rs 499</h1>
            </div>
            <div className="offer1">
              <h2>Free delivery on every orders for 3 months</h2>
              <h1>Rs 299</h1>
            </div>
            <div className="offer1">
              <h2>Free delivery on every orders for 6 months</h2>
              <h1>Rs 499</h1>

            </div>
          </div>
        </div>
        <div className="servicelist">

{/* {console.log("servicessdsdsdsd",services)} */}
          {
		  services.length > 0 ? (
            services.map((item) => (
              
				<div className="service" key={item._id}> 
				<div className="imageservice"> <Link className="link" to="/Washing"><img className="imageser"  src={item.image} alt="" />
        <h4 className="serviceh">{item.servicename}</h4></Link>
				
        
        </div>
				
			  </div>
            ))
          ) : (
            <p >No services available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
