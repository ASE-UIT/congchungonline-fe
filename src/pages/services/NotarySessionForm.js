import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Box, Typography, TextField, IconButton, Button, Autocomplete, Modal, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { black, gray, white } from '../../config/theme/themePrimitives';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import AvatarWithCloseButton from '../../components/static/AvatarWithCloseButton';
import NotarizationService from '../../services/notarization.service';
import SessionService from '../../services/session.service';
import UserService from '../../services/user.service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& fieldset': { border: 'none' },
  marginTop: theme.spacing(1),
  backgroundColor: gray[50],
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    fontSize: 14,
  },
}));

const NotarySessionForm = ({ open, onClose, onSuccess }) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [startTime, setStartTime] = useState(dayjs());

  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const [notarizationFields, setNotarizationFields] = useState([]);
  const [notarizationServices, setNotarizationServices] = useState([]);

  const [notaryField, setNotaryField] = useState(null);
  const [notaryService, setNotaryService] = useState(null);
  const [sessionName, setSessionName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const fetchEmails = useCallback(
    debounce(async (value) => {
      if (!value) {
        setOptions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await UserService.searchUserByEmail(value);
        setOptions(response || []);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 1500),
    []
  );

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
    setEmail(newValue);
    fetchEmails(newValue);
  };

  const handleSessionNameChange = (event) => {
    setSessionName(event.target.value);
  };

  const handleRemoveGuest = (emailToRemove) => {
    setUsers((prev) => prev.filter((user) => user.email !== emailToRemove));
  };

  const fetchNotarizationField = async () => {
    if (notarizationFields.length > 0) return;
    setLoading(true);
    try {
      const response = await NotarizationService.getAllNotarizationField();
      setNotarizationFields(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotarizationService = async () => {
    if (notaryField && notarizationServices.length === 0) {
      setLoading(true);
      try {
        const response = await NotarizationService.getNotarizationServiceByFieldId(notaryField.id);
        setNotarizationServices(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setNotarizationServices([]);
    setNotaryService(null);
  }, [notaryField]);

  const handleCreateSession = async () => {
    if (!sessionName) {
      toast.error('Vui lòng nhập tên phiên công chứng.');
      return;
    }

    if (!notaryField || !notaryService) {
      toast.error('Vui lòng chọn lĩnh vực và dịch vụ công chứng.');
      return;
    }

    if (!endDate || !endTime) {
      toast.error('Vui lòng chọn thời gian kết thúc.');
      return;
    }

    if (users.length === 0) {
      toast.error('Vui lòng thêm khách mời.');
      return;
    }

    const session = {
      sessionName,
      notaryField,
      notaryService,
      startTime: startTime.format('HH:mm'),
      startDate: startDate.format('YYYY-MM-DD'),
      endTime: endTime.format('HH:mm'),
      endDate: endDate.format('YYYY-MM-DD'),
      users,
    };

    setIsSubmitting(true);

    try {
      const response = await SessionService.createSession(session);
      if (response) {
        toast.success('Tạo phiên công chứng thành công.');
        resetForm();
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error('Error creating session:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStartDate(dayjs());
    setStartTime(dayjs());
    setEndDate(null);
    setEndTime(null);
    setEmail('');
    setUsers([]);
    setOptions([]);
    setNotaryField(null);
    setNotaryService(null);
    setSessionName('');
  };

  const handleAddGuest = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const existingUser = options.find((option) => option.email === email);

    if (!email) {
      toast.error('Vui lòng nhập địa chỉ email.');
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error('Địa chỉ email không hợp lệ.');
      return;
    }

    if (!existingUser) {
      toast.error('Không tìm thấy người dùng.');
      return;
    }

    if (users.find((user) => user.email === email)) {
      toast.error('Người dùng này đã được thêm.');
      return;
    }

    setUsers((prev) => [...prev, { email }]);
    setEmail('');
    setInputValue('');
  };

  const handleOnClose = () => {
    resetForm();
    onClose();
  }

  return (
    <Modal open={open} onClose={handleOnClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: { xs: '90vw', sm: '80vw', md: '70vw' },
          maxHeight: '80vh',
          p: 4,
          backgroundColor: white[50],
          borderRadius: 2,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Tạo Phiên Công Chứng
            </Typography>
            <IconButton onClick={handleOnClose} disabled={isSubmitting}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Notary Session Name */}
          <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: 2 }}>
            <Typography variant="body2">Tên phiên công chứng</Typography>
            <CustomTextField placeholder="Nhập tên phiên công chứng" fullWidth onChange={handleSessionNameChange} disabled={isSubmitting} />
          </Box>

          {/* Notary Service and Field */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
            <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
              <Typography variant="body2">Lĩnh vực công chứng</Typography>
              <Autocomplete
                loading={loading}
                options={notarizationFields}
                getOptionLabel={(option) => option.name}
                onChange={(e, value) => setNotaryField(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{ ...params.inputProps, readOnly: true }}
                    sx={{
                      '& fieldset': { border: 'none' },
                      mt: 1,
                      backgroundColor: gray[50],
                      borderRadius: 1,
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                    placeholder='Chọn lĩnh vực công chứng'
                  />
                )}
                value={notaryField}
                onOpen={fetchNotarizationField}
                disabled={isSubmitting}
              />
            </Box>
            <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
              <Typography variant="body2">Dịch vụ công chứng</Typography>
              <Autocomplete
                loading={loading}
                options={notarizationServices}
                getOptionLabel={(option) => option.name}
                onChange={(e, value) => setNotaryService(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{ ...params.inputProps, readOnly: true }}
                    sx={{
                      '& fieldset': { border: 'none' },
                      mt: 1,
                      backgroundColor: gray[50],
                      borderRadius: 1,
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                    placeholder='Chọn dịch vụ công chứng'
                  />
                )}
                value={notaryService}
                onOpen={fetchNotarizationService}
                disabled={isSubmitting}
              />
            </Box>
          </Box>

          {/* Start Date and Time */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">Thời gian bắt đầu</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              {/* Start Date Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      sx: {
                        '& fieldset': { border: 'none' },
                        mt: 1,
                        backgroundColor: gray[50],
                        borderRadius: 1,
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      },
                    },
                  }}
                  format='DD/MM/YYYY'
                  disabled={isSubmitting}
                />
              </Box>
              {/* Start Time Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <TimePicker
                  value={startTime}
                  onChange={(newValue) => setStartTime(newValue)}
                  ampm={false}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      sx: {
                        '& fieldset': { border: 'none' },
                        mt: 1,
                        backgroundColor: gray[50],
                        borderRadius: 1,
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      },
                    },
                  }}
                  format='HH:mm'
                  disabled={isSubmitting}
                />
              </Box>
            </Box>
          </Box>

          {/* End Date and Time */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">Thời gian kết thúc</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              {/* End Date Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <DatePicker
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      sx: {
                        '& fieldset': { border: 'none' },
                        mt: 1,
                        backgroundColor: gray[50],
                        borderRadius: 1,
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      },
                    },
                  }}
                  format='DD/MM/YYYY'
                  disabled={isSubmitting}
                />
              </Box>
              {/* End Time Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <TimePicker
                  value={endTime}
                  onChange={(newValue) => setEndTime(newValue)}
                  ampm={false}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      sx: {
                        '& fieldset': { border: 'none' },
                        mt: 1,
                        backgroundColor: gray[50],
                        borderRadius: 1,
                        '& .MuiInputBase-input': {
                          fontSize: 14,
                        },
                      },
                    },
                  }}
                  format='HH:mm'
                  disabled={isSubmitting}
                />
              </Box>
            </Box>
            <Typography variant="caption" sx={{ mb: 2, color: black[400] }}>
              Sự kiện này sẽ diễn ra từ {startDate.format('DD/MM/YYYY')} - {startTime.format('HH:mm')} đến {endDate ? endDate.format('DD/MM/YYYY') : '.. / .. / ..'} - {endTime ? endTime.format('HH:mm') : '.. : ..'}
            </Typography>
          </Box>

          {/* Add Guests */}
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <Typography variant="body2">Thêm khách mời</Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                mt: 1,
                backgroundColor: gray[50],
                borderRadius: 1,
              }}
            >
              <Autocomplete
                freeSolo
                value={email}
                inputValue={inputValue}
                options={options.map(option => option.email)}
                onInputChange={handleInputChange}
                sx={{ flexGrow: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Nhập email khách mời"
                    sx={{
                      flexGrow: 1,
                      '& fieldset': { border: 'none' },
                      '& .MuiInputBase-input': { fontSize: '14px' },
                    }}
                    onKeyDown={(event) => event.key === 'Enter' && handleAddGuest()}
                  />
                )}
                loading={loading}
                disabled={isSubmitting}
              />

              <Button
                size="small"
                variant="contained"
                onClick={handleAddGuest}
                sx={{ fontSize: 14, backgroundColor: white[50], color: black[900], textTransform: 'none', mr: 1 }}
                disabled={isSubmitting}
              >
                Thêm
              </Button>
            </Box>
          </Box>

          {/* Added Guests */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
            {users.map((guest, index) => (
              <AvatarWithCloseButton
                key={index}
                email={guest.email}
                onRemove={() => handleRemoveGuest(guest.email)}
              />
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              sx={{
                minWidth: 100,
                mr: 2,
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'none',
                border: `1px solid ${black[50]}`,
                color: black[400],
              }}
              onClick={handleOnClose}
              disabled={isSubmitting}
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: 100, fontSize: 14, fontWeight: 700, textTransform: 'none' }}
              onClick={handleCreateSession}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang xử lý...' : 'Xác nhận'}
            </Button>
          </Box>
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default NotarySessionForm;