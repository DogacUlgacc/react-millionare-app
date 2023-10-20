import "./App.css";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Pyramid from "./components/Pyramid";
import questionArray from "./components/questionArray";
function App() {
    const [timer, setTimer] = useState(30);
    const [questionNumber, setQuestionNumber] = useState(0);

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
    const [prize, setPrize] = useState(false);
    let temp = moneyPyramid.length - 1;
    return !prize ? (
        <div className="app">
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
                    prize={prize}
                    setPrize={setPrize}
                />
            </div>
            <Pyramid
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                moneyPyramid={moneyPyramid}
            />
        </div>
    ) : (
        <div className="prize">
            <div className="prize-amount">
                You won <span>{moneyPyramid[temp - counter].amount}!</span>
            </div>
        </div>
    );
}

export default App;
