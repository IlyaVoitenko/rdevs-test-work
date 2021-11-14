import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Day from './Day';
import {
  getPrevMonthDaysAmount,
  getDaysInMonth,
  getNextMonthDaysAmount,
} from './selectors';
import { dayOfWeek } from './helpers';

//TODO: move all selectors to separate file
//TODO: think about naming
//TODO: maybe move some logic to helpers
const DaysOfMonth = () => {
  const prevDaysOfMonth = useSelector(getPrevMonthDaysAmount);
  const daysInMonth = useSelector(getDaysInMonth);
  const nextDaysOfMonth = useSelector(getNextMonthDaysAmount);

  const currentYear = useSelector((state) => state.currentYear);
  const currentMonth = useSelector((state) => state.currentMonth);
  const currentMonthString = `${currentMonth}-${currentYear}`;
  const now = moment(`${currentMonth}-${currentYear}`, 'MM-YYYY');

  const prevMonthString = now.clone().subtract(1, 'months').format('MM-YYYY');

  const nextMonthString = now.clone().add(1, 'months').format('MM-YYYY');

  function getArrayOfDatesString(days, month) {
    return new Array(days).fill(null).map((_, day) => {
      return `${day + 1}-${month}`;
    });
  }
  //computed values
  const theLastDayMonth = moment(
    `${currentYear}-${currentMonth}`,
  ).daysInMonth();

  const currentMonthDates = getArrayOfDatesString(
    daysInMonth,
    currentMonthString,
  );

  //prev month creating
  const prevMonth = getArrayOfDatesString(prevDaysOfMonth, prevMonthString);
  const dayWeekOfFirstDayOfCurrentMonth = dayOfWeek(
    1,
    currentMonth,
    currentYear,
  );
  const remainderPrevMonth = prevMonth
    .reverse()
    .slice(0, dayWeekOfFirstDayOfCurrentMonth - 1);
  remainderPrevMonth.reverse();

  //next month creating
  const dayWeekOfLastDayOfCurrentMonth = dayOfWeek(
    theLastDayMonth,
    currentMonth,
    currentYear,
  );

  const lengthOfReminderNextMonth = Math.abs(
    dayWeekOfLastDayOfCurrentMonth - 7,
  );
  const nextMonthDates = getArrayOfDatesString(
    nextDaysOfMonth,
    nextMonthString,
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
