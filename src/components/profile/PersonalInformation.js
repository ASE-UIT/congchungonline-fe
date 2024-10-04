import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { EditSharp } from "@mui/icons-material";
import {
	black,
	gray,
	primary,
	white,
} from "../../config/theme/themePrimitives";
import InfoField from "./InfoField";
import EditUserProfileModal from "../../components/modals/EditUserProfileModal";


const PersonalInformation = ({ user }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box
			sx={{
				gap: 2,
				display: "flex",
				flexDirection: "column",
				p: 2.5,
				border: `0.1rem solid ${gray[200]}`,
				borderRadius: 1,
				backgroundColor: `${white[50]}`,
			}}
		>
			<Box display="flex" alignItems="center">
				<Typography
					variant="caption"
					fontWeight="bold"
					flex={1}
					sx={{ textTransform: "uppercase" }}
				>
					Thông tin cá nhân
				</Typography>
				<Box
					display="flex"
					justifyContent="flex-end"
					gap={2}
					maxHeight="34.5px"
				>
					<Button
						startIcon={<EditSharp />}
						variant="contained"
						color="white"
						sx={{
							border: `1px solid ${black[50]}`,
							"&:hover": {
								border: `1px solid ${primary[500]}`,
								color: primary[500],
							},
						}}
						size="small"
						onClick={() => setOpen(true)}
					>
						<Typography variant="button" textTransform="none">
							Chỉnh sửa
						</Typography>
					</Button>
				</Box>
			</Box>
			<EditUserProfileModal open={open} handleClose={handleClose} />
			<Box
				display="flex"
				flexDirection={{ xs: "column", sm: "row" }}
				flexWrap="wrap"
				gap={2}
			>
				<Box flex={1} minWidth="250px">
					<InfoField label="Họ và tên" value={user.name} />
				</Box>
				<Box flex={1} minWidth="250px">
					<InfoField label="Email" value={user.email} />
				</Box>
				<Box flex={1} minWidth="250px">
					<InfoField label="Số điện thoại" value={user.phoneNumber} />
				</Box>
				<Box flex={1} minWidth="250px">
					<InfoField label="CMND/CCCD/Hộ chiếu" value={user.idNumber} />
				</Box>
			</Box>

			<Divider />

			<Box display="flex" flexDirection="column">
				<Typography
					variant="caption"
					fontWeight="bold"
					flex={1}
					sx={{ textTransform: "uppercase" }}
				>
					Địa chỉ liên hệ
				</Typography>
				{/* Address Fields */}
				<Box
					display="flex"
					flexDirection={{ xs: "column", sm: "row" }}
					gap={2}
					my={2}
				>
					<Box flex={1} minWidth="250px">
						<InfoField label="Tỉnh/Thành phố" value={user.province} />
					</Box>
					<Box flex={1} minWidth="250px">
						<InfoField label="Quận/Huyện" value={user.district} />
					</Box>
					<Box flex={1} minWidth="250px">
						<InfoField label="Xã/Phường" value={user.ward} />
					</Box>
				</Box>
				<InfoField label="Số nhà, đường/phố" value={user.street} />
			</Box>
		</Box>
	);
};

export default PersonalInformation;
