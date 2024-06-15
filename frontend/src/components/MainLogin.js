import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const MainLogin = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: ""
    });

    function changeHandler(event) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        toast.success("Login Success");
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
            <label className="w-full mb-4">
                <p className="text-sm text-gray-300 mb-2 leading-5">
                    Email Address
                    <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <label className="w-full mb-4">
                <p className="text-sm text-gray-300 mb-2 leading-5">
                    Password
                    <sup className="text-red-500">*</sup>
                </p>
                <input
                    type="password"
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <label className="w-full mb-4">
                <p className="text-sm text-gray-300 mb-2 leading-5">
                    Role
                    <sup className="text-red-500">*</sup>
                </p>
                <select
                    required
                    value={formData.role}
                    onChange={changeHandler}
                    name="role"
                    className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select your role</option>
                    <option value="Admin">Admin</option>
                    <option value="Fellow">Fellow</option>
                    <option value="Student">Student</option>
                </select>
            </label>

            <button className="bg-blue-500 py-3 px-4 rounded-md mt-4 font-medium text-white hover:bg-blue-600 transition duration-300">
                Sign in
            </button>
        </form>
    );
}