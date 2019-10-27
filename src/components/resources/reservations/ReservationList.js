import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    EditButton
} from 'react-admin';
import ReservationFilter from './ReservationFilter';

const ReservationList = props => (
    <List {...props} filters={<ReservationFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="confNum" label="Confirmation #" />
            <TextField
                source="vehicleTypeName"
                label="Vehicle Type"
            />

            <ReferenceField
                source="driversLicence"
                reference="customers"
                label="Customer"
                linkType="show"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <DateField
                source="fromDate"
                label="From"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <DateField
                source="toDate"
                label="To"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <EditButton />
        </Datagrid>
    </List>
);

export default ReservationList;
