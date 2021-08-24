import React from "react";
import "./NavBar.css"
import { Link } from '@reach/router';
export default class NavBar extends React.Component {
  render() {
    return (
    <>
     <ul>
     <Link to="gatsby-poc/public/">Home</Link>
      {/* <li className="submenu">  <a href="https://play.ludosupreme.com/faq/"> About us </a>  */}
      {/* </li> */}
      <Link to="/gatsby-poc/public/contact-us">Contact</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="https://www.ludosupreme.com/responsible-gaming.html">RESPONSIBLE GAMING</Link>
      <Link to="/gatsby-poc/public/about-us">About</Link>
     </ul>
     </>
      );
  }
} 