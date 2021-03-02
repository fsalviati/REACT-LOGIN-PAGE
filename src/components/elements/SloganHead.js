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
    width: '100%',
    fontFamily: 'roboto',
  },
  pic: {
    width: '100%',
  },
}));

function Slogan({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <Grid container>
        <Grid item sm={3} xs={6}>
          <Typography variant="h4" gutterBottom>
            CAREERS OF THE FUTURE
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <img
            src="https://static.wixstatic.com/media/21035b_112a5e1a088f4ad5a26d00e44d650a4f.png/v1/fill/w_541,h_755,al_c,lg_1,q_90,usm_0.33_1.00_0.00/21035b_112a5e1a088f4ad5a26d00e44d650a4f.webp"
            alt="logo"
            className={classes.pic}
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography variant="h4" gutterBottom>
            Upload Your Resume. Get Job Matches.
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <img src={Hand} alt="logo" className={classes.pic} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Slogan;
