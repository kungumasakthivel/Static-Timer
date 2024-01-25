import React, {useEffect, useState} from "react";
import './Countdown.css'

function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState("1 Mar 2024");
    const [currentDate, setCurrentDate] = useState(inputDate);

    useEffect(() => {
        const changingDate = new Date(inputDate);
        const currendDate = new Date();
        const totalSeconds = (changingDate - currendDate) / 1000;
        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds % 60));
    }, [currentDate])

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className="countdown-container">
            <div className="countdown-values">
                <div className="countdown-value">
                    <p className="big-text">
                        {days}
                    </p>
                    <span>Days</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {hours}
                    </p>
                    <span>Hours</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {minutes}
                    </p>
                    <span>Minutes</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">
                        {seconds}
                    </p>
                    <span>Seconds</span>
                </div>
            </div>
            <div className="countdown-input-button">
                <input 
                className="countdown-input" 
                onChange={(e) => setInputDate(e.target.value)} 
                />
                <button 
                className="countdown-button" 
                onClick={() => setCurrentDate(inputDate)}
                >
                    Countdown
                </button>
            </div>
        </div>
    )
}

export default Countdown