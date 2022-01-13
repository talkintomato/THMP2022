import React from "react";
import "./styles.css";
import Tabs from "./Tabs";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function App() {
	function redirectInsta() {
		window.open(
			"https://www.instagram.com/temasek.theatrette/?hl=en",
			"_blank"
		);
	}

	return (
		<>
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
		</>
	);
}
