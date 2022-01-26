import { Button, Paper, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./Home.css";
import frontCover from "./LABYRINTHCOLDRIDGE_white.png";

function Home() {
	// const breakpoints = {
	// 	values: {
	// 		xs: 0,
	// 		sm: 0, // Phone
	// 		md: 768, // Tablet/Laptop
	// 		lg: 1500, // Desktop
	// 		xl: 2000,
	// 	},
	// };

	function redirectDayOne() {
		window.open(
			"https://nusfastpay.nus.edu.sg/thmp22labyrinthcoldrige23feb",
			"_blank"
		);
	}
	function redirectDayTwo() {
		window.open(
			"https://nusfastpay.nus.edu.sg/thmp22labyrinthcoldrige24feb",
			"_blank"
		);
	}

	const theme = createTheme({
		typography: {
			allVariants: {
				color: "rgba(174,170,175,0.6)",
			},
			title: {
				fontFamily: "Joker",
				color: "rgb(200,200,200)",
				fontSize: "14vw",
				lineHeight: "90%",
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
						minHeight: "100vh",
					}}
					elevation="0"
				>
					<Typography variant="title">LABYRINTH COLDRIDGE</Typography>
					<Grid container>
						<Grid xs={12} md={8}>
							<Grid container justifyContent="center">
								<Grid Item>
									<Typography style={{ fontSize: "3.5vh", marginTop: "4%" }}>
										A Temasek THeatrette Original
									</Typography>
								</Grid>
								<Grid
									container
									justifyContent="center"
									spacing="30"
									marginTop="0%"
									marginBottom="4%"
								>
									<Grid item>
										<Button
											variant="contained"
											size="large"
											style={{
												backgroundColor: "#A9A9A9",
												color: "rgb(0,0,0)",
											}}
											onClick={redirectDayOne}
										>
											GET 23 Feb 2022 TICKETS
										</Button>
									</Grid>
									<Grid item>
										<Button
											variant="contained"
											size="large"
											style={{
												backgroundColor: "#A9A9A9",
												color: "rgb(0,0,0)",
											}}
											onClick={redirectDayTwo}
										>
											GET 24 Feb 2022 TICKETS
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid Item xs={12} md={3}>
							<img
								src={frontCover}
								alt={"frontCover"}
								loading="lazy"
								width="80%"
								marginLeft="-200px"
							/>
						</Grid>
					</Grid>
					<Grid
						container
						justifyContent="center"
						paddingBottom="20%"
						paddingTop="5%"
					>
						<Grid item md={8} minHeight="30vw">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/4f4jTTN6Y10"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</Grid>
					</Grid>
				</Paper>
			</>
		</ThemeProvider>
	);
}

export default Home;
