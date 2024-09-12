import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";

function ForgotPassword({ open, handleClose }) {
    const [email, setEmail] = React.useState("");
    const sendResetPassword = async () => {
        try {
            const response = await fetch(
                "http://localhost:3100/v1/auth/forgot-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );
            if (response.ok) {
                // Handle success
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error
        }
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: (event) => {
                    event.preventDefault();
                    handleClose();
                },
            }}
        >
            <DialogTitle>Reset password</DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                }}
            >
                <DialogContentText>
                    Enter your account&apos;s email address, and we&apos;ll send
                    you a link to reset your password.
                </DialogContentText>
                <OutlinedInput
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email address"
                    placeholder="Email address"
                    type="email"
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                />
            </DialogContent>
            <DialogActions sx={{ pb: 3, px: 3 }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={sendResetPassword}
                >
                    Continue
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ForgotPassword.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
