import React from 'react';
import { Route } from 'react-router-dom';
import rents from '../components/resources/rents/';
import returns from '../components/resources/returns/';

export default [
    <Route exact path="/dailyrents" component={rents.report} />,
    <Route exact path="/dailyreturns" component={returns.report} />
];
