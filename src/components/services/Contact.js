import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { dark, gray } from "../../config/theme/themePrimitives";

const Contact = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				mx: 2,
				gap: 5,
				backgroundColor: gray[50],
			}}
		>
			<Box height="fit-content" width="fit-content">
				<Typography
					variant="h2"
					textAlign="center"
					color={dark[500]}
					sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%" }}
					height="fit-content"
					width="fit-content"
				>
					Liên hệ
				</Typography>
				<Typography
					variant="body1"
					textAlign="center"
					color={dark[500]}
					sx={{ maxWidth: 900, mx: "auto", mt: 2, width: "100%" }}
					height="fit-content"
					width="fit-content"
				>
					Bạn vẫn còn thắc mắc? Chúng tôi sẽ liên hệ lại với bạn sớm nhất có
					thể.
				</Typography>
			</Box>

			<Box
				sx={{ display: "flex", flexDirection: "column", gap: 2, width: "80%" }}
			>
				<Box sx={{ display: "flex", gap: 3 }}>
					<Box sx={{ flex: 1 }}>
						<Typography
							sx={{
								fontSize: 18,
								mb: 1,

								color: dark[500],
							}}
						>
							Tên
						</Typography>
						<TextField fullWidth variant="outlined" size="medium" />
					</Box>
					<Box sx={{ flex: 1 }}>
						<Typography
							sx={{
								fontSize: 18,
								mb: 1,

								color: dark[500],
							}}
						>
							Họ và tên đệm
						</Typography>
						<TextField fullWidth variant="outlined" size="medium" />
					</Box>
				</Box>

				<Box sx={{ display: "flex", gap: 3 }}>
					<Box sx={{ flex: 1 }}>
						<Typography
							sx={{
								fontSize: 18,
								mb: 1,

								color: dark[500],
							}}
						>
							Email
						</Typography>
						<TextField fullWidth variant="outlined" size="medium" />
					</Box>
					<Box sx={{ flex: 1 }}>
						<Typography
							sx={{
								fontSize: 18,
								mb: 1,

								color: dark[500],
							}}
						>
							Số điện thoại
						</Typography>
						<TextField fullWidth variant="outlined" size="medium" />
					</Box>
				</Box>

				<Box>
					<Typography
						sx={{
							fontSize: 18,
							mb: 1,

							color: dark[500],
						}}
					>
						Lời nhắn
					</Typography>
					<TextField fullWidth variant="outlined" multiline rows={4} />
				</Box>
			</Box>
			<Button variant="contained">
				<Typography textTransform="initial" fontWeight="600" px={3} py={1}>
					Gửi tin nhắn
				</Typography>
			</Button>
		</Box>
	);
};

export default Contact;
