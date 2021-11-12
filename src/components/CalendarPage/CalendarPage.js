import React from "react";
import style from "./CalendarPage.module.scss";
import DaysOfMonth from "./DaysOfMonth/DaysOfMonth";
import MonthAndYear from "./MonthAndYear/MonthAndYear";
import { useSelector } from "react-redux";
import Form from "../Form";
const CalendarPage = () => {
  const isOpen = useSelector((state) => state.isOpen);
  return (
    <div className={style.container}>
      <div className={style.CalendarDiv}>
        <div className={style.containerDaysMonth}>
          <MonthAndYear />
          <hr />
          <DaysOfMonth />
          {isOpen ? <Form /> : null}
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
