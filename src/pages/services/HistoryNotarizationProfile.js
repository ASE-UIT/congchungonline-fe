import React from 'react';
import { Box, Typography, Button, IconButton, Grid2 } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AppsIcon from '@mui/icons-material/Apps';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LoopIcon from '@mui/icons-material/Loop';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'Số hồ sơ', type: 'string', width: 206 },
  { field: 'date', headerName: 'Ngày công chứng', type: 'string', width: 206 },
  { field: 'name', headerName: 'Người yêu cầu', type: 'string', width: 206 },
  {
    field: 'status',
    headerName: 'Tình trạng',
    type: 'string',
    width: 206,

    renderCell: (params) => {
      let color = '';
      if (params.value === 'Chờ xử lý') color = '#324155';
      else if (params.value === 'Đang xử lý') color = '#FFAA00';
      else if (params.value === 'Sẵn sàng ký số') color = '#0095FF';
      else if (params.value === 'Hoàn tất') color = '#43B75D';
      else if (params.value === 'Không hợp lệ') color = '#EE443F';

      return (
        <Typography
          sx={{
            color: color,
            backgroundColor: '#EBEDEF',
            padding: '4px 16px',
            borderRadius: '30px',
            width: 'fit-content',
          }}
        >
          {params.value}
        </Typography>
        // <div
        // style={{
        //
        // }}
        // >
        // 	<span style={{ color: color }}>
        // 		{params.value}
        // 	</span>
        // </div>
      );
    },
  },
  {
    field: 'service',
    headerName: 'Loại dịch vụ',
    type: 'string',
    width: 206,
  },
];

const rows = [
  { id: 1, date: '12/03/2004', name: 'Jon', status: 'Chờ xử lí' },
  { id: 2, date: '12/03/2004', name: 'Cersei', status: 'Đang xử lý' },
  { id: 3, date: '12/03/2004', name: 'Jaime', status: 'Sẵn sàng ký số' },
  { id: 4, date: '12/03/2004', name: 'Arya', status: 'Hoàn tất' },
  { id: 5, date: '12/03/2004', name: 'Daenerys', status: 'Không hợp lệ' },
  { id: 6, date: '12/03/2004', name: null, status: 150 },
  { id: 7, date: '12/03/2004', name: 'Ferrara', status: 44 },
  { id: 8, date: '12/03/2004', name: 'Rossini', status: 36 },
  { id: 9, date: '12/03/2004', name: 'Harvey', status: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const HistoryNotarizationProfile = () => {
  return (
    <Grid2 container spacing={0}>
      {/* History */}
      <Grid2 size="grow">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              p: '30px',
              alignItems: 'flex-start',
              gap: '8px',
              alignSelf: 'stretch',
              border: '1px solid #F3F4F6',
              background: '#FFF',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '8px',
              }}
            >
              {/* Lịch sử công chứng */}
              <Typography
                alignSelf="stretch"
                sx={{
                  fontSize: '22px',
                  lineHeight: '20px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  color: '#000',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                Lịch sử công chứng
              </Typography>

              {/* Toàn bộ lịch sử công chứng của bạn sẽ hiển thị ở đây */}
              <Typography
                alignSelf="stretch"
                sx={{
                  fontSize: '17px',
                  lineHeight: '20px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  color: '#000',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                Toàn bộ lịch sử công chứng của bạn sẽ hiển thị ở đây
              </Typography>
            </Box>

            {/* Tra cứu hồ sơ */}
            <Button
              startIcon={<FindInPageIcon />}
              sx={{
                display: 'flex',
                p: '6px 12px',
                borderRadius: '8px',
                border: '1px solid #A91D3A',
                background: '#FFF',
                boxShadow: '0px 2px 4px -2px rgba(0,0,0,0.12), 0px 4px 4px -2px rgba(0, 0, 0, 0.08)',
                fontSize: '14px',
                width: '15%',
              }}
            >
              Tra cứu hồ sơ
            </Button>
          </Box>

          {/* Main */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              p: '30px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '50px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid #000',
                }}
              >
                <Button
                  startIcon={
                    <AppsIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></AppsIcon>
                  }
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
                >
                  Tất cả
                </Button>

                <Button
                  startIcon={
                    <HourglassTopIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></HourglassTopIcon>
                  }
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
                >
                  Chờ xử lý
                </Button>

                <Button
                  startIcon={
                    <LoopIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></LoopIcon>
                  }
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
                >
                  Đang xử lí
                </Button>

                <Button
                  startIcon={
                    <EditNoteIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></EditNoteIcon>
                  }
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
                >
                  Sẵn sàng ký số
                </Button>

                <Button
                  startIcon={
                    <CheckCircleIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></CheckCircleIcon>
                  }
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
                >
                  Hoàn tất
                </Button>

                <Button
                  startIcon={
                    <ErrorIcon
                      sx={{
                        height: '18px',
                        width: '18px',
                      }}
                    ></ErrorIcon>
                  }
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
                >
                  Không hợp lệ
                </Button>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <IconButton
                  sx={{
                    p: '0px 8px 0px 0px',
                    height: '24px',
                    width: '24px',
                  }}
                >
                  <SearchIcon></SearchIcon>
                </IconButton>

                <Input
                  placeholder="Tìm kiếm"
                  sx={{
                    alignItems: 'center',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '20px',
                  }}
                ></Input>
              </Box>
            </Box>
            <Paper sx={{ height: '100%', width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                initialState={{ pagination: { paginationModel } }}
              />
            </Paper>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default HistoryNotarizationProfile;
