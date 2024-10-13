import React  from 'react';
import {  Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import AppsIcon from '@mui/icons-material/Apps';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LoopIcon from '@mui/icons-material/Loop';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const StatusFilterButton = ({ statusFilter, handleFilterByStatus }) => {
  const StatusTypes = {
    All: 'Tất cả',
    Waiting: 'Chờ xử lý',
    Processing: 'Đang xử lý',
    ReadyToSign: 'Sẵn sàng ký số',
    Completed: 'Hoàn tất',
    Invalid: 'Không hợp lệ',
  };

  const iconMap = {
    [StatusTypes.All]: <AppsIcon sx={{ height: '18px', width: '18px' }} />,
    [StatusTypes.Waiting]: <HourglassTopIcon sx={{ height: '18px', width: '18px' }} />,
    [StatusTypes.Processing]: <LoopIcon sx={{ height: '18px', width: '18px' }} />,
    [StatusTypes.ReadyToSign]: <EditNoteIcon sx={{ height: '18px', width: '18px' }} />,
    [StatusTypes.Completed]: <CheckCircleIcon sx={{ height: '18px', width: '18px' }} />,
    [StatusTypes.Invalid]: <ErrorIcon sx={{ height: '18px', width: '18px' }} />,
  };

  const renderIconByStatus = (statusFilter) => iconMap[statusFilter] || null;

  return (
    <Button
      startIcon={renderIconByStatus(statusFilter)}
      sx={{
        color: '#000',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '12px',
        textTransform: 'none',
        borderRadius: '4px',
        p: '4px 8px',
      }}
      onClick={() => handleFilterByStatus(statusFilter)}
    >
      {statusFilter}
    </Button>
  );
};
export default StatusFilterButton;