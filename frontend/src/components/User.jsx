import React, { useState, useRef } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const User = () => {
    const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });

    const handleLoginSuccess = (res) => {
        const userObject = jwtDecode(res.credential);
        console.log(userObject);
    };

    const handleLoginFailure = (err) => {
        console.log("Login Failed!!!", err);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div className='container px-96 py-12 bg-green-200 flex flex-col justify-center'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input name="name" value={form.name} onChange={handleChange}className="form-control" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Username</label>
                    <input name="username" value={form.username} onChange={handleChange} type="text" className="form-control" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" placeholder="name@example.com" required />
                </div>
                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" required />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <button type="button" className="btn btn-success my-1">Submit</button>
                <div className='my-2'>
                    OR
                </div>
                <div className='my-2'>
                    <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
                </div>
            </div>
        </>
    );
};

export default User;
