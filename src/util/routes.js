import React from 'react';
import { Route } from 'react-router-dom';
// import rents from '../components/resources/rents/';
// import returns from '../components/resources/returns/';
import reports from '../components/reports';

export default [
    <Route exact path="/reports/rents" component={reports.rents} />,
    <Route
        exact
        path="/reports/returns"
        component={reports.returns}
    />
    // <Route exact path="/report/returns" component={returns.report} />
];
