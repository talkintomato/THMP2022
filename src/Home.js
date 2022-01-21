import { Button, Paper, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./Home.css";

function Home() {
	const breakpoints = {
		values: {
			xs: 0,
			sm: 0, // Phone
			md: 768, // Tablet/Laptop
			lg: 1500, // Desktop
			xl: 2000,
		},
	};

	const theme = createTheme({
		typography: {
			allVariants: {
				color: "rgba(174,170,175,0.6)",
			},
			title: {
				fontFamily: "Joker",
				color: "rgb(200,200,200)",
				fontSize: "15vw",
			},
			subtitle1: { color: "rgba(200,200,200,0.8)" },
			fontFamily: "Adam",
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
						height: "80vh",
						paddingTop: "4vw",
					}}
					elevation="0"
				>
					<Typography variant="title">LABYRINTH COLDRIDGE</Typography>
					<Typography style={{ fontSize: "4vw" }} paddingBottom="1em">
						A Temasek THeatrette Original
					</Typography>

					<Grid container justifyContent="center" spacing="30">
						<Grid item>
							<Button
								variant="contained"
								size="medium"
								style={{
									backgroundColor: "#A9A9A9",
									color: "rgb(0,0,0)",
								}}
							>
								23 Feb 2022 TICKETS
							</Button>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								size="medium"
								style={{
									backgroundColor: "#A9A9A9",
									color: "rgb(0,0,0)",
								}}
							>
								24 Feb 2022 TICKETS
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</>
		</ThemeProvider>
	);
}

export default Home;
