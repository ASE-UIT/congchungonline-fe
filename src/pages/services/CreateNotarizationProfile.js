import React, { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	IconButton,
	Autocomplete,
} from "@mui/material";
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

const CreateNotarizationProfile = () => {
	const [uploadedFiles, setUploadedFiles] = useState([]);

	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);
		const validFormats = [".pdf", ".docx", ".png", ".jpg"];

		files.forEach((file) => {
			const isValid = validFormats.some((format) =>
				file.name.toLowerCase().endsWith(format)
			);
			if (!isValid) {
				toast.error(
					`${file.name}: Tài liệu được tải lên không có định dạng hợp lệ`
				);
				return;
			}

			setUploadedFiles((prev) => [
				...prev,
				{
					name: file.name,
					size: `${(file.size / 1024).toFixed(2)} KB`,
					progress: 0,
					status: "pending",
				},
			]);

			// Simulate upload
			setTimeout(() => {
				setUploadedFiles((prev) =>
					prev.map((f) =>
						f.name === file.name
							? { ...f, status: "uploading", progress: 50 }
							: f
					)
				);
				setTimeout(() => {
					setUploadedFiles((prev) =>
						prev.map((f) =>
							f.name === file.name
								? { ...f, progress: 100, status: "uploaded" }
								: f
						)
					);
				}, 1000);
			}, 2000);
		});
	};

	const handleRemove = (fileToRemove) => {
		setUploadedFiles((prev) => prev.filter((file) => file !== fileToRemove));
	};

	const handleRetry = (fileToRetry) => {
		console.log("Retrying upload for:", fileToRetry.name);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			{/* Header */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					py: 10,
					backgroundColor: gray[50],
				}}
			>
				<Box sx={{ px: { xs: 2, sm: 5, md: 10 } }}>
					<Typography
						variant="h2"
						textAlign="center"
						color={dark[500]}
						sx={{ maxWidth: 900, mx: "auto", fontWeight: 700 }}
					>
						Tạo hồ sơ công chứng
					</Typography>
					<Typography
						variant="body2"
						textAlign="center"
						color={dark[500]}
						sx={{ mt: 4 }}
					>
						Chú ý: Những mục đánh dấu
						<span style={{ color: red[500] }}> * </span> là bắt buộc.
					</Typography>
				</Box>
			</Box>

			{/* Form Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					p: 4,
					backgroundColor: white[50],
				}}
			>
				{/* Autocomplete Section */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						gap: 2,
					}}
				>
					<Autocomplete
						size="small"
						options={services}
						getOptionLabel={(option) => option.title}
						sx={{ flex: 1, backgroundColor: white[50] }}
						renderInput={(params) => (
							<TextField {...params} label="Dịch vụ công chứng" />
						)}
					/>
					<Autocomplete
						size="small"
						options={services}
						getOptionLabel={(option) => option.title}
						sx={{ flex: 1, backgroundColor: white[50] }}
						renderInput={(params) => (
							<TextField {...params} label="Lĩnh vực công chứng" />
						)}
					/>
				</Box>

				<Box display="flex" flexDirection="column" gap={2} mt={2}>
					<Typography variant="body2" color="textPrimary" fontWeight="bold">
						Thông tin người yêu cầu công chứng
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							gap: 4,
						}}
					>
						<TextField
							size="small"
							fullWidth
							label={
								<>
									CMND/CCCD/Hộ chiếu số{" "}
									<span style={{ color: red[500] }}>*</span>
								</>
							}
							variant="outlined"
							sx={{ backgroundColor: white[50] }}
						/>
						<TextField
							size="small"
							fullWidth
							label={
								<>
									Số điện thoại <span style={{ color: red[500] }}>*</span>
								</>
							}
							variant="outlined"
							sx={{ backgroundColor: white[50] }}
						/>
						<TextField
							size="small"
							fullWidth
							label={
								<>
									Địa chỉ Email <span style={{ color: red[500] }}>*</span>
								</>
							}
							variant="outlined"
							sx={{ backgroundColor: white[50] }}
						/>
					</Box>
				</Box>
			</Box>

			{/* Upload Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					py: 5,
					alignItems: "center",
					backgroundColor: gray[50],
				}}
			>
				<Box
					sx={{
						display: "flex",
						backgroundColor: white[50],
						p: 2,
						boxShadow: 1,
						borderRadius: 2,
						width: { xs: "90%", sm: "80%", md: "60%" },
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 1,
							p: 4,
							borderRadius: 1,
							backgroundColor: gray[50],
							borderStyle: "dashed",
							borderColor: black[200],
						}}
					>
						<IconButton
							component="label"
							sx={{
								backgroundColor: primary[500],
								color: white[500],
								p: 2,
								borderRadius: "50%",
								boxShadow: 2,
								"&:hover": { backgroundColor: primary[600] },
							}}
						>
							<FileUploadRoundedIcon sx={{ color: white[50] }} />
							<input
								type="file"
								hidden
								multiple
								onChange={handleFileChange}
								accept=".pdf,.docx,.png,.jpg"
							/>
						</IconButton>

						<Typography
							variant="body2"
							color="textPrimary"
							fontWeight="bold"
							textAlign={"center"}
						>
							Kéo thả hoặc nhấn vào đây để thêm tài liệu
						</Typography>
						<Typography
							variant="caption"
							color="textSecondary"
							textAlign="center"
						>
							Tài liệu phải có định dạng .pdf, .docx, .png hoặc .jpg
						</Typography>
					</Box>
				</Box>

				{/* Uploaded File List */}
				{uploadedFiles.length > 0 && (
					<UploadedFileList
						files={uploadedFiles}
						onRemove={handleRemove}
						onRetry={handleRetry}
					/>
				)}

				{uploadedFiles.length > 0 && (
					<Button
						variant="contained"
						color="primary"
						startIcon={<ShortcutRoundedIcon />}
					>
						Tiếp tục
					</Button>
				)}
			</Box>
			<ToastContainer />
		</Box>
	);
};

export default CreateNotarizationProfile;
