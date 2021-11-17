import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import Day from "./Day";
import {
  getPrevMonthDaysAmount,
  getDaysInMonth,
  getNextMonthDaysAmount,
  getCurrentYear,
  getCurrentMonth,
} from "./selectors";
import { dayOfWeek, getArrayOfDatesString } from "./helpers";

//TODO: move all selectors to separate file
//TODO: think about naming
//TODO: maybe move some logic to helpers
const DaysOfMonth = () => {
  const prevDaysOfMonth = useSelector(getPrevMonthDaysAmount);
  const daysInMonth = useSelector(getDaysInMonth);
  const nextDaysOfMonth = useSelector(getNextMonthDaysAmount);

  const currentYear = useSelector(getCurrentYear);
  const currentMonth = useSelector(getCurrentMonth);
  const currentMonthString = `${currentMonth}-${currentYear}`;
  const now = moment(`${currentMonth}-${currentYear}`, "MM-YYYY");

  const prevMonthString = now.clone().subtract(1, "months").format("MM-YYYY");
  const nextMonthString = now.clone().add(1, "months").format("MM-YYYY");

  //computed values
  const theLastDayMonth = moment(
    `${currentYear}-${currentMonth}`
  ).daysInMonth();

  const currentMonthDates = getArrayOfDatesString(
    daysInMonth,
    currentMonthString
  );

  //prev month creating
  const prevMonth = getArrayOfDatesString(prevDaysOfMonth, prevMonthString);
  const dayWeekOfFirstDayOfCurrentMonth = dayOfWeek(
    1,
    currentMonth,
    currentYear
  );
  const remainderPrevMonth = prevMonth
    .reverse()
    .slice(0, dayWeekOfFirstDayOfCurrentMonth - 1);
  remainderPrevMonth.reverse();

  //next month creating
  const dayWeekOfLastDayOfCurrentMonth = dayOfWeek(
    theLastDayMonth,
    currentMonth,
    currentYear
  );

  const lengthOfReminderNextMonth = Math.abs(
    dayWeekOfLastDayOfCurrentMonth - 7
  );
  const nextMonthDates = getArrayOfDatesString(
    nextDaysOfMonth,
    nextMonthString
  );

  const remainderNextMonth = nextMonthDates.slice(0, lengthOfReminderNextMonth);
  const calendarDays = [
    ...remainderPrevMonth,
    ...currentMonthDates,
    ...remainderNextMonth,
  ];

  return calendarDays.map((day) => <Day fullDate={day} />);
};
export default DaysOfMonth;
