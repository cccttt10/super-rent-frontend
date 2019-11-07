import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/dashboard/index';
import jsonServerProvider from 'ra-data-json-server';

import customers from './components/resources/customers/';
import vehicles from './components/resources/vehicles/';
import reservations from './components/resources/reservations/';
import rents from './components/resources/rents/';
import returns from './components/resources/returns/';

import { Layout } from './components/layout/';
import customRoutes from './util/routes';
import themeReducer from './components/themes/reducer';

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL);
const App = () => (
    <Admin
        dashboard={Dashboard}
        dataProvider={dataProvider}
        customRoutes={customRoutes}
        customReducers={{ theme: themeReducer }}
        appLayout={Layout}
    >
        <Resource name="customers" {...customers} />
        <Resource name="vehicles" {...vehicles} />
        <Resource name="reservations" {...reservations} />
        <Resource name="rents" {...rents} />
        <Resource name="returns" {...returns} />
    </Admin>
);

export default App;
