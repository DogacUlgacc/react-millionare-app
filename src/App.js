import "./App.css";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Pyramid from "./components/Pyramid";
function App() {
    const [timer, setTimer] = useState(30);
    const [questionNumber, setQuestionNumber] = useState(1);

    return (
        <div className="app">
            <div className="main">
                <Timer timer={timer} setTimer={setTimer} />
                <Quiz
                    timer={timer}
                    setTimer={setTimer}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                />
            </div>
            <Pyramid
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
            />
        </div>
    );
}

export default App;
