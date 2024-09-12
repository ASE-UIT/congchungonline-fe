import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
