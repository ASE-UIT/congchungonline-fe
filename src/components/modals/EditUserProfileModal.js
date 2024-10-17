import { ArrowBack, ArrowDropDown, Password } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography, MenuItem } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import { black } from '../../config/theme/themePrimitives';
import LabeledTextField from './LabeledTextField';
import { toast } from 'react-toastify';
import UserService from '../../services/user.service';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ProvinceSelector from '../profile/ProvinceSelector';
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from 'vn-provinces';

const EditUserProfileModal = ({ open, handleClose, onSave }) => {

  {/* User Info Loading  */ }

  const { userInfo } = useSelector((state) => state.auth);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const [formData, setFormData] = useState({
    role: '',
    identification: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    street: '',
    isEmailVerified: false,
    name: '',
    email: '',
    id: '',
  });
  async function getUserData() {
    try {
      setLoadingStatus(true);
      const response = await UserService.getUserById(userInfo.id);
      setFormData({
        role: userInfo.role || '',
        isEmailVerified: userInfo.isEmailVerified || false,
        name: response.name || '',
        email: response.email || '',
        // city: userInfo?.city || '',
      });

      setLoadingStatus(false);
    } catch (error) {}
  }

  useEffect(() => {
    if (open) setFormData(userInfo);
    getUserData()
  }, [open, userInfo]);


  {/* Handle Saving Codes */ }
  
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData);
  };

  const isFormDataValid = ({ name, identification, email, phone, city, district, ward, street }) => {
    // Revert this Comment along changing the code below once the backend code is done
    const validations = [
      { valid: /^[A-Za-zÀ-ỹ\s]+$/.test(name), message: 'Vui lòng nhập Họ tên hợp lệ' },
      // { valid: /^[0-9]{9}$|^[0-9]{12}$/.test(identification), message: 'Vui lòng nhập đúng số CCCD' },
      // { valid: /^\+?[0-9]{10,15}$/.test(phone), message: 'Vui lòng nhập đúng Số điện thoại' },
      {
        valid: /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(email),
        message: 'Vui lòng nhập email hợp lệ',
      },
      // { valid: city && district && ward && street, message: 'Vui lòng điền đầy đủ thông tin địa chỉ' },
    ];

    for (let { valid, message } of validations) {
      if (!valid) {
        toast.error(message);
        return false;
      }
    }

    return true;
  };

  const handleSaveChanges = async () => {
    if (!isFormDataValid(formData) ) { 
      
      
    } else {
      try {
        const updateBody = {
          // Change these comment into code once the back end code for these field is added
          // Because of the current back end code and database only provide 3 fields (and only 2 of them can be updated by user)
          // I comment these line of code and only left out 2 updatable field

          // role: formData.role,
          // isEmailVerified: formData.isEmailVerified,
          // phone: formData.phone,
          // city: formData.city,
          // district: formData.district,
          // ward: formData.ward,
          // street: formData.street,
          name: formData.name,
          email: formData.email,
        };
        console.log(updateBody);
        const response = await UserService.updateUser(userInfo.id, updateBody);
        console.log('response', response);

        if (response) {
          onSave(updateBody);
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

        {/* Address Section - ProvinceSelector Component */}

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

          <ProvinceSelector
            city={formData.city}
            district={formData.district}
            ward={formData.ward}
            onCityChange={(value) => handleInputChange('city', value)}
            onDistrictChange={(value) => handleInputChange('district', value)}
            onWardChange={(value) => handleInputChange('ward', value)}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <LabeledTextField
              label="Số nhà, đường/phố"
              value={formData?.street || ''}
              onChange={(value) => handleInputChange('street', value)}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserProfileModal;
