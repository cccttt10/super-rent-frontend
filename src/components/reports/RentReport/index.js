import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import RentReportPerBranch from './RentReportPerBranch';
import * as axios from 'axios';
import { Loading } from 'react-admin';
import colStyles from '../colStyles';

class RentReport extends Component {
    state = { isLoading: true };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // handle refresh
        if (this.props.version !== prevProps.version) {
            this.fetchData();
        }
    }

    async fetchData() {
        this.setState({ isLoading: true });
        await this.fetchDailyRents();
        this.setState({ isLoading: false });
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
        let { dailyRents, isLoading } = this.state;
        if (dailyRents === undefined) dailyRents = [];
        if (isLoading)
            return (
                <Loading
                    loadingPrimary="Generating Report..."
                    loadingSecondary=""
                />
            );
        return (
            <div style={colStyles.flex}>
                <div style={colStyles.leftCol}>
                    {dailyRents.map(record => (
                        <div style={colStyles.singleCol}>
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
