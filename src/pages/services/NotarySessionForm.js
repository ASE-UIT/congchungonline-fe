import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Button, Autocomplete, Modal, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { black, gray, white } from '../../config/theme/themePrimitives';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import AvatarWithCloseButton from '../../components/static/AvatarWithCloseButton';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& fieldset': { border: 'none' },
  marginTop: theme.spacing(1),
  backgroundColor: gray[50],
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    fontSize: 14,
  },
}));

const NotarySessionForm = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [duration, setDuration] = useState('');
  const [email, setEmail] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRemoveGuest = (emailToRemove) => {
    setGuestList((prev) => prev.filter((guest) => guest !== emailToRemove));
  };

  const handleAddGuest = () => {
    if (email && !guestList.includes(email)) {
      setGuestList((prev) => [...prev, email]);
      setEmail('');
    }
  };

  const fetchEmails = async (value) => {
    if (value) {
      setLoading(true);
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve([`${value}@gmail.com`, `${value}.example@gmail.com`]);
          }, 1000);
        });
        setOptions(response);
      } catch (error) {
        console.error('Error fetching emails:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setOptions([]);
    }
  };

  const formatDuration = (input) => {
    if (!isNaN(input) && input.length > 0) {
      const hours = Math.floor(input / 100);
      const minutes = input % 100;

      const totalHours = hours + Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      return `${totalHours} giờ ${remainingMinutes} phút`;
    }
    return input;
  };

  const handleDurationFormat = () => {
    const formattedValue = formatDuration(duration);
    setDuration(formattedValue);
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          width: { xs: '90%', sm: '70%', md: '50%' },
          p: 4,
          backgroundColor: white[50],
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Tạo Phiên Công Chứng
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Notary Session Name */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2">Tên phiên công chứng</Typography>
            <CustomTextField placeholder="Nhập tên phiên công chứng" fullWidth />
          </Box>

          {/* Notary Service and Field */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
            <Box sx={{ flex: '1 1 45%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
              <Typography variant="body2">Dịch vụ công chứng</Typography>
              <Autocomplete
                options={['Vay-Mượn tài sản']}
                renderOption={(props, option) => (
                  <Box {...props} sx={{ fontSize: '14px' }}>
                    {option}
                  </Box>
                )}
                renderInput={(params) => <CustomTextField {...params} placeholder="Chọn dịch vụ công chứng" />}
              />
            </Box>
            <Box sx={{ flex: '1 1 45%' }}>
              <Typography variant="body2">Lĩnh vực công chứng</Typography>
              <Autocomplete
                renderOption={(props, option) => (
                  <Box {...props} sx={{ fontSize: '14px' }}>
                    {option}
                  </Box>
                )}
                options={['Vay-Mượn tài sản']}
                renderInput={(params) => <CustomTextField {...params} placeholder="Chọn lĩnh vực công chứng" />}
              />
            </Box>
          </Box>

          {/* Date, Time and Duration Pickers */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              {/* Date Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <Typography variant="body2">Ngày</Typography>
                <DatePicker
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
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
                />
              </Box>

              {/* Time Picker */}
              <Box sx={{ flex: '1 1 30%', mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}>
                <Typography variant="body2">Giờ</Typography>
                <TimePicker
                  value={selectedTime}
                  onChange={(newValue) => setSelectedTime(newValue)}
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
                />
              </Box>

              {/* Duration Input */}
              <Box sx={{ flex: '1 1 30%' }}>
                <Typography variant="body2">Thời lượng</Typography>
                <TextField
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  onBlur={handleDurationFormat}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleDurationFormat();
                    }
                  }}
                  placeholder="Nhập thời lượng (VD: 130)"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& fieldset': { border: 'none' },
                    mt: 1,
                    backgroundColor: gray[50],
                    borderRadius: 1,
                    '& .MuiInputBase-input': { fontSize: '14px' },
                  }}
                />
              </Box>
            </Box>
            <Typography variant="caption" sx={{ mb: 2 }}>
              Sự kiện này sẽ diễn ra vào ngày 26/09/2024 từ 14:00 đến 17:45
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
                options={options}
                onInputChange={(event, newValue) => {
                  setEmail(newValue);
                  fetchEmails(newValue);
                }}
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
                  />
                )}
                loading={loading}
              />
              <Button
                size="small"
                variant="contained"
                onClick={handleAddGuest}
                sx={{ fontSize: 14, backgroundColor: white[50], color: black[900], textTransform: 'none', mr: 1 }}
              >
                Thêm
              </Button>
            </Box>
          </Box>

          {/* Added Guests */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
            {guestList.map((guest) => (
              <AvatarWithCloseButton key={guest} email={guest} onRemove={() => handleRemoveGuest(guest)} />
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
              onClick={onClose}
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: 100, fontSize: 14, fontWeight: 700, textTransform: 'none' }}
            >
              Xác nhận
            </Button>
          </Box>
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default NotarySessionForm;
