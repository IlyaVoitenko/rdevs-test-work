import React from "react";
import style from "./CalendarPage.module.scss";
import DaysOfMonth from "./DaysOfMonth/DaysOfMonth";
import MonthAndYear from "./MonthAndYear/MonthAndYear";

const CalendarPage = () => {
  return (
    <div className={style.container}>
      <div className={style.CalendarDiv}>
        <div className={style.containerDaysMonth}>
          <MonthAndYear />
          <hr />
          <DaysOfMonth />
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
