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
  let lastMonth = useSelector((state) => {
    const { currentMonth, currentYear } = state;
    if (currentMonth === 1) {
      return `${(currentMonth = 12)}${currentYear - 1}`;
    }
    return currentMonth - 1;
  });
  function isDayOfWeek(day, month, year) {
    // MONDAY - 0, а Sunday - 6.
    return moment(`${day}.${month}.${year}`, "DD.MM.YYYY").day();
  }
  function getArrayCountDaysOfMonth(days, month) {
    return Array(days)
      .fill(null)
      .map((_, index) => {
        return ++index;
      });
  }
  let theLastDayMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  let firstDayCurrentMonth = isDayOfWeek(1, currentMonth, currentYear);
  let numberTheLastDayCurrentMonth = isDayOfWeek(
    theLastDayMonth,
    currentMonth,
    currentYear
  );
  let sliceEndPoint = Math.abs(numberTheLastDayCurrentMonth - 7);
  let arrayPrevMonth = getArrayCountDaysOfMonth(prevDaysOfMonth);
  let arrayNextMonth = getArrayCountDaysOfMonth(nextDaysOfMonth);
  let arrayCurrentDays = getArrayCountDaysOfMonth(daysInMonth);
  let remainderPrevMonth = arrayPrevMonth
    .reverse()
    .slice(0, --firstDayCurrentMonth);
  remainderPrevMonth.reverse();
  let remainderNextMonth = arrayNextMonth.slice(0, sliceEndPoint);
  let calendarDays = [
    ...remainderPrevMonth,
    ...arrayCurrentDays,
    ...remainderNextMonth,
  ];
  return calendarDays.map((day) => <Day index={day} />);
};
export default DaysOfMonth;
