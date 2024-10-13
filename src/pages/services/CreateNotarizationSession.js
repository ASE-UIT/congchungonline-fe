import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { black, gray, primary, white } from '../../config/theme/themePrimitives';
import SessionCard from '../../components/services/SessionCard';
import NotarySessionForm from './NotarySessionForm';
import SessionService from '../../services/session.service';

const CreateNotarizationSession = () => {
  const [openNotarySessionForm, setOpenNotarySessionForm] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [searchingSessions, setSearchingSessions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchSessions = async () => {
    const data = await SessionService.getAllSessions();
    console.log('Session: ', data);
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleAddSessionSuccess = useCallback(() => {
    fetchSessions();
  }, []);

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const handleSearch = useCallback(
    debounce((value) => {
      if (value === '') {
        setSearchingSessions([]);
      } else {
        const searchResult = sessions.filter((session) =>
          session.sessionName.toLowerCase().includes(value.toLowerCase())
        );
        setSearchingSessions(searchResult);
      }
    }, 1000),
    [sessions]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };


  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          p: 3,
          backgroundColor: white[50],
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
        }}
      >
        <Box sx={{ flex: 1, gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Tạo phiên công chứng nhiều người
          </Typography>
          <Typography variant="caption">Toàn bộ phiên công chứng của bạn sẽ hiển thị ở đây</Typography>
        </Box>
        <Button
          onClick={() => setOpenNotarySessionForm(true)}
          startIcon={<WorkHistoryIcon />}
          variant="contained"
          disableElevation
          color="white"
          sx={{
            display: 'flex',
            border: `1px solid ${black[50]}`,
            '&:hover': {
              border: `1px solid ${primary[500]}`,
              color: primary[500],
            },
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
            Tạo phiên công chứng
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
          p: 2,
          backgroundColor: gray[50],
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            borderRadius: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: white[50],
            p: 2,
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '40%',
                xl: '100%',
              },
              alignItems: 'center',
            }}
          >
            <TextField
              placeholder="Tìm kiếm phiên công chứng..."
              variant="outlined"
              onChange={handleChange}
              value={searchValue}
              sx={{
                width: '100%',
                '& fieldset': { border: 'none' },
                backgroundColor: gray[50],
                borderRadius: 1,
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
            />
          </Box>
          {sessions.length > 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mt: 2,
                justifyContent: { sm: 'center', md: 'center', lg: 'space-between', xl: 'space-between' },
                position: 'relative',
                '&:after': {
                  content: '""',
                  flexBasis: {
                    xs: '100%',
                    sm: 'calc(50%)',
                    md: 'calc(33.33%)',
                  },
                  display: 'block',
                  visibility: 'hidden',
                },
                '& > *': {
                  mx: 1,
                },
              }}
            >
              {searchingSessions.length > 0 ? (
                searchingSessions.map((session, index) => <SessionCard key={index} session={session} />)
              ) : (
                sessions.map((session, index) => <SessionCard key={index} session={session} />)
              )}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Typography variant="body2" sx={{ color: black[300] }}>
                Không có phiên công chứng nào
              </Typography>
            </Box>
          )}

        </Box>
        <NotarySessionForm
          open={openNotarySessionForm}
          onClose={() => {
            setOpenNotarySessionForm(false);
          }}
          onSuccess={handleAddSessionSuccess}
        />
      </Box>
    </Box>
  );
}
export default CreateNotarizationSession;