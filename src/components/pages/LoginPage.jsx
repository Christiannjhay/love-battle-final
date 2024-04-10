import React, { useState } from 'react';
import Username from "../Login/Username"
import Logo from "../Login/Logo"
import SignInText from "../Login/SignInText"
import Password from "../Login/Password"
import SignUpOption from "../Login/SignUpOption"
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        console.log("Username:", username);
        console.log("Password:", password);

        try {
            const response = await fetch('http://localhost:5209/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const data = await response.json();
                const jwtToken = data.token;
                const refreshToken = data.refreshToken;
                const userId = data.userId;

               
                console.log("Token:", jwtToken);
                console.log("RefreshToken:", refreshToken);
                console.log("UserID", userId);

                navigate(`/home/${userId}`);
            } else {
                setLoginError(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="w-full h-screen bg-[#202124] flex justify-center items-center">
            <div className="bg-transparent sm:bg-[#2D2F31] h-[563px] w-[481px] rounded-2xl">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div className="flex justify-center mt-10 mr-48">
                    <SignInText />
                </div>
                <div className="flex justify-center mt-7">
                    <div className="w-[291px] h-[47px]">
                        <Username value={username} onChange={setUsername} />
                    </div>
                </div>
                <div className="flex justify-center mt-9">
                    <div className="w-[291px] h-[47px]">
                        <Password value={password} onChange={setPassword} />
                        {loginError && (<div className="text-red-500 text-xs">Incorrect username or password</div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-[291px] h-[60px]">
                        <button type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleLoginClick} >Login</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mr-16">
                        <SignUpOption />
                    </div>
                </div>
            </div>
        </div>
    )
}