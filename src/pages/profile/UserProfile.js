import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Avatar } from '@mui/material';
import { gray, white } from '../../config/theme/themePrimitives';
import PersonalInformation from '../../components/profile/PersonalInformation';
import { CloudUpload } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../../stores/slices/authSlice';
import UserService from '../../services/user.service';

const UserProfile = () => {
  const [user, setUser] = useState({
    role: '',
    identification: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    street: '',
    role: '',
    isEmailVerified: false,
    name: '',
    email: '',
    id: '',
  });

  const [loadingStatus, setLoadingStatus] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  
  async function getUserData() {
    try {
      setLoadingStatus(true);
      const response = await UserService.getUserById(userInfo.id);
      setUser({
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
    getUserData();
   
  }, [userInfo]);

  const handleSave = (newData) => {
    setUser((user) => ({
      ...user,
      ...newData,
    }));
  };

  return (
    <Box display="flex" p={4}>
      <Box
        sx={{
          flex: 1,
          borderRadius: 2,
          overflow: 'hidden',
          border: `1px solid ${gray[50]}`,
          backgroundColor: white[50],
          boxShadow: 1,
        }}
      >
        {/* Avatar Section */}
        <Box display="flex" alignItems="center" gap={2} p={2.5}>
          <Avatar src="/avatar.png" sx={{ width: 96, height: 96, borderRadius: '50%' }} />
          <Box flex={1} display="flex" flexDirection="column" gap={1}>
            <Typography variant="h5">{user.name || 'Stranger'}</Typography>
            <Typography variant="caption" color="textSecondary">
              Khuyến nghị kích thước ít nhất 800x800 px. Chỉ cho phép định dạng JPG hoặc PNG.
            </Typography>
            <Button startIcon={<CloudUpload />} variant="outlined" size="small" sx={{ alignSelf: 'flex-start' }}>
              Tải ảnh mới lên
            </Button>
          </Box>
        </Box>

        {/* Personal Information Section */}
        <Box display="flex" flexDirection="column" gap={2} p={2.5}>
          {loadingStatus ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <PersonalInformation user={user} onSave={handleSave} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
