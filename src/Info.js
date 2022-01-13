import { Button, Card, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import Iframe from "react-iframe";
import "./Info.css";

export default function Info() {
	function Directions() {
		window.open(
			"https://www.instagram.com/temasek.theatrette/?hl=en",
			"_blank"
		);
	}

	return (
		<>
			<Paper
				elevation={0}
				style={{
					padding: "1em ",
					margin: "5%",
					alignItems: "center",
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

			<Card
				style={{
					// backgroundColor: "rgba(1,11,19,0.3)",
					padding: "1em ",
					margin: "5%",
					alignItems: "center",
					minHeight: "400px",
				}}
			>
				<Grid container>
					<Grid item xs={12} sm={4} height="400px">
						<Typography variant="h3" fontWeight="bold">
							Location
						</Typography>
						<Typography variant="h4" style={{ marginTop: "2em" }}>
							GateWay Theatre
						</Typography>
						<Typography variant="caption">
							3615 Jalan Bukit Merah, Singapore 159461
						</Typography>
						<Button
							onClick={Directions}
							variant="contained"
							style={{ marginTop: "5em" }}
						>
							Directions and Parking
						</Button>
					</Grid>
					<Grid item xs={12} sm={8}>
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
		</>
	);
}
