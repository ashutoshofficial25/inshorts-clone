import React, { useState } from "react";
import clsx from "clsx";
import { Button, Divider, List, ListItem, ListItemText } from "@mui/material";
import makeStyles from "@mui/material/makeStyles";
import { SwipeableDrawer } from "@mui/material";
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

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keyDown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            onClick={() => setCategory(text)}
            key={text}
          >
            <ListItemText primary={text}></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </Button>
    </div>
  );
}
