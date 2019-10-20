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
    SelectInput,
    RadioButtonGroupInput,
    SimpleForm,
    Create
} from 'react-admin';

export const VehicleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="licence" />
            <TextField source="make" />
            <TextField source="model" />
            <TextField source="year" />
            <TextField source="status" />
            <TextField source="vehicleTypeName" label="Type" />
            <TextField source="dayRate" label="$/day" />
            <TextField source="location" />
            <TextField source="city" />
        </Datagrid>
    </List>
);

export const VehicleEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="licence" />
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="year" />
            <TextInput source="color" />
            <RadioButtonGroupInput
                source="status"
                choices={[
                    { id: 'rented', name: 'rented' },
                    { id: 'available', name: 'available' },
                    {
                        id: 'maintenance',
                        name: 'maintenance'
                    }
                ]}
            />

            <SelectInput
                source="vehicleTypeName"
                label="Type"
                choices={[
                    { id: 'Compact', name: 'Compact' },
                    { id: 'Mid-size', name: 'Mid-size' },
                    { id: 'Standard', name: 'Standard' },
                    { id: 'Full-size', name: 'Full-size' },
                    { id: 'SUV', name: 'SUV' },
                    { id: 'Truck', name: 'Truck' }
                ]}
            />

            <TextInput source="location" />
            <TextInput source="city" />
        </SimpleForm>
    </Edit>
);

export const VehicleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="licence" />
            <TextInput source="make" />
            <TextInput source="model" />
            <TextInput source="year" />
            <TextInput source="color" />
            <RadioButtonGroupInput
                source="status"
                choices={[
                    { id: 'rented', name: 'rented' },
                    { id: 'available', name: 'available' },
                    {
                        id: 'maintenance',
                        name: 'maintenance'
                    }
                ]}
            />
            <SelectInput
                source="vehicleTypeName"
                label="Type"
                choices={[
                    { id: 'Compact', name: 'Compact' },
                    { id: 'Mid-size', name: 'Mid-size' },
                    { id: 'Standard', name: 'Standard' },
                    { id: 'Full-size', name: 'Full-size' },
                    { id: 'SUV', name: 'SUV' },
                    { id: 'Truck', name: 'Truck' }
                ]}
            />
            <TextInput source="location" />
            <TextInput source="city" />
        </SimpleForm>
    </Create>
);
