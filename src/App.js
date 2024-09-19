import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./config/theme/themePrimitives";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SignIn = lazy(() => import("./pages/signin/SignIn"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
function App() {
    const theme = createTheme(getDesignTokens());
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
