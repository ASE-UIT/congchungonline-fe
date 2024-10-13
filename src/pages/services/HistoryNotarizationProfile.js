import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputAdornment } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchIcon from '@mui/icons-material/Search';
import { white, black } from '../../config/theme/themePrimitives';
import StatusFilterButton from '../../components/services/StatusFilterButton';
import HistoryDataTable from '../../components/services/HistoryDataTable';

const HistoryNotarizationProfile = () => {
  const StatusTypes = {
    All: 'Tất cả',
    Waiting: 'Chờ xử lý',
    Processing: 'Đang xử lý',
    ReadyToSign: 'Sẵn sàng ký số',
    Completed: 'Hoàn tất',
    Invalid: 'Không hợp lệ',
  };

  const [statusFilter, setStatusFilter] = useState(StatusTypes.All);
  const [searchText, setSearchText] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          p: 3,
          gap: '8px',
          backgroundColor: white[50],
        }}
      >
        <Box sx={{ flex: 1, gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Lịch sử công chứng
          </Typography>

          <Typography variant="caption">Toàn bộ lịch sử công chứng của bạn sẽ hiển thị ở đây</Typography>
        </Box>

        {/* Tra cứu hồ sơ */}
        <Button
          startIcon={<FindInPageIcon />}
          disableElevation
          sx={{
            display: 'flex',
            p: '6px 12px',
            borderRadius: '8px',
            border: '1px solid #A91D3A',
            background: '#FFF',
            fontSize: '14px',
            height: 'fit-content',
            mt: {
              xs: 2,
              sm: 2,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }}
          size="small"
        >
          <Typography variant="button" sx={{ textTransform: 'none', padding: 0 }}>
            Tra cứu hồ sơ
          </Typography>
        </Button>
      </Box>

      {/* Main */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: '12px 24px',
          gap: '12px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1,
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignSelf: 'stretch',
              borderBottom: '1px solid #000',
            }}
          >
            <StatusFilterButton
              statusFilter={StatusTypes.All}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.All)}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Waiting}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.Waiting)}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Processing}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.Processing)}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.ReadyToSign}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.ReadyToSign)}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Completed}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.Completed)}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Invalid}
              handleFilterByStatus={() => setStatusFilter(StatusTypes.Invalid)}
            />
          </Box>

          <Box flexGrow={1}></Box>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Tìm kiếm"
            autoFocus
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              flex: 1,
              borderRadius: 1,
              minWidth: '150px',
              '& .MuiInputBase-input': {
                fontSize: 14,
                p: 1.5,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: black[300] }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
        <Box sx={{
          border: '1px solid var(--black-50, #E0E0E0)',
          borderRadius: '8px',
          background: white[50],
        }}>
          <HistoryDataTable filterStatus={statusFilter} searchText={searchText}></HistoryDataTable>
        </Box>
      </Box>
    </Box>
  );
};
export default HistoryNotarizationProfile;
