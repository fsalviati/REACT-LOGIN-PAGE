/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import SearchArea from './components/elements/SearchArea';
import JobList from './components/elements/JobList';
import Subject from './components/elements/Subject';
import SloganHand from './components/elements/SloganHand';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'roboto',
  },
}));

function Home({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <Subject />
      <SearchArea
      //onSearch={onSearch}
      //searchPlaceholder={searchPlaceholder}
      />
      <SloganHand />
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
