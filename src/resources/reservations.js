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

// export const ReservationList = props => (
//     <List {...props}>
//         <Datagrid rowClick="edit">
//             <TextField source="driversLicence" label="Driver's Licence"/>
//             <TextField source="phone" />
//             <TextField source="name" />
//         </Datagrid>
//     </List>
// );

// export const ReservationEdit = props => (
//     <Edit {...props}>
//         <SimpleForm>
//             <TextInput source="driversLicence" label="Driver's Licence"/>
//             <TextInput source="phone" />
//             <TextInput source="name" />
//         </SimpleForm>
//     </Edit>
// );

// export const ReservationCreate = props => (
//     <Create {...props}>
//         <SimpleForm>
//             <TextInput source="driversLicence" label="Driver's Licence"/>
//             <TextInput source="phone" />
//             <TextInput source="name" />
//         </SimpleForm>
//     </Create>
// );