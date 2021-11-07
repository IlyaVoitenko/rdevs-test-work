import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './DayMonth.module.scss';

const DayMonth = () => {
  const countDaysCurrentMonth = useSelector(
    (state) => state.countDaysCurrencyMonth,
  );

  return countDaysCurrentMonth.map((day, index) => {
    return (
      // move to component
      <button value={day} key={index} className={style.btnDay}>
        {day.dayNumber}
      </button>
    );
  });
};
export default DayMonth;
