import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="driversLicence" label="Driver's Licence" />
            <TextField source="phone" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CustomerList;
