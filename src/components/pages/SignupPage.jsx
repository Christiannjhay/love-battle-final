import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../SignUp/Logo"
import SignupText from "../SignUp/SignupText"
import Name from "../SignUp/Name"
import Username from "../SignUp/Username"
import Birthday from "../SignUp/Birthday"
import Password from "../SignUp/Password"
import SignupButton from "../SignUp/SignupButton"
import SignInOption from "../SignUp/SignInOption"
import CoupleCode from "../SignUp/CoupleCode"


export default function SignupPage() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [couplecode, setCoupleCode] = useState('');
    const navigate = useNavigate();

    const handleSignupSubmit = async () => {
        let FinalCode = 0
        if(couplecode === ''){
            FinalCode = 0
        }
        else{
            FinalCode = couplecode
        }
        try {
            const response = await fetch('http://localhost:5209/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    password: password,
                    birthday: birthday,
                    coupleCode: FinalCode,

                })
            });
            if (response.ok) {
                navigate('/');
            } else {

            }

        } catch (error) {
            console.error('Error during signup:', error);
        }
    };


    return (
        <div className="w-full h-screen bg-[#202124] flex justify-center items-center">
            <div className="bg-transparent sm:bg-[#2D2F31] h-[810px] w-[481px] rounded-2xl">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div className="flex justify-center mt-10 mr-48">
                    <SignupText />
                </div>
                <div className="flex justify-center mt-7">
                    <div className="w-[291px] h-[47px]">
                        <Name value={name} onChange={setName} />
                    </div>
                </div>
                <div className="flex justify-center mt-9 ">
                    <div className="w-[291px] h-[47px]">
                        <Username value={username} onChange={setUsername} />
                    </div>
                </div>
                <div className="flex justify-center mt-9 ">
                    <div className="w-[291px] h-[47px]">
                        <Birthday value={birthday} onChange={setBirthday} />
                    </div>
                </div>
                <div className="flex justify-center mt-9">
                    <div className="w-[291px] h-[47px]">
                        <Password value={password} onChange={setPassword} />
                    </div>
                </div>
                <div className="flex justify-center mt-9">
                    <div className="w-[291px] h-[47px]">
                        <CoupleCode value={couplecode} onChange={setCoupleCode} />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-[291px] h-[60px]">
                        <button type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleSignupSubmit}>Sign Up</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mr-16">
                        <SignInOption />
                    </div>
                </div>
            </div>
        </div>
    )
}