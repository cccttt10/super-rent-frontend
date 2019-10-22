import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/dashboard/index';
import jsonServerProvider from 'ra-data-json-server';

import customers from './components/customers/';
import vehicles from './components/vehicles/';
import reservations from './components/reservations/';
import returns from './components/returns/';




import { RentList, RentEdit, RentCreate } from './components/rents';


import RentIcon from '@material-ui/icons/ShoppingCart';

const dataProvider = jsonServerProvider('http://localhost:3300');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="customers" {...customers} />
        <Resource name="vehicles" {...vehicles} />
        <Resource name="reservations" {...reservations} />
        <Resource
            name="rents"
            list={RentList}
            edit={RentEdit}
            create={RentCreate}
            icon={RentIcon}
        />
        <Resource name="returns" {...returns} />
    </Admin>
);

export default App;
