import React from 'react';
import { SelectInput, ReferenceInput, AutocompleteInput, Filter } from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';

const ReservationFilter = props => (
    <Filter {...props}>
        <ReferenceInput
            label="Confirmation #"
            source="confNum"
            reference="reservations"
            perPage={500}
        >
            <AutocompleteInput
                source="confNum"
                optionText={choice => `${choice.confNum}`}
            />
        </ReferenceInput>
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
                optionText={choice => `${choice.driversLicence} (${choice.name})`}
            />
        </ReferenceInput>
        <DateInput
            source="fromDate"
            label="From"
            options={{ format: 'MM-dd-YYYY' }}
        />
        <DateInput source="toDate" label="To" options={{ format: 'MM-dd-YYYY' }} />
    </Filter>
);

export default ReservationFilter;
