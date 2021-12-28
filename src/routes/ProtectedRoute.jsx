import { Navigate } from "react-router-dom";

// Hooks
import useAuthenticated from '../hooks/useAuthenticated';

const ProtectedRoute = ({ component }) => {
    const authenticated = useAuthenticated();

    if (authenticated) {
        return component;
    }
    return <Navigate to="/" />
}

export default ProtectedRoute;