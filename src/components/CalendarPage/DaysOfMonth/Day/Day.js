import React from 'react';
import style from '../DayMonth.module.scss';
import moment from 'moment';

const Day = ({ fullDate }) => {
  return (
    <button
      className={style.btnDay}
      key={fullDate}
      onClick={() => {
        console.log(fullDate);
      }}
    >
      {moment(fullDate, 'DD-MM-YYYY').date()}
    </button>
  );
};
export default Day;
