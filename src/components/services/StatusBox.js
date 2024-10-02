import React from 'react';
import { Box, Typography, Grow, Fade, Link, Icon } from '@mui/material';
import { black, white } from '../../config/theme/themePrimitives';
import { red, green } from '@mui/material/colors';

import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StatusBox = ({ status, displayText, profileDetail }) => {
  const statusConfig = {
    notFound: {
      icon: <ErrorIcon fontSize="24px" sx={{ color: red[500] }} />,
      message: (
        <>
          Không tìm thấy hồ sơ có số: <strong>#{displayText}</strong>
        </>
      ),
      animationType: 'grow',
    },
    searching: {
      icon: (
        <CircularProgress
          size={24}
          sx={{
            color: black[400],
          }}
        />
      ),
      message: (
        <>
          Đang tìm hồ sơ có số: <strong>#{displayText}</strong>
        </>
      ),
      animationType: 'fade',
    },
    found: {
      icon: <CheckCircleIcon fontSize="24px" sx={{ color: green[500] }} />,
      message: (
        <>
          Đã tìm thấy hồ sơ có số: <strong>#{displayText}</strong>
        </>
      ),
      animationType: 'grow',
    },
  };

  const currentStatus = status.notFound
    ? statusConfig.notFound
    : status.searching
      ? statusConfig.searching
      : status.found
        ? statusConfig.found
        : null;
  if (!currentStatus) return null;

  const { icon, message, animationType } = currentStatus;
  const AnimationComponent = animationType === 'grow' ? Grow : Fade;

  return (
    <Box
      sx={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AnimationComponent in={true} timeout={400}>
        <Box
          sx={{
            width: '100%',
            py: 1,
            px: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'primary.main',
            background: white[50],
            boxShadow: 1,
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, flex: 1, alignItems: 'center' }}>
            <Icon sx={{ p: 1 }}>{icon}</Icon>
            <Typography sx={{ fontSize: 14, color: black[900] }}>{message}</Typography>
          </Box>

          {status.found && (
            <Link
              sx={{
                fontSize: 14,
                marginTop: { xs: '100px', md: '0' },
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              component="button"
              variant="body2"
            >
              Xem chi tiết
            </Link>
          )}
        </Box>
      </AnimationComponent>

      {/* {status.found && (
        <Box
          sx={{
            mt: 4,
            width: '100%',
            backgroundColor: white[50],
            p: 2,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            <strong>Trạng thái:</strong> Chờ xử lý
          </Typography>
          <Typography variant="body2">
            <strong>Ghi chú:</strong> alksdjkajsdlkajsdlkajsld
          </Typography>
        </Box>
      )} */}
    </Box>
  );
};

export default StatusBox;
