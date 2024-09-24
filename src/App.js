import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "./config/theme/themePrimitives";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./routes/PrivateRoute";
import routes from "./routes/routes";

function App() {
	const theme = createTheme(getDesignTokens());
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ThemeProvider theme={theme}>
				<Box display={"flex"}>
					{isAuthenticated && <Sidebar />}
					<Box flex={1}>
						{!isAuthenticated && <Header />}
						<Routes>
							{routes.map(({ path, element: Element, authRequired }) => (
								<Route
									exact
									key={path}
									path={path}
									element={
										authRequired ? (
											<PrivateRoute element={<Element />} />
										) : (
											<Element />
										)
									}
								/>
							))}
						</Routes>
						{!isAuthenticated && <Footer />}
					</Box>
				</Box>
				<ToastContainer
					position="bottom-left"
					autoClose={5000}
					newestOnTop
					rtl={false}
					pauseOnFocusLoss
					pauseOnHover
				/>
			</ThemeProvider>
		</Suspense>
	);
}

export default App;
