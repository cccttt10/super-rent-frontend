import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField
                source="driversLicence"
                label="Driver's Licence"
            />
            <TextField source="phone" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default CustomerList;
