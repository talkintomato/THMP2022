import { Button, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";
import "./Home.css";

function Home() {
	const theme = createTheme({
		typography: {
			fontFamily: ["Anton", "sans-serif"].join(","),
			allVariants: {
				color: "rgb(174,170,175)",
			},
			h1: {
				letterSpacing: 6,
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<>
				<Paper
					padding="4vw"
					style={{
						textAlign: "center",
						backgroundColor: "transparent",
						height: "100vh",
						paddingTop: "4vw",
					}}
					elevation="0"
				>
					<Typography
						variant="h1"
						fontWeight="bold"
						style={{ fontSize: "6vw" }}
					>
						LABYRINTH COLDRIDGE
					</Typography>
					<Typography variant="h6" style={{ fontSize: "2.5vw" }}>
						A Temasek THeatrette Original • 23, 24 Feburary 2022
					</Typography>
					<Button
						variant="contained"
						style={{ margin: "30px", backgroundColor: "#A9A9A9" }}
					>
						GET TICKETS
					</Button>
				</Paper>
			</>
		</ThemeProvider>
	);
}

export default Home;
