import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Placeholder data for the profile - replace with actual data from backend
const placeholderProfileData = {
    name: "John Doe",
    profileUrl: "john.sugarmatch.com",
    bio: "Successful, generous, and adventurous sugar daddy seeking a fun and open-minded companion to share exciting experiences and mutual generosity.",
    verification: {
        identity: true,
        liveness: true,
        socialMedia: true,
    },
    connectionScore: {
        overall: 4.8,
        reviews: 12,
        ratings: [
            { name: "Groomed", score: 5, icon: "🧼" },
            { name: "Hygiene", score: 5, icon: "🪥" },
            { name: "Fast to Meet In Person", score: 4.4, icon: "⚡" },
        ],
    },
    preferences: [
        { name: "Comfort with closeness & affection", score: 8, icon: "💏", description: "High comfort" },
        { name: "Discussion frequency", score: 7, icon: "💬", description: "Open to discussion, regular" },
        { name: "Mindset flexibility", score: 7, icon: "🧠", description: "Mild to moderate, open to new ideas" },
        { name: "Discretion required", score: 9, icon: "🕵️", description: "High discretion required" },
    ],
    boundaries: [
        "No extreme pain",
        "No public play",
        "No marks",
    ],
    arrangementPreferences: [
        { type: "Allowance", amount: "$1,000–$2,000/month", icon: "💵", notes: "Open to discussion" },
        { type: "PPM (Per Meet)", amount: "$400–$800", icon: "💳", notes: "Open to discussion" },
        { type: "Gifting", amount: "$300–$1,000", icon: "💰", notes: "Open to discussion" },
        { type: "Travel", amount: "Short trips & getaways", icon: "🧳", notes: "Open to discussion" },
        { type: "Activities", amount: "Dining out, events, shared activities", icon: "🎟", notes: "Open to discussion" },
        { type: "Frequency", amount: "Regular | Support per meet", icon: "🗓", notes: "Open to discussion" },
    ],
    lookingFor: [
        "Fun, positive, and open to new experiences",
        "Honest and clear communication",
        "Mutual chemistry & great sense of humor",
    ],
    availability: [
        { date: "June 3rd", times: [{ period: "AM", type: "Host", location: "My Place" }, { period: "PM", type: "Host", location: "My Place" }] },
        { date: "June 6th", times: [{ period: "Overnight", type: "Travel to You", location: "Open to Suggestions" }] },
    ],
    datingProfiles: [
        { name: "Seeking Profile", icon: "🔎" },
        { name: "Tinder Profile", icon: "💖" },
        { name: "SugarDaddy Meet Profile", icon: "👑" },
    ],
    latestMessage: {
        from: "Jane",
        content: "Hi John, I'd love to meet you on June 3rd in the evening. Are you free for dinner?",
        sentTime: "Today, 2:15 PM",
    },
    matchedProfiles: [
        { name: "Sophie", score: 4.9, reviews: 18, summary: "Fun, adventurous, and loves travel", icon: "👱‍♀️" },
        { name: "Emma", score: 4.8, reviews: 15, summary: "Ambitious, creative, and enjoys fine dining", icon: "👱‍♀️" },
        { name: "Lily", score: 4.7, reviews: 12, summary: "Open-minded, great sense of humour", icon: "👱‍♀️" },
    ],
    intimacyPreferences: [
        { name: "Physical affection", score: 8, icon: "🤗", description: "Enjoys cuddling and touch" },
        { name: "Communication about desires", score: 7, icon: "🗣️", description: "Open to discussing needs" },
        { name: "Trying new things", score: 6, icon: "🧪", description: "Willing to experiment" },
        { name: "Aftercare importance", score: 9, icon: "💖", description: "Values aftercare highly" },
    ],
};

