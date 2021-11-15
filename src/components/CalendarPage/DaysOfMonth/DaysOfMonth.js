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
  if (currentMonth === 1) {
    return 31;
  }
  const prevDaysOfMonth = moment(
    `${currentYear}-${currentMonth - 1}`
  ).daysInMonth();
  return prevDaysOfMonth;
}
function getNextDaysOfMonth(state) {
  const { currentMonth, currentYear } = state;
  if (currentMonth === 12) {
    return 31;
  }
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
  const currentMonthString = `${currentMonth}-${currentYear}`;
  const now = moment(`${currentMonth}-${currentYear}`, "MM-YYYY");

  const prevMonthString = now.clone().subtract(1, "months").format("MM-YYYY");

  const nextMonthString = now.clone().add(1, "months").format("MM-YYYY");

  function isDayOfWeek(day, month, year) {
    // MONDAY - 0, а Sunday - 6.
    return moment(`${day}.${month}.${year}`, "DD.MM.YYYY").day() || 7;
  }
  function getArrayCountDaysOfMonth(days, month) {
    return new Array(days).fill(null).map((_, day) => {
      return `${day + 1}-${month}`;
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
  let arrayPrevMonth = getArrayCountDaysOfMonth(
    prevDaysOfMonth,
    prevMonthString
  );
  let arrayNextMonth = getArrayCountDaysOfMonth(
    nextDaysOfMonth,
    nextMonthString
  );
  let arrayCurrentDays = getArrayCountDaysOfMonth(
    daysInMonth,
    currentMonthString
  );
  let remainderPrevMonth = arrayPrevMonth
    .reverse()
    .slice(0, firstDayCurrentMonth - 1);
  // возвращает 2 целых массива прошлый и нынешний
  remainderPrevMonth.reverse();
  let remainderNextMonth = arrayNextMonth.slice(0, sliceEndPoint);
  console.log("next month ", remainderNextMonth);
  console.log("previous month ", remainderPrevMonth);
  let calendarDays = [
    ...remainderPrevMonth,
    ...arrayCurrentDays,
    ...remainderNextMonth,
  ];
  return calendarDays.map((day) => <Day fullDate={day} />);
};
export default DaysOfMonth;
