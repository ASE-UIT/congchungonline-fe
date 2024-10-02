import React, { useState } from "react";
import { Button, Box, Typography, Avatar } from "@mui/material";
import { gray, white } from "../../config/theme/themePrimitives";
import PersonalInformation from "../../components/profile/PersonalInformation";
import { CloudUpload } from "@mui/icons-material";

const UserProfile = () => {
	const [user] = useState({
		name: "Nguyễn Quốc Thắng",
		email: "nguyenqthangwork@gmail.com",
		phoneNumber: "+84 346 129 897",
		idNumber: "0123 1231 2312",
		province: "Bình Dương",
		district: "Dĩ An",
		ward: "Đông Hòa",
		street: "Linh Xuân 2",
	});

	return (
		<Box display="flex" p={4}>
			<Box
				sx={{
					flex: 1,
					borderRadius: 2,
					overflow: "hidden",
					border: `1px solid ${gray[50]}`,
					backgroundColor: white[50],
					boxShadow: 1,
				}}
			>
				{/* Avatar Section */}
				<Box display="flex" alignItems="center" gap={2} p={2.5}>
					<Avatar
						src="/avatar.png"
						sx={{ width: 96, height: 96, borderRadius: "50%" }}
					/>
					<Box flex={1} display="flex" flexDirection="column" gap={1}>
						<Typography variant="h5">{user.name || "Stranger"}</Typography>
						<Typography variant="caption" color="textSecondary">
							Khuyến nghị kích thước ít nhất 800x800 px. Chỉ cho phép định dạng
							JPG hoặc PNG.
						</Typography>
						<Button
							startIcon={<CloudUpload />}
							variant="outlined"
							size="small"
							sx={{ alignSelf: "flex-start" }}
						>
							Tải ảnh mới lên
						</Button>
					</Box>
				</Box>

				{/* Personal Information Section */}
				<Box display="flex" flexDirection="column" gap={2} p={2.5}>
					<PersonalInformation user={user} />
				</Box>
			</Box>
		</Box>
	);
};

export default UserProfile;
