import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Auth.css"

function Auth() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to Project Showacase</h1>
            <button className="button" onClick={() => navigate('/register')}>
                Register
            </button>
            <button className="button" onClick={() => navigate('/login')}>
                Login
            </button>
        </div>
    );
}

export default Auth;
