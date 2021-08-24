import React from "react";
import "./NavBar.css"
import { Link } from '@reach/router';
export default class NavBar extends React.Component {
  render() {
    return (
    <>
     <ul>
     <Link to="/">Home</Link>
      {/* <li className="submenu">  <a href="https://play.ludosupreme.com/faq/"> About us </a>  */}
      {/* </li> */}
      <Link to="/contact-us">Contact</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="https://www.ludosupreme.com/responsible-gaming.html">RESPONSIBLE GAMING</Link>
      <Link to="/about-us">About</Link>
     
      <li> <a href="https://www.ludosupreme.com/#:~:text=Responsible%20Gaming-,Contact%20Us,-Play%20Ludo.%20Win">  CONTACT </a>   </li>

     </ul>
     </>
      );
  }
} 