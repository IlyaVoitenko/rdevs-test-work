import React from "react";
import styleCalendarPage from "../CalendarPage.module.scss";
import styleMonthAndYear from "./MonthAndYear.module.scss";
import moment from "moment";
import { getYear, getMonth } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
//TODO: reuse this selectors in the whole project

const MonthAndYear = () => {
  const currentMonth = useSelector(getMonth);
  const currentYear = useSelector(getYear);
  function getNextMonthYear(currentMonth) {
    if (currentMonth === 12) {
      return dispatch({ type: "incrementYear" });
    }
    dispatch({ type: "incrementMonth" });
  }
  function getPrevMonthYear(currentMonth) {
    if (currentMonth === 1) {
      return dispatch({ type: "decrementYear" });
    }
    dispatch({ type: "decrementMonth" });
  }
  const dispatch = useDispatch();
  return (
    <div className={styleCalendarPage.containerMonthAndYear}>
      <button
        className={styleMonthAndYear.prevBtnMonth}
        onClick={() => getPrevMonthYear(currentMonth)}
      >
        {" "}
        &lt;
      </button>
      <span className={styleMonthAndYear.spanMonth}>
        {moment.months(currentMonth - 1)} {currentYear}
      </span>
      <button
        className={styleMonthAndYear.nextBtnMonth}
        onClick={() => getNextMonthYear(currentMonth)}
      >
        &gt;
      </button>
    </div>
  );
};
export default MonthAndYear;
