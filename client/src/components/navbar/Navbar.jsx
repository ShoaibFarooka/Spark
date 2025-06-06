import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <nav className="fixed w-full bg-dark-lighter/20 backdrop-blur-xl z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-3xl font-bold gradient-text">
                                Spark
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <button onClick={() => navigate('/login')} className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                                Login
                            </button>
                            <button onClick={() => navigate('/signup')} className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile hamburger button - fixed and always visible */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="fixed top-5 right-5 z-[100] inline-flex flex-col items-center justify-center p-2 rounded-full text-white/90 hover:text-white hover:bg-white/5 border-none outline-none focus:outline-none transition-all duration-300"
                >
                    <span className="relative w-7 h-7 flex flex-col justify-center items-center">
                        <span className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3.5' : 'top-2'}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-3.5'}`}></span>
                        <span className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3.5' : 'top-5'}`}></span>
                    </span>
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 bottom-0 right-0 z-50 w-64 bg-dark-lighter/70 backdrop-blur-xl shadow-xl transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden h-screen`}>
                <div className="px-6 pt-24 pb-6 flex flex-col items-center space-y-4">
                    <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className="px-4 py-2 rounded-full text-sm font-medium w-28 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                        Login
                    </button>
                    <button onClick={() => { setIsMenuOpen(false); navigate('/signup'); }} className="px-4 py-2 rounded-full text-sm font-medium w-28 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                        Sign Up
                    </button>
                </div>
            </div>
            {/* Overlay to close sidebar when clicking outside */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ pointerEvents: 'auto' }}
                ></div>
            )}
        </nav>
    )
}

export default Navbar 