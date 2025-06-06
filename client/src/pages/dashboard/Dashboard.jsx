import React from 'react';

const Dashboard = () => {
    // Placeholder user data - replace with actual user data from your backend
    const userData = {
        name: "John Doe",
        email: "john@example.com",
        joinDate: "January 2024",
        badges: [
            { name: "Quiz Master", description: "Completed 10 quizzes", icon: "🏆" },
            { name: "Quick Learner", description: "Completed a quiz in under 5 minutes", icon: "⚡" },
            { name: "Perfect Score", description: "Achieved 100% in a quiz", icon: "🎯" }
        ],
        stats: {
            quizzesCompleted: 15,
            averageScore: 85,
            totalTimeSpent: "2h 30m"
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker px-4 py-8 pt-24">
            <div className="max-w-6xl mx-auto">
                {/* Profile Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Profile Picture */}
                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                                <div className="w-full h-full rounded-full bg-dark-darker flex items-center justify-center text-4xl">
                                    👤
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-2xl font-bold text-white mb-2">{userData.name}</h1>
                                <p className="text-white/70 mb-1">{userData.email}</p>
                                <p className="text-white/50 text-sm">Member since {userData.joinDate}</p>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="bg-dark-darker/50 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-primary">{userData.stats.quizzesCompleted}</p>
                                        <p className="text-white/70 text-sm">Quizzes</p>
                                    </div>
                                    <div className="bg-dark-darker/50 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-primary">{userData.stats.averageScore}%</p>
                                        <p className="text-white/70 text-sm">Avg. Score</p>
                                    </div>
                                    <div className="bg-dark-darker/50 rounded-lg p-4 text-center">
                                        <p className="text-2xl font-bold text-primary">{userData.stats.totalTimeSpent}</p>
                                        <p className="text-white/70 text-sm">Time Spent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badges Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {userData.badges.map((badge, index) => (
                                <div key={index} className="bg-dark-darker/50 rounded-lg p-4 flex items-center gap-4">
                                    <div className="text-4xl">{badge.icon}</div>
                                    <div>
                                        <h3 className="text-white font-medium">{badge.name}</h3>
                                        <p className="text-white/70 text-sm">{badge.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Future Features Placeholder */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold text-white mb-6">Coming Soon</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-dark-darker/50 rounded-lg p-6">
                                <h3 className="text-white font-medium mb-2">Quiz History</h3>
                                <p className="text-white/70 text-sm">View your past quiz attempts and track your progress over time.</p>
                            </div>
                            <div className="bg-dark-darker/50 rounded-lg p-6">
                                <h3 className="text-white font-medium mb-2">Custom Quizzes</h3>
                                <p className="text-white/70 text-sm">Create and share your own quizzes with the community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard; 