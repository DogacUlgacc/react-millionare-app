import { useState, useEffect } from "react";
export default function Quiz({
    timer,
    questionArray,
    setTimer,
    questionNumber,
    setQuestionNumber,
    moneyPyramid,
    counter,
    setCounter,
}) {
    const [randomQuestionIndex, setRandomQuestionIndex] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState(
        Array(questionArray[0]?.answers.length).fill(null)
    );
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [loadNewQuestion, setLoadNewQuestion] = useState(false);

    const [millionare, setMillionare] = useState(false);

    useEffect(() => {
        if (millionare) {
            alert("Congratulations, you are a millionaire!!");
        }
    });
    useEffect(() => {
        if (loadNewQuestion) {
            if (questionNumber < 15) {
                setTimeout(() => {
                    const newRandomIndex = Math.floor(
                        Math.random() * questionArray.length
                    );
                    setQuestionNumber((questionNumber) => questionNumber + 1);
                    setRandomQuestionIndex(newRandomIndex);
                    setTimer(30);
                    setLoadNewQuestion(false);
                    setDisabledButton(false);
                    setShowCorrectAnswer(false);
                    setSelectedAnswers(
                        Array(questionArray[0]?.answers.length).fill(null)
                    );
                }, 5000);
            }
            setTimeout(() => {
                if (questionNumber === 15) {
                    setMillionare(true);
                }
            }, 5000);
        }
    }, [loadNewQuestion, questionArray, questionNumber]);

    useEffect(() => {
        const newRandomIndex = Math.floor(Math.random() * questionArray.length);
        setRandomQuestionIndex(newRandomIndex);
    }, []);

    const handleClick = (index) => {
        const selectedAnswer =
            questionArray[randomQuestionIndex]?.answers[index];

        if (timer !== 0) {
            setTimer(0);

            if (selectedAnswer && selectedAnswer.correct) {
                const updatedAnswers = [...selectedAnswers];
                updatedAnswers[index] = true;
                setSelectedAnswers(updatedAnswers);
                setLoadNewQuestion(true);
                setCounter(counter + 1);
            } else if (selectedAnswer && !selectedAnswer.correct) {
                const updatedAnswers = [...selectedAnswers];
                updatedAnswers[index] = false;
                setSelectedAnswers(updatedAnswers);
                setDisabledButton(true);

                setInterval(() => {
                    if (counter === 0) {
                        alert("You won $0");
                    } else {
                        let temp = moneyPyramid.length - 1;
                        alert(
                            `You won ${moneyPyramid[temp - counter].amount} `
                        );
                    }
                }, 5500);

                setTimeout(() => {
                    const correctAnswerIndex = questionArray[
                        randomQuestionIndex
                    ]?.answers.findIndex((answer) => answer.correct);
                    if (correctAnswerIndex !== -1) {
                        const updatedAnswers = [...selectedAnswers];
                        updatedAnswers[correctAnswerIndex] = true;
                        updatedAnswers[index] = false;
                        setSelectedAnswers(updatedAnswers);
                    }
                }, 3000);
            }
        }
    };

    useEffect(() => {
        if (timer === 0 && selectedAnswers.every((answer) => answer === null)) {
            const correctAnswerIndex = questionArray[
                randomQuestionIndex
            ]?.answers.findIndex((answer) => answer.correct);
            if (correctAnswerIndex !== -1) {
                setTimeout(() => {
                    const updatedAnswers = [...selectedAnswers];
                    updatedAnswers[correctAnswerIndex] = true;
                    setSelectedAnswers(updatedAnswers);
                    setShowCorrectAnswer(correctAnswerIndex);
                }, 3000);
            }
        }
    }, [timer, selectedAnswers, randomQuestionIndex, questionArray]);

    const randomQuestion = () => {
        if (randomQuestionIndex === null) {
            return null;
        }

        const show = questionArray[randomQuestionIndex];
        return (
            <div className="quiz">
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
                            } ${index === showCorrectAnswer ? "correct" : ""}`}
                            key={index}
                            disabled={disabledButton}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return <div>{randomQuestion()}</div>;
}
