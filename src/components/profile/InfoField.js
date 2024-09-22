import React from "react";
import { Box, Typography } from "@mui/material";

const InfoField = ({ label, value }) => {
	return (
		<Box flex={1}>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
			<Typography variant="body2" fontWeight="bold">
				{value}
			</Typography>
		</Box>
	);
};

export default InfoField;
