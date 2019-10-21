import React from 'react';
import { TextInput, SimpleForm, Create } from 'react-admin';

const CustomerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput
                source="driversLicence"
                label="Driver's Licence"
            />
            <TextInput source="phone" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default CustomerCreate;
