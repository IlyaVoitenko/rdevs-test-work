import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import Day from "./Day";
function getDaysInMonth(state) {
  const { currentMonth, currentYear } = state;
  const daysInMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  return daysInMonth;
}
function getPrevDaysOfMonth(state) {
  const { currentMonth, currentYear } = state;
  const prevDaysOfMonth = moment(
    `${currentYear}-${currentMonth - 1}`
  ).daysInMonth();
  return prevDaysOfMonth;
}
function getNextDaysOfMonth(state) {
  const { currentMonth, currentYear } = state;
  const nextDaysOfMonth = moment(
    `${currentYear}-${currentMonth + 1}`
  ).daysInMonth();
  return nextDaysOfMonth;
}
const DaysOfMonth = () => {
  const prevDaysOfMonth = useSelector(getPrevDaysOfMonth);
  const daysInMonth = useSelector(getDaysInMonth);
  const nextDaysOfMonth = useSelector(getNextDaysOfMonth);
  const currentYear = useSelector((state) => state.currentYear);
  const currentMonth = useSelector((state) => state.currentMonth);
  let firstDayCurrentMonth = moment(
    `1.${currentMonth}.${currentYear}`,
    "DD.MM.YYYY"
  ).day();
  let arrayRemainderPrevMonth = Array(prevDaysOfMonth)
    .fill(null)
    .map((_, index) => {
      return ++index;
    });
  let remainderPrevMonth = arrayRemainderPrevMonth
    .reverse()
    .slice(0, --firstDayCurrentMonth);
  remainderPrevMonth.reverse();
  console.log(
    "RemainderPverMonth  : ",
    remainderPrevMonth,
    " ",
    "firstDayCurrentMonth :",
    firstDayCurrentMonth
  );
  return Array(daysInMonth)
    .fill(null)
    .map((_, index) => {
      return <Day key={index} index={index} />;
    });
};
export default DaysOfMonth;
