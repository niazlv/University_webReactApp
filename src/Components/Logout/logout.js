import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUserState }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user state
        setUserState({});
        // Redirect to home page
        navigate('/');
    }, [setUserState, navigate]);

    return null; // Component doesn't need to render anything
};

export default Logout;
