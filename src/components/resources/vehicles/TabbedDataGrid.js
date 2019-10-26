import React, { Fragment } from 'react';
import { Datagrid, TextField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateReservationButton from './CreateReservationButton';
import ColoredStatusField from './ColoredStatusField';

const datagridStyles = {
    total: { fontWeight: 'bold' }
};

class TabbedDatagrid extends React.Component {

    componentDidMount() {
        const { filterValues, setFilters } = this.props;
        setFilters({ ...filterValues, status: 'all' });
    }
    tabs = [
        { id: 'all', name: 'all' },
        { id: 'available', name: 'available' },
        { id: 'rented', name: 'rented' },
        { id: 'maintenance', name: 'maintenance' }
    ];

    state = { all: [], available: [], rented: [], maintenance: [] };

    static getDerivedStateFromProps(props, state) {
        if (props.ids !== state[props.filterValues.status]) {
            return {
                ...state,
                [props.filterValues.status]: props.ids
            };
        }
        return null;
    }

    handleChange = (event, value) => {
        const { filterValues, setFilters } = this.props;
        setFilters({ ...filterValues, status: value });
    };

    render() {
        const { classes, filterValues, ...props } = this.props;
        return (
            <Fragment>
                <Tabs
                    fullWidth
                    centered
                    value={filterValues.status}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                >
                    {this.tabs.map(choice => (
                        <Tab
                            key={choice.id}
                            label={choice.name}
                            value={choice.id}
                        />
                    ))}
                </Tabs>
                <Divider />

                <div>
                    {filterValues.status === 'all' && (
                        <Datagrid {...props} ids={this.state.all}>
                            <TextField source="vehicleLicence" />
                            <TextField source="make" />
                            <ColoredStatusField source="status" />
                            <TextField
                                source="vehicleTypeName"
                                label="Type"
                            />
                            <TextField
                                source="dayRate"
                                label="$/day"
                            />
                            <TextField source="city" />
                            <CreateReservationButton />
                        </Datagrid>
                    )}
                    {filterValues.status === 'available' && (
                        <Datagrid
                            {...props}
                            ids={this.state.available}
                        >
                            <TextField source="vehicleLicence" />
                            <TextField source="make" />
                            <ColoredStatusField source="status" />
                            <TextField
                                source="vehicleTypeName"
                                label="Type"
                            />
                            <TextField
                                source="dayRate"
                                label="$/day"
                            />
                            <TextField source="city" />
                            <CreateReservationButton />
                        </Datagrid>
                    )}
                    {filterValues.status === 'rented' && (
                        <Datagrid {...props} ids={this.state.rented}>
                            <TextField source="vehicleLicence" />
                            <TextField source="make" />
                            <ColoredStatusField source="status" />
                            <TextField
                                source="vehicleTypeName"
                                label="Type"
                            />
                            <TextField
                                source="dayRate"
                                label="$/day"
                            />
                            <TextField source="city" />
                            <CreateReservationButton />
                        </Datagrid>
                    )}
                    {filterValues.status === 'maintenance' && (
                        <Datagrid
                            {...props}
                            ids={this.state.maintenance}
                        >
                            <TextField source="vehicleLicence" />
                            <TextField source="make" />
                            <ColoredStatusField source="status" />
                            <TextField
                                source="vehicleTypeName"
                                label="Type"
                            />
                            <TextField
                                source="dayRate"
                                label="$/day"
                            />
                            <TextField source="city" />
                            <CreateReservationButton />
                        </Datagrid>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default withStyles(datagridStyles)(TabbedDatagrid);
