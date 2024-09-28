import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grow,
    Fade,
    Link

} from "@mui/material";
import { black, white } from "../../config/theme/themePrimitives";
import { red, green, grey } from "@mui/material/colors";

import ErrorIcon from '@mui/icons-material/Error';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
{/* Status Box for returning result */ }

const StatusBox = ({status, displayText}) => {
    // Status of searching for result | displayText = the profileID, used for displaying
    // This one below return the icon + animationtype + message for each corresponding status | More status could be add here
    const statusConfig = {
        notFound: {
            icon: <ErrorIcon sx={{ position: "absolute", left: "25px", color: red[500] }} />,
            message: <>Không tìm thấy hồ sơ có số: <strong>#{displayText}</strong></>,
            animationType: "grow",
        },
        searching: {
            icon: <RefreshIcon sx={{ 
                animation: "rotate 2s linear infinite",  
                color: grey[400], 
                position: "absolute", 
                left: "25px",
                "@keyframes rotate": { // Định nghĩa keyframes xoay
                            from: { transform: "rotate(0deg)" },
                            to: { transform: "rotate(360deg)" },
                        },
            
            }} />,
                
            message: <>Đang tìm hồ sơ có số: <strong>#{displayText}</strong></>,
            animationType: "fade",
        },
        found: {
            icon: <CheckCircleIcon sx={{ position: "absolute", left: "25px", color: green[500] }} />,
            message: <>Đã tìm thấy hồ sơ có số: <strong>#{displayText}</strong></>,
            animationType: "grow",
        },
    };

    // Set current status according to 
    const currentStatus = status.notFound ? statusConfig.notFound
        : status.searching ? statusConfig.searching
        : status.found ? statusConfig.found
        : null;
    if (!currentStatus) return null;

    const { icon, message, animationType } = currentStatus;
    const AnimationComponent = animationType === 'grow' ? Grow : Fade;

    
    return (
        <AnimationComponent in={true} timeout={400}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                    height: "auto",
                    flexWrap: "wrap",
                    flexGrow: 1,
                    minWidth: "350px",
                    p: 4,
                    alignItems: "center",
                    justifyContent: "space-around",
                    position: "absolute",
                    my: -4,
                    color: "primary.main",
                    background: white[50],
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s",
                    borderRadius: "8px",
                }}>

                {icon}

                <Typography sx={{ position: "absolute", left: "75px", color: black[900] }}>
                    {message}
                </Typography>

                {status.found && (
                    <Link
                        sx={{
                            position: { xs: "relative", md: "absolute" },
                            left: { xs: "initial", md: "initial" },
                            right: { xs: "initial", md: "50px" },
                            marginTop: { xs: "100px", md: "0" },
                            whiteSpace: "nowrap",
                        }}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("Đây là giả lập :D"); // Simulate showing detail result
                        }}
                    >
                        Xem chi tiết
                    </Link>
                )}


            </Box>
        </AnimationComponent>
    );
};

export default StatusBox;