import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative pt-32 pb-40 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-darker via-dark-lighter to-dark-darker opacity-90"></div>
            </div>
            <div className="w-full px-4 sm:px-8 relative">
                <div className="text-center">
                    <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                        <span className="block">Discover Your</span>
                        <span className="block gradient-text mt-2">
                            Perfect Profile
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-white/80 leading-relaxed">
                        Take our quick quiz and get a personalized profile that truly represents you.
                        Share your unique story with the world through a beautiful, shareable profile.
                    </p>
                    <div className="mt-10 max-w-md mx-auto flex flex-col items-center sm:flex-row sm:justify-center md:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => navigate('/quiz')} className="w-40 sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                            Get Started
                        </button>
                        <button className="w-40 sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 