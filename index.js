// console.log("test");

import React, {useState, useEffect} from "react";
import {render} from "react-dom";

const Timer = () => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        //ca c pour que ca défile en secondes
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

                const newCount = counter + 1;

                setCounter(newCount);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]); //we add the isActive and counter state to the dependency array. This ensures that the effect only runs when either of them changes.

    function Reset() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
    }

    return (
        <div id={"container"}>
            {/* <div id="title"></div> */}

            <div id={"clock-container"}>
                <div className={"timer"}>
                    <span className={"minute"}>{minute}</span>
                    <span>{":"}</span>
                    <span className={"second"}>{second}</span>
                </div>
            </div>

            <div id-={"buttons"}>
                {/* <button className="minus"></button>  */}

                <button className={"reset"} onClick={Reset}>
                    {"Reset"}
                </button>

                <button
                    className={"play=pause"}
                    onClick={() => setIsActive(!isActive)}>
                    {isActive ? "Pause" : "Start"}
                </button>

                {/* <button className="plus"></button> */}
            </div>
        </div>
    );
};

render(<Timer />, document.querySelector(".timer"));
