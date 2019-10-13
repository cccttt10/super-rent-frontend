import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="driversLicence" />
            <TextField source="isClubMember" />
            <TextField source="points" />
            <TextField source="fees" />
        </Datagrid>
    </List>
);
