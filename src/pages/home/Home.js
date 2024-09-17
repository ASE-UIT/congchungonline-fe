import {
    ArrowBackIosNewRounded,
    ArrowForwardRounded,
    ArrowCircleLeftRounded,
    ArrowCircleRightRounded,
    StarHalfRounded,
    StarRounded,
    VerifiedRounded,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Tooltip,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import Header from "../../components/Header";
import getAuthTheme from "../../config/theme/getAuthTheme";
import AssistantIcon from "@mui/icons-material/Assistant";
import PhoneIcon from "@mui/icons-material/Phone";
import { white, dark, primary } from "../../config/theme/themePrimitives";
import Frame1 from "../../assets/vectors/Frame-1.svg";
import Frame2 from "../../assets/vectors/Frame-2.svg";

import Chatbox from "../../components/Chatbox";

const Home = () => {
    const [mode, setMode] = React.useState("light");
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const [showChatbox, setShowChatbox] = useState(false);
    const defaultTheme = createTheme({ palette: { mode } });
    const HomeTheme = createTheme(getAuthTheme(mode));

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
                    <IconButton>
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
            <Container sx={{ py: 5, width: "100%" }}>
                <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold">
                        Công chức trực tuyến số 1 tại Việt Nam
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: 1000, mx: "auto", mt: 3, width: "100%" }}
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
                    spacing={5}
                    sx={{ mt: 5, justifyContent: "center" }}
                >
                    <Grid item xs={3}>
                        <Box textAlign="left">
                            <Typography variant="h4" fontWeight="bold">
                                Tuyệt vời
                            </Typography>
                            <Box display="flex" justifyContent="left" mt={2}>
                                <StarRounded />
                                <StarRounded />
                                <StarRounded />
                                <StarRounded />
                                <StarHalfRounded />
                            </Box>
                            <Typography variant="body2" mt={1}>
                                Dựa trên{" "}
                                <span style={{ textDecoration: "underline" }}>
                                    100.000 đánh giá
                                </span>
                            </Typography>
                        </Box>
                    </Grid>

                    {[
                        "Dễ dàng sử dụng.",
                        "Dễ dàng sử dụng.",
                        "Dễ dàng sử dụng.",
                    ].map((text, index) => (
                        <Grid item xs={3} key={index}>
                            <Box textAlign="left">
                                <Box
                                    display="flex"
                                    justifyContent="left"
                                    mt={1}
                                >
                                    <StarRounded />
                                    <StarRounded />
                                    <StarRounded />
                                    <StarRounded />
                                    <StarHalfRounded />
                                </Box>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    mt={2}
                                >
                                    {text}
                                </Typography>
                                <Typography variant="body2" mt={1}>
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "#8791a5",
                                        }}
                                    >
                                        Nguyễn Thành Tài,
                                    </span>
                                    <span style={{ color: "#324155" }}>
                                        &nbsp;
                                    </span>
                                    <span style={{ color: "#8791a5" }}>
                                        1 ngày trước
                                    </span>
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" mt={3}>
                    <IconButton>
                        <ArrowCircleLeftRounded />
                    </IconButton>
                    <IconButton>
                        <ArrowCircleRightRounded />
                    </IconButton>
                </Box>
                <Box textAlign="left" mt={3}>
                    <VerifiedRounded />
                    <Typography variant="body1" mt={1}>
                        Verified
                    </Typography>
                </Box>
            </Container>

            <Container sx={{ py: 5, width: "100%" }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center">
                    Những câu hỏi thường gặp.
                </Typography>
                <List>
                    {[
                        "Công chứng là gì?",
                        "Công chứng trực tuyến ở đâu hợp pháp và có giá trị?",
                        "Hai hoặc nhiều người ký có thể được công chứng chữ ký của họ trong một cuộc họp không?",
                        "Công chứng trực tuyến có giá trị và có hiệu lực thi hành ở đâu?",
                        "Tôi là một công chứng viên. Làm cách nào để đăng ký làm việc trên Công chứng?",
                        "Bằng chứng đảm bảo tính bảo mật và riêng tư của thông tin cá nhân trên văn bản công chứng như thế nào?",
                    ].map((question, index) => (
                        <React.Fragment key={index}>
                            <ListItem button>
                                <ListItemText primary={question} />
                                <ArrowBackIosNewRounded />
                            </ListItem>
                            {index < 5 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Container>

            <Box sx={{ backgroundColor: "#a91d3a", py: 5, width: "100%" }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <Box>
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        backgroundColor: "grey.300",
                                        borderRadius: "50%",
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    color="white"
                                    mt={3}
                                >
                                    Hiện đại bậc nhất.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="white"
                                    mt={3}
                                >
                                    Kết nối với chúng tôi thông qua:
                                </Typography>
                                <IconButton
                                    sx={{ color: "white", mt: 2 }}
                                    size="large"
                                >
                                    <img
                                        src="facebook.png"
                                        alt="Facebook"
                                        style={{ width: 24, height: 24 }}
                                    />
                                </IconButton>
                                <IconButton
                                    sx={{ color: "white", mt: 2 }}
                                    size="large"
                                >
                                    <img
                                        src="linkedin.png"
                                        alt="LinkedIn"
                                        style={{ width: 24, height: 24 }}
                                    />
                                </IconButton>
                                <IconButton
                                    sx={{ color: "white", mt: 2 }}
                                    size="large"
                                >
                                    <img
                                        src="google-plus.png"
                                        alt="Google Plus"
                                        style={{ width: 24, height: 24 }}
                                    />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={5}>
                                <Grid item xs={4}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="white"
                                    >
                                        Trang chủ
                                    </Typography>
                                    <List>
                                        {[
                                            "Chính sách bảo mật",
                                            "Bảo mật thanh toán",
                                            "Điều khoản sử dụng",
                                            "Hướng dẫn sử dụng",
                                            "Quy chế hoạt động",
                                            "Cơ chế giải quyết khiếu nại",
                                        ].map((text, index) => (
                                            <ListItem
                                                key={index}
                                                disableGutters
                                            >
                                                <ListItemText
                                                    primary={text}
                                                    primaryTypographyProps={{
                                                        color: "white",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="white"
                                    >
                                        Sản phẩm
                                    </Typography>
                                    <List>
                                        {[
                                            "Giá",
                                            "Dành cho cá nhân",
                                            "Dành cho VPCC",
                                        ].map((text, index) => (
                                            <ListItem
                                                key={index}
                                                disableGutters
                                            >
                                                <ListItemText
                                                    primary={text}
                                                    primaryTypographyProps={{
                                                        color: "white",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="white"
                                    >
                                        Về chúng tôi
                                    </Typography>
                                    <List>
                                        {[
                                            "Trụ sở chính:",
                                            "...",
                                            "Email:",
                                            "Số điện thoại:",
                                        ].map((text, index) => (
                                            <ListItem
                                                key={index}
                                                disableGutters
                                            >
                                                <ListItemText
                                                    primary={text}
                                                    primaryTypographyProps={{
                                                        color: "white",
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Tooltip
                title="Trợ lý ảo"
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
                <IconButton onClick={handleChatboxClick}>
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
                </IconButton>
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
            {showChatbox ? <Chatbox /> : <Chatbox />}
        </ThemeProvider>
    );
};

export default Home;
