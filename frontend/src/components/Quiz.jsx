import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizPage = ({ courseTitle }) => {
    const [quiz, setQuiz] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/quiz/${courseTitle}`)
            .then((res) => {
                setQuiz(res.data);
            })
            .catch((error) => {
                console.log('Error fetching quiz data:', error);
            });
    }, [courseTitle]);

    const handleAnswerSelect = (questionIndex, option) => {
        setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
    };

    const calculateScore = () => {
        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                score += 1;
            }
        });
        setScore(score);
    };

    return (
        <div className="container mx-auto px-64 py-12">
            <h1 className="text-3xl font-bold mb-6">{courseTitle} Quiz</h1>

            {quiz ? (
                <div>
                    {quiz.questions.map((question, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
                            <div>
                                {question.options.map((option, i) => (
                                    <label key={i} className="block">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            onChange={() => handleAnswerSelect(index, option)}
                                            checked={selectedAnswers[index] === option}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button onClick={calculateScore} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Submit</button>
                    {score !== null && (
                        <p className="mt-4 text-lg font-semibold">
                            Your Score: {score} / {quiz.questions.length}
                        </p>
                    )}
                </div>
            ) : (
                <p>Loading quiz...</p>
            )}
        </div>
    );
};

export default QuizPage;
