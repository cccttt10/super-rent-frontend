import React from 'react';
import {
    ReferenceInput,
    AutocompleteInput,
    SimpleForm,
    Create
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import * as moment from 'moment';

const RentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                label="Vehicle"
                source="vehicleLicence"
                reference="vehicles"
                perPage={500}
            >
                <AutocompleteInput
                    source="vehicleLicence"
                    optionText={choice =>
                        `${choice.vehicleLicence} (${choice.make} ${choice.model})`}
                />
            </ReferenceInput>

            <ReferenceInput
                label="Customer"
                source="driversLicence"
                reference="customers"
                perPage={500}
            >
                <AutocompleteInput
                    source="driversLicence"
                    optionText={choice =>
                        `${choice.driversLicence} (${choice.name})`}
                />
            </ReferenceInput>

            <ReferenceInput
                source="confNum"
                reference="reservations"
                label="Reservation #"
                allowEmpty
            >
                <AutocompleteInput
                    source="confNum"
                    optionText={choice => `${choice.confNum}`}
                />
            </ReferenceInput>

            <DateInput
                defaultValue={moment()}
                source="fromDate"
                label="From"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <DateInput
                source="toDate"
                label="To"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Create>
);

export default RentCreate;
