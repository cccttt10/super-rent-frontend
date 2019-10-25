import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import RentReportPerBranch from './RentReportPerBranch';
import * as axios from 'axios';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' }
};

class RentReport extends Component {
    state = {};

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
        this.fetchDailyRents();
    }

    async fetchDailyRents() {
        const response = await axios.get(
            'http://localhost:3300/reports/rents'
        );
        const dailyRents = response.data;
        console.log(dailyRents);
        this.setState({ dailyRents });
    }

    render() {
        let { dailyRents } = this.state;
        if (dailyRents === undefined) dailyRents = [];
        return (
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    {dailyRents.map(record => (
                        <div style={styles.singleCol}>
                            <RentReportPerBranch
                                dailyRentsPerBranch={record}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    version: state.admin.ui.viewVersion
});

export default compose(connect(mapStateToProps))(RentReport);
