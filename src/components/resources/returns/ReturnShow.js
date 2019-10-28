import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import {
    NumberField,
    ReferenceField,
    RichTextField,
    Show,
    SimpleShowLayout,
    TextField} from 'react-admin';
import { DeleteButton } from 'react-admin';

import CustomDateField from '../../reusables/CustomDateField';

const ReturnShow = props => (
    <Show actions={<ReturnShowActions />} {...props}>
        <SimpleShowLayout>
            <ReferenceField
                source="rentId"
                reference="rents"
                label="Rent ID"
                linkType="show"
            >
                <TextField source="rentId" />
            </ReferenceField>

            <CustomDateField source="date" label="Return Date" />

            <NumberField source="price" label="Price $" />

            <RichTextField source="returnMessage" label="Details" />
        </SimpleShowLayout>
    </Show>
);

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right'
};

const ReturnShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <DeleteButton basePath={basePath} record={data} resource="returns" />
    </CardActions>
);

export default ReturnShow;
