import Typography from '@material-ui/core/Typography';
import * as axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import PhotoChuntong from '../../img/chuntong.JPG';
import PhotoFrank from '../../img/frank.JPG';
import PhotoLily from '../../img/lily.JPG';
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
        let newRents = [];
        for (const e of data) {
            newRents = newRents.concat(e.dailyRents);
        }

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
        const chuntongText = (
            <Typography variant="body2" color="textSecondary" component="p">
                UI Prototyping <br />
                E2E Implementation <br />
                Documentation <br />
                Deployment
            </Typography>
        );
        const frankText = (
            <Typography variant="body2" color="textSecondary" component="p">
                Testing <br />
                But Reports <br />
                Database Design <br />
                Task Automation <br />
                Product Management
            </Typography>
        );
        const lilyText = (
            <Typography variant="body2" color="textSecondary" component="p">
                Testing <br />
                But Reports <br />
                Database Design <br />
                Task Automation <br />
                Product Management
            </Typography>
        );
        return (
            <div style={styles.flex}>
                <div style={styles.flexColumn}>
                    <NameCard
                        name="Chuntong Gao"
                        photo={PhotoChuntong}
                        github="https://github.com/chuntonggao"
                        linkedin="https://www.linkedin.com/in/chuntonggao"
                        text={chuntongText}
                    />
                    <NameCard
                        name="Qizheng Zhou"
                        photo={PhotoFrank}
                        github="https://github.com/ethanhogq"
                        linkedin="https://www.linkedin.com/in/qizheng-z-39673a14b/"
                        text={frankText}
                    />
                    <NameCard
                        name="Yifei Chen"
                        photo={PhotoLily}
                        github="https://github.com/lilycyf"
                        linkedin="#"
                        text={lilyText}
                    />
                </div>

                <div style={styles.flexColumn}>
                    <div style={styles.flex}>
                        <NumCustomers value={numCustomers} />
                        <NumVehicles value={numVehicles} />
                    </div>

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
