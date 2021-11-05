import React from "react";
import style from "./scss/CalendarPage.module.scss";
import moment from "moment";
import DayMonth from "./dayMonth/DayMonth";
import MonthAndYear from "./MonthAndYear/MonthAndYear";
import { useDispatch } from "react-redux";
const CalendarPage = () => {
  const dispatch = useDispatch();
  let now = moment();
  //get count days in a month
  let daysMonth = moment(now).daysInMonth();
  //let dayWeek = moment(now).weekday();
  let year = moment().year();
  //get a current month
  let month = moment().month() + 1;
  let currMonthYear = moment(`${year}-${month}`).format("MMMM YYYY");
  // let prevMonthFirstDay = moment()
  //   .subtract(1, "months")
  //   .startOf("month")
  //   .format("MMMM");
  //write a current Month and Year to store
  dispatch({
    type: "updateMonthYear",
    payload: currMonthYear,
  });
  return (
    <div className={style.container}>
      {/* <div className={style.imgCalendar}>
        <span className={style.textOnImg}>Choose the day for the meeting</span>
        <span className={style.ptextOnImg}>
          We encourage you to book your appointment online. This will save you
          time.
        </span>
      </div> */}
      <div className={style.CalendarDiv}>
        <div className={style.containerDaysMonth}>
          <MonthAndYear year={year} month={month} />
          <hr />
          <DayMonth countDaysMonth={daysMonth} />
        </div>
      </div>
    </div>
  );
};
export default CalendarPage;
