import React, { useEffect } from "react";
import * as ReactDOM from "react-dom";
import "./addgame.scss";

const AddGame = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="div1"></div>
      <div className="div2">
        <div className="div3">
          {children}
          <div className="div4">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default AddGame;
