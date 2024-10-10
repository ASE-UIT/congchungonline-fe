import React from 'react';
import { Avatar, Typography } from '@mui/material';

const AvatarIcon = ({ email }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginRight: '8px' }}>
      <Avatar sx={{ width: 24, height: 24 }}>
        <Typography sx={{ fontSize: 10 }}>{email.charAt(0).toUpperCase()}</Typography>
      </Avatar>
    </div>
  );
};

export default AvatarIcon;
