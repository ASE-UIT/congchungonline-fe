import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { dark, white, primary } from '../../config/theme/themePrimitives';

const YesNoModal = ({ title, content, open, setOpen, onYes, onNo }) => {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="yes-no-modal-title"
            aria-describedby="yes-no-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    borderRadius: '8px',
                    paddingX: 4,
                    paddingY: 3,
                    backgroundColor: white[50],
                    border: 'none',
                }}
            >
                <Typography id="yes-no-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="yes-no-modal-description" sx={{ mt: 1 }}>
                    {content}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'right', mt: 5, gap: 2 }}>
                    <Button variant="contained" onClick={onYes} sx={{ backgroundColor: primary[500] }}>
                        <Typography textTransform={'initial'} color={white[50]}>
                            Có
                        </Typography>
                    </Button>
                    <Button variant="contained" onClick={onNo} sx={{ backgroundColor: dark[500] }}>
                        <Typography textTransform={'initial'} color={white[50]}>
                            Không
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default YesNoModal;
