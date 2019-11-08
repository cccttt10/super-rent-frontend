import * as axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Loader from '../reusables/Loader';
import NameCard from '../reusables/NameCard';
import NewRents from './NewRents';
import NumCustomers from './NumCustomers';
import NumVehicles from './NumVehicles';

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
            `${process.env.REACT_APP_API_URL}/reports/rents`
        );
        const data = responseRents.data;
        // console.log(data);
        let newRents = [];
        for (const e of data) {
            newRents = newRents.concat(e.dailyRents);
        }
        // console.log(newRents);

        const responseCustomers = await axios.get(
            `${process.env.REACT_APP_API_URL}/customers`
        );
        const responseVehicles = await axios.get(
            `${process.env.REACT_APP_API_URL}/vehicles`
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

                    {/* <div style={styles.flex}>
                        <div style={styles.rightCol} />
                    </div> */}
                    <NameCard />
                </div>

                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <NewRents newRents={newRents} num={newRents.length} />
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
