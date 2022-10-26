import React from "react";
import "./NavInshorts.css";
import HumburgerDrawer from "./HumburgerDrawer";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HumburgerDrawer setCategory={setCategory} />

        <img
          src="../logo144.png"
          style={{ cursor: "pointer" }}
          alt="inshorts-logo"
          height="80%"
        />
      </div>
    </div>
  );
};

export default NavInshorts;
