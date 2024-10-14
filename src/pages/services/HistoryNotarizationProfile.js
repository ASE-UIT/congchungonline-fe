import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputAdornment } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchIcon from '@mui/icons-material/Search';
import { white, black } from '../../config/theme/themePrimitives';
import StatusFilterButton from '../../components/services/StatusFilterButton';
import HistoryDataTable from '../../components/services/HistoryDataTable';
import NotarizationService from '../../services/notarization.service';

function createData(id, profile, date, name, status, service) {
  return {
    id,
    profile,
    date,
    name,
    status,
    service,
  };
}

const rows = [
  createData(1, '#0001', '12/07/2004', 'Võ Trần Minh Tuấn', 'Đang xử lý', 'Cell'),
  createData(2, '#0002', '13/08/2004', 'Đặng Thái Tuấn', 'Chờ xử lý', 'Cell'),
  createData(3, '#0003', '2/11/1942', 'Mai Chiến Thắng', 'Sẵn sàng ký số', 'Cell'),
  createData(4, '#0004', '19/02/1981', 'Võ Minh Tú', 'Hoàn tất', 'Cell'),
  createData(5, '#0005', '28/01/1999', 'Trần Thanh Vy', 'Không hợp lệ', 'Cell'),
  createData(6, '#0006', '12/07/2004', 'Trần Thanh Vy', 'Đang xử lý', 'Cell'),
  createData(7, '#0007', '12/07/2004', 'Trần Thanh Vyn', 'Hoàn tất', 'Cell'),
  createData(8, '#0008', '12/07/2004', 'Tiến Luật', 'Hoàn tất', 'Cell'),
  createData(9, '#0009', '12/07/2004', 'Võ Minh Tún', 'Hoàn tất', 'Cell'),
  createData(10, '#0010', '12/07/2004', 'Huỳnh Trấn Thành', 'Đang xử lý', 'Cell'),
  createData(11, '#0011', '12/07/2004', 'Hoài Linh ', 'Sẵn sàng ký số', 'Cell'),
  createData(12, '#0012', '12/07/2004', 'Công Vinh', 'Chờ xử lý', 'Cell'),
  createData(13, '#0013', '12/07/2004', 'Thủy Tiên', 'Đang xử lý', 'Cell'),
  createData(14, '#0014', '12/07/2004', 'Việt Hương', 'Hoàn tất', 'Cell'),
  createData(15, '#0015', '12/07/2004', 'Lâm Vỹ Dạ', 'Sẵn sàng ký số', 'Cell'),
];

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
  const [statusClicked, setStatusClicked] = useState(StatusTypes.All);
  const [searchText, setSearchText] = useState('');

  async function getHistoryFromDB() {
    try{
      const response = await NotarizationService.getHistory();
      console.log(response.userId);
      return response;
    }
    catch(error)
    {
      console.log(error);
    }
  };

  const init = getHistoryFromDB();
  console.log(init);
  

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
          gap: '10px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1,
            height: '100%',
            gap: '50px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignSelf: 'stretch',
              borderBottom: '1px solid #C0C0C0',
            }}
          >
            <StatusFilterButton 
              statusFilter={StatusTypes.All}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.All); setStatusClicked(StatusTypes.All)}}
              clickedButton={statusClicked}
              >

            </StatusFilterButton>
              
            <StatusFilterButton
              statusFilter={StatusTypes.Waiting}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.Waiting); setStatusClicked(StatusTypes.Waiting)}}
              clickedButton={statusClicked}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Processing}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.Processing); setStatusClicked(StatusTypes.Processing)}}
              clickedButton={statusClicked}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.ReadyToSign}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.ReadyToSign); setStatusClicked(StatusTypes.ReadyToSign)}}
              clickedButton={statusClicked}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Completed}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.Completed); setStatusClicked(StatusTypes.Completed)}}
              clickedButton={statusClicked}
            />
            <StatusFilterButton
              statusFilter={StatusTypes.Invalid}
              handleFilterByStatus={() => {setStatusFilter(StatusTypes.Invalid); setStatusClicked(StatusTypes.Invalid)}}
              clickedButton={statusClicked}
            />
          </Box>

          <Box flex={1}></Box>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Tìm kiếm"
            autoFocus
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              borderRadius: 1,
              width:'20%',
              minWidth: '150px',
              '& .MuiInputBase-input': {
                fontSize: 14,
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
          <HistoryDataTable filterStatus={statusFilter} searchText={searchText} rows={rows}></HistoryDataTable>
        </Box>
      </Box>
    </Box>
  );
};
export default HistoryNotarizationProfile;
