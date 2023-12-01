import UserCheck from '../auth/UserCheck';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function LogoCheck() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const handleLoginStatusChange = (loggedIn) => {
        setIsLoggedIn(loggedIn);
    };

    useEffect(() => {
        if (isLoggedIn === null) {
            return; // don't navigate if isLoggedIn is null
        }
        navigate(isLoggedIn ? "/MainPage" : "/");
    }, [isLoggedIn]);

    return (
        <UserCheck onLoginStatusChange={handleLoginStatusChange} />
    )
}