import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Card, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import Iframe from "react-iframe";
import Prices from "./Prices.js";

export default function Info() {
	const theme = createTheme({
		typography: {
			allVariants: {
				color: "#ffffff",
			},
			h3: {
				letterSpacing: 2,
				fontFamily: "Adam",
			},
			h6: {
				color: "rgb(255,255,255,0.8)",
			},
		},
	});

	function Directions() {
		window.open(
			"https://theatre.gateway.sg/visitors-guide/getting-here-parking",
			"_blank"
		);
	}

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

	return (
		<ThemeProvider theme={theme}>
			<Grid container justifyContent="center">
				<Grid Item md={10} xs={13}>
					<Grid
						container
						justifyContent="center"
						paddingTop="5vh"
						textAlign="center"
					>
						<Typography variant="h3" fontWeight="bold">
							{" "}
							SHOWDATES
						</Typography>
					</Grid>
					<Grid container justifyContent="center">
						<Button
							variant="contained"
							size="large"
							style={{
								margin: "3%",
								backgroundColor: "#A9A9A9",
								color: "rgb(0,0,0)",
								fontFamily: "Adam",
							}}
							onClick={redirectDayOne}
						>
							GET 23 Feb 2022 TICKETS
						</Button>
						<Button
							variant="contained"
							size="large"
							style={{
								margin: "3%",
								backgroundColor: "#A9A9A9",
								color: "rgb(0,0,0)",
								fontFamily: "Adam",
							}}
							onClick={redirectDayTwo}
						>
							GET 24 Feb 2022 TICKETS
						</Button>
					</Grid>
					<Paper
						elevation={0}
						style={{
							padding: "1em ",
							margin: "5%",
							alignItems: "center",
							backgroundColor: "transparent",
							textAlign: "center",
						}}
					>
						<Typography variant="h3" fontWeight="bold">
							Pre-Show Brief
						</Typography>
						<Typography
							variant="h6"
							style={{
								marginTop: "2em",
								marginBottom: "10px",
								fontFamily: "calibre",
								fontWeight: "bold",
							}}
						>
							Please be seated by 7:15pm <br />
							<br />
							Please ensure that your mobile phones are kept on silent mode
							throughout the show. We will only allow entry if you are fully
							vaccinated or exempted from Vaccinated Differentiated Safe
							Measurement Measures (VDS). Please remain masked and seated
							throughout the show. No food and drinks allowed.
						</Typography>
					</Paper>
					<Paper
						elevation={0}
						style={{
							padding: "1em ",
							margin: "5%",
							alignItems: "center",
							backgroundColor: "transparent",
							textAlign: "center",
						}}
					>
						<Typography variant="h3" fontWeight="bold">
							Sypnopsis
						</Typography>
						<Typography
							variant="h6"
							style={{
								marginTop: "2em",
								marginBottom: "10px",
								fontFamily: "calibre",
								fontWeight: "bold",
							}}
						>
							Labyrinth Coldridge is set in a female prison and follows the
							journey of Cass, an incarcerated young woman who is sentenced for
							embezzlement. Cass finds herself lost in the underground drug
							trade and thus caught in an endless maze of introspection. In the
							unlikeliest of places, she is challenged to forge her own path.
							Will she succumb to the pressures of prison?
						</Typography>
					</Paper>
					<Grid padding="1em" margin="5%" textAlign="center">
						<Typography variant="h3" fontWeight="bold">
							Tickets
						</Typography>
						<Prices></Prices>
					</Grid>
					<Card
						style={{
							// backgroundColor: "rgba(1,11,19,0.3)",
							padding: "1em ",
							margin: "5%",
							marginBottom: "10vh",
							alignItems: "center",
							minHeight: "400px",
							backgroundColor: "rgba(255,255,255,0.25)",
						}}
					>
						<Grid container minheight="60vh">
							<Grid item xs={12} sm={4}>
								<Typography variant="h3" fontWeight="bold">
									Location
								</Typography>
								<Typography variant="h4" style={{ marginTop: "2%" }}>
									Gateway Theatre
								</Typography>
								<Typography variant="h6">
									3615 Jalan Bukit Merah, Singapore 159461
								</Typography>
								<Button
									onClick={Directions}
									variant="contained"
									style={{
										marginTop: "10%",
										marginBottom: "10%",
										backgroundColor: "#A9A9A9",
										color: "rgb(0,0,0)",
										fontFamily: "Adam",
									}}
									xs={12}
								>
									Directions and Parking
								</Button>
							</Grid>
							<Grid item xs={12} sm={8} minHeight="45vh">
								<Iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.265653393968!2d103.8166283!3d1.2840557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x995456882b346c19!2sGateway%20Theatre!5e0!3m2!1sen!2ssg!4v1640684123318!5m2!1sen!2ssg"
									width="100%"
									height="100%"
									allowfullscreen=""
									loading="lazy"
								></Iframe>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
