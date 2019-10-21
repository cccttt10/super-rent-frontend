import React from 'react';
import {
    TextInput,
    SelectInput,
    RadioButtonGroupInput,
    SimpleForm,
    Create
} from 'react-admin';

const VehicleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="vehicleLicence" />
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

export default VehicleCreate;
