import React from "react";
import s from "./input.module.css";

function Input({ value, setValue, placeHolder, onKeyDownProp }) {
  return (
    <input
      type="text"
      required
      name="username"
      id="username"
      className={s.usernameInput}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDownProp ? onKeyDownProp : null}
    />
  );
}

export default Input;
