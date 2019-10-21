import React from 'react';
import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser
} from 'react-admin';
import {
    CustomerList,
    CustomerEdit,
    CustomerCreate
} from './resources/customers';
import {
    VehicleList,
    VehicleEdit,
    VehicleCreate
} from './resources/vehicles';
import {
   ReservationList,
   ReservationEdit,
   ReservationCreate
} from './resources/reservations';
import jsonServerProvider from 'ra-data-json-server';
import CustomerIcon from '@material-ui/icons/Group';
import VehicleIcon from '@material-ui/icons/DirectionsCar';
import ReservationIcon from '@material-ui/icons/AlarmOn';

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
            create={VehicleCreate}
            icon={VehicleIcon}
        />
        <Resource
            name="reservations"
            list={ReservationList}
            edit={ReservationEdit}
            create={ReservationCreate}
            icon={ReservationIcon}
        />
    </Admin>
);

export default App;
