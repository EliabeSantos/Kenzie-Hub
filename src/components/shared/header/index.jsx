import { HeaderDiv } from "./style";
import { IconButton } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (url) => {
    handleClose();
    history.push(url);
  };

  return (
    <>
      <HeaderDiv>
        <h1>My Dev</h1>
        <div>
          <IconButton onClick={handleClick}>
            <GiHamburgerMenu />
          </IconButton>
          <Menu
            id="hamburger"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/");
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/members");
              }}
            >
              /members
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/login");
              }}
            >
              /login
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/register/1");
              }}
            >
              /register/1
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/register/2");
              }}
            >
              /register/2
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuItemClick("/profile/8b8e50a6-50c2-4718-b817-2d38cad0c8f4");
              }}
            >
              /profile/:default
            </MenuItem>
          </Menu>
        </div>
      </HeaderDiv>
    </>
  );
};

export default Header;
