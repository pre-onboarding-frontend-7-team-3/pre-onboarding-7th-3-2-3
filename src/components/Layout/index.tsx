import { Outlet } from "react-router";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { SIDEBAR_MENU_ITEMS } from "@src/shared/constants/constants";

const drawerWidth = 240;

function Layout() {
  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            marginRight: 2,
          }}
        >
          <img
            src="preface_Icon.png"
            alt="preface_Icon"
            width="50"
            height="50"
          />
        </Box>
        <Box
          sx={{
            typography: "body1",
            color: "#FFF",
            fontSize: "28px",
            fontWeight: "800",
          }}
        >
          PREFACE
        </Box>
      </Box>
      <Divider />
      <List>
        {SIDEBAR_MENU_ITEMS.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#A2A5AD" }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          color: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            투자계좌
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0F243C",
              color: "#A2A5AD",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: 8,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
