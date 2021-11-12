import React from "react";
import style from "../DayMonth.module.scss";
import moment from "moment";
import { useDispatch } from "react-redux";

const Day = ({ fullDate }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={style.btnDay}
      key={fullDate}
      onClick={() => {
        let year = fullDate.split("-")[2];
        let month = fullDate.split("-")[1];
        let day = fullDate.split("-")[0];
        let dayOfWeek = moment(`${year}-${month}-${day}`).format("dddd");
        let nameMonth = moment(`${year}-${month}-${day}`).format("MMMM");
        let dataDayNumberAndNameTheDay = `${day}th ${dayOfWeek}`;
        dispatch({
          type: "openForm",
          payload: { day: dataDayNumberAndNameTheDay, month: nameMonth },
        });
      }}
    >
      {moment(fullDate, "DD-MM-YYYY").date()}
    </button>
  );
};
export default Day;
