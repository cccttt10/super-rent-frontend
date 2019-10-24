import React from 'react';
import {
    ReferenceInput,
    AutocompleteInput,
    SimpleForm,
    Create
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import * as moment from 'moment';
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
            <DateInput
                defaultValue={moment()}
                source="date"
                label="Return Date"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Create>
);

export default ReturnCreate;
