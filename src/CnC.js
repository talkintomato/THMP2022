import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Contact() {
	return (
		<>
			<Typography variant="h2" align="center" padding="30px" fontWeight="bold">
				Cast and Creative
			</Typography>
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
						<Typography variant="subtitle1" align="center">
							{item.title}
						</Typography>
						<Typography variant="subtitle2" align="center">
							{item.role}
						</Typography>
					</Grid>
				))}
			</Grid>
		</>
	);
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		role: "@bkristastucchio",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
		role: "@rollelflex_graphy726",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
		role: "@helloimnik",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		role: "@nolanissac",
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		role: "@hjrc33",
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		role: "@arwinneil",
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
		role: "@tjdragotta",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
		role: "@katie_wasserman",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		role: "@silverdalex",
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
		role: "@shelleypauls",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
		role: "@peterlaster",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
		role: "@southside_customs",
	},
];
