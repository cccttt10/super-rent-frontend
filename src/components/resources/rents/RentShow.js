import React from 'react';
import {
    TextField,
    ReferenceField,
    BooleanField,
    SimpleShowLayout,
    Show
} from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton, EditButton } from 'react-admin';

import CustomDateField from '../../reusables/CustomDateField';

const RentShow = props => (
    <Show actions={<RentShowActions />} {...props} title=" ">
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const RentShowActions = ({ basePath, data, resource }) => {
    if (!data.isReturned)
        return (
            <CardActions style={cardActionStyle}>
                <DeleteButton basePath={basePath} record={data} resource="rents" />
                <EditButton basePath={basePath} record={data} resource="rents" />
            </CardActions>
        );
    else
        return (
            <p style={{ color: 'red' }}>
                This rent was already returned, you cannot delete or edit this rent
                anymore
            </p>
        );
};

export default RentShow;
