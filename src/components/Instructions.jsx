import React, { useState, useEffect } from "react";
// import { enqueueSnackbar } from "notistack";
import { setInstructions } from "../Redux/reducers/instructions";
import { useDispatch, useSelector } from "react-redux";

import "./Instructions.css";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
	const { instructions } = useSelector((state) => state.instructions);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [water, setWater] = useState("");
	console.log("water=",water);
	
	const [fabricsoftener, setFabricsoftener] = useState("");
	const [detergent, setDetergent] = useState("");
	const [note, setNote] = useState("");
	const handleclick = () => {};
	const handleSubmit = () => {
		if (note) {
			dispatch(setInstructions({ water, fabricsoftener, detergent, note }));
			navigate("/Summary");
		} else {
			alert("please enter note");
		}
	};

	useEffect(() => {
		setWater(instructions?.water);
	}, []);
	return (
		<div className="instructionmain">
			<div className="instructionhead">
				<div className="ileftarrow">
					<img src="./arrow-left.svg" alt="" />
				</div>
				<div className="instructionh1">
					<h1>Instructions</h1>
				</div>
			</div>
			<div className="method">
				<div className="water">
					<div>
						<h1 className="waterh1">Water</h1>
					</div>
					<div className="box_div">
						<div className={`box ${water === "Hot" ? "active" : "inactive"}`}  onClick={() => setWater("Hot")}>
							<div className="img_circle">
								<img className="imghot" src="./sun.svg" alt="" />
							</div>
							<h1 className="hoth1">Hot</h1>
						</div>
						<div className={`box ${water === "Cold" ? "active" : "inactive"}`} onClick={() => setWater("Cold")}>
							<div className="img_circle">
								<img className="sun" src="./sun.png" alt="" />
							</div>
							<h2 className="coldh1">Cold</h2>
						</div>
					</div>
				</div>

				<div className="water">
					<div>
						<h1 className="waterh1">Fabric Softener</h1>
					</div>
					<div className="box_div">
						<div className={`box ${fabricsoftener === "Yes" ? "active" : "inactive"}`} onClick={()=>setFabricsoftener("Yes")}>
							<div className="img_circle">
								<img className="imghot" src="./sun.svg" alt="" />
							</div>
							<h1 className="hoth1">Yes</h1>
						</div>
						<div className={`box ${fabricsoftener === "No" ? "active" : "inactive"}`} onClick={()=>setFabricsoftener("No")}>
							<div className="img_circle">
								<img className="sun" src="./sun.png" alt="" />
							</div>
							<h2 className="coldh1">No</h2>
						</div>
					</div>
				</div>

				<div className="water">
					<div>
						<h1 className="waterh1">Detergent</h1>
					</div>
					<div className="box_div">
						<div className={`box ${detergent === "Scented" ? "active" : "inactive"}` } onClick={()=>setDetergent("Scented")}>
							<div className="img_circle">
								<img className="imghot" src="./sun.svg" alt="" />
							</div>
							<h1 className="hoth1">Scented</h1>
						</div>
						<div className={`box ${detergent === "Normel" ? "active" : "inactive"}` } onClick={()=>setDetergent("Normel")}>
							<div className="img_circle">
								<img className="sun" src="./sun.png" alt="" />
							</div>
							<h2 className="coldh1">Normel</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="notemain">
				{" "}
				<input type="text" className="note" name="note" value={note} onChange={(e) => setNote(e.target.value)} />
			</div>
			<div className="next_div" >

			<button className="nextBtn" onClick={handleSubmit}>
				Next
			</button>
			</div>
		</div>
	);
};

export default Instructions;
