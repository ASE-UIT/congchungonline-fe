import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { black, dark, gray, primary } from '../../config/theme/themePrimitives';
import 'react-toastify/dist/ReactToastify.css';
import StatusBox from '../../components/services/StatusBox';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotarizationService from '../../services/notarization.service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotaryDocumentDetailsModal from '../../components/modals/NotaryDocumentDetailsModal';

const LookupNotarizationProfile = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [status, setStatus] = useState({ notFound: false, searching: false, found: false });
  const [notarizationData, setNotarizationData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearchClick = async () => {
    if (inputValue === '') {
      toast.error('Vui lòng nhập mã số hồ sơ công chứng');
    } else {
      setDisplayText(inputValue);
      setStatus({ notFound: false, searching: true, found: false });
      setSearchLoading(true);

      setTimeout(async () => {
        try {
          const response = await NotarizationService.getStatusById(inputValue);
          console.log('response', response);
          setSearchLoading(false);
          if (response) {
            setDisplayText(response.documentId);
            setStatus({ notFound: false, searching: false, found: true });
            setNotarizationData(response);
          }
        } catch (error) {
          setSearchLoading(false);
          console.log(error);
          if (error === 404) {
            setDisplayText(inputValue);
            setStatus({ notFound: true, searching: false, found: false });
          } else {
            setDisplayText(inputValue);
            setStatus({ notFound: true, searching: false, found: false });
          }
        }
      }, 1000);
    }
  };

  const renderStatusBox = () => {
    if (status.notFound) {
      return <StatusBox status={status} displayText={displayText} />;
    }
    if (status.searching) {
      return <StatusBox status={status} displayText={displayText} />;
    }
    if (status.found) {
      return (
        <StatusBox
          status={status}
          displayText={displayText}
          notarizationData={notarizationData}
          onOpenModal={handleOpenModal}
        />
      );
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 6,
        }}
      >
        <Box height="fit-content" width="fit-content">
          <Typography
            variant="h2"
            textAlign="center"
            color={dark[500]}
            sx={{
              width: '100%',
              fontWeight: 700,
            }}
            height="fit-content"
            width="fit_content"
          >
            Tra cứu hồ sơ công chứng
          </Typography>
          <Typography variant="body2" textAlign="center" color={dark[500]} sx={{ mt: 2, width: '100%' }}>
            Vui lòng nhập mã số hồ sơ công chứng để tra cứu trạng thái và thông tin chi tiết
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '40%',
            mt: 4,
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <TextField
            variant="outlined"
            size="medium"
            placeholder="Nhập mã số hồ sơ công chứng..."
            autoFocus
            value={inputValue}
            onChange={handleInputChange}
            sx={{
              flex: 1,
              borderRadius: 1,
              '& .MuiInputBase-input': {
                fontSize: 14,
              },
            }}
            disabled={searchLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchClick();
              }
            }}
          />
          <Button
            disabled={searchLoading}
            startIcon={<SearchRoundedIcon />}
            variant="contained"
            disableElevation
            color="white"
            sx={{
              px: 2,
              color: black[300],
              border: `1px solid ${black[50]}`,
              '&:hover': {
                border: `1px solid ${primary[500]}`,
                color: primary[500],
              },
            }}
            size="small"
            onClick={handleSearchClick}
          >
            <Typography variant="button" textTransform="none">
              Tra cứu
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: gray[50],
          position: 'relative',
          flex: 1,
          p: 4,
        }}
      >
        {renderStatusBox()}
      </Box>
      {/* <NotaryDocumentDetailsModal open={openModal} handleClose={handleCloseModal} notarizationData={notarizationData} /> */}
    </Box>
  );
};

export default LookupNotarizationProfile;
