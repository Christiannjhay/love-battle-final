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
    const navigate = useNavigate();

    const handleLoginClick = () => {
        console.log("Username:", username);
        console.log("Password:", password);

        navigate('/home');
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