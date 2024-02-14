import useAuth from '../../../hooks/use-auth';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
    const { authUser } = useAuth();
    return (
        authUser ? children : <Navigate to="/login" />
    );
}

export default ProtectRoute