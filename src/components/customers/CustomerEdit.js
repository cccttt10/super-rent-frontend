import React from 'react';
import { Edit, TextInput, SimpleForm } from 'react-admin';

const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput
                source="driversLicence"
                label="Driver's Licence"
            />
            <TextInput source="phone" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default CustomerEdit;
