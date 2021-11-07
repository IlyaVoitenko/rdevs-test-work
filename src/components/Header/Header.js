import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navigateListLinks">
          <li>
            <Link to="/">CalendarPage</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
