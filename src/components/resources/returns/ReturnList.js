import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    ReferenceField,
    ShowButton
} from 'react-admin';
import CustomDateField from '../../reusables/CustomDateField';

const ReturnList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <ReferenceField
                source="rentId"
                reference="rents"
                label="Rent ID"
                linkType="show"
            >
                <TextField source="rentId" />
            </ReferenceField>

            <CustomDateField
                source="date"
                label="Return Date"
            />

            <NumberField source="price" label="Price $" />
            <ShowButton />
        </Datagrid>
    </List>
);

export default ReturnList;
