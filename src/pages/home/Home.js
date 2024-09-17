import {
    ArrowForwardRounded,
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Typography,
    Tooltip
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Header from "../../components/Header";
import getAuthTheme from "../../config/theme/getAuthTheme";
import AssistantIcon from "@mui/icons-material/Assistant";
import PhoneIcon from "@mui/icons-material/Phone";
import Frame1 from "../../assets/vectors/Frame-1.svg";
import Frame2 from "../../assets/vectors/Frame-2.svg";
import Chatbox from "../../components/Chatbox";
import FAQSection from "../../components/home/FAQ";
import Footer from "../../components/Footer";
import Reviews from "../../components/home/Reviews";

const Home = () => {
    const [mode, setMode] = React.useState("light");
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const [showChatbox, setShowChatbox] = useState(false);
    const defaultTheme = createTheme({ palette: { mode } });
    const HomeTheme = createTheme(getAuthTheme(mode));
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleChatboxClick = () => {
        setShowChatbox(true);
    };

    return (
        <ThemeProvider theme={showCustomTheme ? HomeTheme : defaultTheme}>
            <Header />

            <Box
                sx={{
                    position: "absolute",
                    width: "50vw",
                    height: "50vw",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    filter: "blur(200px)",
                    background:
                        "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(255,255,255) 30%, rgb(208,0,43) 100%)",
                    zIndex: -1,
                }}
            />

            <Container sx={{ pt: 10, pb: 5, height: "100vh", width: "100%" }}>
                <Box
                    textAlign="center"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%",
                    }}
                >
                    <Typography variant="h6">CÔNG CHỨNG QUỐC GIA</Typography>
                    <Typography variant="h1" fontWeight="bold">
                        Công chứng trực tuyến
                    </Typography>
                </Box>
                <Box textAlign="center" mt={3}>
                    <Typography variant="subtitle1" width="100%">
                        Công chứng trực tuyến nhanh chóng - an toàn - bảo mật.
                        <br />
                        Chúng tôi sẵn sàng phục vụ cho dù bạn đang ở đâu.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 8,
                            borderRadius: 1,
                            px: 4,
                            py: 1,
                            textTransform: "inherit",
                            fontSize: 20,
                            fontWeight: 600,
                        }}
                    >
                        Tạo hồ sơ công chứng
                    </Button>
                </Box>
            </Container>

            <Container
                sx={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    py: 5,
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
                    <Typography variant="h6">LỢI ÍCH NHẬN ĐƯỢC</Typography>
                    <Typography variant="h3" fontWeight="bold">
                        Tại sao bạn nên sử dụng dịch vụ
                        <br />
                        Công chứng trực tuyến?
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%" }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ultricies sit diam
                    arcu a ac commodo pellentesque nisl. Nec vestibulum ut
                    tristique arcu. Elementum lorem urna vel vulputate blandit
                    lacinia bibendum. Ac donec porttitor consectetur
                    pellentesque sed ornare hendrerit lobortis.Elementum lorem
                    urna vel vulputate blandit lacinia bibendum.
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 5, justifyContent: "center" }}
                >
                    <Grid item xs={4} sx={{ opacity: 0.5 }}>
                        <Card sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="rectangle-42.png"
                                alt="Rectangle"
                            />
                            <CardContent>
                                <Typography variant="body1" textAlign="center">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ultricies sit diam arcu a ac commodo
                                    pellentesque nisl. Nec vestibulum ut
                                    tristique arcu.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="rectangle-42.png"
                                alt="Rectangle"
                            />
                            <CardContent>
                                <Typography variant="body1" textAlign="center">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ultricies sit diam arcu a ac commodo
                                    pellentesque nisl. Nec vestibulum ut
                                    tristique arcu.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sx={{ opacity: 0.5 }}>
                        <Card sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="rectangle-42.png"
                                alt="Rectangle"
                            />
                            <CardContent>
                                <Typography variant="body1" textAlign="center">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ultricies sit diam arcu a ac commodo
                                    pellentesque nisl. Nec vestibulum ut
                                    tristique arcu.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box textAlign="center" mt={3}>
                    <IconButton>
                        <ArrowCircleLeftRounded />
                    </IconButton>
                    <IconButton >
                        <ArrowCircleRightRounded />
                    </IconButton>
                </Box>
            </Container>

            <Container
                sx={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 10,
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
                    <Typography variant="h3" fontWeight="bold">
                        Hỗ trợ các loại văn bản
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: 900, mx: "auto", mt: 3, width: "100%" }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ut scelerisque
                    tellus elementum ultrices augue enim eu. Aliquet sed
                    pellentesque hac convallis congue. Hendrerit adipiscing
                    tempor et cras commodo tortor. Sem aliquet orci nullam
                    senectus libero massa. Vitae placerat cursus nisi id amet
                    interdum.
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 5, justifyContent: "center" }}
                >
                    {[
                        "Giấy tờ nhà - đất",
                        "Giấy tờ nhà - đất",
                        "Giấy tờ nhà - đất",
                        "Giấy tờ nhà - đất",
                    ].map((text, index) => (
                        <Grid item xs={3} key={index}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                sx={{ gap: 2 }}
                            >
                                <Typography variant="h6">{text}</Typography>
                                <ArrowForwardRounded />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Box
                sx={{
                    backgroundColor: "grey.100",
                    py: 5,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid container spacing={5}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ mx: "20%" }}>
                            <Typography variant="h2" fontWeight="bold">
                                Dành cho cá nhân
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Lorem ipsum dolor sit amet consectetur. Ut
                                scelerisque tellus elementum ultrices augue enim
                                eu. Aliquet sed pellentesque hac convallis
                                congue. Hendrerit adipiscing tempor et cras
                                commodo tortor. Sem aliquet orci nullam senectus
                                libero massa. Vitae placerat cursus nisi id amet
                                interdum.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 3,
                                    borderRadius: 1,
                                    textTransform: "inherit",
                                    fontSize: 18,
                                    px: 3,
                                    py: 1,
                                    fontWeight: "600",
                                }}
                            >
                                Tìm hiểu ngay
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={Frame1}
                            alt="Frame"
                            style={{ width: "70%" }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    backgroundColor: "grey.100",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 5,
                }}
            >
                <Grid container spacing={5}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={Frame2}
                            alt="Frame"
                            style={{ width: "70%" }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ mx: "20%" }}>
                            <Typography variant="h2" fontWeight="bold">
                                Dành cho VPCC
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Lorem ipsum dolor sit amet consectetur. Ut
                                scelerisque tellus elementum ultrices augue enim
                                eu. Aliquet sed pellentesque hac convallis
                                congue. Hendrerit adipiscing tempor et cras
                                commodo tortor. Sem aliquet orci nullam senectus
                                libero massa. Vitae placerat cursus nisi id amet
                                interdum.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mt: 3,
                                    borderRadius: 1,
                                    textTransform: "inherit",
                                    fontSize: 18,
                                    px: 3,
                                    py: 1,
                                    fontWeight: "600",
                                }}
                            >
                                Tìm hiểu ngay
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Reviews />
            <FAQSection />
            <Footer />

            <Tooltip
                title="Liên hệ tổng đài"
                placement="left"
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: "transparent",
                            color: (theme) => theme.palette.primary.main,
                            fontSize: "16px",
                            fontWeight: 600,
                            "& .MuiTooltip-arrow": {
                                color: "transparent",
                            },
                        },
                    },
                }}
                onClick={handleChatboxClick}
            >
                <AssistantIcon
                    sx={{
                        position: "fixed",
                        width: "3vw",
                        height: "3vw",
                        bottom: "5%",
                        right: "2%",
                        color: (theme) => theme.palette.primary.main,
                        cursor: "pointer",
                        "&:hover": {
                            opacity: 0.8,
                        },
                    }}
                />
            </Tooltip>

            <Tooltip
                title="Liên hệ tổng đài"
                placement="left"
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: "transparent",
                            color: (theme) => theme.palette.primary.main,
                            fontSize: "16px",
                            fontWeight: 600,
                            "& .MuiTooltip-arrow": {
                                color: "transparent",
                            },
                        },
                    },
                }}
            >
                <PhoneIcon
                    sx={{
                        position: "fixed",
                        width: "3vw",
                        height: "3vw",
                        bottom: "12%",
                        right: "2%",
                        color: (theme) => theme.palette.primary.main,
                        cursor: "pointer",
                        "&:hover": {
                            opacity: 0.8,
                        },
                    }}
                />
            </Tooltip>
            {showChatbox && <Chatbox showChatbox={showChatbox} setShowChatbox={setShowChatbox} />}
        </ThemeProvider>
    );
};

export default Home;
