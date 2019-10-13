import React from 'react';
import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser
} from 'react-admin';
import { CustomerList } from './resources/customers';
import { VehicleList } from './resources/vehicles';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3300');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="customers"
            list={CustomerList}
            edit={EditGuesser}
        />
        <Resource
            name="vehicles"
            list={VehicleList}
            edit={EditGuesser}
        />
    </Admin>
);

export default App;
