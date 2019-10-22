import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField
} from 'react-admin';

const RentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="rentId" label="ID" />
            <ReferenceField
                source="vehicleLicence"
                reference="vehicles"
                label="Vehicle Licence"
            >
                <TextField source="vehicleLicence" />
            </ReferenceField>

            <ReferenceField
                source="driversLicence"
                reference="customers"
                label="Driver's Licence"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <ReferenceField
                source="confNum"
                reference="reservations"
                label="Reservation #"
                allowEmpty
            >
                <TextField source="confNum" />
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
        </Datagrid>
    </List>
);

export default RentList;
