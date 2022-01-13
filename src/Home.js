import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import "./Home.css";

function Home() {
	return (
		<>
			<Paper padding="3vw" style={{ textAlign: "center" }} elevation="0">
				<Typography variant="h1" fontWeight="bold" style={{ fontSize: "6vw" }}>
					LABYRITH COLDRIDGE
				</Typography>
				<Typography variant="h6" style={{ fontSize: "2.5vw" }}>
					A Temasek THeatrette Original • 23, 24 Feburary 2022
				</Typography>

				<Button variant="contained" style={{ margin: "30px" }}>
					GET TICKETS
				</Button>
			</Paper>
		</>
	);
}

export default Home;
