import { useState, useEffect } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => {
            clearInterval(countdown);
        };
    }, [timer]);

    return <div className="timer">{timer}</div>;
}
