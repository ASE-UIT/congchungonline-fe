import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
	const { isAuthenticated } = useSelector((state) => state.auth);
	return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;
