import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Redux
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/token/tokenSlice";

// Hooks
import useAuthenticated from "../../hooks/useAuthenticated";

const Login = (props) => {
	const dispatch = useDispatch();
	const authenticated = useAuthenticated();

	if (authenticated) {
		return <Navigate to="/" />;
	} else {
		dispatch(setToken(uuidv4()));
		return <Navigate to="/" />;
	}
};

export default Login;
