import React, { useState } from 'react';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { black, gray, white, primary } from '../../config/theme/themePrimitives';

const AvatarWithCloseButton = ({ email, onRemove, name, isCreator, onHideRemoveIcon }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        height: 48,
        gap: 1,
      }}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {/* Avatar */}
      <Box style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar>{email.charAt(0).toUpperCase()}</Avatar>
        {!onHideRemoveIcon && (
          <IconButton
            onClick={onRemove}
            sx={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              padding: '2px',
              backgroundColor: white[50],
              '&:hover': {
                backgroundColor: black[300],
              },
              border: `1px solid ${black[50]}`,
            }}
          >
            <CloseIcon
              fontSize="small"
              sx={{
                fontSize: 12,
                color: black[300],
                '&:hover': {
                  color: white[50],
                },
              }}
            />
          </IconButton>
        )}
      </Box>
      {/* Email and Name */}
      <Box
        sx={{
          overflow: 'hidden',
          maxWidth: onHover ? 400 : 0,
          transition: 'max-width 0.4s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: gray[900],
            opacity: onHover ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
          }}
        >
          {email}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: gray[400],
              opacity: onHover ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: primary[500],
              ml: 2,
              opacity: onHover ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out',
            }}
          >
            {isCreator ? 'Chủ phiên' : 'Khách mời'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AvatarWithCloseButton;
