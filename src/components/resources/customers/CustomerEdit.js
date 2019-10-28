import React from 'react';
import { Edit, TextInput, SimpleForm } from 'react-admin';
import validateCustomer from './validateCustomer';

const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm validate={validateCustomer}>
            <TextInput source="driversLicence" label="Driver's Licence" />
            <TextInput source="phone" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default CustomerEdit;
