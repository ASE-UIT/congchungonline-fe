import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from '@mui/icons-material';
import { primary } from '../../config/theme/themePrimitives';
import { dark } from '../../config/theme/themePrimitives';
const Usages = () => {
    const [currentCard, setCurrentCard] = useState(1);

    const UsagesData = [
        {
            image: require("../../assets/images/SaveTime.png"),
            title: "Tiết kiệm thời gian",
            content: "Bạn có thể thực hiện các thủ tục công chứng ngay tại nhà, không cần phải xếp hàng hay đến cơ quan công chứng trực tiếp.",
        },
        {
            image: require("../../assets/images/FastConvenient.png"),
            title: "Nhanh chóng và tiện lợi",
            content: "Hệ thống trực tuyến cho phép bạn hoàn tất giao dịch chỉ với vài thao tác đơn giản, mọi quy trình đều được tối ưu hóa.",
        },
        {
            image: require("../../assets/images/TransparencySafety.png"),
            title: "Minh bạch và an toàn",
            content: "Tất cả các giao dịch được thực hiện đảm bảo tính pháp lý, an toàn thông tin, và rõ ràng trong từng bước.",
        },
    ];

    const handlePrevCard = () => {
        setCurrentCard((prev) => (prev === 0 ? UsagesData.length - 1 : prev - 1));
    };

    const handleNextCard = () => {
        setCurrentCard((prev) => (prev === UsagesData.length - 1 ? 0 : prev + 1));
    };

    const getCardPosition = (index) => {
        const totalCards = UsagesData.length;
        const offset = index - currentCard;

        if (offset === 0) return 'center';
        if (offset === -1 || offset === totalCards - 1) return 'left';
        if (offset === 1 || offset === -totalCards + 1) return 'right';
        return 'hidden';
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
            <Box sx={{ position: 'relative', width: '100%', height: 450 }}>
                {UsagesData.map((use, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: getCardPosition(index) === 'center' ? 'translateX(-50%) scale(1)' :
                                getCardPosition(index) === 'left' ? 'translateX(-150%) scale(0.8) rotateY(20deg)' :
                                    getCardPosition(index) === 'right' ? 'translateX(50%) scale(0.8) rotateY(-20deg)' : 'translateX(-50%) scale(0)',
                            opacity: getCardPosition(index) === 'center' ? 1 : 0.5,
                            transition: 'transform 0.5s ease, opacity 0.5s ease',
                            width: '35%',
                        }}
                    >
                        <Card sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={use.image}
                                alt="Rectangle"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color={dark[500]}>
                                    {use.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {use.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
            <Box textAlign="center" mt={7}>
                <IconButton
                    onClick={handlePrevCard}
                    sx={{
                        color: primary[500], transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.2)' }
                    }}
                >
                    <ArrowCircleLeftRounded fontSize="large" />
                </IconButton>
                <IconButton onClick={handleNextCard} sx={{
                    color: primary[500], transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.2)' }
                }}>
                    <ArrowCircleRightRounded fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Usages;
