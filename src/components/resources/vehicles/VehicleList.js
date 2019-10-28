import React from 'react';
import { List } from 'react-admin';
import rowStyle from './rowStyle';
import VehicleFilter from './VehicleFilter';
import VehicleShow from './VehicleShow';
import TabbedDataGrid from './TabbedDataGrid';

const VehicleList = props => (
    <List {...props} filters={<VehicleFilter />}>
        <TabbedDataGrid rowStyle={rowStyle} expand={<VehicleShow />} />
    </List>
);

export default VehicleList;
