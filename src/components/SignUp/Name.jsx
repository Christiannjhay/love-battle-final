import React from 'react';

export default function Name({ value, onChange }) {
    return (
        <div>
            <div className="mb-2 w-fit h-fit">
                <p className="text-white text-sm">Name</p>
            </div>
            <div>
                <input type="text" 
                id="name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Name"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required />
            </div>
        </div>
    )
}