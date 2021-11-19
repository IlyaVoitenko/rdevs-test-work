import React from "react";
import style from "./CalendarPage.module.scss";
import DaysOfMonth from "./DaysOfMonth/DaysOfMonth";
import MonthAndYear from "./MonthAndYear/MonthAndYear";
import { useSelector } from "react-redux";
import ModalWindowDates from "../ModalWindowDates";
import ImgNearCalendar from "./ImgNearCalendar";
import { getStateModalWindowDates } from "./selectors";
const CalendarPage = () => {
  const isOpen = useSelector(getStateModalWindowDates);
  return (
    <div className={style.container}>
      <ImgNearCalendar />
      <div className={style.CalendarDiv}>
        <div className={style.containerDaysMonth}>
          <MonthAndYear />
          <hr />
          <DaysOfMonth />
          {isOpen ? <ModalWindowDates /> : null}
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
