import React from "react";
import "./Modal.css";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <p>Loading Content...</p>
                    <div className="image-div">
                        <img width="200" height="200" src="https://media0.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=ecf05e47b7jlzhedldi1ckh7x9u8xz3wn135a6r4h5m3ezro&rid=giphy.gif&ct=g" alt="Loading Spinner"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;