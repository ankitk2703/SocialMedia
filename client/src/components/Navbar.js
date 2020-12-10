import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import InstagramIcon from "@material-ui/icons/Instagram";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Grand Hotel",
    fontSize: "30px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {};
  const handleAccount = () => {};

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <InstagramIcon style={{ fontSize: 45 }} />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            SocialMedia
          </Typography>
          <Link to="/create">
            <button className="createPost">Create Post</button>
          </Link>
          <Link to="/signin">
            <button className="btnSignIn">SignIn</button>
          </Link>
          <Link to="/signup">
            <button className="btnSignUp">SignUp</button>
          </Link>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>{" "}
                </Link>
                <MenuItem onClick={handleAccount}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
