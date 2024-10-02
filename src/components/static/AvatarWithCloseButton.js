import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { black, white } from '../../config/theme/themePrimitives';

const AvatarWithCloseButton = ({ email, onRemove }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginRight: '8px' }}>
      <Avatar>{email.charAt(0).toUpperCase()}</Avatar>
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
    </div>
  );
};

export default AvatarWithCloseButton;
