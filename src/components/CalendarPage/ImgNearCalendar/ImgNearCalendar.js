import React from "react";
import style from "./ImgNearCalendar.module.scss";
import img from "./img/Untitled-1Artboardcopy.png";
const ImgNearCalendar = () => {
  return (
    <div className={style.container}>
      <img src={img} alt="img" className={style.img}></img>
    </div>
  );
};
export default ImgNearCalendar;
