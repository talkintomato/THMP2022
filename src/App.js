import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./styles.css";
import Tabs from "./Tabs";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function App() {
	// const [load, setLoad] = useState(false);
	function redirectInsta() {
		window.open(
			"https://www.instagram.com/temasek.theatrette/?hl=en",
			"_blank"
		);
	}
	// while (load) {
	// 	return (
	// 		<Grid backgroundColor="rgb(0,0,0)" height="100vh">
	// 			<Grid container justifyContent="center" paddingTop="5%">
	// 				<img
	// 					src={frontCover}
	// 					alt={"frontCover"}
	// 					loading="lazy"
	// 					width="30%"
	// 					marginLeft="-200px"
	// 				/>
	// 			</Grid>
	// 		</Grid>
	// 	);
	// }

	return (
		<>
			<div style={{ backgroundColor: "black", height: "100%" }}>
				<Tabs></Tabs>
				<div className="footer">
					<div>
						<InstagramIcon
							className="largeIcon inline-block-child"
							onClick={redirectInsta}
						></InstagramIcon>
						<p className="inline-block-child" onClick={redirectInsta}>
							Temasek THeatrette
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
