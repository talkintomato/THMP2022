import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography, Card } from "@mui/material";
import { itemData } from "./data/CrewList";
import director from "./CastPics/Noah.jpg";
import CreativeTable from "./CreativeTable.js";
import CreativeListOne from "./data/CreativeListOne.js";
import CreativeListTwo from "./data/CreativeListTwo.js";

export default function Contact() {
	const theme = createTheme({
		typography: {
			allVariants: {
				color: "rgba(255,255,255,1)",
				fontFamily: "Adam",
			},
			h1: {
				letterSpacing: 6,
			},
			subtitle2: {
				color: "rgba(255,255,255,0.8)",
				fontFamily: "Adam",
			},
			subtitle1: {
				fontFamily: "Adam",
			},
			h4: {
				fontFamily: "Adam",
				fontWeight: "bold",
			},
			body1: { fontFamily: "Calibre" },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Grid container justifyContent="center">
				<Grid Item xs={12} md={10} lg={8}>
					<Card
						style={{
							backgroundColor: "rgba(255,255,255,0.25)",
							padding: "2%",
						}}
					>
						<Grid container spacing={6}>
							<Grid item xs={12} md={4} lg={4}>
								<img
									src={director}
									alt={"director"}
									loading="lazy"
									width="100%"
									minheight="100%"
								/>
							</Grid>

							<Grid item xs={12} md={8} lg={8}>
								<Typography paddingBottom="2vh" variant="h4">
									Director's Message
								</Typography>
								<Typography variant="body1">
									The idea for Labyrinth Coldrdige stemmed from the pervasive
									issue that our generation of youths face. Themed around
									introspection, friendship, social privilege and finding
									yourself, Labyrinth Coldridge hopes to inspire you to question
									if the life you are currently living is the one you truly wish
									to pursue, to get you to live your best life.
									<br /> <br />
									The musical was inspired by my perception of finding purpose
									in Singapore life. When you do not know your purpose in this
									place, you become spineless and will subconsciously cause harm
									and hurt to both others and yourself. However, we often get
									caught in the daily affairs of life to realise the detriments
									it brings to us. We are only often shaken by huge life
									changing events to inspire us for introspection and change.
									However by nature of life, we are always dragged back into the
									path most conveniently laid out to us, especially when every
									step of our lives had been so meticulously planned for us. It
									is thus difficult to change, but only made easier through
									mixing with the right friends and social support group who
									could push you to become the best true version of yourself.{" "}
									<br />
									<br />
									On a personal note, it has been an extremely tiring but
									enjoyable journey. Being faced with the constraints of
									COVID-19 and needing to juggle the weight of my school
									commitments has not been an easy feat. However, working
									alongside this amazingly capable cast and production crew has
									made this experience nothing short of enjoyable.
									<br /> <br />
									The production was only made possible through the collective
									efforts of our talented cast, production team and crew. A huge
									thanks to Jia Ning, Jermayne Yeo, Edward Loke, Gayle Tan,
									Darin Loh, Calysta Chng, Goh Shiyun and Sophie Lau. Finally,
									thank you, the audience, for supporting Labyrinth Coldridge.
									We hope that you will enjoy the musical as much as we do
									producing it!
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
							padding: "5%",
						}}
					>
						<Grid item xs={12} sm={12} textAlign="center">
							<Typography variant="h3"> -CAST-</Typography>
						</Grid>
						{itemData.map((item) => (
							<Grid item key={item.img} xs={6} sm={3}>
								<img
									src={`${item.img}`}
									srcSet={`${item.img}`}
									alt={item.title}
									loading="lazy"
									width="100%"
								/>
								<Typography
									variant="subtitle1"
									align="center"
									fontWeight="bold"
								>
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
					<Grid
						container
						justifyItems="center"
						justifyContent="center"
						spacing={5}
						style={{
							padding: "5%",
							marginBottom: "3vh",
						}}
					>
						<Grid item xs={12} sm={12} textAlign="center">
							<Typography variant="h3"> -Creative-</Typography>
						</Grid>
						<Grid xs={12} md={6}>
							<CreativeTable rows={CreativeListOne}> </CreativeTable>
						</Grid>
						<Grid xs={12} md={6}>
							<CreativeTable rows={CreativeListTwo}> </CreativeTable>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
