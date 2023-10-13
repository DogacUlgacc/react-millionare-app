import { useState, useEffect } from "react";
export default function Quiz({ timer, setTimer }) {
    const questionArray = [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ],
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Venus", correct: false },
            ],
        },

        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "African Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
            ],
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },

        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },

        {
            question: "What is the largest planet in our solar system?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Earth", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Venus", correct: false },
            ],
        },
        {
            question: "What is the main gas in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "Charles Dickens", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false },
            ],
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Au", correct: true },
                { text: "Ag", correct: false },
                { text: "Fe", correct: false },
                { text: "Hg", correct: false },
            ],
        },
        {
            question: "What is the capital of Brazil?",
            answers: [
                { text: "Sao Paulo", correct: false },
                { text: "Brasilia", correct: true },
                { text: "Rio de Janeiro", correct: false },
                { text: "Salvador", correct: false },
            ],
        },
        {
            question: "Which gas is known as the 'silent killer'?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Monoxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
            ],
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answers: [
                { text: "J.K. Rowling", correct: false },
                { text: "George Orwell", correct: false },
                { text: "Harper Lee", correct: true },
                { text: "Ernest Hemingway", correct: false },
            ],
        },
        {
            question: "Which planet is known as the 'Morning Star'?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Venus", correct: true },
                { text: "Mercury", correct: false },
                { text: "Jupiter", correct: false },
            ],
        },
        {
            question: "What is the tallest mountain in the world?",
            answers: [
                { text: "K2", correct: false },
                { text: "Mount Kilimanjaro", correct: false },
                { text: "Mount Everest", correct: true },
                { text: "Mount McKinley", correct: false },
            ],
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                { text: "H2O", correct: true },
                { text: "CO2", correct: false },
                { text: "O2", correct: false },
                { text: "NaCl", correct: false },
            ],
        },
        {
            question: "Who painted the 'Mona Lisa'?",
            answers: [
                { text: "Pablo Picasso", correct: false },
                { text: "Vincent van Gogh", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Michelangelo", correct: false },
            ],
        },
        {
            question: "What is the largest desert in the world?",
            answers: [
                { text: "Gobi Desert", correct: false },
                { text: "Sahara Desert", correct: true },
                { text: "Atacama Desert", correct: false },
                { text: "Arabian Desert", correct: false },
            ],
        },
        {
            question: "Which gas makes up the majority of Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question: "Who wrote 'War and Peace'?",
            answers: [
                { text: "Fyodor Dostoevsky", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "Leo Tolstoy", correct: true },
                { text: "Herman Melville", correct: false },
            ],
        },
        {
            question: "What is the smallest planet in our solar system?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Earth", correct: false },
                { text: "Mercury", correct: true },
                { text: "Venus", correct: false },
            ],
        },
        {
            question:
                "Which continent is known as the 'Land of the Rising Sun'?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: false },
                { text: "North America", correct: false },
                { text: "Asia", correct: true },
            ],
        },
        {
            question: "What is the chemical symbol for silver?",
            answers: [
                { text: "Ag", correct: true },
                { text: "Au", correct: false },
                { text: "Fe", correct: false },
                { text: "Hg", correct: false },
            ],
        },
        {
            question:
                "Who was the first woman to fly solo across the Atlantic Ocean?",
            answers: [
                { text: "Amelia Earhart", correct: true },
                { text: "Bessie Coleman", correct: false },
                { text: "Harriet Quimby", correct: false },
                { text: "Jacqueline Cochran", correct: false },
            ],
        },
    ];

    const [randomQuestionIndex, setRandomQuestionIndex] = useState(null);

    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(questionArray[0]?.answers.length).fill(null)
    );
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    const [disabledButton, setDisabledButton] = useState(false);

    useEffect(() => {
        const newRandomIndex = Math.floor(Math.random() * questionArray.length);
        setRandomQuestionIndex(newRandomIndex);
    }, []);

    const handleClick = (index) => {
        const selectedAnswer =
            questionArray[randomQuestionIndex]?.answers[index];
        if (timer !== 0 && !disabledButton) {
            setTimer(0);
            if (selectedAnswer && selectedAnswer.correct) {
                const updatedAnswers = [...selectedAnswers];
                updatedAnswers[index] = true;
                setSelectedAnswers(updatedAnswers);
            } else {
                const updatedAnswers = [...selectedAnswers];
                updatedAnswers[index] = false;
                setSelectedAnswers(updatedAnswers);
            }
        }
    };

    const randomQuestion = () => {
        if (randomQuestionIndex === null) {
            return null;
        }

        const show = questionArray[randomQuestionIndex];
        return (
            <div className="quiz ">
                <div className="question">{show.question}</div>
                <div className="answers">
                    {show.answers.map((answer, index) => (
                        <button
                            onClick={() => handleClick(index)}
                            className={`answer answer-${String.fromCharCode(
                                65 + index
                            )} ${
                                selectedAnswers[index] === true
                                    ? "correct"
                                    : selectedAnswers[index] === false
                                    ? "wrong"
                                    : ""
                            }`}
                            key={index}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        );
        randomQuestion();
    };

    return <div> {randomQuestion()} </div>;
}
