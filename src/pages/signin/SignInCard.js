import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "./CustomIcons";
import { red } from "@mui/material/colors";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    [theme.breakpoints.up("sm")]: {
        width: "450px",
    },
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

export default function SignInCard() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signInWithGoogle = () => {
        window.open("http://localhost:3100/v1/auth/google", "_self");
    };

    const signInWithEmailAndPassword = async (email, password) => {
        try {
            const response = await fetch(
                "http://localhost:3100/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        return null;
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const validateInputs = () => {
        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage("Vui lòng điền đúng địa chỉ email.");
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage(
                "Mật khẩu phải chứa ít nhất 6 ký tự."
            );
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }

        return isValid;
    };

    return (
        <Card variant="outlined">
            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    width: "100%",
                    fontSize: "clamp(2rem, 10vw, 2.15rem)",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                Đăng nhập
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 2,
                }}
            >
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? "error" : "primary"}
                        sx={{ ariaLabel: "email" }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                    </Box>
                    <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        placeholder="••••••"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? "error" : "primary"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Box
                    sx={{
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Ghi nhớ tôi"
                    />
                    <Link
                        onClick={handleClickOpen}
                        variant="body2"
                        role="link"
                        sx={{ cursor: "pointer" }}
                    >
                        Quên mật khẩu?
                    </Link>
                </Box>
                <ForgotPassword open={open} handleClose={handleClose} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                        signInWithEmailAndPassword(email, password);
                    }}
                >
                    Đăng nhập
                </Button>
                <Typography sx={{ textAlign: "center" }}>
                    Chưa có tài khoản?{" "}
                    <span>
                        <Link
                            href="/signup/"
                            variant="body2"
                            sx={{ alignSelf: "center" }}
                        >
                            Đăng ký
                        </Link>
                    </span>
                </Typography>
            </Box>
            <Divider>hoặc</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    onClick={() => signInWithGoogle()}
                    startIcon={<GoogleIcon />}
                >
                    Đăng nhập với Google
                </Button>


            </Box>
        </Card>
    );
}
