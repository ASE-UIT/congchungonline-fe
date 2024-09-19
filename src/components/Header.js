import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/system";
import { dark, white } from "../config/theme/themePrimitives";
import Link from '@mui/material/Link';

const Logo = styled(Box)(({ theme }) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
}));

const Header = () => {
    const [elevated, setElevated] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMobile = useMediaQuery("(max-width:1150px)");

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setElevated(true);
        } else {
            setElevated(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const services = [
        { name: "Dịch vụ công chứng", path: "/" },
        { name: "Tra cứu hồ sơ công chứng", path: "/" },
        { name: "Văn phòng công chứng", path: "/" },
        { name: "Đăng ký VPCC", path: "/" }
    ];

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: white[50],
                boxShadow: elevated
                    ? "0px 4px 20px rgba(0, 0, 0, 0.1)"
                    : "none",
                transition: "box-shadow 0.3s",
                height: "60px",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Logo />
                    <Typography
                        variant="h6"
                        color={dark[500]}
                        sx={{ ml: 2 }}
                    >
                        ratonity
                    </Typography>
                </Box>

                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="primary"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {services.map((service) => (
                                <Link href={service.path} underline="none" color={dark[500]}>
                                    <MenuItem
                                        key={service.name}
                                        onClick={handleMenuClose}
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {service.name}
                                    </MenuItem>
                                </Link>
                            ))}
                            <Link href="/" underline="none" color={dark[500]}>
                                <MenuItem
                                    onClick={handleMenuClose}
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                    }}
                                >
                                    Hướng dẫn
                                </MenuItem>
                            </Link>

                            <MenuItem
                                onClick={() => {
                                    window.location.href = '/signin';
                                }}
                                sx={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: (theme) => theme.palette.primary.main,
                                }}
                            >
                                Đăng nhập
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    window.location.href = '/signup';
                                }}
                                sx={{
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: (theme) => theme.palette.primary.main,
                                }}
                            >
                                Đăng ký
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {services.map((service) => (
                            <Link href={service.path} underline="none">
                                <Typography
                                    key={service.name}
                                    variant="body4"
                                    color={dark[500]}
                                    sx={{
                                        mx: 1,
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    {service.name}
                                </Typography>
                            </Link>
                        ))}
                        <Link href="/" underline="none">
                            <Typography
                                variant="body4"
                                color="primary"
                                sx={{
                                    ml: 1,
                                    mr: 4,
                                    fontWeight: "600",
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                Hướng dẫn
                            </Typography>
                        </Link>
                        <Box sx={{ display: "flex", gap: 0.2 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: "8px 0 0 8px",
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    width: "100px",
                                }}
                                href="/signin"
                            >
                                Đăng nhập
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: "0 8px 8px 0",
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    width: "100px"
                                }}
                                href="/signup"
                            >
                                Đăng ký
                            </Button>
                        </Box>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
