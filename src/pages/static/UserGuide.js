import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { dark, primary } from '../../config/theme/themePrimitives'
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
            description: `Để sử dụng dịch vụ công chứng trực tuyến, bạn cần đăng nhập vào tài khoản của mình trên <a href="https://github.com/sloweyyy" target="_blank" rel="noopener noreferrer" style="color: ${primary[500]}; text-decoration: none;">congchungtructuyen.com</a><br/><br/>Bạn chưa có tài khoản? Đăng ký <a href="https://github.com/sloweyyy" target="_blank" rel="noopener noreferrer" style="color: ${primary[500]}; text-decoration: none;">tại đây</a>.`,
            image: "howitworks-signup.png",
            notice: 'Hãy chắc chắn rằng thông tin đăng ký của bạn là chính xác và đầy đủ.',
        },
        {
            title: "Xác minh danh tính",
            description: "Để đảm bảo tính bảo mật và hợp pháp của dịch vụ, bạn cần xác minh danh tính của mình bằng cách cung cấp các giấy tờ tùy thân như CMND/CCCD hoặc hộ chiếu. Quá trình xác minh sẽ được thực hiện nhanh chóng và bảo mật.",
            image: "howitworks-identify.png",
            notice: 'Hãy chắc chắn rằng các giấy tờ của bạn còn hiệu lực và thông tin rõ ràng.',
        },
        {
            title: "Lựa chọn dịch vụ công chứng",
            description: "Chúng tôi cung cấp nhiều loại dịch vụ công chứng khác nhau như công chứng hợp đồng, công chứng di chúc, công chứng giấy tờ nhà đất. Bạn chỉ cần lựa chọn dịch vụ phù hợp với nhu cầu của mình.",
            image: "howitworks-services.png",
            notice: 'Nếu bạn không chắc chắn về loại dịch vụ cần chọn, hãy liên hệ với chúng tôi để được tư vấn.',
        },
        {
            title: "Cung cấp tài liệu cần công chứng",
            description: "Bạn cần tải lên các tài liệu cần công chứng lên hệ thống của chúng tôi. Đảm bảo rằng các tài liệu được scan rõ ràng và đầy đủ các trang. Chúng tôi sẽ kiểm tra và xác nhận lại với bạn nếu có bất kỳ vấn đề gì.",
            image: "howitworks-necessarydocs.png",
            notice: 'Các tài liệu cần được chuẩn bị kỹ lưỡng để tránh việc phải bổ sung thêm sau này.',
        },
        {
            title: "Thanh toán và nhận tài liệu đã được công chứng",
            description: "Sau khi hoàn tất các bước trên, bạn chỉ cần thanh toán phí dịch vụ và chờ nhận tài liệu đã được công chứng. Chúng tôi sẽ gửi tài liệu qua email hoặc chuyển phát nhanh đến địa chỉ của bạn.",
            image: "howtiworks-finalstep.png",
            notice: 'Kiểm tra kỹ thông tin trước khi thanh toán để đảm bảo không có sai sót.',
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