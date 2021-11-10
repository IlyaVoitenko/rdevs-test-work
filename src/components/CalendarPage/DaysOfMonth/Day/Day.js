import React from "react";
import style from "../DayMonth.module.scss";

const Day = ({ index }) => {
  return (
    <button className={style.btnDay} key={index} onClick={() => {}}>
      {index}
    </button>
  );
};
export default Day;