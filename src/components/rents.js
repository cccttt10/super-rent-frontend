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
    Create
} from 'react-admin';
import { DateInput } from 'react-admin-date-inputs';

export const RentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="rentId" label="ID" />
            <ReferenceField
                source="vehicleLicence"
                reference="vehicles"
                label="Vehicle Licence"
            >
                <TextField source="vehicleLicence" />
            </ReferenceField>

            <ReferenceField
                source="driversLicence"
                reference="customers"
                label="Driver's Licence"
            >
                <TextField source="driversLicence" />
            </ReferenceField>

            <ReferenceField
                source="confNum"
                reference="reservations"
                label="Reservation #"
                allowEmpty
            >
                <TextField source="confNum" />
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

export const RentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="rentId" label="ID" />

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

export const RentCreate = props => (
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
