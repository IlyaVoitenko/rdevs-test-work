import React from 'react';
import style from './Form.module.scss';
import { useSelector, useDispatch } from 'react-redux';

//TODO: rename
const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { day, month } = data;
  return (
    <div id={style.myModal} className={style.modal}>
      <div className={style.modalContent}>
        <label className={style.labelMonth}>
          Month
          <p>
            <input className={style.inputForm} placeholder={month}></input>
          </p>
        </label>
        <label className={style.labelDay}>
          Day
          <p>
            <input className={style.inputForm} placeholder={day}></input>
          </p>
        </label>
        <button
          className={style.btnCloseWindow}
          onClick={() => {
            dispatch({
              type: 'closeForm',
            });
          }}
        >
          {' '}
          &#10006;
        </button>
      </div>
    </div>
  );
};
export default Form;
