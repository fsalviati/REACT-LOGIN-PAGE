import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Jobs from './Jobs';
import Job from './Job';

export default [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('/Home')),
  },
  {
    path: '/Jobs',
    exact: true,
    component: lazy(() => import('/Jobs')),
  },
];
