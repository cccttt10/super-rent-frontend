import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    BooleanField,
    DateField,
    Edit,
    DisabledInput,
    SelectInput,
    TextInput,
    BooleanInput,
    ReferenceInput,
    AutocompleteInput,
    ReferenceField,
    NumberInput,
    SimpleForm,
    Create,
    Filter
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';
import * as moment from 'moment';

export const ReservationList = props => (
    <List {...props} filters={<ReservationFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="confNum" label="Confirmation #" />
            <TextField
                source="vehicleTypeName"
                label="Vehicle Type"
            />

            <ReferenceField
                source="driversLicence"
                reference="customers"
                label="Driver's Licence"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <DateField
                source="fromDate"
                label="From"
                options={{ format: 'YYYY-MM-dd' }}
            />
            <DateField
                source="toDate"
                label="To"
                options={{ format: 'YYYY-MM-dd' }}
            />
        </Datagrid>
    </List>
);

export const ReservationEdit = props => (
    <Edit {...props}>
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
    </Edit>
);

export const ReservationCreate = props => (
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

const validateReservation = values => {
    const errors = {};
    if (!values.vehicleTypeName)
        errors.vehicleTypeName = [
            'You must specify a vehicle type'
        ];

    if (!values.driversLicence)
        errors.driversLicence = [ 'You must specify a customer' ];

    if (!values.fromDate)
        errors.fromDate = [ 'You must specify a start date' ];

    if (!values.toDate)
        errors.toDate = [ 'You must specify an end date' ];

    if (!moment(values.toDate).isSameOrAfter(values.fromDate))
        errors.toDate = [
            'The end date must be greater or equal than the start date'
        ];

    return errors;
};

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
                optionText={choice =>
                    `${choice.driversLicence} (${choice.name})`}
            />
        </ReferenceInput>
        <DateInput
            source="fromDate"
            label="From"
            options={{ format: 'MM-dd-YYYY' }}
        />
        <DateInput
            source="toDate"
            label="To"
            options={{ format: 'MM-dd-YYYY' }}
        />
    </Filter>
);
