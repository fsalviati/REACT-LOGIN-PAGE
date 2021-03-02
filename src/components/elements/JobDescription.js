/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40%',
    fontFamily: 'roboto',
    fontSize: '20px',
    borderColor: 'gray',
    borderRadius: '5px',
    margin: '120px auto',
    fontFamily: 'Open Sans',
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: '15px',
  },
  salary: {
    fontSize: '15px',
  },
}));

function JobDescription({ job, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.source}> Job Source: {job.source}</div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.title}>{job.jobTitle}</div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>{job.company}</div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.salary}>{job.salary}</div>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" disableElevation>
            Apply Now
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.desc}>{job.description}</div>
        </Grid>
      </Grid>
    </div>
  );
}

JobDescription.propTypes = {
  className: PropTypes.string,
};

export default JobDescription;
