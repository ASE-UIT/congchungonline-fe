import React from "react";
import {
	List,
	LinearProgress,
	IconButton,
	Box,
	Typography,
} from "@mui/material";
import {
	Cancel,
	Autorenew,
	CheckCircle,
	PictureAsPdfRounded as PdfIcon,
	ArticleRounded as DocIcon,
	PhotoRounded as ImageIcon,
} from "@mui/icons-material";
import {
	black,
	blue,
	gray,
	green,
	red,
	yellow,
} from "../../config/theme/themePrimitives";

const UploadedFileList = ({ files, onRemove, onRetry }) => {
	const getFileIcon = (fileName) => {
		const extension = fileName.split(".").pop().toLowerCase();
		switch (extension) {
			case "pdf":
				return (
					<IconButton sx={{ p: 0.5, backgroundColor: red[50] }}>
						<PdfIcon sx={{ color: red[500], fontSize: 18 }} />
					</IconButton>
				);
			case "docx":
				return (
					<IconButton sx={{ p: 0.5, backgroundColor: blue[50] }}>
						<DocIcon sx={{ color: blue[500], fontSize: 18 }} />
					</IconButton>
				);
			case "png":
			case "jpg":
				return (
					<IconButton sx={{ p: 0.5, backgroundColor: yellow[50] }}>
						<ImageIcon sx={{ color: yellow[500], fontSize: 18 }} />
					</IconButton>
				);
			default:
				return null;
		}
	};

	return (
		<List
			sx={{ display: "flex", flexDirection: "column", gap: 2, width: "60%" }}
		>
			{files.map((file, index) => (
				<Box
					key={index}
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						gap: 2,
					}}
				>
					{getFileIcon(file.name)}

					<Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								height: "fit-content",
							}}
						>
							<Typography
								flex={1}
								sx={{
									fontSize: 12,
									fontWeight: 500,
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									mr: 2,
								}}
							>
								{file.name}
							</Typography>
							<Box sx={{ display: "flex", gap: 0.5 }}>
								<IconButton onClick={() => onRemove(file)} sx={{ p: 0 }}>
									<Cancel sx={{ color: black[900], fontSize: 18 }} />
								</IconButton>
								{file.status === "error" ? (
									<IconButton onClick={() => onRetry(file)} sx={{ p: 0 }}>
										<Autorenew sx={{ color: red[500], fontSize: 18 }} />
									</IconButton>
								) : (
									file.status === "uploaded" && (
										<IconButton sx={{ p: 0 }} disabled>
											<CheckCircle sx={{ color: green[500], fontSize: 18 }} />
										</IconButton>
									)
								)}
							</Box>
						</Box>
						<LinearProgress
							variant="determinate"
							value={file.progress}
							sx={{
								width: "100%",
								borderRadius: 1,
								my: 0.5,
								backgroundColor: gray[300],
								"& .MuiLinearProgress-bar": {
									backgroundColor:
										file.progress < 100
											? gray[500]
											: file.status === "error"
											? red[500]
											: green[500],
								},
							}}
						/>
						<Box sx={{ display: "flex" }}>
							<Typography flex={1} variant="caption">
								{file.size}
							</Typography>
							<Typography variant="caption">{file.progress}%</Typography>
						</Box>
					</Box>
				</Box>
			))}
		</List>
	);
};

export default UploadedFileList;
