import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <title>Gmail</title>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
