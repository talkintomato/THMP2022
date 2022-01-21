import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

function createData(name, Individual, four, eight) {
	return { name, Individual, four, eight };
}

const rows = [
	createData("Cat A", "$25", "$24", "$22"),
	createData("Cat B", "$23", "$22", "$20"),
];

const theme = createTheme({
	tableCell: {
		color: "rgb(255,255,255)",
	},
});

export default function rices() {
	return (
		<ThemeProvider theme={theme}>
			<Typography> Tickets </Typography>
			<TableContainer>
				<Table sx={{ minWidth: 400 }} aria-label="Ticket Prices">
					<TableHead>
						<TableRow>
							<TableCell
								style={{
									color: "rgb(255,255,255)",
									fontWeight: "bold",
									fontFamily: "calibre",
								}}
							></TableCell>
							<TableCell
								align="left"
								style={{
									color: "rgb(255,255,255)",
									fontWeight: "bold",
									fontFamily: "calibre",
								}}
							>
								Individual
							</TableCell>
							<TableCell
								align="left"
								style={{
									color: "rgb(255,255,255)",
									fontWeight: "bold",
									fontFamily: "calibre",
								}}
							>
								Bundle of 4
							</TableCell>
							<TableCell
								align="left"
								style={{
									color: "rgb(255,255,255)",
									fontWeight: "bold",
									fontFamily: "calibre",
								}}
							>
								Bundle of 8
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "rgb(255,255,255)",
										fontFamily: "calibre",
										fontWeight: "bold",
									}}
								>
									{row.name}
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "rgb(255,255,255)", fontFamily: "calibre" }}
								>
									{row.Individual}
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "rgb(255,255,255)", fontFamily: "calibre" }}
								>
									{row.four}
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "rgb(255,255,255)", fontFamily: "calibre" }}
								>
									{row.eight}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
