import React from 'react';
import {
    TextField,
    ReferenceField,
    DateField,
    BooleanField,
    SimpleShowLayout,
    Show
} from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton, EditButton } from 'react-admin';

const RentShow = props => (
    <Show actions={<RentShowActions />} {...props} title=" ">
        <SimpleShowLayout>
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
                <DeleteButton
                    basePath={basePath}
                    record={data}
                    resource="rents"
                />
                <EditButton
                    basePath={basePath}
                    record={data}
                    resource="rents"
                />
            </CardActions>
        );
    else
        return (
            <p style={{ color: 'red' }}>
                This rent was already returned, you can't delete or
                edit this rent anymore
            </p>
        );
};

export default RentShow;
