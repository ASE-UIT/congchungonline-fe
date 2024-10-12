import { ArrowBack, PictureAsPdf, FileDownloadOutlined, Error, FiberManualRecord } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { blue, dark, green, red, yellow, black, white, gray } from '../../config/theme/themePrimitives';
import NotaryStep from './NotaryStep';

const NotaryDocumentDetailsModal = ({ open, handleClose, notarizationData }) => {
  console.log('notarizationData', notarizationData);

  const [currentStep] = useState(0);

  const renderStatusBox = (status) => {
    switch (status) {
      case undefined:
        return (
          <Box
            sx={{
              bgcolor: dark[50],
              color: dark[500],
              borderRadius: '30px',
              p: 1,
            }}
          >
            <Typography variant="caption">Chưa xác nhận</Typography>
          </Box>
        );

      case 'pending':
        return (
          <Box
            sx={{
              bgcolor: dark[50],
              color: dark[500],
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Chờ xử lý</Typography>
          </Box>
        );
      case 'processing':
        return (
          <Box
            sx={{
              bgcolor: yellow[50],
              color: yellow[500],
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Đang xử lý</Typography>
          </Box>
        );
      case 'receiving':
        return (
          <Box
            sx={{
              bgcolor: 'error.main',
              color: 'error.contrastText',
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Tiếp nhận và sử lý</Typography>
          </Box>
        );
      case 'ready':
        return (
          <Box
            sx={{
              bgcolor: blue[50],
              color: blue[500],
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Sẵn sàng ký số</Typography>
          </Box>
        );
      case 'completed':
        return (
          <Box
            sx={{
              bgcolor: green[50],
              color: green[500],
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Hoàn tất</Typography>
          </Box>
        );
      default:
        return (
          <Box
            sx={{
              bgcolor: red[50],
              color: red[500],
              borderRadius: '30px',
              px: '24px',
              py: '4px',
            }}
          >
            <Typography variant="caption">Không hợp lệ</Typography>
          </Box>
        );
    }
  };

  const renderFileBox = (file) => {
    return (
      <Box
        padding={'8px'}
        display={'flex'}
        flexDirection={'row'}
        gap={'16px'}
        borderRadius={'8px'}
        border={'1px solid'}
        borderColor={dark[50]}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          borderRadius={'100px'}
          bgcolor={red[50]}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          padding={'8px'}
        >
          <PictureAsPdf fontSize={'medium'} sx={{ color: red[500] }} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
          <Typography variant={'body2'}>{file.name}</Typography>
          <Typography variant={'body3'}>{file.size}</Typography>
        </Box>
        <Box
          borderRadius={'100px'}
          bgcolor={dark[50]}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          padding={'8px'}
        >
          <FileDownloadOutlined fontSize={'medium'} sx={{ color: black[900] }} />
        </Box>
      </Box>
    );
  };

  const renderFileIcon = (image) => {
    return (
      <Box
        padding={'8px'}
        display={'flex'}
        flexDirection={'row'}
        gap={'16px'}
        borderRadius={'8px'}
        border={'1px solid'}
        borderColor={dark[50]}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          borderRadius={'100px'}
          bgcolor={yellow[50]}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          padding={'8px'}
        >
          <PictureAsPdf fontSize={'medium'} sx={{ color: yellow[500] }} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
          <Typography variant={'body2'}>{image.name}</Typography>
          <Typography variant={'body3'}>{image.size}</Typography>
        </Box>
        <Box
          borderRadius={'100px'}
          bgcolor={dark[50]}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          padding={'8px'}
        >
          <FileDownloadOutlined fontSize={'medium'} sx={{ color: black[900] }} />
        </Box>
      </Box>
    );
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'fit-content',
          height: '90vh',
          backgroundColor: white[50],
          borderRadius: 2,
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 1,
          p: 2,
          gap: 2,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handleClose}>
              <ArrowBack
                sx={{
                  color: black[900],
                }}
                fontSize="small"
              />
            </IconButton>
            <Typography variant="subtitle2" color={black[900]}>
              Chi tiết hồ sơ công chứng {notarizationData._id && `- Mã số: #${notarizationData._id}`}
            </Typography>
          </Box>
          {renderStatusBox(notarizationData.status)}
        </Box>

        {/* User Information Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
            backgroundColor: gray[50],
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2" color={black[900]}>
            Thông tin khách hàng
          </Typography>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1}>
              Họ và tên:
            </Typography>
            <Typography variant="body3">alksjdakjsdlkajsj</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1} textAlign={'left'}>
              Số CMND/CCCD:
            </Typography>
            <Typography variant="body3" flex={1} textAlign={'right'}></Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1} textAlign={'left'}>
              Số điện thoại:
            </Typography>
            <Typography variant="body3" flex={1} textAlign={'right'}></Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1} textAlign={'left'}>
              Email:
            </Typography>
            <Typography variant="body3" flex={1} textAlign={'right'}></Typography>
          </Box>
        </Box>

        {/* Type of Service Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
            backgroundColor: gray[50],
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2" color={black[900]}>
            Thông tin tài liệu công chứng
          </Typography>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1} textAlign={'left'}>
              Loại dịch vụ công chứng:
            </Typography>
            <Typography variant="body3" flex={1} textAlign={'right'}></Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Typography variant="body3" flex={1} textAlign={'left'}>
              Lĩnh vực công chứng:
            </Typography>
            <Typography variant="body3" flex={1} textAlign={'right'}></Typography>
          </Box>
        </Box>

        {/* Files Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: 1,
          }}
        >
          <Typography variant="subtitle2" color={black[900]}>
            Tệp
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
            }}
          >
            {notarizationData.files.map((file) => renderFileBox(file))}
          </Box>
        </Box>

        {/* Images Section
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            p: '16px',
          }}
        >
          <Typography variant="subtitle2" color={black[900]}>
            Ảnh
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
            }}
          >
            {document.images.map((image) => renderFileIcon(image))}
          </Box>
        </Box> */}

        {/* Steps Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            p: '16px',
          }}
        >
          <NotaryStep currentStep={currentStep} />
          <Box flex={1} justifyContent={'top'} alignItems={'center'}>
            <Box
              flexDirection={'column'}
              justifyContent={'left'}
              alignItems={'center'}
              padding={'16px'}
              height={'fit-content'}
              borderRadius={'8px'}
              border={'1px solid'}
              borderColor={dark[50]}
            >
              <Typography textAlign={'left'} sx={{ fontSize: '14px', fontWeight: '600' }}>
                Ghi chú
              </Typography>
              <Box
                padding={'8px'}
                display={'flex'}
                flexDirection={'row'}
                gap={'10px'}
                borderRadius={'8px'}
                backgroundColor={red[50]}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'fit-content'}
                marginY={'16px'}
              >
                <Error fontSize={'medium'} sx={{ color: red[400] }} />
                <Typography sx={{ color: black[900], fontSize: '12px', fontWeight: '500' }}>
                  Hồ sơ cần bổ sung thêm giấy tờ
                </Typography>
              </Box>

              <Typography textAlign={'left'} sx={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Tài liệu cần bổ sung
              </Typography>

              <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'fit-content'}
                gap={'10px'}
                padding={'8px'}
              >
                <FiberManualRecord sx={{ color: black[900], width: '8px', height: '8px' }} />
                <Typography sx={{ color: black[900], fontSize: '12px', fontWeight: '500' }}>
                  Hồ sơ cần bổ sung thêm giấy tờ
                </Typography>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'fit-content'}
                gap={'10px'}
                padding={'8px'}
              >
                <FiberManualRecord sx={{ color: black[900], width: '8px', height: '8px' }} />
                <Typography sx={{ color: black[900], fontSize: '12px', fontWeight: '500' }}>
                  Hồ sơ cần bổ sung thêm giấy tờ
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Contact Section */}
        <Box
          sx={{
            flexDirection: 'column',
            gap: '16px',
            p: '16px',
            width: 'fit-content',
            border: '1px solid',
            borderColor: dark[50],
            borderRadius: '8px',
          }}
        >
          <Typography sx={{ color: black[900], fontSize: '14px', fontWeight: '600' }}>Hỗ trợ khách hàng</Typography>
          <Typography sx={{ color: black[900], fontSize: '12px', fontWeight: '400' }}>
            Liên hệ: 1900-123-456 hoặc email: support@notary.vn
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default NotaryDocumentDetailsModal;
