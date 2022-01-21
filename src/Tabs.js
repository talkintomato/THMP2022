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
					borderColor: "divider",
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
							color: "rgb(200,200,200)",
						}}
					/>
					<Tab
						label="Tickets & Info"
						style={{
							marginRight: "8em",
							marginLeft: "8em",
							color: "rgb(200,200,200)",
						}}
					/>
					<Tab
						label="Cast & Creative"
						style={{
							color: "rgb(200,200,200)",
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