const ResultsPage = () => {
    const [profileData, setProfileData] = useState(placeholderProfileData); // Use placeholder data initially
    const navigate = useNavigate();

    // State for editing Bio
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [editedBio, setEditedBio] = useState(profileData.bio);

    // State for editing Preferences & Boundaries
    const [isEditingPreferences, setIsEditingPreferences] = useState(false);
    const [editedPreferences, setEditedPreferences] = useState(profileData.preferences);
    const [editedBoundaries, setEditedBoundaries] = useState(profileData.boundaries);

    // State for editing Arrangement Preferences
    const [isEditingArrangement, setIsEditingArrangement] = useState(false);
    const [editedArrangement, setEditedArrangement] = useState(profileData.arrangementPreferences);

    // State for editing Looking For
    const [isEditingLookingFor, setIsEditingLookingFor] = useState(false);
    const [editedLookingFor, setEditedLookingFor] = useState(profileData.lookingFor);

    // State for editing Upcoming Availability
    const [isEditingAvailability, setIsEditingAvailability] = useState(false);
    const [editedAvailability, setEditedAvailability] = useState(profileData.availability);

    // State for editing My Dating Profiles
    const [isEditingDatingProfiles, setIsEditingDatingProfiles] = useState(false);
    const [editedDatingProfiles, setEditedDatingProfiles] = useState(profileData.datingProfiles);

    const [showVerifiedCard, setShowVerifiedCard] = useState(false);
    const [showConnectionScore, setShowConnectionScore] = useState(false);



    // Accordion state for Intimacy Preferences
    const [showIntimacy, setShowIntimacy] = useState(false);

    // Accordion state for Preferences & Boundaries and Arrangement & Expectations
    const [showPreferences, setShowPreferences] = useState(false);
    const [showArrangement, setShowArrangement] = useState(false);

    // State for editing Intimacy Preferences
    const [isEditingIntimacy, setIsEditingIntimacy] = useState(false);
    const [editedIntimacy, setEditedIntimacy] = useState(profileData.intimacyPreferences);

    // Accordion state for combined extra info
    const [showExtraInfo, setShowExtraInfo] = useState(false);
    // Add separate states for each section
    const [showLookingFor, setShowLookingFor] = useState(false);
    const [showAvailability, setShowAvailability] = useState(false);
    const [showDatingProfiles, setShowDatingProfiles] = useState(false);
    const [showLatestMessage, setShowLatestMessage] = useState(false);

    // Simulate generating a shareable URL (replace with actual backend logic)
    const [shareUrl, setShareUrl] = useState('');
    useEffect(() => {
        // In a real app, this would involve sending quiz answers to the backend
        // and receiving a unique URL for the generated profile.
        const generatedUrl = `https://${profileData.profileUrl}`;
        setShareUrl(generatedUrl);
    }, [profileData]);

    // Handle social sharing using Web Share API (if supported)
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${profileData.name}'s SugarMatch Profile!`,
                    text: profileData.bio,
                    url: shareUrl,
                });
                console.log('Profile shared successfully');
            } catch (error) {
                console.error('Error sharing profile:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            console.log('Web Share API not supported. Share URL:', shareUrl);
            alert(`Web Share API not supported. You can manually share this URL: ${shareUrl}`);
            // TODO: Implement copy-to-clipboard functionality
        }
    };

    // TODO: Implement authentication logic (e.g., redirect to Login/Signup)
    const handleAuthenticate = () => {
        console.log('Redirecting to authentication page...');
        navigate('/login'); // Navigate to the login page
    };

    // Handle My Dating Profiles edit actions
    const handleEditDatingProfiles = () => {
        setIsEditingDatingProfiles(true);
        setEditedDatingProfiles([...profileData.datingProfiles.map(profile => ({ ...profile }))]);
    };

    const handleSaveDatingProfiles = () => {
        // In a real app, you would send editedDatingProfiles to your backend
        console.log('Saving My Dating Profiles:', editedDatingProfiles);
        setProfileData(prevData => ({ ...prevData, datingProfiles: editedDatingProfiles }));
        setIsEditingDatingProfiles(false);
        // TODO: Add logic to call backend API to save the dating profiles
    };

    const handleCancelDatingProfiles = () => {
        setIsEditingDatingProfiles(false);
        setEditedDatingProfiles([...profileData.datingProfiles.map(profile => ({ ...profile }))]);
    };

    // Helper to update a single dating profile field
    const handleDatingProfileChange = (index, field, value) => {
        const updatedDatingProfiles = [...editedDatingProfiles];
        updatedDatingProfiles[index][field] = value;
        setEditedDatingProfiles(updatedDatingProfiles);
    };

    // Helper to add a dating profile
    const handleAddDatingProfile = () => {
        setEditedDatingProfiles([...editedDatingProfiles, { name: '', icon: '📄' }]);
    };

    // Helper to remove a dating profile
    const handleRemoveDatingProfile = (index) => {
        setEditedDatingProfiles(editedDatingProfiles.filter((_, i) => i !== index));
    };

    // Handle Intimacy Preferences edit actions
    const handleEditIntimacy = () => {
        setIsEditingIntimacy(true);
        setEditedIntimacy([...profileData.intimacyPreferences.map(pref => ({ ...pref }))]);
    };
    const handleSaveIntimacy = () => {
        setProfileData(prevData => ({ ...prevData, intimacyPreferences: editedIntimacy }));
        setIsEditingIntimacy(false);
    };
    const handleCancelIntimacy = () => {
        setIsEditingIntimacy(false);
        setEditedIntimacy([...profileData.intimacyPreferences.map(pref => ({ ...pref }))]);
    };
    const handleIntimacyChange = (index, field, value) => {
        const updated = [...editedIntimacy];
        updated[index][field] = field === 'score' ? parseInt(value) : value;
        setEditedIntimacy(updated);
    };

    return (
        <div className="min-h-screen bg-dark-darker flex flex-col">
            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-dark-darker/80 border-b border-white/10">
                <span className="text-white text-xl font-serif tracking-widest">Victoria Milan</span>
                <div className="flex items-center gap-2">
                    <span className="text-white/80 text-sm">Anonymous</span>
                    <span className="bg-red-500/80 text-white text-xs px-3 py-1 rounded-full font-semibold">Blur</span>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center pt-28 pb-8 px-2 w-full bg-dark-darker">
                {/* Profile Card */}
                <div className="w-full max-w-xl bg-dark-lighter/80 rounded-2xl shadow-sm p-6 border border-white/10 flex flex-col items-center mb-6 relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-4 shadow-lg">
                        <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-extrabold text-white">{profileData.name}</span>
                        <span className="text-red-400 text-xl">✔️</span>
                    </div>
                    {/* Bio (display only, no edit button) */}
                    <div className="w-full flex flex-col items-center">
                        <div className="flex justify-between items-center w-full mb-2">
                            <span className="text-white/80 text-lg">{profileData.bio}</span>
                        </div>
                    </div>
                    {/* Shareable Link Section */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-dark-lighter/80 rounded-xl p-4 mt-2 mb-2 shadow border border-white/10">
                        <div className="flex flex-col">
                            <span className="text-white font-semibold text-base mb-1">Profile URL:</span>
                            <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline text-sm break-all">{shareUrl}</a>
                        </div>
                        <button
                            onClick={handleShare}
                            className="mt-3 md:mt-0 md:ml-4 px-5 py-2 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold flex items-center gap-2 shadow-lg transition-all"
                        >
                            <span role="img" aria-label="link">🔗</span> Share Profile
                        </button>
                    </div>
                </div>
                {/* Scores Row */}
                <div className="flex items-center justify-center gap-10 mb-4">
                    <div className="flex flex-col items-center">
                        <span className="text-white/70 text-sm flex items-center gap-1"><span className="text-lg">🔗</span> Connection Score</span>
                        <span className="text-2xl text-white font-bold mt-1">{profileData.connectionScore ? profileData.connectionScore.overall * 20 : 82}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-white/70 text-sm flex items-center gap-1"><span className="text-lg">❤️</span> Intimacy Score</span>
                        <span className="text-2xl text-white font-bold mt-1">61</span>
                    </div>
                </div>
                {/* Request Button */}
                <button className="w-full max-w-md bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl text-lg mb-6 shadow-lg transition-all">
                    <span className="mr-2">🔒</span>Request Private Photo Access
                </button>
                {/* Quick Info Row */}
                <div className="flex flex-wrap justify-center gap-8 w-full max-w-2xl mb-6 text-white/80 text-center">
                    <div>
                        <div className="text-xs">Age</div>
                        <div className="text-lg font-semibold">30</div>
                    </div>
                    <div>
                        <div className="text-xs">Location</div>
                        <div className="text-lg font-semibold">City</div>
                    </div>
                    <div>
                        <div className="text-xs">Last Active</div>
                        <div className="text-lg font-semibold">1 hour ago</div>
                    </div>
                    <div>
                        <div className="text-xs">Profile Views</div>
                        <div className="text-lg font-semibold">4,531</div>
                    </div>
                </div>

                {/* Verified Card Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button
                        onClick={() => setShowVerifiedCard(prev => !prev)}
                        className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all"
                    >
                        <span>Verified Card</span>
                        <span className="text-xl">{showVerifiedCard ? '▲' : '▼'}</span>
                    </button>

                    {showVerifiedCard && (
                        <div className="bg-dark-lighter rounded-b-xl p-5 border-t border-white/10">
                            <div className="text-green-400 font-semibold text-base mb-4 flex items-center gap-2">
                                ✅ Verified Profile
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/60">🪪</span>
                                    <span>{profileData.verification.identity ? 'Identity Verified' : 'Not Verified'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white/60">📷</span>
                                    <span>{profileData.verification.liveness ? 'Liveness Verified' : 'Not Verified'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white/60">🌐</span>
                                    <span>{profileData.verification.socialMedia ? 'Social Media Verified' : 'Not Verified'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Connection Score Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button
                        onClick={() => setShowConnectionScore(prev => !prev)}
                        className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all"
                    >
                        <span>Connection Score</span>
                        <span className="text-xl">{showConnectionScore ? '▲' : '▼'}</span>
                    </button>

                    {showConnectionScore && (
                        <div className="bg-dark-lighter rounded-b-xl p-5 border-t border-white/10 space-y-4">
                            <div className="flex items-center gap-2 text-yellow-400 text-xl font-bold">
                                ⭐ {profileData.connectionScore.overall}/5
                                <span className="text-sm text-white/70 font-normal ml-2">({profileData.connectionScore.reviews} reviews)</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
                                {profileData.connectionScore.ratings.map((rating, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-xl">{rating.icon}</span>
                                        <span className="whitespace-nowrap">{rating.name} {rating.score}/5</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>


                {/* Preferences & Boundaries */}
                <div className="w-full max-w-xl mb-4">
                    <div className="bg-dark-lighter/80 rounded-xl shadow border border-white/10">
                        <button
                            onClick={() => setShowPreferences(prev => !prev)}
                            className="w-full flex items-center justify-between p-5 rounded-t-xl text-white text-lg font-semibold focus:outline-none"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-xl">⚙️</span> Preferences & Boundaries
                            </span>
                            <span className="text-xl">{showPreferences ? '▲' : '▼'}</span>
                        </button>
                        {showPreferences && (
                            <div className="p-5 pt-0 bg-dark-lighter">
                                <div className="space-y-3">
                                    {profileData.preferences.map((pref, index) => (
                                        <div key={index} className="flex items-center gap-2 text-white/90">
                                            <span className="text-xl">{pref.icon}</span>
                                            <span>{pref.description}</span>
                                            <span className="ml-2 text-primary font-semibold">({pref.score}/10)</span>
                                        </div>
                                    ))}
                                    <div className="mt-4">
                                        <span className="font-bold text-white block mb-1 text-left">Boundaries:</span>
                                        <ul className="list-disc text-white/80 ml-7 space-y-1 text-left">
                                            {profileData.boundaries.map((b, index) => (
                                                <li key={index}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Arrangement & Expectations */}
                <div className="w-full max-w-xl mb-4">
                    <div className="bg-dark-lighter/80 rounded-xl shadow border border-white/10">
                        <button
                            onClick={() => setShowArrangement(prev => !prev)}
                            className="w-full flex items-center justify-between p-5 rounded-t-xl text-white text-lg font-semibold focus:outline-none"
                        >
                            <span className="flex items-center gap-2 truncate max-w-[80%]">
                                <span className="text-xl">❤️</span>
                                <span className="truncate">Arrangement & Expectations</span>
                            </span>
                            <span className="text-xl">{showArrangement ? '▲' : '▼'}</span>
                        </button>
                        {showArrangement && (
                            <div className="p-5 pt-0 bg-dark-lighter">
                                <div className="space-y-3">
                                    {profileData.arrangementPreferences.map((arr, index) => (
                                        <div key={index} className="flex items-center gap-2 text-white/90">
                                            <span className="text-xl">{arr.icon}</span>
                                            <span className="font-semibold">{arr.type}:</span>
                                            <span className="ml-2 text-primary font-semibold">{arr.amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Intimacy Preferences Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button onClick={() => setShowIntimacy(v => !v)} className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all">
                        <span>Intimacy Preferences</span>
                        <span className="text-xl">{showIntimacy ? '▲' : '▼'}</span>
                    </button>
                    {showIntimacy && (
                        <div className="bg-dark-darker/80 rounded-b-xl p-4 border-t border-white/10">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-white">&nbsp;</h3>
                            </div>
                            <div className="space-y-3">
                                {profileData.intimacyPreferences.map((pref, index) => (
                                    <div key={index} className="flex items-center gap-2 text-white/90">
                                        <span className="text-xl flex items-center justify-center">{pref.icon}</span>
                                        <span>{pref.description}</span>
                                        <span className="ml-2 text-primary font-semibold">({pref.score}/10)</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Looking For Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button onClick={() => setShowLookingFor(v => !v)} className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all">
                        <span>Looking For</span>
                        <span className="text-xl">{showLookingFor ? '▲' : '▼'}</span>
                    </button>
                    {showLookingFor && (
                        <div className="bg-dark-lighter rounded-b-xl p-4 border-t border-white/10">
                            <ul className="list-disc list-inside text-white/80 pl-4">
                                {profileData.lookingFor.map((item, index) => (
                                    <li key={index}>✅ {item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {/* Upcoming Availability Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button onClick={() => setShowAvailability(v => !v)} className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all">
                        <span>Upcoming Availability</span>
                        <span className="text-xl">{showAvailability ? '▲' : '▼'}</span>
                    </button>
                    {showAvailability && (
                        <div className="bg-dark-lighter rounded-b-xl p-4 border-t border-white/10">
                            <div className="space-y-4 text-white/80">
                                {profileData.availability.map((day, index) => (
                                    <div key={index}>
                                        <span className="font-medium text-white">🗓 {day.date}:</span>
                                        <div className="ml-6 space-y-2">
                                            {day.times.map((time, timeIndex) => (
                                                <span key={timeIndex} className="block">🕰 {time.period} <span className="text-white/70">({time.type} | 📍 {time.location})</span></span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <span className="font-medium text-white">🗓 Suggest a Meetup: <span className="text-primary">Let's plan something special</span></span>
                            </div>
                        </div>
                    )}
                </div>
                {/* My Dating Profiles Accordion */}
                <div className="w-full max-w-xl mb-4">
                    <button onClick={() => setShowDatingProfiles(v => !v)} className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all">
                        <span>My Dating Profiles</span>
                        <span className="text-xl">{showDatingProfiles ? '▲' : '▼'}</span>
                    </button>
                    {showDatingProfiles && (
                        <div className="bg-dark-lighter rounded-b-xl p-4 border-t border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                                {profileData.datingProfiles.map((profile, index) => (
                                    <span key={index}>{profile.icon} {profile.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Latest Message Accordion */}
                <div className="w-full max-w-xl mb-8">
                    <button onClick={() => setShowLatestMessage(v => !v)} className="w-full flex items-center justify-between bg-dark-lighter/80 rounded-xl p-4 text-white font-semibold text-lg border border-white/10 hover:bg-dark-lighter/90 transition-all">
                        <span>Latest Message</span>
                        <span className="text-xl">{showLatestMessage ? '▲' : '▼'}</span>
                    </button>
                    {showLatestMessage && (
                        <div className="bg-dark-lighter rounded-b-xl p-4 border-t border-white/10">
                            <span className="font-medium text-white mb-2 block">💬 {profileData.latestMessage.from} <span className="text-white/70 text-sm">— (Sent: {profileData.latestMessage.sentTime})</span></span>
                            <span className="text-white/80">{profileData.latestMessage.content}</span>
                            <button className="mt-4 px-6 py-2 rounded-full text-sm font-medium text-white bg-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">➡️ Reply here</button>
                        </div>
                    )}
                </div>
                {/* Top Matches */}
                <div className="w-full max-w-2xl mb-8">
                    <h3 className="text-white text-xl font-bold mb-4">Top 3 Sugar Babies Who Match Your Profile</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {profileData.matchedProfiles.map((match, index) => (
                            <div key={index} className="bg-dark-lighter/80 rounded-xl p-4 flex flex-col items-center shadow border border-white/10">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-3">
                                    <div className="w-full h-full rounded-full bg-dark-darker flex items-center justify-center text-3xl opacity-60 blur-sm">{match.icon}</div>
                                </div>
                                <div className="text-white font-semibold mb-1">{match.name}</div>
                                <p className="text-white/70 text-sm mb-2">⭐ {match.score}/5 ({match.reviews} reviews)</p>
                                <p className="text-white/80 text-sm leading-relaxed mb-2">✨ {match.summary}</p>
                                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg text-base mt-2 transition-all">Message</button>
                                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg text-base mt-2 transition-all" onClick={() => {/* TODO: Add view profile logic */ }}>View Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage; 