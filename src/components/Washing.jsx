import React, { useEffect, useState } from "react";
import { products } from "../Actions/products";
import { useSelector } from "react-redux";
import Beforecart from "./cartbuttons/Beforecart";
import Aftercart from "./cartbuttons/Aftercart";
import "./Washing.css";
import Washinproceed from "./Washinproceed";


function Washing() {
	const { productcart } = useSelector((state) => state.cart);
	console.log("productcart", productcart);

	// console.log("cartcount=",cartcount);
	// console.log("cart=",cart);


	const [product, setProduct] = useState([]); // Initialize as an empty

	useEffect(() => {
		Fetchallproducts();
	}, []);

	const Fetchallproducts = async () => {
		try {
			const response = await products();
			console.log("response in Fetchallproducts", response);
			if (response.data) {
				setProduct(response.data); // Set fetched data
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="washingmain">
			<div className="topdiv">
				<h1 className="washinghead">Washing</h1>
			</div>
			<div className="img">
				<img className="imggr" src="./Group 1082.svg" alt="" />
			</div>
			<div className="product-grid">
				{product && product.length > 0 ? (
					product.map((item, index) => (
						<div className="product-item" key={index}>
							{" "}
							{/* Changed from table rows */}
							<img src={item.image} alt="" />
							<p>{item.name}</p>
							<p>{item.price}</p>
							{productcart.find((e) => e.productId === item._id) ? <Aftercart product={item} /> : <Beforecart product={item} />}
						</div>
					))
				) : (
					<p>No products available</p>
				)}
			</div>
      <Washinproceed/>
		</div>
	);
}

export default Washing;
