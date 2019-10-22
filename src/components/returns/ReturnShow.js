import React from 'react';
import {
    TextField,
    NumberField,
    RichTextField,
    DateField,
    ReferenceField,
    SimpleShowLayout,
    Show
} from 'react-admin';
import CardActions from '@material-ui/core/CardActions';
import { DeleteButton } from 'react-admin';

const ReturnShow = props => (
    <Show actions={<ReturnShowActions />} {...props}>
        <SimpleShowLayout>
            <ReferenceField
                source="rentId"
                reference="rents"
                label="Rent ID"
            >
                <TextField source="rentId" />
            </ReferenceField>

            <DateField
                source="date"
                label="Return Date"
                options={{ format: 'YYYY-MM-dd' }}
            />

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
        <DeleteButton
            basePath={basePath}
            record={data}
            resource="returns"
        />
    </CardActions>
);

export default ReturnShow;
