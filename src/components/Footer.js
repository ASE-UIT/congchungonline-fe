import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "primary.main", py: 5, width: "100%" }}>
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
                                        <ListItem key={index} disableGutters>
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
                                        <ListItem key={index} disableGutters>
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
                                        <ListItem key={index} disableGutters>
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
    );
};

export default Footer;
