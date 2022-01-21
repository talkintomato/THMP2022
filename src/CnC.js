import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { itemData } from "./CrewList";

export default function Contact() {
	const theme = createTheme({
		typography: {
			allVariants: {
				color: "#fffBF1",
			},
			h1: {
				letterSpacing: 6,
			},
			h6: {
				color: "#fffBF1",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h2" align="center" padding="30px" fontWeight="bold">
				Cast and Creative
			</Typography>
			<Grid container padding="15px">
				<Typography>Directors message</Typography>
				<Typography>
					Director’s Message: Labyrinth Coldridge is a Temasek Hall musical,
					built completely from scratch and only made possible through the
					tireless efforts and collaboration with our talented cast members and
					production crew. A product of endless nights of relentless meetings
					and practices, Labyrinth Coldridge has braved through the COVID 19
					pandemic to come to you this Feberuary. Live from Gateway Theatre,
					Labyrinth Coldridge looks forward to seeing you on 23,24 Feberuary.
				</Typography>
			</Grid>
			<Grid
				container
				justifyItems="center"
				paddingRight="15px"
				paddingLeft="15px"
			>
				{itemData.map((item) => (
					<Grid
						item
						key={item.img}
						xs={6}
						sm={3}
						paddingBottom="30px"
						paddingLeft="15px"
						paddingRight="15px"
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
