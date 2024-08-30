import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function LandingPage() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <h1>Welcome to the App</h1>
            <button onClick={() => setShowSignUp(true)}>Sign Up</button>
            <button onClick={() => setShowLogin(true)}>Log In</button>

            {showSignUp && <SignUpForm closeForm={() => setShowSignUp(false)} />}
            {showLogin && <LoginForm closeForm={() => setShowLogin(false)} />}
        </div>
    );
}

export default LandingPage;
