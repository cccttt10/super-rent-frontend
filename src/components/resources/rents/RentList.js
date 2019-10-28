import React from 'react';
import {
    BooleanField,
    Datagrid,
    List,
    ReferenceField,
    TextField} from 'react-admin';

import CustomDateField from '../../reusables/CustomDateField';
import CreateReturnButton from './CreateReturnButton';
import RentShow from './RentShow';

const RentList = props => (
    <List {...props}>
        <Datagrid expand={<RentShow />}>
            <TextField source="rentId" label="ID" />
            <ReferenceField
                source="vehicleLicence"
                reference="vehicles"
                label="Vehicle Licence"
                linkType="show"
            >
                <TextField source="vehicleLicence" />
            </ReferenceField>

            <ReferenceField
                source="driversLicence"
                reference="customers"
                label="Driver's Licence"
                linkType="show"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <ReferenceField
                source="confNum"
                reference="reservations"
                label="Reservation #"
                allowEmpty
                linkType="show"
            >
                <TextField source="confNum" />
            </ReferenceField>

            <CustomDateField source="fromDate" label="From" />
            <CustomDateField source="toDate" label="To" />
            <BooleanField source="isReturned" label="Returned?" />
            <CreateReturnButton />
        </Datagrid>
    </List>
);

export default RentList;
