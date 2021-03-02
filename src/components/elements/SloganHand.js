/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from './../images/1.jpg';
import Hand from './../images/2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    height: '500px',
    //border: '1px red solid',
    margin: '10px auto',
  },
  pic: {
    width: '90%',
    maxWidth: '400px',
  },
  title: {
    fontFamily: 'Open Sans',
    color: '#2F2E2E',
    fontSize: '45px',
    textAlign: 'center',
    marginTop: '30px',
    maxWidth: '90%',
  },
}));

function Slogan({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Typography className={classes.title}>
            CAREERS OF THE FUTURE
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            src="https://static.wixstatic.com/media/21035b_112a5e1a088f4ad5a26d00e44d650a4f.png/v1/fill/w_541,h_755,al_c,lg_1,q_90,usm_0.33_1.00_0.00/21035b_112a5e1a088f4ad5a26d00e44d650a4f.webp"
            alt="logo"
            className={classes.pic}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Slogan;
