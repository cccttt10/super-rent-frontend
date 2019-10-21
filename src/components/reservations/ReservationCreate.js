import React from 'react';
import {
    SelectInput,
    ReferenceInput,
    AutocompleteInput,
    SimpleForm,
    Create
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import validateReservation from './validateReservation';

const ReservationCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateReservation}>
            <SelectInput
                source="vehicleTypeName"
                label="Vehicle Type"
                choices={[
                    { id: 'Compact', name: 'Compact' },
                    { id: 'Mid-size', name: 'Mid-size' },
                    { id: 'Standard', name: 'Standard' },
                    { id: 'Full-size', name: 'Full-size' },
                    { id: 'SUV', name: 'SUV' },
                    { id: 'Truck', name: 'Truck' }
                ]}
            />
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

            <DateInput
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

export default ReservationCreate;
