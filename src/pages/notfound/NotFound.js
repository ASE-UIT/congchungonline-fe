import React, { useTransition } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const svg = require("../../assets/vectors/404.svg");

const NotFound = () => {
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        startTransition(() => {
            navigate("/");
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <img src={svg.default} alt="404" style={{ width: "40%" }} />

            <Typography variant="body1" color="text.secondary">
                Trang bạn đang tìm kiếm không tồn tại.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleNavigateHome}
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Trở về trang chủ"}
            </Button>
        </Box>
    );
};

export default NotFound;
