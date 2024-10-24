import React from 'react';
import { white, gray, black, primary } from '../../config/theme/themePrimitives';
import { Close } from '@mui/icons-material';
import AvatarWithCloseButton from '../static/AvatarWithCloseButton';
import { Box, Button, circularProgressClasses, IconButton, Modal, Typography } from '@mui/material';
import SessionService from '../../services/session.service';
import { toast } from 'react-toastify';

const NotarizationSessionDetailsModal = ({ open, onClose, session }) => {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('vi-VN');
    };

    const formatTime = (timeStr) => {
        const date = new Date(timeStr);
        return date.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleDeleteUser = async (email) => {
        try {
            const response = await SessionService.deleteUserOutOfSession(session.id, email);
            if (response.status === 200) {
                toast.success('Xóa người dùng thành công');
            } else if (response.code === 403) {
                toast.error('Bạn không phải là người tạo phiên công chứng');
            }
        } catch (error) {
            toast.error('Xóa người dùng khỏi thất bại');
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <Box
                sx={{
                    width: { xs: '90vw', sm: '70vw', md: '60vw' },
                    p: 4,
                    backgroundColor: white[50],
                    borderRadius: 3,
                    overflowY: 'auto',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                        backgroundColor: gray[100],
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: gray[300],
                        borderRadius: '2px',
                    }
                }}
            >
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
                        Chi tiết phiên công chứng
                    </Typography>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>

                {/* Notary Session Name */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: black[900], mb: 2 }}>Tên phiên công chứng</Typography>
                    <Typography
                        sx={{
                            borderRadius: 1,
                            backgroundColor: gray[50],
                            padding: 2,
                            fontSize: 15,
                            fontWeight: 500,
                            color: black[900],
                            border: `1px solid ${gray[200]}`,
                        }}
                    >
                        {session.sessionName}
                    </Typography>
                </Box>

                {/* Details Section */}
                <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                    <Box sx={{ flex: '1' }}>
                        <Typography variant="body2" sx={{ color: black[900], mb: 2 }}>Lĩnh vực công chứng</Typography>
                        <Typography
                            sx={{
                                borderRadius: 1,
                                backgroundColor: gray[50],
                                padding: 2,
                                fontSize: 15,
                                fontWeight: 500,
                                color: black[900],
                                border: `1px solid ${gray[200]}`,
                            }}
                        >
                            {session.notaryField.name}
                        </Typography>
                    </Box>

                    <Box sx={{ flex: '1' }}>
                        <Typography variant="body2" sx={{ color: black[900], mb: 2 }}>Dịch vụ công chứng</Typography>
                        <Typography
                            sx={{
                                borderRadius: 1,
                                backgroundColor: gray[50],
                                padding: 2,
                                fontSize: 15,
                                fontWeight: 500,
                                color: black[900],
                                border: `1px solid ${gray[200]}`,
                            }}
                        >
                            {session.notaryService.name}
                        </Typography>
                    </Box>
                </Box>

                {/* Duration */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: black[900], mb: 2 }}>Thời gian diễn ra phiên công chứng</Typography>
                    <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    borderRadius: 1,
                                    backgroundColor: gray[50],
                                    padding: 2,
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: black[900],
                                    border: `1px solid ${gray[200]}`,
                                }}
                            >
                                {formatDate(session.startDate)} - {formatTime(session.startDate)}
                            </Typography>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    borderRadius: 1,
                                    backgroundColor: gray[50],
                                    padding: 2,
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: black[900],
                                    border: `1px solid ${gray[200]}`,
                                }}
                            >
                                {formatDate(session.endDate)} - {formatTime(session.endDate)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Guests */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                    <AvatarWithCloseButton
                        key={session.creator.email}
                        email={session.creator.email}
                        onHideRemoveIcon={true}
                        name={session.creator.name}
                        isCreator={true}
                    />
                    {session.users.map((guest, index) => (
                        <AvatarWithCloseButton
                            key={index}
                            email={guest.email}
                            onRemove={() => handleDeleteUser(guest.email)}
                        />
                    ))}
                </Box>

                {/* Actions
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: 120,
                            fontSize: 14,
                            fontWeight: 600,
                            textTransform: 'none',
                            border: `1px solid ${black[100]}`,
                            color: black[600],
                        }}
                        onClick={onClose}
                    >
                        Đóng
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            minWidth: 120,
                            fontSize: 14,
                            fontWeight: 600,
                            textTransform: 'none',
                        }}
                    >
                        Hủy phiên công chứng
                    </Button>
                </Box> */}
            </Box>
        </Modal>
    );
};

export default NotarizationSessionDetailsModal;
