import React from "react";
import style from "./ImgComponent.module.scss";
import img from "./img/Untitled-1Artboardcopy.png";
const ImgComponent = () => {
  return (
    <div className={style.container}>
      <img src={img} alt="img" className={style.img}></img>
    </div>
  );
};
export default ImgComponent;
