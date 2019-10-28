import React from 'react';
import { Filter,SelectInput, TextInput } from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';

const VehicleFilter = props => (
    <Filter {...props}>
        <SelectInput
            source="vehicleTypeName"
            label="Type"
            choices={[
                { id: 'Compact', name: 'Compact' },
                { id: 'Mid-size', name: 'Mid-size' },
                { id: 'Standard', name: 'Standard' },
                { id: 'Full-size', name: 'Full-size' },
                { id: 'SUV', name: 'SUV' },
                { id: 'Truck', name: 'Truck' }
            ]}
        />
        <TextInput label="City" source="city" defaultValue="Vancouver" />
        <DateInput
            source="fromDate"
            label="Available From"
            options={{ format: 'MM-dd-YYYY' }}
        />
        <DateInput
            source="toDate"
            label="Available Until"
            options={{ format: 'MM-dd-YYYY' }}
        />
    </Filter>
);

export default VehicleFilter;
