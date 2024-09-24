import { Box, Collapse, Paper, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const StepCard = ({ step, index, expandedIndex, handleExpandClick }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Paper
            ref={ref}
            key={index}
            sx={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                width: 900,
                height: 450,
                alignItems: "center",
                justifyContent: "center",
                paddingX: 6,
                paddingY: 2,
                borderRadius: 2,
                overflow: "hidden",
                gap: 3,
                //boxShadow: "0px 0px 10px 0px rgba(210, 213, 219)",
                boxShadow: "0px 0px 10px 0px rgba(210, 213, 219)",
                '&:hover': {
                    boxShadow: "0px 0px 20px 0px rgba(221, 166, 177, 0.50)",
                },
                transform: inView ? 'translateY(0)' : 'translateY(150px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            }}
        >
            {/* Step Content */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 1,
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        gap: 1.5,
                    }}
                >
                    <Typography variant="body2" color="textSecondary">
                        0{index + 1}/05
                    </Typography>
                    <Typography variant="h5" color="textPrimary">
                        {step.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                </Box>

                <Typography
                    variant="body2"
                    color="primary"
                    fontWeight={500}
                    onClick={() => handleExpandClick(index)}
                    sx={{ cursor: "pointer" }}
                >
                    TÌM HIỂU THÊM
                </Typography>
                {/* Collapse Section */}
                <Collapse in={expandedIndex === index}>
                    <Box>
                        <Typography variant="body1" color="textSecondary">
                            {step.notice} {/* Use 'notice' for collapse content */}
                        </Typography>
                    </Box>
                </Collapse>
            </Box>
            {/* Step Image */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={require(`../../assets/images/${step.image}`)}
                    alt="step"
                    style={{ width: "100%", height: "100%" }}
                />
            </Box>
        </Paper>
    );
};

export default StepCard;