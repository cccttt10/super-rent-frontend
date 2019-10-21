import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    RichTextField,
    DateField,
    Edit,
    DisabledInput,
    SelectInput,
    TextInput,
    BooleanInput,
    ReferenceInput,
    AutocompleteInput,
    ReferenceField,
    NumberInput,
    SimpleForm,
    Create,
    SimpleShowLayout,
    Show
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { DeleteButton } from 'react-admin';

export const ReturnList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
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
        </Datagrid>
    </List>
);

export const ReturnCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <ReferenceInput
                label="Rent ID"
                source="rentId"
                reference="rents"
                perPage={500}
            >
                <AutocompleteInput
                    source="rentId"
                    optionText={choice => `${choice.rentId}`}
                />
            </ReferenceInput>

            <DateInput
                source="date"
                label="Return Date"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Create>
);

export const ReturnShow = props => (
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
        <DeleteButton basePath={basePath} record={data} resource="returns"/>
    </CardActions>
);
