import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./consts/navbarItems";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const drawerWidth = 220;
  const navigate = useNavigate();

  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#101f33",
            color: "rgba(255,255,255, 0.7)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem button key={item.id} onClick={() => navigate(item.route)}>
              <ListItemIcon sx={{ color: "rgba(255,255,255, 0.7)" }}>
                {item.icon}
              </ListItemIcon>
              <Link to={`/${item.route}`}>
                <ListItemText primary={item.label} />
              </Link>
            </ListItem>
          ))}

          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

export default Navbar;
