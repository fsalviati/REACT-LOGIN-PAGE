/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '200px',
    position: 'relative',
    background:
      'linear-gradient(90deg, rgba(168,230,19,1) 0%, rgba(0,255,205,1) 34%, rgba(30,140,94,1) 100%)',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Roboto',
    margin: 'auto',
    position: 'absolute',
    bottom: 0,
    fontWeight: 500,
    fontSize: 60,
    color: 'white',
  },
}));

function Subject() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Land your dream job.</div>
    </div>
  );
}

export default Subject;
