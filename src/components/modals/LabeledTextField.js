import { Box, IconButton, Typography, TextField, InputAdornment, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { black } from '../../config/theme/themePrimitives';

const LabeledTextField = ({ label, adornment = null, value = '', onChange, options = [] }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleSelectOption = (option) => {
        onChange(option);
        handleCloseMenu();
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                gap: '10px',
            }}
        >
            <Typography variant="subtitle2" color={black[900]} fontWeight={500}>
                {label}
            </Typography>
            <TextField
                variant="outlined"
                size="small"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: black[200],
                        },
                        "&:hover fieldset": {
                            borderColor: black[200],
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: black[500],
                            borderWidth: 1,
                        },
                    },
                }}
                InputProps={{
                    endAdornment: adornment ? (
                        <>
                            <InputAdornment position="end">
                                <IconButton sx={{ padding: 0 }} disableRipple onClick={handleOpenMenu}>
                                    {adornment}
                                </IconButton>
                            </InputAdornment>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                            >
                                {options.map((option, index) => (
                                    <MenuItem key={index} onClick={() => handleSelectOption(option.label)}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : null,
                }}
            />
        </Box>
    );
};

export default LabeledTextField;