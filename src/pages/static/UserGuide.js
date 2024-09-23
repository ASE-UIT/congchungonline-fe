import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { dark } from '../../config/theme/themePrimitives'
import StepCard from '../../components/static/StepCard'
import VideoCard from '../../components/static/VideoCard'
import FooterCard from '../../components/static/FooterCard'

const UserGuide = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const steps = [
        {
            title: "Đăng ký tài khoản",
            description: "Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.",
            image: "howitworkscard.png",
            notice: 'Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam.',
        },
        {
            title: "Xác minh danh tính",
            description: "Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.",
            image: "howitworkscard.png",
            notice: 'Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam.',
        },
        {
            title: "Lựa chọn dịch vụ công chứng",
            description: "Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.",
            image: "howitworkscard.png",
            notice: 'Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam.',
        },
        {
            title: "Cung cấp tài liệu cần công chứng",
            description: "Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.",
            image: "howitworkscard.png",
            notice: 'Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam.',
        },
        {
            title: "Thanh toán và nhận tài liệu đã được công chứng",
            description: "Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.",
            image: "howitworkscard.png",
            notice: 'Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam.',
        },
    ];

    return (
        <Box>
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                }}
            >
                <Box height="fit-content" width="fit-content" sx={{ px: 20 }}>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color={dark[500]}
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            width: "100%",
                            fontWeight: 400,
                        }}
                        height="fit-content"
                        width="fit-content"
                    >
                        HƯỚNG DẪN
                    </Typography>
                    <Typography
                        variant="h2"
                        textAlign="center"
                        color={dark[500]}
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            width: "100%",
                            mt: '20px',
                            fontWeight: 700,
                        }}
                        height="fit-content"
                        width="fit-content"
                    >
                        5 bước để sử dụng dịch vụ<br />công chứng trực tuyến
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color={dark[500]}
                        sx={{ mt: '15px', width: "100%", maxWidth: 900, mx: "auto" }}
                        height="fit-content"
                        width="fit-content"
                    >
                        Công chứng tài liệu trở nên dễ dàng hơn khi sử dụng dịch vụ công chứng trực tuyến của chúng tôi. Hãy thực hiện 5 bước đơn giản sau để hoàn tất thủ tục công chứng một cách nhanh chóng và tiện lợi.
                    </Typography>
                </Box>
            </Box>
            {/* Steps */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                    gap: '100px',
                }}
            >
                {steps.map((step, index) => (
                    <StepCard key={index} index={index} step={step} expandedIndex={expandedIndex} handleExpandClick={handleExpandClick} />
                ))}
                {/* Video Section */}
                <VideoCard />
            </Box>
            {/* Footer Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                    gap: '100px',
                }}
            >
                <FooterCard />
            </Box>
        </Box>
    )
}

export default UserGuide;