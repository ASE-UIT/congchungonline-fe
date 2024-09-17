import { Box, Container, Grid, Typography, IconButton } from "@mui/material"; // Add necessary imports
import { ArrowCircleLeftRounded, ArrowCircleRightRounded, StarHalfRounded, StarRounded, VerifiedRounded } from "@mui/icons-material"; // Add necessary imports

const Reviews = () => {
    return (
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
    );
};

export default Reviews;