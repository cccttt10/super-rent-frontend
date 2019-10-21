import React from 'react';
import vehicles from './components/vehicles/';

import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser
} from 'react-admin';
import Dashboard from './components/dashboard/index';
import {
    CustomerList,
    CustomerEdit,
    CustomerCreate
} from './components/customers';

import {
    ReservationList,
    ReservationEdit,
    ReservationCreate
} from './components/reservations';
import {
    ReturnList,
    ReturnCreate,
    ReturnShow
} from './components/returns';
import { RentList, RentEdit, RentCreate } from './components/rents';
import jsonServerProvider from 'ra-data-json-server';
import CustomerIcon from '@material-ui/icons/Group';

import ReservationIcon from '@material-ui/icons/AlarmOn';
import RentIcon from '@material-ui/icons/ShoppingCart';
import ReturnIcon from '@material-ui/icons/SettingsBackupRestore';

const dataProvider = jsonServerProvider('http://localhost:3300');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource
            name="customers"
            list={CustomerList}
            edit={CustomerEdit}
            create={CustomerCreate}
            icon={CustomerIcon}
        />
        <Resource name="vehicles" {...vehicles} />
        <Resource
            name="reservations"
            list={ReservationList}
            edit={ReservationEdit}
            create={ReservationCreate}
            icon={ReservationIcon}
        />
        <Resource
            name="rents"
            list={RentList}
            edit={RentEdit}
            create={RentCreate}
            icon={RentIcon}
        />
        <Resource
            name="returns"
            list={ReturnList}
            create={ReturnCreate}
            show={ReturnShow}
            icon={ReturnIcon}
        />
    </Admin>
);

export default App;
