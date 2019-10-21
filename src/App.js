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
import { ReturnList, ReturnCreate, ReturnShow } from './resources/returns';
import { RentList, RentEdit, RentCreate } from './resources/rents';
import jsonServerProvider from 'ra-data-json-server';
import CustomerIcon from '@material-ui/icons/Group';
import VehicleIcon from '@material-ui/icons/DirectionsCar';
import ReservationIcon from '@material-ui/icons/AlarmOn';
import RentIcon from '@material-ui/icons/ShoppingCart';
import ReturnIcon from '@material-ui/icons/SettingsBackupRestore';

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
