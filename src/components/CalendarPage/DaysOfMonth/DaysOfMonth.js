import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import style from './DayMonth.module.scss';

function getDaysInMonth(state) {
  const { currentMonth, currentYear } = state;
  const daysInMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  return daysInMonth;
}

const DaysOfMonth = () => {
  const daysInMonth = useSelector(getDaysInMonth);

  return Array(daysInMonth)
    .fill(null)
    .map((_, index) => {
      return (
        // move to component
        <button key={index} className={style.btnDay}>
          {index + 1}
        </button>
      );
    });
};
export default DaysOfMonth;
