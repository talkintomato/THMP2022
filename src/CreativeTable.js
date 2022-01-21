import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import CreativeListOne from "./data/CreativeListOne";

const rows = CreativeListOne;

export default function CreativeTable(props) {
	return (
		<TableContainer>
			<Table aria-label="Creative table">
				<TableBody>
					{props.rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								align="right"
								width="50%"
								style={{
									color: "rgb(255,255,255)",
									border: "rgb(0,0,0)",
								}}
							>
								{row.role}
							</TableCell>
							<TableCell
								align="left"
								width="50%"
								style={{
									color: "rgb(255,255,255)",
									border: "rgb(0,0,0)",
								}}
							>
								{row.name}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
