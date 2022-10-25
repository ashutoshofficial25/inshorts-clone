import React from "react";
import clsx from "clsx";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@mui/material";
import SwipeableDrawer from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../data/category";

const useStyles = makeStyles({
  list: {
    width: 200,
    padddingLeft: 10,
    paddingRight: 5,
  },
  fullList: {
    width: "auto",
  },
});

const HumburgerDrawer = () => {
  return (
    <div>
      <ListItemText />
    </div>
  );
};

export default HumburgerDrawer;
