import React from 'react';
import {
    ReferenceInput,
    AutocompleteInput,
    SimpleForm,
    Create
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';

const ReturnCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
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

            <DateInput
                source="date"
                label="Return Date"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Create>
);

export default ReturnCreate;
