import React from "react";
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

    const services = [
        {
            title: "Vay - Mượn tài sản",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            href: "/"
        },
        {
            title: "Vay - Mượn tài sản",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            href: "/"
        },
        {
            title: "Vay - Mượn tài sản",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            href: "/"
        },
        {
            title: "Vay - Mượn tài sản",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            href: "/"
        },
        {
            title: "Vay - Mượn tài sản",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            href: "/"
        }
    ];



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
                />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, py: 10, justifyContent: 'left' }}>
                {services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexBasis: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.33% - 24px)' },
                            mb: 3,
                        }}
                    >
                        <Link underline="none" href={service.href}>
                            <Card
                                sx={{
                                    "&:hover": {
                                        backgroundColor: dark[50],
                                    }
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
                                            color: primary[500]
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