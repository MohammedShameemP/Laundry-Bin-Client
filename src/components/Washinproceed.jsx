import React from "react";
import "./Washinproceed.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartdetails } from "../Actions/products";
const Washinproceed = () => {
	const navigate = useNavigate();
	const { productcart } = useSelector((state) => state.cart);

	console.log("productcart", productcart);
	let totalcount = 0;
	let totalprice = 0;
	productcart.forEach((e) => {
		totalcount = totalcount + e.cartcount;
		totalprice = totalprice + e.price;
	});
	console.log("totalcount", totalcount);
	console.log("totalprice", totalprice);

	const handleproceed = async () => {
		const user = JSON.parse(localStorage.getItem("data"));
		console.log("user in washingproceed", user);
		const id = user._id;
		navigate("/Instructions")

		const response = await cartdetails(productcart,totalprice, id);
		console.log("response", response);
	};

	return (
		<>
			{totalcount && totalprice && (
				<div className="procmain">
					<div className="proceedbtn">
						<div>
							<div>{totalprice}</div>
							<div>{totalcount}items</div>
						</div>
						<button className="btnproce" onClick={handleproceed}>
							Proceed
						</button>
						<img src="./" alt="" />
					</div>
				</div>
			)}
		</>
	);
};

export default Washinproceed;
