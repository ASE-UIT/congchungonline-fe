import { ArrowBack, ArrowDropDown } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import { black } from '../../config/theme/themePrimitives';
import LabeledTextField from './LabeledTextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUserProfileModal = ({ open, handleClose, onSave, user }) => {
  const userData = useMemo(
    () => ({
      name: 'Nguyễn Quốc Thắng',
      identification: '060204888677',
      email: 'nguyenqthangwork@gmail.com',
      phone: '+84 346 129 897',
      city: 'Bình Dương',
      district: 'Dĩ An',
      ward: 'Đông Hòa',
      street: 'Linh Trung 2',
    }),
    [],
  );

  const [formData, setFormData] = useState({
    name: '',
    identification: '',
    email: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    street: '',
  });

  useEffect(() => {
    if (open) setFormData(user);
  }, [open, user]);



  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormDataValid = ({ name, identification, email, phone, city, district, ward, street }) => {
    const validations = [
      { valid: /^[A-Za-zÀ-ỹ\s]+$/.test(name), message: 'Vui lòng nhập Họ tên hợp lệ' },
      { valid: /^[0-9]{9}$|^[0-9]{12}$/.test(identification), message: 'Vui lòng nhập đúng số CCCD' },
      { valid: /^\+?[0-9]{10,15}$/.test(phone), message: 'Vui lòng nhập đúng Số điện thoại' },
      {
        valid: /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(email),
        message: 'Vui lòng nhập email hợp lệ',
      },
      { valid: city && district && ward && street, message: 'Vui lòng điền đầy đủ thông tin địa chỉ' },
    ];

    for (let { valid, message } of validations) {
      if (!valid) {
        toast.error(message);
        return false;
      }
    }

    return true;
  };

  const handleSaveChanges = () => {
    if (!isFormDataValid(formData)) {
    } else {
      try {
        // API call to Back end here
        const response = true; // This is a replacement response for API call, please replace it with proper API call later
        console.log('response', response);

        if (response) {
          onSave(formData);
          handleClose();
          toast.success('Cập nhật thông tin thành công!');
        }
      } catch (error) {
        console.log(error);
        if (error === 404) {
          toast.error('Không tìm thấy dữ liệu');
        } else {
          toast.error('Có lỗi xảy ra, vui lòng thử lại sau');
        }
      }
    }
  };

  const cities = [
    { value: 'HCM', label: 'Hồ Chí Minh' },
    { value: 'HN', label: 'Hà Nội' },
    { value: 'BD', label: 'Bình Dương' },
    { value: 'DN', label: 'Đà Nẵng' },
  ];

  const districts = [
    { value: '1', label: 'Quận 1' },
    { value: '2', label: 'Quận 2' },
    { value: '3', label: 'Quận 3' },
    { value: '4', label: 'Quận 4' },
  ];

  const wards = [
    { value: '1', label: 'Phường 1' },
    { value: '2', label: 'Phường 2' },
    { value: '3', label: 'Phường 3' },
    { value: '4', label: 'Phường 4' },
  ];

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          bgcolor: 'background.paper',
          p: '24px',
          borderRadius: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <IconButton sx={{ padding: 0 }} disableRipple onClick={handleClose}>
            <ArrowBack sx={{ width: '24px', height: '24px', color: black[900] }} />
          </IconButton>
          <Typography variant="h6" flex={1} color={black[900]}>
            Cập nhật hồ sơ
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: black[50],
              color: black[900],
              '&:hover': {
                backgroundColor: black[900],
                color: 'white',
              },
              textTransform: 'none',
            }}
            onClick={handleSaveChanges}
          >
            Lưu thay đổi
          </Button>
        </Box>

        {/* Form Fields Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'left',
            gap: '10px',
            marginTop: '20px',
            border: `1px solid ${black[50]}`,
            borderRadius: '8px',
            padding: '16px',
            columnGap: '16px',
          }}
        >
          <Typography variant="subtitle2" flex={1} color={black[900]}>
            Cập nhật hồ sơ
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <LabeledTextField
              label="Họ và tên"
              value={formData.name}
              onChange={(value) => handleInputChange('name', value)}
            />
            <LabeledTextField
              label="CMND/CCCD"
              value={formData.identification}
              onChange={(value) => handleInputChange('identification', value)}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <LabeledTextField label="Email" value={formData.email} onChange={(value) => handleInputChange('email', value)} />
            <LabeledTextField
              label="Số điện thoại"
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
            />
          </Box>
        </Box>

        {/* Address Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'left',
            gap: '10px',
            marginTop: '20px',
            border: `1px solid ${black[50]}`,
            borderRadius: '8px',
            padding: '16px',
            columnGap: '16px',
          }}
        >
          <Typography variant="subtitle2" color={black[900]}>
            Địa chỉ liên hệ
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <LabeledTextField
              label="Tỉnh/Thành phố"
              value={formData.city}
              onChange={(value) => handleInputChange('city', value)}
              adornment={<ArrowDropDown />}
              options={cities}
            />
            <LabeledTextField
              label="Quận/Huyện"
              value={formData.district}
              onChange={(value) => handleInputChange('district', value)}
              adornment={<ArrowDropDown />}
              options={districts}
            />
            <LabeledTextField
              label="Xã, Phường/Thị trấn"
              value={formData.ward}
              onChange={(value) => handleInputChange('ward', value)}
              adornment={<ArrowDropDown />}
              options={wards}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <LabeledTextField
              label="Số nhà, đường/phố"
              value={formData.street}
              onChange={(value) => handleInputChange('street', value)}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserProfileModal;
