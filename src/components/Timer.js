import React, { useEffect } from "react";

export default function Timer({ timer, setTimer }) {
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

    return (
        <div className="top">
            <div className="timer">{timer}</div>
        </div>
    );
}
