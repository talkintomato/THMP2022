import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography, Card } from "@mui/material";
import { itemData } from "./CrewList";
import director from "./THEATRE_5986.jpg";

export default function Contact() {
	const theme = createTheme({
		typography: {
			allVariants: {
				color: "rgba(255,255,255,1)",
			},
			h1: {
				letterSpacing: 6,
			},

			subtitle2: {
				color: "rgba(255,255,255,0.8)",
			},
			h3: {
				fontWeight: "bold",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			{/* <Typography variant="h2" align="center" padding="30px" fontWeight="bold">
				Cast & Creative
			</Typography> */}
			<Card
				style={{
					backgroundColor: "rgba(255,255,255,0.25)",
					margin: "30px",
					padding: "10px",
				}}
			>
				<Grid container spacing={6}>
					<Grid item xs={12} md={4}>
						<img src={director} alt={"director"} loading="lazy" width="100%" />
					</Grid>

					<Grid item xs={12} md={8}>
						<Typography variant="h3" paddingBottom="3vh">
							Directors Message
						</Typography>
						<Typography variant="h6">
							Labyrinth Coldridge is a Temasek Hall musical, built completely
							from scratch and only made possible through the tireless efforts
							and collaboration with our talented cast members and production
							crew. A product of endless nights of relentless meetings and
							practices, Labyrinth Coldridge has braved through the COVID 19
							pandemic to come to you this Feberuary.
							<br />
							<br /> Live from Gateway Theatre, Labyrinth Coldridge looks
							forward to seeing you on 23, 24 Feberuary.
							<br />
							<br />- Noah Teo
						</Typography>
					</Grid>
				</Grid>
			</Card>

			<Grid
				container
				justifyItems="center"
				spacing={5}
				style={{
					padding: "10px",
				}}
			>
				<Grid item xs={12} sm={12}>
					<Typography variant="h3"> CAST </Typography>
				</Grid>
				{itemData.map((item) => (
					<Grid
						item
						key={item.img}
						xs={6}
						sm={3}
						// paddingBottom="30px"
						// paddingLeft="15px"
						// paddingRight="15px"
					>
						<img
							src={`${item.img}`}
							srcSet={`${item.img}`}
							alt={item.title}
							loading="lazy"
							width="100%"
							height="60%"
						/>
						<Typography variant="subtitle1" align="center" fontWeight="bold">
							{item.title}
						</Typography>
						<Typography
							variant="subtitle2"
							align="center"
							style={{ fontStyle: "oblique" }}
						>
							{item.role}
						</Typography>
					</Grid>
				))}
			</Grid>
		</ThemeProvider>
	);
}
