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
import { setUser, startLoading, stopLoading, setError } from '../../stores/slices/userSlice';
import PersonalInformationSkeleton from '../../components/profile/SkeletonPersonalInfo';

const UserProfile = () => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const fetchUserData = async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await UserService.getUserById(userInfo.id);
      dispatch(setUser(response));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(stopLoading());
    }
  };

  useEffect(() => {
    if (!user.id) {
      fetchUserData(dispatch);
    }
    console.log(user);
  }, [dispatch, user.id, userInfo.id]);

  const handleSave = (newData) => {
    dispatch(setUser(newData));
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5 }}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2.5 }}>
          {loadingStatus ? (
            <PersonalInformationSkeleton></PersonalInformationSkeleton>
          ) : (
            <PersonalInformation user={user} onSave={handleSave} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
