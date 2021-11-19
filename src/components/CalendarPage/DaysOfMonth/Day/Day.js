import React from "react";
import style from "../DayMonth.module.scss";
import moment from "moment";
import { useDispatch } from "react-redux";

const Day = ({ fullDate }) => {
  const dispatch = useDispatch();
  function getInfoOFDayOFCalendary(fullDate) {
    let day = fullDate.slice("-")[0];
    const dayOfWeek = moment(`${fullDate}`, "YYYY-MM-DD").format("dddd");
    const nameMonth = moment(`${fullDate}`, "YYYY-MM-DD").format("MMMM");
    //dataDayNumberAndNameTheDay can't to be const so dates im modal must change
    let dataDayNumberAndNameTheDay = `${day} th ${dayOfWeek}`;
    dispatch({
      type: "openForm",
      payload: { day: dataDayNumberAndNameTheDay, month: nameMonth },
    });
  }
  return (
    <button
      className={style.btnDay}
      key={fullDate}
      onClick={() => getInfoOFDayOFCalendary(fullDate)}
    >
      {moment(fullDate, "DD-MM-YYYY").date()}
    </button>
  );
};
export default Day;
