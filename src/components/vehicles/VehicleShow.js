import React from 'react';
import { TextField, SimpleShowLayout, Show } from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton, EditButton } from 'react-admin';
import ColoredStatusField from './ColoredStatusField';

const VehicleShow = props => (
    <Show actions={<VehicleShowActions />} {...props} title=" ">
        <SimpleShowLayout>
            <TextField source="vehicleLicence" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <ColoredStatusField source="status" />
            <TextField source="vehicleTypeName" label="Type" />
            <TextField source="dayRate" label="$/day" />
            <TextField source="location" />
            <TextField source="city" />
        </SimpleShowLayout>
    </Show>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const VehicleShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <DeleteButton
            basePath={basePath}
            record={data}
            resource="vehicles"
        />
        <EditButton
            basePath={basePath}
            record={data}
            resource="vehicles"
        />
    </CardActions>
);

export default VehicleShow;
