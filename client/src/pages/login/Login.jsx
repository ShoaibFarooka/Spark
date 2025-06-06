import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add your login API call here
        console.log('Login attempt with:', formData);

        // For now, we'll just redirect to dashboard
        // In a real app, you would check the login response first
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker px-4 pt-24">
            <div className="w-full max-w-md bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8 gradient-text">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none mt-2"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-white/70">
                        Don't have an account? <a href="/signup" className="font-medium text-primary hover:text-primary-light">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login; 