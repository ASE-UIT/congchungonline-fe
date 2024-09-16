import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SignIn = lazy(() => import("./pages/Signin/SignIn"));
const SignUp = lazy(() => import("./pages/Signup/SignUp"));
function App() {
	return (
		<Routes>
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
}

export default App;
