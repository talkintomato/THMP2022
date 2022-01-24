import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "./Home";
import Info from "./Info";
import CnC from "./CnC";
import { useState } from "react";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "rgb(150,150,150)",
					backgroundColor: "rgb(60,60,60)",
				}}
				display="flex"
				justifyContent="space-around"
				alignItems="center"
			>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
				>
					<Tab
						label="Home"
						style={{
							color: "rgb(255,255,255)",
							fontWeight: "bold",
						}}
					/>
					<Tab
						label="Tickets & Info"
						style={{
							marginRight: "10vw",
							marginLeft: "10vw",
							color: "rgb(255,255,255)",
							fontWeight: "bold",
						}}
					/>
					<Tab
						label="Cast & Creative"
						style={{
							color: "rgb(255,255,255)",
							fontWeight: "bold",
						}}
					/>
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				{<Home></Home>}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{<Info></Info>}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{<CnC></CnC>}
			</TabPanel>
		</Box>
	);
}
