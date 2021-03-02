/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import JobList from './components/elements/JobList';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%", 
    minHeight: "100vh",
    fontFamily: 'roboto',
    // backgroundColor: "blue",
  },
}));

function Jobs({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <JobList />
    </div>
  );
}

Jobs.propTypes = {
  className: PropTypes.string,
};

export default Jobs;
