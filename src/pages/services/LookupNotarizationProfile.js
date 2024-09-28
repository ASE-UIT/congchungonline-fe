import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	IconButton,
	Autocomplete,
	Icon,
	Grow,
	Link,
	Fade,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ErrorIcon from '@mui/icons-material/Error';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import {
	black,
	dark,
	gray,
	primary,
	red,
	white,
} from "../../config/theme/themePrimitives";
import UploadedFileList from "../../components/services/UploadedFileList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { services } from "../../utils/fakeData";
import Guide from "../../components/services/Guide";
import { TextFields } from "@mui/icons-material";
import { green } from "@mui/material/colors";

{/* Status Box for returning result */ }
const StatusBox = ({ icon, message, isVisible, animationType, status }) => {
	const AnimationComponent = animationType === 'grow' ? Grow : Fade;

	return (
		<AnimationComponent in={isVisible} timeout={400}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "80%",
					height: "auto",
					flexWrap: "wrap",
					flexGrow: 1,
					minWidth: "350px",
					p: 4,
					alignItems: "center",
					justifyContent: "space-around",
					position: "absolute",
					my: -4,
					color: "primary.main",
					background: white[50],
					boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
					transition: "box-shadow 0.3s",
					borderRadius: "8px",
				}}>
				{icon}
				<Typography sx={{ position: "absolute", left: "75px", color: black[900] }}>
					{message}
				</Typography>

				{status.found && (
					<Link
						sx={{
							position: { xs: "relative", md: "absolute" },
							left: { xs: "initial", md: "initial" },
							right: { xs: "initial", md: "50px" },
							marginTop: { xs: "100px", md: "0" },
							whiteSpace: "nowrap",
						}}
						component="button"
						variant="body2"
						onClick={() => {
							console.info("Đây là giả lập :D"); // Simulate showing detail result
						}}
					>
						Xem chi tiết
					</Link>
				)}


			</Box>
		</AnimationComponent>
	);
};

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
					icon={<ErrorIcon sx={{ position: "absolute", left: "25px", color: red[500] }} />}
					message={
						<>
							Không tìm thấy hồ sơ có số: <strong>#{displayText}</strong>
						</>
					}
					isVisible={status.notFound}
					animationType="grow"
					status={status}
				/>
				<StatusBox
					icon={<RefreshIcon sx={{ animation: "rotate 2s linear infinite", color: black[400], position: "absolute", left: "25px" }} />}
					message={
						<>
							Đang tìm hồ sơ có số: <strong>#{displayText}</strong>
						</>
					}
					isVisible={status.searching}
					animationType="fade"
					status={status}
				/>
				<StatusBox
					icon={<CheckCircleIcon sx={{ position: "absolute", left: "25px", color: green[500] }} />}
					message={
						<>
							Đã tìm thấy hồ sơ có số: <strong>#{displayText}</strong>
						</>
					}
					isVisible={status.found}
					animationType="grow"
					status={status}
				/>
			</Box>
			{/* Guide Section */}
			<Guide />
		</Box>
	);
};

export default LookupNotarizationProfile;
