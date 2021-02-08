import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import '../index.css';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
        <Typography className={classes.title} variant='body1'>
          {props.name}
        </Typography>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
