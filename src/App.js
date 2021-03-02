import React from 'react';
import { Router } from '@reach/router';
import Header from './components/elements/Header';
import Home from './Home';
import Jobs from './Jobs';
import Job from './Job';
import SignInOutContainer from './containers'

const App = (className) => {
  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <Jobs path="/jobs" />
        <Job path="/job/:jobId" />
        <SignInOutContainer path="/Login" component={SignInOutContainer} />
      </Router>
    </>
  )
};

export default App;
