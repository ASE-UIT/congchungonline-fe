import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./config/theme/themePrimitives";

const SignIn = lazy(() => import("./pages/signin/SignIn"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));
const Home = lazy(() => import("./pages/home/Home"));
function App() {
    const theme = createTheme(getDesignTokens());
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
