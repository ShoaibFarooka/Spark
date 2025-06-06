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

    // Handle Bio edit actions
    const handleEditBio = () => {
        setIsEditingBio(true);
        setEditedBio(profileData.bio); // Load current bio into edit state
    };

    const handleSaveBio = () => {
        // In a real app, you would send editedBio to your backend here
        console.log('Saving Bio:', editedBio);
        setProfileData(prevData => ({ ...prevData, bio: editedBio })); // Update local state
        setIsEditingBio(false);
        // TODO: Add logic to call backend API to save the bio
    };

    const handleCancelBio = () => {
        setIsEditingBio(false);
        setEditedBio(profileData.bio); // Revert to original bio
    };

    // Handle Preferences & Boundaries edit actions
    const handleEditPreferences = () => {
        setIsEditingPreferences(true);
        // Deep copy the arrays to avoid modifying the original state directly
        setEditedPreferences([...profileData.preferences.map(pref => ({ ...pref }))]);
        setEditedBoundaries([...profileData.boundaries]);
    };

    const handleSavePreferences = () => {
        // In a real app, you would send editedPreferences and editedBoundaries to your backend
        console.log('Saving Preferences & Boundaries:', { preferences: editedPreferences, boundaries: editedBoundaries });
        setProfileData(prevData => ({ ...prevData, preferences: editedPreferences, boundaries: editedBoundaries })); // Update local state
        setIsEditingPreferences(false);
        // TODO: Add logic to call backend API to save the preferences and boundaries
    };

    const handleCancelPreferences = () => {
        setIsEditingPreferences(false);
        // Revert to original preferences and boundaries
        setEditedPreferences([...profileData.preferences.map(pref => ({ ...pref }))]);
        setEditedBoundaries([...profileData.boundaries]);
    };

    // Helper to update a single preference score
    const handlePreferenceScoreChange = (index, value) => {
        const updatedPreferences = [...editedPreferences];
        updatedPreferences[index].score = parseInt(value);
        setEditedPreferences(updatedPreferences);
    };

    // Helper to update a single boundary
    const handleBoundaryChange = (index, value) => {
        const updatedBoundaries = [...editedBoundaries];
        updatedBoundaries[index] = value;
        setEditedBoundaries(updatedBoundaries);
    };

    // Helper to add a boundary
    const handleAddBoundary = () => {
        setEditedBoundaries([...editedBoundaries, '']);
    };

    // Helper to remove a boundary
    const handleRemoveBoundary = (index) => {
        setEditedBoundaries(editedBoundaries.filter((_, i) => i !== index));
    };

    // Handle Arrangement Preferences edit actions
    const handleEditArrangement = () => {
        setIsEditingArrangement(true);
        setEditedArrangement([...profileData.arrangementPreferences.map(item => ({ ...item }))]);
    };

    const handleSaveArrangement = () => {
        // In a real app, you would send editedArrangement to your backend
        console.log('Saving Arrangement Preferences:', editedArrangement);
        setProfileData(prevData => ({ ...prevData, arrangementPreferences: editedArrangement }));
        setIsEditingArrangement(false);
        // TODO: Add logic to call backend API to save the arrangement preferences
    };

    const handleCancelArrangement = () => {
        setIsEditingArrangement(false);
        setEditedArrangement([...profileData.arrangementPreferences.map(item => ({ ...item }))]);
    };

    // Helper to update a single arrangement preference
    const handleArrangementChange = (index, field, value) => {
        const updatedArrangement = [...editedArrangement];
        updatedArrangement[index][field] = value;
        setEditedArrangement(updatedArrangement);
    };

    // Helper to add an arrangement preference
    const handleAddArrangement = () => {
        setEditedArrangement([...editedArrangement, { type: '', amount: '', icon: '📄', notes: '' }]);
    };

    // Helper to remove an arrangement preference
    const handleRemoveArrangement = (index) => {
        setEditedArrangement(editedArrangement.filter((_, i) => i !== index));
    };

    // Handle Looking For edit actions
    const handleEditLookingFor = () => {
        setIsEditingLookingFor(true);
        setEditedLookingFor([...profileData.lookingFor]);
    };

    const handleSaveLookingFor = () => {
        // In a real app, you would send editedLookingFor to your backend
        console.log('Saving Looking For:', editedLookingFor);
        setProfileData(prevData => ({ ...prevData, lookingFor: editedLookingFor }));
        setIsEditingLookingFor(false);
        // TODO: Add logic to call backend API to save the looking for items
    };

    const handleCancelLookingFor = () => {
        setIsEditingLookingFor(false);
        setEditedLookingFor([...profileData.lookingFor]);
    };

    // Helper to update a single Looking For item
    const handleLookingForChange = (index, value) => {
        const updatedLookingFor = [...editedLookingFor];
        updatedLookingFor[index] = value;
        setEditedLookingFor(updatedLookingFor);
    };

    // Helper to add a Looking For item
    const handleAddLookingFor = () => {
        setEditedLookingFor([...editedLookingFor, '']);
    };

    // Helper to remove a Looking For item
    const handleRemoveLookingFor = (index) => {
        setEditedLookingFor(editedLookingFor.filter((_, i) => i !== index));
    };

    // Handle Upcoming Availability edit actions
    const handleEditAvailability = () => {
        setIsEditingAvailability(true);
        setEditedAvailability([...profileData.availability.map(day => ({ ...day, times: [...day.times.map(time => ({ ...time }))] }))]);
    };

    const handleSaveAvailability = () => {
        // In a real app, you would send editedAvailability to your backend
        console.log('Saving Upcoming Availability:', editedAvailability);
        setProfileData(prevData => ({ ...prevData, availability: editedAvailability }));
        setIsEditingAvailability(false);
        // TODO: Add logic to call backend API to save the availability
    };

    const handleCancelAvailability = () => {
        setIsEditingAvailability(false);
        setEditedAvailability([...profileData.availability.map(day => ({ ...day, times: [...day.times.map(time => ({ ...time }))] }))]);
    };

    // Helper to update a single availability field
    const handleAvailabilityChange = (dayIndex, timeIndex, field, value) => {
        const updatedAvailability = [...editedAvailability];
        if (timeIndex === null) {
            // Editing the date field for a day
            updatedAvailability[dayIndex][field] = value;
        } else {
            // Editing a time slot field for a day
            updatedAvailability[dayIndex].times[timeIndex][field] = value;
        }
        setEditedAvailability(updatedAvailability);
    };

    // Helper to add a day to availability
    const handleAddAvailabilityDay = () => {
        setEditedAvailability([...editedAvailability, { date: '', times: [] }]);
    };

    // Helper to remove a day from availability
    const handleRemoveAvailabilityDay = (dayIndex) => {
        setEditedAvailability(editedAvailability.filter((_, i) => i !== dayIndex));
    };

    // Helper to add a time slot to a specific day
    const handleAddAvailabilityTime = (dayIndex) => {
        const updatedAvailability = [...editedAvailability];
        updatedAvailability[dayIndex].times.push({ period: '', type: '', location: '' });
        setEditedAvailability(updatedAvailability);
    };

    // Helper to remove a time slot from a specific day
    const handleRemoveAvailabilityTime = (dayIndex, timeIndex) => {
        const updatedAvailability = [...editedAvailability];
        updatedAvailability[dayIndex].times = updatedAvailability[dayIndex].times.filter((_, i) => i !== timeIndex);
        setEditedAvailability(updatedAvailability);
    };

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker px-4 py-8 pt-24">
            <div className="max-w-4xl mx-auto">

                {/* Profile Header */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-extrabold text-white mb-4 gradient-text">{profileData.name}'s SugarMatch Profile</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/70 text-sm mb-1">Profile URL:</p>
                                <a href={`https://${profileData.profileUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light font-medium break-words">{shareUrl}</a>
                            </div>
                            <button
                                onClick={handleShare}
                                className="px-6 py-2 rounded-full text-sm font-medium text-white bg-accent hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20 border-none outline-none focus:outline-none ml-4"
                            >
                                🔗 Share Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Bio</h3>
                            {!isEditingBio ? (
                                <button
                                    onClick={handleEditBio}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveBio}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelBio}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingBio ? (
                            <textarea
                                value={editedBio}
                                onChange={(e) => setEditedBio(e.target.value)}
                                className="w-full h-32 px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 resize-none"
                            />
                        ) : (
                            <p className="text-white/80 leading-relaxed">{profileData.bio}</p>
                        )}
                    </div>
                </div>

                {/* Verification Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4">Verified Card</h3>
                        <div className="flex items-center text-green-400 font-semibold mb-4">
                            ✅ Verified Profile
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                            <p>{'🪪'} Identity Verified</p>
                            <p>{'📷'} Liveness Verified</p>
                            <p>{'🌐'} Social Media Verified</p>
                        </div>
                    </div>
                </div>

                {/* Connection Score Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4">Connection Score</h3>
                        <p className="text-white/90 text-2xl font-bold mb-4">⭐ {profileData.connectionScore.overall}/5 <span className="text-white/70 text-sm">({profileData.connectionScore.reviews} reviews)</span></p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                            {profileData.connectionScore.ratings.map((rating, index) => (
                                <p key={index}> {rating.icon} {rating.name} {rating.score}/5</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preferences & Boundaries Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Preferences & Boundaries</h3>
                            {!isEditingPreferences ? (
                                <button
                                    onClick={handleEditPreferences}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSavePreferences}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelPreferences}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingPreferences ? (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                                    {editedPreferences.map((pref, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-xl">{pref.icon}</span>
                                            <span className="flex-1">{pref.name}:</span>
                                            <input
                                                type="number"
                                                min="0"
                                                max="10"
                                                value={pref.score}
                                                onChange={(e) => handlePreferenceScoreChange(index, e.target.value)}
                                                className="w-16 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                                            />
                                            <span className="text-white/70">/10</span>
                                        </div>
                                    ))}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2 mt-4">Boundaries:</h4>
                                <div className="space-y-2">
                                    {editedBoundaries.map((boundary, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={boundary}
                                                onChange={(e) => handleBoundaryChange(index, e.target.value)}
                                                className="flex-1 px-4 py-2 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                                            />
                                            <button
                                                onClick={() => handleRemoveBoundary(index)}
                                                className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={handleAddBoundary}
                                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                >
                                    Add Boundary
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-white/80">
                                    {profileData.preferences.map((pref, index) => (
                                        <p key={index}>{pref.icon} {pref.description} <span className="font-medium text-primary">({pref.score}/10)</span></p>
                                    ))}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Boundaries:</h4>
                                <ul className="list-disc list-inside text-white/80 pl-4">
                                    {profileData.boundaries.map((boundary, index) => (
                                        <li key={index}>{boundary}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                {/* Arrangement Preferences Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Arrangement Preferences</h3>
                            {!isEditingArrangement ? (
                                <button
                                    onClick={handleEditArrangement}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveArrangement}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelArrangement}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingArrangement ? (
                            <div className="space-y-4">
                                {editedArrangement.map((arr, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-dark-darker/50 rounded-lg p-3">
                                        <div className="flex items-center gap-2 flex-grow">
                                            <span className="text-xl">{arr.icon}</span>
                                            <input
                                                type="text"
                                                value={arr.type}
                                                onChange={(e) => handleArrangementChange(index, 'type', e.target.value)}
                                                placeholder="Type (e.g., Allowance)"
                                                className="flex-1 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                            />
                                            <input
                                                type="text"
                                                value={arr.amount}
                                                onChange={(e) => handleArrangementChange(index, 'amount', e.target.value)}
                                                placeholder="Amount (e.g., $1000/month)"
                                                className="flex-1 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={arr.notes}
                                            onChange={(e) => handleArrangementChange(index, 'notes', e.target.value)}
                                            placeholder="Notes (e.g., Open to discussion)"
                                            className="w-full sm:w-1/3 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                        />
                                        <button
                                            onClick={() => handleRemoveArrangement(index)}
                                            className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddArrangement}
                                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                >
                                    Add Preference
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                                {profileData.arrangementPreferences.map((arr, index) => (
                                    <div key={index}>
                                        <p className="font-medium text-white">{arr.icon} {arr.type}: <span className="text-primary">{arr.amount}</span></p>
                                        <p className="text-sm text-white/70 ml-6">{arr.notes}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Looking For Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Looking For</h3>
                            {!isEditingLookingFor ? (
                                <button
                                    onClick={handleEditLookingFor}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveLookingFor}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelLookingFor}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingLookingFor ? (
                            <div className="space-y-2">
                                {editedLookingFor.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-green-400">✅</span>
                                        <input
                                            type="text"
                                            value={item}
                                            onChange={(e) => handleLookingForChange(index, e.target.value)}
                                            className="flex-1 px-4 py-2 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                                        />
                                        <button
                                            onClick={() => handleRemoveLookingFor(index)}
                                            className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddLookingFor}
                                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                >
                                    Add Item
                                </button>
                            </div>
                        ) : (
                            <ul className="list-disc list-inside text-white/80 pl-4">
                                {profileData.lookingFor.map((item, index) => (
                                    <li key={index}>✅ {item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Upcoming Availability Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Upcoming Availability</h3>
                            {!isEditingAvailability ? (
                                <button
                                    onClick={handleEditAvailability}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveAvailability}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelAvailability}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingAvailability ? (
                            <div className="space-y-4">
                                {editedAvailability.map((day, dayIndex) => (
                                    <div key={dayIndex} className="bg-dark-darker/50 rounded-lg p-4 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">🗓</span>
                                            <input
                                                type="text"
                                                value={day.date}
                                                onChange={(e) => handleAvailabilityChange(dayIndex, null, 'date', e.target.value)}
                                                placeholder="Date (e.g., June 3rd)"
                                                className="flex-1 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                            />
                                            <button
                                                onClick={() => handleRemoveAvailabilityDay(dayIndex)}
                                                className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                            >
                                                Remove Day
                                            </button>
                                        </div>
                                        <div className="ml-6 space-y-2">
                                            {day.times.map((time, timeIndex) => (
                                                <div key={timeIndex} className="flex flex-wrap items-center gap-2">
                                                    <span className="text-white/70">🕰</span>
                                                    <input
                                                        type="text"
                                                        value={time.period}
                                                        onChange={(e) => handleAvailabilityChange(dayIndex, timeIndex, 'period', e.target.value)}
                                                        placeholder="Period (e.g., AM, PM, Overnight)"
                                                        className="w-24 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={time.type}
                                                        onChange={(e) => handleAvailabilityChange(dayIndex, timeIndex, 'type', e.target.value)}
                                                        placeholder="Type (e.g., Host, Travel)"
                                                        className="w-20 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={time.location}
                                                        onChange={(e) => handleAvailabilityChange(dayIndex, timeIndex, 'location', e.target.value)}
                                                        placeholder="Location (e.g., My Place)"
                                                        className="flex-1 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                                    />
                                                    <button
                                                        onClick={() => handleRemoveAvailabilityTime(dayIndex, timeIndex)}
                                                        className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                                    >
                                                        Remove Time
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => handleAddAvailabilityTime(dayIndex)}
                                                className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                            >
                                                Add Time Slot
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddAvailabilityDay}
                                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                >
                                    Add Day
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4 text-white/80">
                                {profileData.availability.map((day, index) => (
                                    <div key={index}>
                                        <p className="font-medium text-white">🗓 {day.date}:</p>
                                        <div className="ml-6 space-y-2">
                                            {day.times.map((time, timeIndex) => (
                                                <p key={timeIndex}>🕰 {time.period} <span className="text-white/70">({time.type} | 📍 {time.location})</span></p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <p className="font-medium text-white">🗓 Suggest a Meetup: <span className="text-primary">Let's plan something special</span></p>
                            </div>
                        )}
                    </div>
                </div>

                {/* My Dating Profiles Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">My Dating Profiles</h3>
                            {!isEditingDatingProfiles ? (
                                <button
                                    onClick={handleEditDatingProfiles}
                                    className="text-white text-sm px-3 py-1 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    Edit
                                </button>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveDatingProfiles}
                                        className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelDatingProfiles}
                                        className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditingDatingProfiles ? (
                            <div className="space-y-2">
                                {editedDatingProfiles.map((profile, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={profile.icon}
                                            onChange={(e) => handleDatingProfileChange(index, 'icon', e.target.value)}
                                            placeholder="Icon (e.g., 🔎)"
                                            className="w-16 px-2 py-1 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300 text-sm"
                                        />
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => handleDatingProfileChange(index, 'name', e.target.value)}
                                            placeholder="Profile Name (e.g., Seeking Profile)"
                                            className="flex-1 px-4 py-2 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                                        />
                                        <button
                                            onClick={() => handleRemoveDatingProfile(index)}
                                            className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded-full border border-red-400/50 hover:border-red-300 transition-colors duration-200"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddDatingProfile}
                                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-full border border-green-400/50 hover:border-green-300 transition-colors duration-200 mt-2"
                                >
                                    Add Profile
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                                {profileData.datingProfiles.map((profile, index) => (
                                    <p key={index}>{profile.icon} {profile.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Latest Message Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative mb-8">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4">Latest Message</h3>
                        <div className="text-white/80">
                            <p className="font-medium text-white mb-2">💬 {profileData.latestMessage.from} <span className="text-white/70 text-sm">— (Sent: {profileData.latestMessage.sentTime})</span></p>
                            <p>{profileData.latestMessage.content}</p>
                            <button className="mt-4 px-6 py-2 rounded-full text-sm font-medium text-white bg-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none">
                                ➡️ Reply here
                            </button>
                        </div>
                    </div>
                </div>

                {/* Top Matches Section */}
                <div className="bg-dark-lighter/80 rounded-2xl shadow-2xl p-6 border border-white/10 relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-6">Top 3 Sugar Babies Who Match Your Profile</h3>
                        <p className="text-white/70 text-sm mb-6">Connect and message these matches now!</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {profileData.matchedProfiles.map((match, index) => (
                                <div key={index} className="bg-dark-darker/50 rounded-lg p-4 flex flex-col items-center text-center">
                                    {/* Profile Pic Placeholder */}
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-4">
                                        <div className="w-full h-full rounded-full bg-dark-darker flex items-center justify-center text-3xl">{match.icon}</div>
                                    </div>
                                    {/* Profile Info and Summary - Add flex-grow to align buttons */}
                                    <div className="flex flex-col items-center flex-grow mb-4">
                                        <h4 className="text-white font-medium mb-1">{match.name}</h4>
                                        <p className="text-white/70 text-sm mb-2">⭐ {match.score}/5 ({match.reviews} reviews)</p>
                                        <p className="text-white/80 text-sm leading-relaxed">✨ {match.summary}</p>
                                    </div>
                                    {/* Buttons - Ensure they are aligned at the bottom */}
                                    <button className="w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none mb-2">
                                        💬 Message {match.name}
                                    </button>
                                    <button className="w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-dark-darker/80 hover:bg-dark-darker/90 transition-all duration-300 border border-white/10 outline-none focus:outline-none">
                                        🔍 View Profile
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA for Authentication - Kept for now, can be removed if profile is only for logged-in users */}
                {/* <div className="w-full flex justify-center mt-8">
                         <button
                            onClick={handleAuthenticate}
                            className="w-full max-w-sm px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                        >
                            Sign Up / Login to Save Profile
                        </button>
                    </div> */}
            </div>
        </div>
    );
};

export default ResultsPage; 