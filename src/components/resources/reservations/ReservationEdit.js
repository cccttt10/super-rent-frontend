import React from 'react';
import {
    AutocompleteInput,
    DisabledInput,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleForm
} from 'react-admin';

import CustomDateInput from '../../reusables/CustomDateInput';
import validateReservation from './validateReservation';

const ReservationEdit = props => (
    <Edit undoable={false} {...props}>
        <SimpleForm validate={validateReservation}>
            <DisabledInput source="confNum" label="Confirmation #" />
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
                        `${choice.driversLicence} (${choice.name})`
                    }
                />
            </ReferenceInput>

            <CustomDateInput
                source="fromDate"
                label="From"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <CustomDateInput
                source="toDate"
                label="To"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </SimpleForm>
    </Edit>
);

export default ReservationEdit;
