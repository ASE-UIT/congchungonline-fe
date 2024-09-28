import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	IconButton,
	Autocomplete,
	Icon,

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {
	black,
	dark,
	gray,
	primary,
	red,
	white,
} from "../../config/theme/themePrimitives";
import "react-toastify/dist/ReactToastify.css";
import Guide from "../../components/services/Guide";
import StatusBox from "../../components/services/StatusBox";
import { green } from "@mui/material/colors";


const LookupNotarizationProfile = () => {

	const [inputValue, setInputValue] = useState('');
	const [displayText, setDisplayText] = useState('');
	const [loading, setLoading] = useState(true);
	const [searchLoading, setSearchLoading] = useState(false);
	const [status, setStatus] = useState({ notFound: false, searching: false, found: false });



	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSearchClick = (text) => {
		setSearchLoading(true);
		setStatus({ notFound: false, searching: true, found: false });
		setDisplayText(inputValue);
		setTimeout(() => {
			// Furthersearch  API will be emplemented here

			const isFound = (Math.floor(Math.random() * 100)) % 2 === 0; // This one is just a RNG to simulate searching result
			setStatus({ notFound: !isFound, searching: false, found: isFound });
			setSearchLoading(false);
			setSearchLoading(false);
		}, 2000);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);




	return (
		<Box>
			{/* Header Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					py: 10,
				}}>
				<Box height="fit-content" width="fit-content" sx={{ px: 20 }}>
					<Typography
						variant="h2"
						textAlign="center"
						color={dark[500]}
						sx={{
							maxWidth: 900,
							mx: "auto",
							width: "100%",
							fontWeight: 700,
						}}
						height="fit-content"
						width="fit_content"
					>
						Tra cứu hồ sơ công chứng
					</Typography>
					<Typography
						variant="body2"
						textAlign="center"
						color={dark[500]}
						sx={{ mt: 4, width: "100%" }}
						height="fit-content"
						width="fit-content"
					>
						Vui lòng nhập mã số hồ sơ công chứng để tra cứu trạng thái và thông tin chi tiết
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						width: "80%",
						flexWrap: "wrap",
						p: 4,
						justifyContent: "space-around",
						position: "relative",


					}}
				>
					<TextField
						disabled={loading}
						id="lookupText"
						type="search"
						name="lookup"
						placeholder="Tra cứu..."
						autoFocus
						value={inputValue}
						onChange={handleInputChange}
						sx={{
							width: "80%",
							mt: 2,
							background: gray[50],
							borderRadius: "8px 8px 8px 8px",
							boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
							transition: "box-shadow 0.3s"
						}}
					/>
					<Button
						variant="contained"
						id="lookupButton"
						startIcon={<SearchIcon />}
						size="large"
						type="submit"
						color="primary"
						onClick={handleSearchClick}
						sx={{
							width: "flex",
							mt: 2,
							border: '1px solid gray',
							color: "primary.main",
							background: white[50],
							boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
							transition: "box-shadow 0.3s"
						}}
					>
						Tìm kiếm
					</Button>
				</Box>
			</Box>

			{/* Service Section */}
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 20, background: gray[50], position: "relative" }}>
				<StatusBox
					status={status}
					displayText={displayText}
				/>
				<StatusBox 
					status={status}
					displayText={displayText}
				/>
				<StatusBox
					status={status}
					displayText={displayText}
				/>
			</Box>
			{/* Guide Section */}
			<Guide />
		</Box>
	);
};

export default LookupNotarizationProfile;
