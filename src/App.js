import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/dashboard/index';
import jsonServerProvider from 'ra-data-json-server';

import customers from './components/resources/customers/';
import vehicles from './components/resources/vehicles/';
import reservations from './components/resources/reservations/';
import rents from './components/resources/rents/';
import returns from './components/resources/returns/';

const dataProvider = jsonServerProvider('http://localhost:3300');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="customers" {...customers} />
        <Resource name="vehicles" {...vehicles} />
        <Resource name="reservations" {...reservations} />
        <Resource name="rents" {...rents} />
        <Resource name="returns" {...returns} />
    </Admin>
);

export default App;
