import {
    ArrowBackIosNewRounded,
    ArrowBackRounded,
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
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Header from "../../components/Header";
import getAuthTheme from "../../config/theme/getAuthTheme";

const Home = () => {
    const [mode, setMode] = React.useState("light");
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const defaultTheme = createTheme({ palette: { mode } });
    const HomeTheme = createTheme(getAuthTheme(mode));

    return (
        <ThemeProvider theme={showCustomTheme ? HomeTheme : defaultTheme}>
            <Header />
            <Box
                sx={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    top: 195,
                    left: 470,
                    borderRadius: "50%",
                    filter: "blur(200px)",
                    background:
                        "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(208,0,43) 100%)",
                }}
            />

            <Container sx={{ pt: 10, pb: 5 }}>
                <Box textAlign="center">
                    <Typography variant="h6">CÔNG CHỨNG QUỐC GIA</Typography>
                    <Typography variant="h2" fontWeight="bold">
                        Công chứng trực tuyến
                    </Typography>
                </Box>
                <Box textAlign="center" mt={3}>
                    <Typography variant="body1">
                        Công chứng trực tuyến nhanh chóng - an toàn - bảo mật.
                        <br />
                        Chúng tôi sẵn sàng phục vụ cho dù bạn đang ở đâu.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, borderRadius: 8 }}
                    >
                        Tạo hồ sơ công chứng
                    </Button>
                </Box>
            </Container>
            <Container sx={{ py: 5 }}>
                <Box textAlign="center">
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
                    sx={{ maxWidth: 900, mx: "auto", mt: 3 }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ultricies sit diam
                    arcu a ac commodo pellentesque nisl. Nec vestibulum ut
                    tristique arcu. Elementum lorem urna vel vulputate blandit
                    lacinia bibendum. Ac donec porttitor consectetur
                    pellentesque sed ornare hendrerit lobortis.Elementum lorem
                    urna vel vulputate blandit lacinia bibendum.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={4} sx={{ opacity: 0.5 }}>
                        <Card>
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
                        <Card>
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
                        <Card>
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
            <Container sx={{ py: 5 }}>
                <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold">
                        Hỗ trợ các loại văn bản
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: 900, mx: "auto", mt: 3 }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ut scelerisque
                    tellus elementum ultrices augue enim eu. Aliquet sed
                    pellentesque hac convallis congue. Hendrerit adipiscing
                    tempor et cras commodo tortor. Sem aliquet orci nullam
                    senectus libero massa. Vitae placerat cursus nisi id amet
                    interdum.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 5 }}>
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
                            >
                                <Typography variant="h6">{text}</Typography>
                                <ArrowBackRounded />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container sx={{ py: 5, backgroundColor: "grey.100" }}>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold">
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
                                sx={{ mt: 3, borderRadius: 2 }}
                            >
                                Tìm hiểu ngay
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            src="frame-134.svg"
                            alt="Frame"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 5, backgroundColor: "grey.100" }}>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <img
                            src="frame-133.svg"
                            alt="Frame"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold">
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
                                sx={{ mt: 3, borderRadius: 2 }}
                            >
                                Tìm hiểu ngay
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ py: 5 }}>
                <Box textAlign="center">
                    <Typography variant="h3" fontWeight="bold">
                        Công chức trực tuyến số 1 tại Việt Nam
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    textAlign="center"
                    sx={{ maxWidth: 1000, mx: "auto", mt: 3 }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ut scelerisque
                    tellus elementum ultrices augue enim eu. Aliquet sed
                    pellentesque hac convallis congue. Hendrerit adipiscing
                    tempor et cras commodo tortor. Sem aliquet orci nullam
                    senectus libero massa. Vitae placerat cursus nisi id amet
                    interdum.
                </Typography>
                <Grid container spacing={5} sx={{ mt: 5 }}>
                    <Grid item xs={3}>
                        <Box textAlign="center">
                            <Typography variant="h4" fontWeight="bold">
                                Tuyệt vời
                            </Typography>
                            <Box display="flex" justifyContent="center" mt={1}>
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
                            <Box textAlign="center">
                                <Box
                                    display="flex"
                                    justifyContent="center"
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
                                    mt={1}
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
                <Box textAlign="center" mt={3}>
                    <VerifiedRounded />
                    <Typography variant="body1" mt={1}>
                        Verified
                    </Typography>
                </Box>
            </Container>
            <Container sx={{ py: 5 }}>
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
            <Box sx={{ backgroundColor: "#a91d3a", py: 5 }}>
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
            <img
                src="chatbox.png"
                alt="Chatbox"
                style={{
                    position: "fixed",
                    width: 54,
                    height: 50,
                    top: 824,
                    left: 1340,
                }}
            />
        </ThemeProvider>
    );
};

export default Home;
