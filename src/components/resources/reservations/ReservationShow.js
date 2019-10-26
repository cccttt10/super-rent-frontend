import React from 'react';
import {
    Show,
    TextField,
    ReferenceField,
    SimpleShowLayout,
    DateField
} from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton, EditButton } from 'react-admin';

const ReservationEdit = props => (
    <Show actions={<ReservationShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="confNum" label="Confirmation #" />
            <TextField
                source="vehicleTypeName"
                label="Vehicle Type"
            />
            <ReferenceField
                label="Customer"
                source="driversLicence"
                reference="customers"
                linkType="show"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <DateField source="fromDate" label="From" />
            <DateField source="toDate" label="To" />
        </SimpleShowLayout>
    </Show>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const ReservationShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <EditButton
            basePath={basePath}
            record={data}
            resource="reservations"
        />
        <DeleteButton
            basePath={basePath}
            record={data}
            resource="reservations"
        />
    </CardActions>
);

export default ReservationEdit;
