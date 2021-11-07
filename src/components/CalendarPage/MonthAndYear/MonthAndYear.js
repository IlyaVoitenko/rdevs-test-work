import React from 'react';
// import style from "../scss/CalendarPage.module.scss";
import styleCalendarPage from '../scss/CalendarPage.module.scss';
import styleMonthAndYear from './MonthAndYear.module.scss';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

function getDayInMonth(state) {
  const { currentMonth, currentYear } = state;
  const daysInMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  return daysInMonth;
}

function getMonth(state) {
  return state.currentMonth;
}

function getYear(state) {
  return state.currentYear;
}

const MonthAndYear = () => {
  const currentMonth = useSelector(getMonth);
  const currentYear = useSelector(getYear);

  const dayInMonth = useSelector(getDayInMonth);

  const dispatch = useDispatch();
  return (
    <div className={styleCalendarPage.containerMonthAndYear}>
      <button
        className={styleMonthAndYear.prevBtnMonth}
        onClick={() => {
          if (currentMonth === 1) {
            return dispatch({ type: 'lastYear' });
          }
          dispatch({ type: 'decrementMonth' });
        }}
      >
        {' '}
        &lt;
      </button>
      <span className={styleMonthAndYear.spanMonth}>
        {moment.months(currentMonth - 1)} {currentYear}
      </span>
      <button
        className={styleMonthAndYear.nextBtnMonth}
        onClick={() => {
          if (currentMonth === 12) {
            return dispatch({ type: 'nextYear' });
          }
          dispatch({ type: 'incrementMonth' });
        }}
      >
        &gt;
      </button>
    </div>
  );
};
export default MonthAndYear;
