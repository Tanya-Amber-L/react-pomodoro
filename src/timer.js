import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import Modal from "./modal.js";

const Timer = () => {
    const firstCounter = 1500;
    const firstSecond = "00";
    const firstMinute = "25";
    const [second, setSecond] = useState(firstSecond);
    const [minute, setMinute] = useState(firstMinute);
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(firstCounter);

    useEffect(() => {
        let intervalId;
        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond =
                    String(secondCounter).length === 1
                        ? `0${secondCounter}`
                        : secondCounter;
                const computedMinute =
                    String(minuteCounter).length === 1
                        ? `0${minuteCounter}`
                        : minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                const newCount = counter - 1;
                setCounter(newCount);
            }, 1000);
        }

        if (isActive && counter < 0) {
            render(<Modal />, document.querySelector(".modal"));
            setIsActive(false);
            setMinute("05");
            setSecond("00");
            setCounter(300);
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter]); //we add the isActive and counter state to the dependency array. This ensures that the effect only runs when either of them changes.

    function Reset() {
        setIsActive(false);
        setCounter(firstCounter);
        setSecond(firstSecond);
        setMinute(firstMinute);
    }

    return (
        <div className={"container"}>
            <div className={"clock-container"}>
                <div className={"timer"}>
                    <span className={"minute"}>{minute}</span>
                    <span>{":"}</span>
                    <span className={"second"}>{second}</span>
                </div>
            </div>

            <div className={"buttons"}>
                <div
                    className={"minus"}
                    onClick={() => {
                        if (!isActive && counter >= 60) {
                            const counterMinus = counter - 60;
                            setCounter(counterMinus);

                            const minutesMinus = Number(minute) - 1;
                            const computedMinuteMinus =
                                String(minutesMinus).length === 1
                                    ? `0${minutesMinus}`
                                    : minutesMinus;
                            setMinute(computedMinuteMinus);
                        }
                    }}>
                    {"-"}
                </div>

                <div className={"reset"} onClick={Reset}>
                    {"\u21BA"}
                </div>

                <div
                    className={"play-pause"}
                    onClick={() => setIsActive(!isActive)}>
                    {isActive ? "\u007C\u007C" : "\u25B6"}
                </div>

                <div
                    onClick={() => {
                        if (!isActive) {
                            const counterPlus = counter + 60;
                            setCounter(counterPlus);

                            const minutesPlus = Number(minute) + 1;
                            const computedMinutePlus =
                                String(minutesPlus).length === 1
                                    ? `0${minutesPlus}`
                                    : minutesPlus;
                            setMinute(computedMinutePlus);
                        }
                    }}
                    className={"plus"}>
                    {"+"}
                </div>
            </div>
        </div>
    );
};

export default Timer;
