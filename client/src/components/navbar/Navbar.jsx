import "./navbar.scss";

// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";

import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Campus Club Connect</span>
        </Link>
      </div>

      <div className="center">
        <div className="nav">
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </div>
        <div className="nav">
          <FontAwesomeIcon icon={faUserGroup} />
          <p>Clubs</p>
        </div>
        <div className="nav">
          <FontAwesomeIcon icon={faSquarePollVertical} />
          <p>Polls</p>
        </div>
      </div>

      <div className="right">
        <div className="utils">
          {darkMode ? (
            <FontAwesomeIcon icon={faToggleOff} onClick={toggle} />
          ) : (
            <FontAwesomeIcon icon={faToggleOn} onClick={toggle} />
          )}
        </div>
        <div className="utils">
          <FontAwesomeIcon icon={faBell} />
        </div>

        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <FontAwesomeIcon icon={faChevronDown} className="dropDown" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
