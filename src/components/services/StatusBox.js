import React from 'react';
import { Box, Typography, Grow, Link } from '@mui/material';
import { black, white } from '../../config/theme/themePrimitives';
import { red, green } from '@mui/material/colors';

import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotaryDocumentDetailsModal from '../modals/NotaryDocumentDetailsModal';

const StatusBox = ({ status, displayText }) => {
  const [openModal, setOpenModal] = React.useState(false);
  console.log('status', status);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderIconByStatus = (status) => {
    switch (true) {
      case status.notFound:
        return <ErrorIcon sx={{ color: red[500], fontSize: 18 }} />;
      case status.searching:
        return (
          <CircularProgress
            size={18}
            sx={{
              color: black[400],
            }}
          />
        );
      case status.found:
        return <CheckCircleIcon sx={{ color: green[500], fontSize: 18 }} />;
      default:
        return null;
    }
  };

  const renderMessageByStatus = (status, displayText) => {
    switch (true) {
      case status.notFound:
        return (
          <Typography sx={{ fontSize: 14 }}>
            Không tìm thấy yêu cầu công chứng: <strong>{displayText}</strong>
          </Typography>
        );
      case status.searching:
        return (
          <Typography sx={{ fontSize: 14 }}>
            Đang tìm hồ sơ có số: <strong>{displayText}</strong>
          </Typography>
        );
      case status.found:
        return (
          <Typography sx={{ fontSize: 14 }}>
            Đã tìm thấy hồ sơ có số: <strong>{displayText}</strong>
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grow in={true} timeout={400}>
        <Box
          sx={{
            width: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: white[50],
            boxShadow: 1,
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {renderIconByStatus(status)}
            {renderMessageByStatus(status, displayText)}
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
              onClick={handleOpenModal}
            >
              Xem chi tiết
            </Link>
          )}
        </Box>
      </Grow>
      <NotaryDocumentDetailsModal open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
};

export default StatusBox;
