import React from "react";
import style from "../DayMonth.module.scss";

const Day = ({ index }) => {
  return <button className={style.btnDay}>{index + 1}</button>;
};
export default Day;
