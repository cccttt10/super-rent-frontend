import React from 'react';
import { Show, TextField, SimpleShowLayout } from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton, EditButton } from 'react-admin';

const CustomerShow = props => (
    <Show actions={<CustomerShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="driversLicence" label="Driver's Licence" />
            <TextField source="phone" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const CustomerShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} resource="customers" />
        <DeleteButton basePath={basePath} record={data} resource="customers" />
    </CardActions>
);

export default CustomerShow;
