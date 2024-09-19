import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { ArrowCircleRightRounded } from '@mui/icons-material';
import { dark, primary, white } from "../../config/theme/themePrimitives"

const DocumentSupport = () => {
    const DocumentData = [
        "Giấy tờ pháp lý",
        "Hợp đồng mua bán",
        "Giấy chứng nhận quyền sở hữu",
        "Thỏa thuận hợp đồng",
    ];

    return (
        <Container
            sx={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                pt: 5,
                pb: 15,
                width: "100%",
            }}
        >
            <Box
                textAlign="center"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                }}
            >
                <Typography variant="h3" fontWeight="bold" color={dark[500]}>
                    Hỗ trợ các loại văn bản
                </Typography>
            </Box>
            <Typography
                variant="body1"
                textAlign="center"
                sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%", color: dark[500] }}
            >
                Chúng tôi cung cấp dịch vụ công chứng cho nhiều loại văn bản khác nhau, giúp bạn hoàn tất thủ tục nhanh chóng và tiện lợi. Chúng tôi đảm bảo tính pháp lý, bảo mật và tiện dụng, giúp bạn tiết kiệm thời gian và công sức trong mọi giao dịch.
            </Typography>
            <Box
                display="flex"
                container
                sx={{ mt: 5, justifyContent: "center" }}
                gap={4}
            >
                {DocumentData.map((text, index) => (
                    <Box item xs={3} key={index}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="h6" color={dark[500]} mr={1}>{text}</Typography>
                            <IconButton>
                                <ArrowCircleRightRounded
                                    sx={{
                                        color: primary[500], backgroundColor: white[50], borderRadius: '50%', transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.2)' }
                                    }}
                                    fontSize="medium"
                                />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default DocumentSupport;
