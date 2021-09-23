import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import tinder from "./tinder-logo.png";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinder} alt="" />
      <IconButton>
        <ForumIcon fonstSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
