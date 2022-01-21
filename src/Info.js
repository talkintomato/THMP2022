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
			"https://www.instagram.com/temasek.theatrette/?hl=en",
			"_blank"
		);
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				justifyContent="center"
				paddingTop="5vh"
				textAlign="center"
			>
				<Typography variant="h3" fontWeight="bold">
					{" "}
					SELECT SHOWDATE
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
				>
					23 Feb 2022 TICKETS
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
				>
					24 Feb 2022 TICKETS
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
					Sypnopsis
				</Typography>
				<Typography
					variant="h6"
					style={{ marginTop: "2em", marginBottom: "10px" }}
				>
					Set in Coldridge, a female penitentiary, Labyrinth Coldridge tells the
					tale of the life of Cassie, a girl who had been following the system
					her entire life. As she slowly starts coming to terms with the
					meaningless life that she has been sucked into, she finds herself in a
					state of loss. Themed around introspection, friendship and finding
					yourself, Labyrinth Coldridge hopes to keep you questioning if the
					life you are currently living is the one you truly wish to pursue.
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
				<Grid container height="60vh">
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
					<Grid item xs={12} sm={8} minHeight="30vh">
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
		</ThemeProvider>
	);
}
