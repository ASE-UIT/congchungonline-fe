import React from "react";
import { Stepper, Step, StepLabel, Typography, Box, StepConnector, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/system";
import { primary, black, gray, white } from "../../config/theme/themePrimitives";

const steps = [
    { label: "Chờ xử lý", number: 1 },
    { label: "Kiểm tra hồ sơ", number: 2 },
    { label: "Tiếp nhận và xử lý", number: 3 },
    { label: "Sẵn sàng ký số", number: 4 },
    { label: "Hoàn tất", number: 5 },
];

// Custom Step Connector to extend its length
const CustomConnector = styled(StepConnector)(() => ({
    '& .MuiStepConnector-line': {
        minHeight: 80, // Adjust the connector line height here
    },
}));

// Custom Circle Icon with step number for inactive steps
const CustomCircleIcon = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: black[300],
    color: white[50],
    fontSize: 12,
    fontWeight: 'bold',
}));

const NotaryStep = ({ currentStep, setCurrentStep }) => {
    // Handler for when user clicks on an icon
    const handleStepClick = (index) => {
        if (index <= currentStep) {
            setCurrentStep(index);
        }
    };

    return (
        <Box>
            <Stepper
                activeStep={currentStep}
                orientation="vertical"
                connector={<CustomConnector />} // Apply custom connector
            >
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            icon={
                                <IconButton
                                    disabled={index > currentStep}
                                    onClick={() => handleStepClick(index)}
                                    sx={{ width: 24, height: 24, padding: 0 }}
                                >
                                    {index === currentStep ? (
                                        <CheckCircleIcon sx={{ color: primary[500] }} />
                                    ) : (
                                        <CustomCircleIcon>{step.number}</CustomCircleIcon>
                                    )}
                                </IconButton>
                            }
                        >
                            <Typography
                                sx={{
                                    color: index === currentStep ? primary[500] : gray[500],
                                    fontWeight: index === currentStep ? "bold" : "normal",
                                    fontSize: 12,
                                }}
                            >
                                {step.label}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default NotaryStep;
