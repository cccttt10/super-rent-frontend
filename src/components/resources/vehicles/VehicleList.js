import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import rowStyle from './rowStyle';
import VehicleFilter from './VehicleFilter';
import CreateReservationButton from './CreateReservationButton';
import VehicleShow from './VehicleShow';
import ColoredStatusField from './ColoredStatusField';
import TabbedDataGrid from './TabbedDataGrid';

const VehicleList = props => (
    <List {...props} filters={<VehicleFilter />}>
        <TabbedDataGrid rowStyle={rowStyle} expand={<VehicleShow />}/>
        {/* <Datagrid rowStyle={rowStyle} expand={<VehicleShow />}>
            <TextField source="vehicleLicence" />
            <TextField source="make" />
            <ColoredStatusField source="status" />
            <TextField source="vehicleTypeName" label="Type" />
            <TextField source="dayRate" label="$/day" />
            <TextField source="city" />
            <CreateReservationButton />
        </Datagrid> */}
    </List>
);

export default VehicleList;
