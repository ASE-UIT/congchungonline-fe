import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { primary, dark } from '../../config/theme/themePrimitives';

const SidebarItem = ({ type, icon, title, selectedMenu, openSideBar, onClick, textColor = dark[500] }) => {
  const itemStyles = {
    mb: 1,
    justifyContent: openSideBar ? 'flex-start' : 'center',
    borderRadius: '8px',
    padding: openSideBar ? '0.5rem 1rem' : '0.5rem',
    '&:hover': {
      backgroundColor: primary[50],
    },
  };

  return (
    <ListItem disablePadding onClick={onClick} sx={itemStyles}>
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: openSideBar ? 2 : 0,
          justifyContent: 'center',
          fontSize: 20,
          color: selectedMenu === type ? primary[500] : textColor,
        }}
      >
        {icon}
      </ListItemIcon>
      {openSideBar && (
        <ListItemText
          primary={title}
          sx={{
            '& .MuiListItemText-primary': {
              fontSize: '1rem',
              whiteSpace: 'nowrap',
              color: selectedMenu === type ? primary[500] : textColor,
              fontWeight: selectedMenu === type ? 600 : 400,
            },
          }}
        />
      )}
    </ListItem>
  );
};

export default SidebarItem;
