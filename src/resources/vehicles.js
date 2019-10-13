import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const VehicleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="licence" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="color" />
            <NumberField source="odometer" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
