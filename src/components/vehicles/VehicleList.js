import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import rowStyle from './rowStyle';
import VehicleFilter from './VehicleFilter';

const VehicleList = props => (
    <List {...props} filters={<VehicleFilter />}>
        <Datagrid rowClick="edit" rowStyle={rowStyle}>
            <TextField source="vehicleLicence" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="status" />
            <TextField source="vehicleTypeName" label="Type" />
            <TextField source="dayRate" label="$/day" />
            <TextField source="location" />
            <TextField source="city" />
        </Datagrid>
    </List>
);

export default VehicleList;
