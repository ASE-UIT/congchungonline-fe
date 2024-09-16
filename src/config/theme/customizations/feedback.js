import { alpha } from "@mui/material/styles";
import { gray, yellow } from "../themePrimitives";

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations = {
	MuiAlert: {
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: 10,
				backgroundColor: yellow[100],
				color: theme.palette.text.primary,
				border: `1px solid ${alpha(yellow[300], 0.5)}`,
				"& .MuiAlert-icon": {
					color: yellow[500],
				},
				...theme.applyStyles("dark", {
					backgroundColor: `${alpha(yellow[900], 0.5)}`,
					border: `1px solid ${alpha(yellow[800], 0.5)}`,
				}),
			}),
		},
	},
	MuiDialog: {
		styleOverrides: {
			root: ({ theme }) => ({
				"& .MuiDialog-paper": {
					borderRadius: "10px",
					border: "1px solid",
					borderColor: theme.palette.divider,
				},
			}),
		},
	},
	MuiLinearProgress: {
		styleOverrides: {
			root: ({ theme }) => ({
				height: 8,
				borderRadius: 8,
				backgroundColor: gray[200],
				...theme.applyStyles("dark", {
					backgroundColor: gray[800],
				}),
			}),
		},
	},
};
