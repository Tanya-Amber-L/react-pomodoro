import Timer from "./timer.js";
import React from "react";

const Modal = () => {
    // document.querySelector(".modal__container").classList.remove("remove");

    function closeModal() {
        document.querySelector(".modal__container").classList.add("remove");
    }

    function pauseTime() {
        document.querySelector(".modal__container").classList.add("remove");
        <Timer />;
    }

    return (
        <div className={"modal__container"}>
            <div className={"modal__content"}>
                <p className={"modal__content__title"}>
                    {"Work Time is over ! Take a break !"}
                </p>
                <div className={"modal__content__btns"}>
                    <div
                        className={""}
                        onClick={() => {
                            pauseTime();
                        }}>
                        {"Start Pause Time"}
                    </div>
                    <div
                        className={""}
                        onClick={() => {
                            closeModal();
                        }}>
                        {"Stop"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
