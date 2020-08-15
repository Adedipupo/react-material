import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'; 
import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>This is the Header</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
