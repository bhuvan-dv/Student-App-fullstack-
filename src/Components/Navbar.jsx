import React from "react";
import { Link } from "react-router-dom";
import {MdOutlinePersonPin} from "react-icons/md"
const Navbar = () => {
  return (
    <section id="navBar">
      <article>
        <div className="logoBlock">
          <a href="#">Student.ORG<MdOutlinePersonPin/></a>
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/createstudent">CreateStudent</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
