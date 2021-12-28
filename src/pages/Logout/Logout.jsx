import { Navigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/token/tokenSlice";

// Hooks
import useAuthenticated from "../../hooks/useAuthenticated";

const Logout = (props) => {
	const dispatch = useDispatch();
	const authenticated = useAuthenticated();

	if (authenticated) {
		dispatch(setToken(false));
		return <Navigate to="/" />;
	} else {
		return <Navigate to="/" />;
	}
};

export default Logout;
