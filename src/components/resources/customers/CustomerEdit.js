import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

import validateCustomer from './validateCustomer';

const CustomerEdit = props => (
    <Edit undoable={false} {...props}>
        <SimpleForm validate={validateCustomer}>
            <TextInput source="driversLicence" label="Driver's Licence" />
            <TextInput source="phone" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default CustomerEdit;
