import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker px-4 pt-24">
            <div className="w-full max-w-md bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8 gradient-text">Sign Up</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
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
                                autoComplete="new-password"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none mt-2"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup; 