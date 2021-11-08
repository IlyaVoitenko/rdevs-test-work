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
  function isDayOfWeek(day, month, year) {
    return moment(`${day}.${month}.${year}`, "DD.MM.YYYY").day();
  }
  function getArrayCountDaysOfMonth(month) {
    console.log("the last day of the last month ;", month);
    return Array(month)
      .fill(null)
      .map((_, index) => {
        return ++index;
      });
  }
  let theLastDayMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  console.log("theLastDayMonth : ", theLastDayMonth);
  let firstDayCurrentMonth = isDayOfWeek(1, currentMonth, currentYear);
  let isTheLastCurrentDayMonth = isDayOfWeek(
    theLastDayMonth,
    currentMonth,
    currentYear
  );
  let sliceEndPoint = Math.abs(isTheLastCurrentDayMonth - 7);
  let resRemainderPrevMonth = getArrayCountDaysOfMonth(prevDaysOfMonth);
  let resRemainderNextMonth = getArrayCountDaysOfMonth(nextDaysOfMonth);
  let remainderPrevMonth = resRemainderPrevMonth
    .reverse()
    .slice(0, --firstDayCurrentMonth);
  remainderPrevMonth.reverse();
  let remainderNextMonth = resRemainderNextMonth.slice(0, sliceEndPoint);
  console.log("array ", remainderNextMonth);
  console.log(
    "previos month :",
    remainderPrevMonth,
    " ",
    "the first day of the month  ",
    firstDayCurrentMonth
  );
  return Array(daysInMonth)
    .fill(null)
    .map((_, index) => {
      return <Day key={index} index={index} />;
    });
};
export default DaysOfMonth;
