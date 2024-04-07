import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInOption() {
    return (
        <div className="flex h-fit">
            <div>
                <p className="text-white text-xs font-mono font-thin flex justify-start opacity-70">You have an account?</p>
            </div>
            <div className="list-none flex">
                <Link to="/" className='text-xs text-blue-500 ml-2'>Sign in</Link> 
            </div>
        </div>
    )
}