import React from "react";
import style from "./Form.module.scss";
const Form = () => {
  return (
    <div className={style.windowForm}>
      <label>
        Month
        <p>
          <input className={style.inputForm}></input>
        </p>
      </label>
      <label>
        Day
        <p>
          <input className={style.inputForm}></input>
        </p>
      </label>
      <button className={style.btnCloseWindow}> &#10006;</button>
    </div>
  );
};
export default Form;
