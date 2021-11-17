import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className={style.navBar}>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className={style.link}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
