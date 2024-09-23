import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./config/theme/themePrimitives";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";

const SignIn = lazy(() => import("./pages/signin/SignIn"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));
const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Services"));
const UserGuide = lazy(() => import("./pages/static/UserGuide"));

function App() {
    const theme = createTheme(getDesignTokens());
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Box display={'flex'} >
                {isSignedIn && <Sidebar />}
                <Box flex={1}>
                    {!isSignedIn && <Header />}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/userguide" element={<UserGuide />} />
                    </Routes>
                    {!isSignedIn && <Footer />}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
