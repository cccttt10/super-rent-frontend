import React from 'react';
import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser
} from 'react-admin';
import { CustomerList, CustomerEdit, CustomerCreate } from './resources/customers';
import { VehicleList, VehicleEdit } from './resources/vehicles';
import jsonServerProvider from 'ra-data-json-server';
import CustomerIcon from '@material-ui/icons/Group';
import VehicleIcon from '@material-ui/icons/DirectionsCar';

const dataProvider = jsonServerProvider('http://localhost:3300');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="customers"
            list={CustomerList}
            edit={CustomerEdit}
            create={CustomerCreate}
            icon={CustomerIcon}
        />
        <Resource
            name="vehicles"
            list={VehicleList}
            edit={VehicleEdit}
            icon={VehicleIcon}
        />
    </Admin>
);

export default App;
