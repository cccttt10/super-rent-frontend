import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    DisabledInput,
    TextInput,
    NumberInput,
    RadioButtonGroupInput,
    SimpleForm,
    Create
} from 'react-admin';

export const VehicleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="licence" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="color" />
            <NumberField source="odometer" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

export const VehicleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="licence" />
            <TextInput source="make" />
            <TextInput source="model" />
            <NumberInput source="year" />
            <TextInput source="color" />
            <NumberInput source="odometer" />
            <RadioButtonGroupInput
                source="status"
                choices={[
                    { id: 'rented', name: 'rented' },
                    { id: 'sold', name: 'sold' },
                    {
                        id: 'available for rent',
                        name: 'available for rent'
                    },
                    {
                        id: 'available for sale',
                        name: 'available for sale'
                    }
                ]}
            />
        </SimpleForm>
    </Edit>
);

export const VehicleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="licence" />
            <TextInput source="make" />
            <TextInput source="model" />
            <NumberInput source="year" />
            <TextInput source="color" />
            <NumberInput source="odometer" />
            <RadioButtonGroupInput
                source="status"
                choices={[
                    { id: 'rented', name: 'rented' },
                    { id: 'sold', name: 'sold' },
                    {
                        id: 'available for rent',
                        name: 'available for rent'
                    },
                    {
                        id: 'available for sale',
                        name: 'available for sale'
                    }
                ]}
            />
        </SimpleForm>
    </Create>
);
