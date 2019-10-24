import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    ReferenceField
} from 'react-admin';

const ReturnList = props => (
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

export default ReturnList;
