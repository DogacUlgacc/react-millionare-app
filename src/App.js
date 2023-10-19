import "./App.css";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Pyramid from "./components/Pyramid";
import Prize from "./components/Prize";
function App() {
    const [timer, setTimer] = useState(30);
    const [questionNumber, setQuestionNumber] = useState(0);
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
                { text: "Europe", correct: false },
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
    const moneyPyramid = [
        { id: 0, amount: " $ 0 " },
        { id: 1, amount: " $ 100 " },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
    ].reverse();

    const [counter, setCounter] = useState(0);
    return (
        { <div className="app">
            <div className="main">
                <Timer timer={timer} setTimer={setTimer} />
                <Quiz
                    timer={timer}
                    setTimer={setTimer}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    moneyPyramid={moneyPyramid}
                    questionArray={questionArray}
                    counter={counter}
                    setCounter={setCounter}
                />
            </div>
            <Pyramid
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                moneyPyramid={moneyPyramid}
            />
        </div>}
    );
}

export default App;
