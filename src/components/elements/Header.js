/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Icon,
  IconButton,
  ButtonGroup,
  Grid,
} from '@material-ui/core';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    background:
      'linear-gradient(90deg, rgba(168,230,19,1) 0%, rgba(0,255,205,1) 34%, rgba(30,140,94,1) 100%)',
  },
  btnGroup: {
    width: '100%',
    marginTop: '10px',
  },
  btnItem: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    width: '40%',
    height: '40px',
    backgroundColor: 'transparent',
    fontSize: 20,
    color: 'white',
    borderColor: 'red',
    '&:hover': {
      backgroundColor: '#a5cf00',
      border: 'none',
    },
  },
  iconBtn: {
    marginTop: '10px',
    marginBottom: '5px',

    //border: '1px red solid',
  },
  btn: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    borderColor: 'white',
    color: 'white',
    width: '100px',
    height: '40px',
    marginTop: '10px',
    borderRadius: '5%',
    fontSize: 17,
    '&:hover': {
      backgroundColor: '#a5cf00',
      border: 'none',
    },
  },
  item: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      data-test="headerComponent"
    >
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item sm={7} xs={12}>
            <Link to={'/'} className={classes.link}>
              <img
                src="/malih.png"
                alt="logo"
                style={{ width: '220px', height: '40px' }}
                className={classes.iconBtn}
                data-test="logoIMG"
              />
            </Link>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.item}>
            <ButtonGroup
              disableElevation
              variant="contained"
              className={classes.btnGroup}
            >
              <Button className={classes.btnItem}>Search</Button>
              <Button className={classes.btnItem}>Profile</Button>
              <Button className={classes.btnItem}>Company</Button>
            </ButtonGroup>
          </Grid>
          <Grid item sm={1} xs={12} className={classes.item}>
            <Link to="/Login">
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                className={classes.btn}
              >
                LOG IN
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
