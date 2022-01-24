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
					}}
					elevation="0"
				>
					<Typography variant="title">LABYRINTH COLDRIDGE</Typography>
					<Grid container>
						<Grid Item xs={12} md={8}>
							<Grid Container>
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
				</Paper>
			</>
		</ThemeProvider>
	);
}

export default Home;
