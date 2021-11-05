import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./DayMonth.module.scss";
const DayMonth = ({ countDaysMonth }) => {
  const dispatch = useDispatch();
  //
  let arrWeekDays = [
    { numberDay: 0, velueDayWeek: "sunday" },
    { numberDay: 1, velueDayWeek: "monday" },
    { numberDay: 2, velueDayWeek: "tuesday" },
    { numberDay: 3, velueDayWeek: "wednesday" },
    { numberDay: 4, velueDayWeek: "thursday" },
    { numberDay: 5, velueDayWeek: "friday" },
    { numberDay: 6, velueDayWeek: "saturday" },
  ];
  let arrCoutnDays = [];
  for (let day = 1; day <= countDaysMonth; day++) {
    arrCoutnDays.push({
      dayNumber: day,
      // dayOfWeek :
    });
  }
  dispatch({
    type: "getDaysMonth",
    payload: arrCoutnDays,
  });
  const countDaysCurrencyMonth = useSelector(
    (state) => state.countDaysCurrencyMonth
  );
  return countDaysCurrencyMonth.map((day, index) => {
    // every div will check on a name day od week
    // <div></div>;
    // <div></div>;
    // <div></div>;
    // <div></div>;
    // <div></div>;
    // <div></div>;
    // <div></div>;
    return (
      <button value={day} key={index} className={style.btnDay}>
        {day.dayNumber}
      </button>
    );
  });
};
export default DayMonth;
