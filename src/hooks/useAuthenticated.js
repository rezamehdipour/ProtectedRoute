import { useSelector } from 'react-redux';

const useAuthenticated = (props) => {
    const token = useSelector(s => s.token);
    if (token) {
        return true;
    }
    return false;
}

export default useAuthenticated;