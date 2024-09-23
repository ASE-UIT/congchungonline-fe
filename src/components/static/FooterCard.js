import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const FooterCard = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Paper
            ref={ref}
            sx={{
                display: "flex",
                flexDirection: "row",
                width: 900,
                height: 350,
                alignItems: "center",
                justifyContent: "center",
                paddingX: 6,
                paddingY: 2,
                borderRadius: 2,
                overflow: "hidden",
                gap: 3,
                boxShadow: "0px 0px 10px 0px rgba(229, 231, 234)",
                '&:hover': {
                    boxShadow: "0px 0px 20px 0px rgba(221, 166, 177, 0.50)",
                },
                background: 'linear-gradient(180deg, rgba(255, 240, 245, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                transform: inView ? 'translateY(0)' : 'translateY(150px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    gap: 3,
                }}
            >
                <Typography variant="h3" color="primary" fontWeight={'600'}>
                    Tạo hồ sơ công chứng ngay hôm nay
                </Typography>
                <Typography variant="body1" color="textSecondary" textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur. Morbi elementum libero sed cras diam neque mi fringilla posuere. Morbi odio sed etiam netus in faucibus laoreet at quam. Nibh tellus risus lectus diam elit sollicitudin tortor. In ipsum morbi aenean enim amet habitasse vel venenatis.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
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
        </Paper>
    )
}

export default FooterCard