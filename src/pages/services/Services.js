import React, { useState } from "react";
import {
    Typography,
    Container,
    Box,
    TextField,
    Card,
    CardContent,
    CardActions,
    Link,
} from "@mui/material";
import { dark, primary } from "../../config/theme/themePrimitives"
import Contact from "../../components/services/Contact"
import Guide from "../../components/services/Guide"
const Services = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const services = [
        {
            title: "Dịch vụ vay tài sản",
            description: "Dịch vụ vay tài sản của chúng tôi cho phép bạn vay tiền để mua tài sản mới. Chúng tôi cung cấp các điều kiện vay linh hoạt và lãi suất cạnh tranh.",
            href: "/"
        },
        {
            title: "Dịch vụ mượn tài sản",
            description: "Dịch vụ mượn tài sản của chúng tôi cho phép bạn mượn tài sản để sử dụng trong một thời gian ngắn. Chúng tôi có một danh mục tài sản rộng lớn để bạn lựa chọn.",
            href: "/"
        },
        {
            title: "Dịch vụ cho thuê tài sản",
            description: "Dịch vụ cho thuê tài sản của chúng tôi cho phép bạn thuê tài sản trong một thời gian dài. Chúng tôi có các điều kiện thuê linh hoạt và giá cả cạnh tranh.",
            href: "/"
        },
        {
            title: "Dịch vụ cầm cố tài sản",
            description: "Dịch vụ cầm cố tài sản của chúng tôi cho phép bạn cầm cố tài sản để vay tiền. Chúng tôi có các chuyên gia để đánh giá giá trị tài sản của bạn.",
            href: "/"
        },
        {
            title: "Dịch vụ mua bán tài sản",
            description: "Dịch vụ mua bán tài sản của chúng tôi cho phép bạn mua và bán tài sản một cách an toàn và minh bạch. Chúng tôi có các chuyên gia để hỗ trợ bạn trong suốt quá trình.",
            href: "/"
        }
    ];

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = services.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filtered);
    }

    return (
        <Container>
            <Box sx={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box height="fit-content" width="fit-content">
                    <Typography
                        variant="h2"
                        textAlign="center"
                        color={dark[500]}
                        sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%" }}
                        height="fit-content"
                        width="fit-content"
                    >
                        Dịch vụ công chứng
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        color={dark[500]}
                        sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%" }}
                        height="fit-content"
                        width="fit-content"
                    >
                        Dịch vụ công chứng của chúng tôi được thiết kế để mang lại sự tiện lợi và an toàn cho các giao dịch của bạn. Với đội ngũ chuyên nghiệp và quy trình minh bạch, chúng tôi cam kết giúp bạn hoàn thành các thủ tục công chứng một cách nhanh chóng và hiệu quả.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ textAlign: "center" }}>
                <TextField
                    variant="outlined"
                    placeholder="Tìm kiếm..."
                    fullWidth
                    sx={{ maxWidth: 600, mx: "auto", mt: 5 }}
                    size="small"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, py: 15, justifyContent: 'left' }}>
                {filteredData.length > 0 ? filteredData.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexBasis: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.33% - 24px)' },
                            mb: 3,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Link underline="none" href={service.href} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    "&:hover": {
                                        backgroundColor: dark[50]
                                    },
                                    py: 1
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: primary[500],
                                        }}
                                    >
                                        Tạo hồ sơ
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Link>
                    </Box>
                )) : services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexBasis: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.33% - 24px)' },
                            mb: 3,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Link underline="none" href={service.href} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    "&:hover": {
                                        backgroundColor: dark[50],
                                    },
                                    py: 1
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            px: 1,
                                            color: primary[500],
                                        }}
                                    >
                                        Tạo hồ sơ
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Link>
                    </Box>
                ))}
            </Box>


            {/* Guide Section */}
            <Guide />

            {/* Contact Section */}
            <Contact />
        </Container>
    );
};

export default Services;