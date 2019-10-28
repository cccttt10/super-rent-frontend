import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton
} from 'react-admin';
import ReservationFilter from './ReservationFilter';
import CustomDateField from '../../reusables/CustomDateField';

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

            <CustomDateField
                source="fromDate"
                label="From"
            />
            <CustomDateField
                source="toDate"
                label="To"
            />
            <EditButton />
        </Datagrid>
    </List>
);

export default ReservationList;
