import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    Edit,
    DisabledInput,
    TextInput,
    BooleanInput,
    NumberInput,
    SimpleForm,
    Create
} from 'react-admin';

export const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="driversLicence" />
            <BooleanField source="isClubMember" />
            <TextField source="points" />
            <TextField source="fees" />
        </Datagrid>
    </List>
);

export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="driversLicence" />
            <NumberInput source="points" />
            <NumberInput source="fees" />
            <BooleanInput source="isClubMember" label="Club member" />
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="driversLicence" />
            <NumberInput source="points" />
            <NumberInput source="fees" />
            <BooleanInput source="isClubMember" label="Club member" defaultValue={false}/>
        </SimpleForm>
    </Create>
);
