
import Logo from "../SignUp/Logo"
import SignupText from "../SignUp/SignupText"
import Name from "../SignUp/Name"
import Username from "../SignUp/Username"
import Birthday from "../SignUp/Birthday"
import Password from "../Login/Password"
import SignupButton from "../SignUp/SignupButton"
import SignInOption from "../SignUp/SignInOption"

export default function SignupPage() {
    return (
        <div className="w-full h-screen bg-[#202124] flex justify-center items-center">
            <div className="bg-transparent sm:bg-[#2D2F31] h-[720px] w-[481px] rounded-2xl">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <div className="flex justify-center mt-10 mr-48">
                    <SignupText />
                </div>
                <div className="flex justify-center mt-7">
                    <div className="w-[291px] h-[47px]">
                        <Name />
                    </div>
                </div>
                <div className="flex justify-center mt-9 ">
                    <div className="w-[291px] h-[47px]">
                        <Username />
                    </div>
                </div>
                <div className="flex justify-center mt-9 ">
                    <div className="w-[291px] h-[47px]">
                        <Birthday />
                    </div>
                </div>
                <div className="flex justify-center mt-9">
                    <div className="w-[291px] h-[47px]">
                        <Password />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-[291px] h-[60px]">
                        <SignupButton />
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