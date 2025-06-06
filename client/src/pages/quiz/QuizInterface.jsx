import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

// Example quiz questions structure (replace with your actual questions)
const quizQuestions = [
    {
        id: 1,
        text: 'What is your favorite color?',
        type: 'text', // text, dropdown, checkbox, slider
        options: [], // Used for dropdown and checkbox
        // Slider options can include min, max, step
    },
    {
        id: 2,
        text: 'Which genres do you prefer?',
        type: 'checkbox',
        options: ['Fiction', 'Non-fiction', 'Science Fiction', 'Fantasy'],
    },
    {
        id: 3,
        text: 'How much do you enjoy reading on a scale of 1 to 10?',
        type: 'slider',
        options: { min: 1, max: 10, step: 1 },
    },
    {
        id: 4,
        text: 'What is your preferred learning style?',
        type: 'dropdown',
        options: ['Visual', 'Auditory', 'Kinesthetic', 'Reading/Writing'],
    },
    {
        id: 5,
        text: 'Tell us something interesting about yourself:',
        type: 'text',
        options: [],
    },
];

const QuizInterface = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // Store answers keyed by question id
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const navigate = useNavigate();

    // Test message function
    const testMessage = () => {
        message.info('This is a test message');
    };

    // Handle input changes
    const handleAnswerChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    // Handle checkbox changes (for multiple selections)
    const handleCheckboxChange = (questionId, option) => {
        const currentAnswers = answers[questionId] || [];
        if (currentAnswers.includes(option)) {
            setAnswers({
                ...answers,
                [questionId]: currentAnswers.filter(item => item !== option),
            });
        } else {
            setAnswers({
                ...answers,
                [questionId]: [...currentAnswers, option],
            });
        }
    };

    // Check if current question is answered
    const isQuestionAnswered = (question, currentAnswers) => {
        const answer = currentAnswers[question.id];
        switch (question.type) {
            case 'text':
            case 'dropdown':
            case 'slider': // For slider, check if value is not the default min or exists
                return answer !== undefined && answer !== null && answer !== '';
            case 'checkbox':
                return Array.isArray(answer) && answer.length > 0;
            default:
                return false;
        }
    };

    // Navigation
    const goToNextQuestion = () => {
        if (!isQuestionAnswered(currentQuestion, answers)) {
            message.open({
                type: 'warning',
                content: 'Please answer the current question before proceeding.',
                duration: 3,
            });
            return;
        }
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;

    // Progress Calculation
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    // Render input based on question type
    const renderInput = (question) => {
        switch (question.type) {
            case 'text':
                return (
                    <input
                        type="text"
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                    />
                );
            case 'dropdown':
                // TODO: Integrate react-select for better styling and features
                return (
                    <select
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-dark-darker/80 text-white border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition duration-300"
                    >
                        <option value="">Select an option</option>
                        {question.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                );
            case 'checkbox':
                return (
                    <div className="flex flex-col space-y-2">
                        {question.options.map((option, index) => (
                            <label key={index} className="inline-flex items-center text-white/80">
                                <input
                                    type="checkbox"
                                    checked={(answers[question.id] || []).includes(option)}
                                    onChange={() => handleCheckboxChange(question.id, option)}
                                    className="form-checkbox h-5 w-5 text-primary bg-dark-darker border-white/20 rounded focus:ring-primary/40 transition duration-300"
                                />
                                <span className="ml-2">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            case 'slider':
                // TODO: Integrate react-slider for better styling and functionality
                return (
                    <div className="flex items-center space-x-4">
                        <input
                            type="range"
                            min={question.options.min}
                            max={question.options.max}
                            step={question.options.step}
                            value={answers[question.id] || question.options.min}
                            onChange={(e) => handleAnswerChange(question.id, parseInt(e.target.value))}
                            className="w-full h-2 bg-dark-darker/80 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <span className="text-white font-medium w-10 text-right">{answers[question.id] || question.options.min}</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker px-4 py-8">
            <div className="w-full max-w-2xl bg-dark-lighter/80 rounded-2xl shadow-sm p-8 border border-white/10 relative mt-24">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-40 blur-lg z-0"></div>
                <div className="relative z-10 flex flex-col items-center">

                    {/* Progress Indicator */}
                    <div className="w-full mb-8">
                        <div className="w-full bg-dark-darker rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-right text-sm text-white/70 mt-2">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
                    </div>

                    {/* Question Text */}
                    <h3 className="text-xl font-bold text-white text-center mb-6">{currentQuestion.text}</h3>

                    {/* Input Area */}
                    <div className="w-full mb-8">
                        {renderInput(currentQuestion)}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col-reverse items-center w-full gap-4 sm:flex-row sm:justify-between">
                        <button
                            onClick={goToPreviousQuestion}
                            disabled={isFirstQuestion}
                            className={`w-[200px] px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none ${isFirstQuestion ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {/* TODO: Add Back icon */}
                            Previous
                        </button>
                        {
                            isLastQuestion ? (
                                <button
                                    onClick={() => { console.log('Quiz Completed!', answers); navigate('/results'); }}
                                    className="w-[200px] px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    {/* TODO: Add Finish icon */}
                                    Finish
                                </button>
                            ) : (
                                <button
                                    onClick={goToNextQuestion}
                                    className="w-[200px] px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 border-none outline-none focus:outline-none"
                                >
                                    {/* TODO: Add Next icon */}
                                    Next
                                </button>
                            )
                        }
                    </div>

                    {/* Optional: Display current answers for debugging */}
                    {/* <div className="mt-8 text-white/50 text-sm w-full break-words">
                        <p>Current Answers:</p>
                        <pre>{JSON.stringify(answers, null, 2)}</pre>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default QuizInterface; 