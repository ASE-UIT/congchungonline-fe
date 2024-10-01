import React, { useTransition } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dark } from "../../config/theme/themePrimitives";
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
                justifyContent: "top",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <img src={svg.default} alt="404" width={'40%'} style={{ marginTop: 100 }} />

            <Typography variant="h4" marginTop={8} color={dark[500]}>
                Trang bạn tìm kiếm không tồn tại. Trở về trang chủ!
            </Typography>

            <Button
                variant="contained"
                color="primary"
                sx={{
                    mt: 4,
                    borderRadius: 1,
                    px: 4,
                    py: 1,
                    textTransform: "inherit",
                    fontSize: 20,
                    fontWeight: 600,
                }}
                onClick={handleNavigateHome}
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Trở về trang chủ"}
            </Button>
        </Box>
    );
};

export default NotFound;
