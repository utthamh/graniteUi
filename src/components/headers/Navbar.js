import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Box, InputBase } from '@material-ui/core';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  input: {
    width: "100%",
    height: "24px",
    backgroundColor: "#ffffff",
    paddingRight: "10px",
    
  },
  select: {
    height: "100%",
    margin: 0,
    marginRight: "10px",
    outline: "none",
    border: "none",
    backgroundColor: theme.palette.secondary.main
  },
  offset:theme.mixins.toolbar,
  activeColor:{
    color: theme.palette.secondary.main
  }

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box className='logo' mr={3}/>
          <SearchBar classes={classes}/>
          <Typography component={NavLink} color='inherit' to='/home/' className='box px-1 text-decoration-none ' exact activeClassName={classes.activeColor}>Home</Typography>
          <Typography component={NavLink} color='inherit' to='/home/login'  className='box px-1 text-decoration-none 'activeClassName={classes.activeColor}>Login</Typography>
          <Typography component={NavLink} color='inherit' to='/home/register' className='box px-1 text-decoration-none 'activeClassName={classes.activeColor}>Sign Up</Typography>
          <IconButton><Avatar/></IconButton>
          <IconButton color='inherit'><Avatar><ShoppingBasketOutlined color='inherit'/></Avatar></IconButton>
        </Toolbar>
      </AppBar>
      <Box className={classes.offset}/>
    </div>
  );
}

const SearchBar=({classes})=>{
    return(<Box flex='1' px={5}>
 <InputBase
      startAdornment={
        <select className={classes.select}>
          <option>All</option>
        </select>
      }
      className={classes.input}
    //   endAdornment={<SearchRounded />}
    />
    </Box>)
}