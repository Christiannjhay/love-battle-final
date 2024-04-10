import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Birthday({ value, onChange }) {
    const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null); 

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onChange(date);
    };

    return (
        <div>
            <div className="mb-2 w-fit h-fit">
                <p className="text-white text-sm">Birthday</p>
            </div>
            <div>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Birthday"
                    showYearDropdown
                    dateFormat="dd/MM/yyyy"
                    customInput={
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[291px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    }
                />
            </div>
        </div>
    );
}