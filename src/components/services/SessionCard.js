import React, { useState } from 'react';
import { Box, Card, CardContent, IconButton, Divider, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { black, dark, red, white } from '../../config/theme/themePrimitives';
import AvatarIcon from '../static/AvatarIcon';

const SessionCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewDetails = () => {
    handleMenuClose();
    console.log('Xem chi tiết phiên công chứng');
  };

  const handleCancelSession = () => {
    handleMenuClose();
    console.log('Huỷ phiên công chứng');
  };

  return (
    <Box
      sx={{
        flexBasis: {
          xs: '100%',
          sm: 'calc(50% - 24px)',
          md: 'calc(33.33% - 24px)',
        },
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
          p: 2,
          backgroundColor: white[50],
          boxShadow: '0px 4px 4px -2px rgba(19, 25, 39, 0.08)',
          borderRadius: 1,
          border: `1px solid ${black[50]}`,
          flexDirection: 'column',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Avatar src="https://via.placeholder.com/40x40" sx={{ width: 40, height: 40, borderRadius: 1 }} />
          </Box>
          <IconButton onClick={handleMenuOpen}>
            <MoreHorizRoundedIcon sx={{ fontSize: 24, color: black[300] }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: 8,
              },
            }}
          >
            <MenuItem sx={{ fontSize: 12 }} onClick={handleViewDetails}>
              Xem chi tiết
            </MenuItem>
            <MenuItem sx={{ fontSize: 12 }} onClick={handleCancelSession}>
              Huỷ phiên
            </MenuItem>
          </Menu>
        </Box>

        <CardContent sx={{ px: 0, fontWeight: 500 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: black[900] }}>Tên phiên công chứng</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: black[300] }}>tạo bởi nquynqthanq</Typography>
        </CardContent>

        <Divider />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Typography sx={{ flex: 1, fontSize: 10, fontWeight: 500 }}>Lĩnh vực:</Typography>
          <Box
            sx={{
              px: 1,
              py: 0.5,
              backgroundColor: dark[50],
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: 10, fontWeight: 500, color: dark[500] }}>Vay-Mượn tài sản</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Typography sx={{ flex: 1, fontSize: 10, fontWeight: 500 }}>Dịch vụ:</Typography>
          <Box sx={{ px: 1, py: 0.5, backgroundColor: dark[50], borderRadius: 1, display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 10, fontWeight: 500, color: dark[500] }}>
              Công chứng hợp đồng vay mượn tài sản
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <AvatarIcon email={'Chsj'} />
        </Box>

        <Box
          sx={{
            alignSelf: 'flex-start',
            backgroundColor: red[50],
            color: red[500],
            gap: 1,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <ScheduleIcon sx={{ width: 12, height: 12 }} />
          <Typography color="#EE443F" sx={{ fontSize: 10, fontWeight: 500 }}>
            Còn 2 ngày
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default SessionCard;
