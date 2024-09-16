import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const Logo = styled(Box)(({ theme }) => ({
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
}));

const Header = () => {
    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <Logo />
                <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{ flexGrow: 1, ml: 2 }}
                >
                    CongChungOnline
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ mx: 2 }}>
                    Dịch vụ công chứng
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ mx: 2 }}>
                    Tra cứu hồ sơ công chứng
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ mx: 2 }}>
                    Văn phòng công chứng
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ mx: 2 }}>
                    Đăng ký VPCC
                </Typography>
                <Typography variant="body2" color="primary" sx={{ mx: 2 }}>
                    Hướng dẫn
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                    <Button
                        variant="contained"
                        backgroundColor="primary[main]"
                        color="primary"
                        sx={{ borderRadius: "10px 0 0 10px" }}
                        href="/signin"
                    >
                        Đăng nhập
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: "0 10px 10px 0" }}
                        href="/signup"
                    >
                        Đăng ký
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
