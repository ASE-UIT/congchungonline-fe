import { ArrowBack, ArrowDropDown } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { black } from '../../config/theme/themePrimitives';
import LabeledTextField from './LabeledTextField';

const EditUserProfileModal = ({ open, handleClose }) => {
    const userData = {
        name: 'Nguyễn Quốc Thắng',
        identification: '060204888677',
        email: 'nguyenqthangwork@gmail.com',
        phone: '+84 346 129 897',
        city: 'Bình Dương',
        district: 'Dĩ An',
        ward: 'Đông Hòa',
        street: 'Linh Trung 2',
    };

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
        setFormData(userData);
    }, []);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: '70vw',
                    bgcolor: "background.paper",
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
                            "&:hover": {
                                backgroundColor: black[900],
                                color: 'white',
                            },
                            textTransform: 'none',
                        }}
                        onClick={handleClose}
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
                        <LabeledTextField label="Họ và tên" value={formData.name} onChange={(value) => handleInputChange('name', value)} />
                        <LabeledTextField label="CMND/CCCD" value={formData.identification} onChange={(value) => handleInputChange('identification', value)} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                        <LabeledTextField label="Email" value={formData.email} onChange={(value) => handleInputChange('email', value)} />
                        <LabeledTextField label="Số điện thoại" value={formData.phone} onChange={(value) => handleInputChange('phone', value)} />
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
                        <LabeledTextField label="Tỉnh/Thành phố" value={formData.city} onChange={(value) => handleInputChange('city', value)} adornment={<ArrowDropDown />} options={cities} />
                        <LabeledTextField label="Quận/Huyện" value={formData.district} onChange={(value) => handleInputChange('district', value)} adornment={<ArrowDropDown />} options={districts} />
                        <LabeledTextField label="Xã, Phường/Thị trấn" value={formData.ward} onChange={(value) => handleInputChange('ward', value)} adornment={<ArrowDropDown />} options={wards} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                        <LabeledTextField label="Số nhà, đường/phố" value={formData.street} onChange={(value) => handleInputChange('street', value)} />
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default EditUserProfileModal;
