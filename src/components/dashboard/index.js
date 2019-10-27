import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import * as axios from 'axios';
import NumCustomers from './NumCustomers';
import NumVehicles from './NumVehicles';
import NewRents from './NewRents';
import Loader from '../reusables/Loader';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            newRents: [],
            numCustomers: 0,
            numVehicles: 0
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // handle refresh
        if (this.props.version !== prevProps.version) {
            this.fetchData();
        }
    }

    fetchData() {
        this.setState({ ...this.state, isLoading: true });
        this.fetchNewRents();
    }

    async fetchNewRents() {
        const responseRents = await axios.get(
            'http://localhost:3300/reports/rents'
        );
        const data = responseRents.data;
        console.log(data);
        let newRents = [];
        for (const e of data) {
            newRents = newRents.concat(e.dailyRents);
        }
        console.log(newRents);

        const responseCustomers = await axios.get(
            'http://localhost:3300/customers'
        );
        const responseVehicles = await axios.get(
            'http://localhost:3300/vehicles'
        );
        const numCustomers = responseCustomers.data.length;
        const numVehicles = responseVehicles.data.length;
        this.setState({
            ...this.state,
            newRents,
            numCustomers,
            numVehicles,
            isLoading: false
        });
    }

    render() {
        if (this.state.isLoading) return <Loader />;
        const { newRents, numCustomers, numVehicles } = this.state;

        return (
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <NumCustomers value={numCustomers} />
                        <NumVehicles value={numVehicles} />
                    </div>

                    <div style={styles.flex}>
                        <div style={styles.rightCol} />
                    </div>
                </div>

                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <NewRents
                            newRents={newRents}
                            num={newRents.length}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    version: state.admin.ui.viewVersion
});

export default compose(connect(mapStateToProps))(Dashboard);
