import { Button, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./Home.css";

function Home() {
	const theme = createTheme({
		typography: {
			allVariants: {
				color: "rgba(174,170,175,0.6)",
			},
			title: {
				fontFamily: "Joker",
				color: "rgb(200,200,200)",
			},
			subtitle1: { color: "rgba(200,200,200,0.8)" },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<>
				<Paper
					padding="4vw"
					style={{
						textAlign: "center",
						backgroundColor: "black",
						height: "80vh",
						paddingTop: "4vw",
					}}
					elevation="0"
				>
					<Typography variant="title" style={{ fontSize: "13vw" }}>
						LABYRINTH COLDRIDGE
					</Typography>
					<Typography style={{ fontSize: "2.5vw" }}>
						A Temasek THeatrette Original • 23, 24 FEB 2022
					</Typography>
					<Button
						variant="contained"
						style={{
							margin: "30px",
							backgroundColor: "#A9A9A9",
							color: "rgb(0,0,0)",
						}}
					>
						TICKETS
					</Button>
				</Paper>
			</>
		</ThemeProvider>
	);
}

export default Home;
