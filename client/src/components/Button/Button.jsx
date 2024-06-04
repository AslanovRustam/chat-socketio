import React from "react";
import s from "./button.module.css";

function Button({ type = "button", text, style, onClickBtn }) {
  return (
    <button
      type={type}
      className={s[style]}
      onClick={onClickBtn ? onClickBtn : null}
    >
      {text}
    </button>
  );
}

export default Button;
