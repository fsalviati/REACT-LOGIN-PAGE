/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import JobCard from './JobCard';
import Typography from '@material-ui/core/Typography';
import PaginationBar from './Pagination';
import { useJobsFetch } from './../hooks/useJobsFetch';
import Grid from "@material-ui/core/Grid"
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f6f8',
    // backgroundColor: "green",
    fontFamily: 'Open Sans', 
    height: "100vh",
    padding: "0px 50px 0px 50px"
  },
  title: {
    fontSize: '18px',
    color: 'black',

    marginTop: '20px',
    marginBottom: '20px',
    width: '54%',
  },
}));

function JobList({ className, ...rest }) {
  const classes = useStyles();

  const [{ jobs, error }, fetchJobs] = useJobsFetch();

  return (
    <div className={classes.root}>
    <Grid container  > 
      <Grid item {...rest} xs={12}>
        <Typography className={classes.title}>
        {jobs.length} jobs found
        </Typography>
        <div>
        {jobs.map((job) => (
          <JobCard key={job.jobId} clickable job={job} jobId={job.jobId} />
          ))}
          </div>
        </Grid> 
        <PaginationBar />
    </Grid>
    </div>
  );
}

JobList.propTypes = {
  className: PropTypes.string,
};

export default JobList;
