import React, { useState, Fragment } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    IconButton,
    ListItemButton
} from "@mui/material";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded, KeyboardArrowRightRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import { dark, primary, white } from "../../config/theme/themePrimitives";

const Guide = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const guides = [
        {
            description: "Simply book a notary appointment online, register on our platform, have your notary appointment via a secure video call, and receive your digitally notarised documents if needed with an apostille seconds after the session ends",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            description: "Simply book a notary appointment online, register on our platform, have your notary appointment via a secure video call, and receive your digitally notarised documents if needed with an apostille seconds after the session ends",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            description: "Simply book a notary appointment online, register on our platform, have your notary appointment via a secure video call, and receive your digitally notarised documents if needed with an apostille seconds after the session ends",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        },
        {
            description: "Simply book a notary appointment online, register on our platform, have your notary appointment via a secure video call, and receive your digitally notarised documents if needed with an apostille seconds after the session ends",
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
        }
    ];

    const handleNextStep = () => {
        setCurrentStep((prev) => (prev + 1) % guides.length);
    };

    const handlePrevStep = () => {
        setCurrentStep((prev) => (prev === 0 ? guides.length - 1 : prev - 1));
    };

    const toggleExpand = (index) => {
        setCurrentStep(currentStep === index ? null : index);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "fit-content",
                display: "flex",
            }}
            mx={2}
            mb={15}
            gap={5}
        >
            <Box
                flex={1}
                sx={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: 100,
                            fontWeight: 600,
                        }}
                        component="span"
                    >
                        0{currentStep + 1}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 50,
                            fontWeight: 400,
                        }}
                        component="span"
                    >
                        /
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 30,
                            fontWeight: 200,
                        }}
                        component="span"
                    >
                        0{guides.length}
                    </Typography>
                </Box>
                <Typography variant="h6">Cách hoạt động</Typography>
                <Typography variant="body2" mt={1} mr={10}>
                    {guides[currentStep]?.description}
                </Typography>
                <Box display="flex" mt={5} gap={2}>
                    <IconButton onClick={handlePrevStep} disabled={currentStep === 0} sx={{ color: primary[500], border: 1 }}>
                        <ArrowBackIosNewRounded fontSize="large" />
                    </IconButton>
                    <IconButton onClick={handleNextStep} disabled={currentStep === guides.length - 1} sx={{ color: primary[500], border: 1 }}>
                        <ArrowForwardIosRounded fontSize="large" />
                    </IconButton>
                </Box>
            </Box>

            <Box
                flex={1}
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                }}
            >
                <List>
                    {guides.map((guide, index) => (
                        <Fragment key={index}>
                            <ListItem
                                button
                                onClick={() => {
                                    toggleExpand(index);
                                    setCurrentStep(index);
                                }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: "transparent"
                                    }
                                }}
                            >
                                <ListItemButton disabled={currentStep === index} sx={{ cursor: "default", padding: 0, width: "10%" }}>
                                    {currentStep === index ? (
                                        <KeyboardArrowRightRounded
                                            sx={{ color: dark[500], '&:hover': { color: white[50], backgroundColor: primary[500] }, borderRadius: 100 }}
                                            fontSize="large"
                                        />
                                    ) : (
                                        <KeyboardArrowDownRounded
                                            sx={{ color: dark[500], '&:hover': { color: white[50], backgroundColor: primary[500] }, borderRadius: 100 }}
                                            fontSize="large"
                                        />
                                    )}
                                </ListItemButton>

                                <ListItemText
                                    primary={`Bước ${index + 1}`}
                                    primaryTypographyProps={{ fontSize: 18, fontWeight: 600, color: dark[500] }}
                                    sx={{ cursor: "default", padding: 0, width: "80%" }}
                                />
                            </ListItem>

                            <Collapse in={currentStep === index}>
                                <Typography
                                    variant="body1"
                                    sx={{ mx: 2, my: 2, fontSize: 18, color: dark[500], cursor: "default" }}
                                >
                                    {guide.details[0]}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ mx: 2, my: 2, fontSize: 18, color: dark[500], cursor: "default" }}
                                >
                                    {guide.details[1]}
                                </Typography>
                            </Collapse>
                            {index < guides.length - 1 && <Divider sx={{ my: 2 }} />}
                        </Fragment>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Guide;
