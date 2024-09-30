import {
  AddCircleOutline,
  DocumentScanner,
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  Logout,
  Search,
  Settings,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { dark, primary, white } from '../config/theme/themePrimitives';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../stores/actions/authAction';
import YesNoModal from './modals/YesNoModal';

const MENUS = {
  SETTINGS: 'setting',
  LOGOUT: 'logout',
  PROFILE: 'profile',
};

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const handleYes = () => {
    setOpen(false);
    handleLogout();
  };

  const handleNo = () => {
    setOpen(false);
  };

  useEffect(() => {
    const savedState = localStorage.getItem('openSideBar');
    if (savedState !== null) {
      setOpenSideBar(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('openSideBar', JSON.stringify(openSideBar));
  }, [openSideBar]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setActiveMenu(null);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setExpandedIndex(null);
  };

  const handleLogout = async () => {
    try {
      // Dispatch the logout action
      const resultAction = await dispatch(userLogout()).unwrap();

      if (resultAction) {
        navigate('/signin');
      }
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const screens = [
    {
      title: 'Tạo hồ sơ',
      subtitle: ['Tặng cho tài sản', 'Thuê bất động sản', 'Phân chia tài sản'],
      icon: <AddCircleOutline />,
    },
    {
      title: 'Tra cứu',
      subtitle: ['Tặng cho tài sản', 'Thuê bất động sản', 'Phân chia tài sản'],
      icon: <Search />,
    },
    {
      title: 'Lịch sử',
      subtitle: ['Tặng cho tài sản', 'Thuê bất động sản', 'Phân chia tài sản'],
      icon: <DocumentScanner />,
    },
  ];

  const commonListItemStyles = {
    mb: 1,
    justifyContent: openSideBar ? 'flex-start' : 'center',
    borderRadius: '8px',
    padding: openSideBar ? '8px 16px' : '8px',
    '&:hover': {
      backgroundColor: primary[50],
    },
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'95vh'}
      padding={2}
      bgcolor={'white'}
      position={'sticky'}
      top={0}
      sx={{
        width: openSideBar ? '250px' : '70px',
        transition: 'width 0.3s ease-in-out',
        overflow: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Box display={'flex'} alignItems={'center'} mb={2} justifyContent={openSideBar ? 'space-between' : 'center'}>
        {openSideBar && (
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2, color: dark[700] }}>
            .natonity
          </Typography>
        )}
        <IconButton
          onClick={() => setOpenSideBar(!openSideBar)}
          sx={{
            color: dark[500],
            transition: 'background-color 0.3s ease',
            fontSize: 24,
            '&:hover': {
              backgroundColor: primary[500],
              color: white[50],
            },
          }}
        >
          {openSideBar ? <KeyboardDoubleArrowLeft fontSize="inherit" /> : <KeyboardDoubleArrowRight fontSize="inherit" />}
        </IconButton>
      </Box>

      <Box flex={1}>
        <List>
          {screens.map((screen, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                disablePadding
                onClick={() => toggleExpand(index)}
                sx={{
                  ...commonListItemStyles,
                  backgroundColor: expandedIndex === index ? primary[50] : white[50],
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openSideBar ? 2 : 0,
                    justifyContent: 'center',
                    color: expandedIndex === index ? primary[500] : dark[500],
                    fontSize: 24,
                  }}
                >
                  {screen.icon}
                </ListItemIcon>
                {openSideBar && (
                  <>
                    <ListItemText
                      primary={screen.title}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '16px',
                          color: expandedIndex === index ? primary[500] : dark[500],
                        },
                      }}
                    />
                    <ListItemIcon
                      sx={{
                        color: expandedIndex === index ? primary[500] : dark[500],
                        fontSize: 24,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}
                    >
                      {expandedIndex === index ? (
                        <KeyboardArrowUp fontSize="inherit" />
                      ) : (
                        <KeyboardArrowDown fontSize="inherit" />
                      )}
                    </ListItemIcon>
                  </>
                )}
              </ListItem>

              <Collapse in={openSideBar && expandedIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {screen.subtitle.map((subItem, subIndex) => (
                    <ListItemButton
                      key={subIndex}
                      sx={{
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: primary[50] },
                      }}
                      disableTouchRipple
                    >
                      <ListItemText
                        primary={subItem}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '14px',
                            color: dark[400],
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />
      </Box>

      <Divider sx={{ my: 2 }} />

      <List>
        <ListItem
          button
          disablePadding
          sx={{
            ...commonListItemStyles,
            backgroundColor: activeMenu === MENUS.SETTINGS ? primary[50] : white[50],
          }}
          onClick={() => toggleMenu(MENUS.SETTINGS)}
        >
          <ListItemIcon
            sx={{
              color: activeMenu === MENUS.SETTINGS ? primary[500] : dark[500],
              justifyContent: 'center',
            }}
          >
            <Settings />
          </ListItemIcon>
          {openSideBar && (
            <ListItemText
              primary="Cài đặt"
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '16px',
                  color: activeMenu === MENUS.SETTINGS ? primary[500] : dark[500],
                },
              }}
            />
          )}
        </ListItem>

        <ListItem
          button
          disablePadding
          sx={{
            ...commonListItemStyles,
            backgroundColor: activeMenu === MENUS.LOGOUT ? primary[50] : white[50],
          }}
          onClick={() => setOpen(true)}
        >
          <ListItemIcon sx={{ color: 'error.main', justifyContent: 'center' }}>
            <Logout />
          </ListItemIcon>
          {openSideBar && (
            <ListItemText
              primary="Đăng xuất"
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '16px',
                  color: 'error.main',
                },
              }}
            />
          )}
        </ListItem>

        <ListItem
          button
          disablePadding
          sx={{
            ...commonListItemStyles,
            backgroundColor: activeMenu === MENUS.PROFILE ? primary[50] : white[50],
          }}
          onClick={() => toggleMenu(MENUS.PROFILE)}
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <Avatar />
          </ListItemIcon>
          {openSideBar && (
            <ListItemText
              primary={`${userInfo?.name}` || 'Undefined'}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '16px',
                  color: dark[500],
                  fontWeight: 600,
                },
              }}
            />
          )}
        </ListItem>
      </List>
      <YesNoModal
        title="Đăng xuất"
        content="Bạn có chắc chắn muốn đăng xuất?"
        open={open}
        setOpen={setOpen}
        onYes={handleYes}
        onNo={handleNo}
      />
    </Box>
  );
};

export default Sidebar;
