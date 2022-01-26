import React from "react";
import { Button, Grid, Typography } from "@mui/material";
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
			<Grid container style={{ backgroundColor: "black", height: "100%" }}>
				<Tabs></Tabs>
				<Grid className="footer" paddingBottom="6vh">
					<Button>
						<InstagramIcon
							className="largeIcon inline-block-child"
							onClick={redirectInsta}
							style={{ color: "white" }}
						></InstagramIcon>
						<Typography
							variant="body"
							style={{ color: "white" }}
							className="inline-block-child"
							onClick={redirectInsta}
						>
							Temasek THeatrette
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</>
	);
}
