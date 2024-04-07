import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpOption() {
    return (
        <div className="flex h-fit">
            <div>
                <p className="text-white text-xs font-mono font-thin flex justify-start opacity-70">You don't have an account?</p>
            </div>
            <div className="list-none flex">
                <Link to="/signup" className='text-xs text-blue-500 ml-2'>Sign Up</Link> 
            </div>
        </div>
    )
}