import React from "react";
// import style from "../scss/CalendarPage.module.scss";
import styleCalendarPage from "../scss/CalendarPage.module.scss";
import styleMonthAndYear from "./MonthAndYear.module.scss";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
const MonthAndYear = ({ year, month }) => {
  function nextMonthYearFun(year, month) {
    // month++;
    // if (month === 13 && year === 2021) {
    //   month = 1;
    //   year++;
    // }
    // let nextMonthYear = moment(`${year}-${month}`).format("MMMM YYYY");
    // dispatch({
    //   type: "updateMonthYear",
    //   payload: nextMonthYear,
    // });
    // console.log(nextMonthYear);
  }

  const dateMonthYear = useSelector((state) => state.dateMonthYear);
  const dispatch = useDispatch();
  return (
    <div className={styleCalendarPage.containerMonthAndYear}>
      <button className={styleMonthAndYear.prevBtnMonth} onClick={() => {}}>
        {" "}
        &lt;
      </button>
      <span className={styleMonthAndYear.spanMonth}>{dateMonthYear}</span>
      <button
        className={styleMonthAndYear.nextBtnMonth}
        onClick={() => {
          // month++;
          // if (month === 13 && year === 2021) {
          //   month = 1;
          //   year++;
          // }
          // let nextMonthYear = moment(`${year}-${month}`).format("MMMM YYYY");
          // dispatch({
          //   type: "updateMonthYear",
          //   payload: nextMonthYear,
          // });
          // console.log(nextMonthYear);
          //nextMonthYearFun(year, month);
          // dispatch({
          //   type: "updateCurrentMonth",
          //   payload: nextMonthYear,
          // });
        }}
      >
        &gt;
      </button>
    </div>
  );
};
export default MonthAndYear;
