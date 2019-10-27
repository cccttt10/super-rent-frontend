import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import RentReportPerBranch from './RentReportPerBranch';
import * as axios from 'axios';
import { Title } from 'react-admin';
import colStyles from '../colStyles';
import BranchFilter from '../BranchFilter';
import Loader from '../../reusables/Loader';

class RentReport extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, selectedBranch: null };
        this.setBranchFilter = this.setBranchFilter.bind(this);
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

    setBranchFilter(selectedBranch) {
        this.setState({ ...this.state, selectedBranch });
    }

    async fetchData() {
        this.setState({ isLoading: true });
        await this.fetchDailyRents();
        this.setState({ isLoading: false });
    }

    async fetchDailyRents() {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/reports/rents`
        );
        const dailyRents = response.data;
        console.log(dailyRents);
        const branches = dailyRents.map(entry => entry.branch);
        console.log(branches);
        this.setState({ dailyRents, branches });
    }

    render() {
        let {
            dailyRents,
            branches,
            isLoading,
            selectedBranch
        } = this.state;
        if (dailyRents === undefined) dailyRents = [];
        else if (selectedBranch)
            dailyRents = dailyRents.filter(
                dailyRent =>
                    dailyRent.branch.city === selectedBranch.city &&
                    dailyRent.branch.location ===
                        selectedBranch.location
            );
        if (branches === undefined) branches = [];
        if (isLoading)
            return (
                <div>
                    <Title title="Today's Rents" />
                    <Loader />
                </div>
            );
        return (
            <div>
                <Title title="Today's Rents" />
                <BranchFilter
                    setBranchFilter={this.setBranchFilter}
                    branches={branches}
                />
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    version: state.admin.ui.viewVersion
});

export default compose(connect(mapStateToProps))(RentReport);
