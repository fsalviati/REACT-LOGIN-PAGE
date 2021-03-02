/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import JobDescription from './components/elements/JobDescription';
import { useJobFetch } from './components/hooks/useJobFetch';

const useStyles = makeStyles((theme) => ({
  root: {
    //width: '100%',
    fontFamily: 'roboto',
    backgroundColor: '#f4f6f8',
  },
}));

function Job({ jobId, className, ...rest }) {
  const classes = useStyles();

  const [{ job, error }, fetchJob] = useJobFetch();
  useEffect(() => {
    fetchJob(jobId);
  }, []);

  return (
    <div {...rest} className={classes.root}>
      <JobDescription job={job} />
    </div>
  );
}

Job.propTypes = {
  className: PropTypes.string,
};

export default Job;
