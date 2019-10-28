import React from 'react';
import { Route } from 'react-router-dom';

import reports from '../components/reports';

export default [
    <Route
        exact
        path="/reports/rents"
        key="/reports/rents"
        component={reports.rents}
    />,
    <Route
        exact
        path="/reports/returns"
        key="/reports/returns"
        component={reports.returns}
    />
];
