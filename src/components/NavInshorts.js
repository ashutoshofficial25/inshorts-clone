import React from "react";
import "./NavInshorts.css";
import HumburgerDrawer from "./HumburgerDrawer";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HumburgerDrawer
          className="humburgerDrawer"
          setCategory={setCategory}
        />

        <img
          src="../logo144.png"
          style={{ cursor: "pointer" }}
          alt="inshorts-logo"
          height="50rem"
        />
        <Button>Login/signup</Button>
      </div>
    </div>
  );
};

export default NavInshorts;
