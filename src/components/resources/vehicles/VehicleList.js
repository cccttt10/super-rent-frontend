import React from 'react';
import { List } from 'react-admin';

import rowStyle from './rowStyle';
import TabbedDataGrid from './TabbedDataGrid';
import VehicleFilter from './VehicleFilter';
import VehicleShow from './VehicleShow';

const VehicleList = props => (
    <List {...props} filters={<VehicleFilter />}>
        <TabbedDataGrid rowStyle={rowStyle} expand={<VehicleShow />} />
    </List>
);

export default VehicleList;
