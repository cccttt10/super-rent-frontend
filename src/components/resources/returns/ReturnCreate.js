import React from 'react';
import { AutocompleteInput, Create, ReferenceInput, SimpleForm } from 'react-admin';

import CustomDateInput from '../../reusables/CustomDateInput';
import validateReturn from './validateReturn';

const ReturnCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show" validate={validateReturn}>
            <ReferenceInput
                label="Rent ID"
                source="rentId"
                reference="rents"
                perPage={500}
            >
                <AutocompleteInput
                    source="rentId"
                    optionText={choice => `${choice.rentId}`}
                />
            </ReferenceInput>
            <CustomDateInput
                source="date"
                label="Return Date"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Create>
);

export default ReturnCreate;
