import React, { Component } from 'react';
import compose from 'recompose/compose';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import ReturnReportPerBranch from './ReturnReportPerBranch';
import * as axios from 'axios';
import { Title } from 'react-admin';
import colStyles from '../colStyles';
import BranchFilter from '../BranchFilter';
import Loader from '../../reusables/Loader';

class ReturnReport extends Component {
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
        await this.fetchDailyReturns();
        this.setState({ isLoading: false });
    }

    async fetchDailyReturns() {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/reports/returns`
        );
        const dailyReturns = response.data;
        // console.log(dailyReturns);
        const branches = dailyReturns.map(entry => entry.branch);
        // console.log(branches);
        this.setState({ dailyReturns, branches });
    }

    render() {
        let { dailyReturns, branches, isLoading, selectedBranch } = this.state;
        if (dailyReturns === undefined) dailyReturns = [];
        else if (selectedBranch)
            dailyReturns = dailyReturns.filter(
                dailyRent =>
                    dailyRent.branch.city === selectedBranch.city &&
                    dailyRent.branch.location === selectedBranch.location
            );
        if (branches === undefined) branches = [];
        if (isLoading)
            return (
                <div>
                    <Title title="Today's Returns" />
                    <Loader />
                </div>
            );
        return (
            <div>
                <Title title="Today's Returns" />
                <BranchFilter
                    setBranchFilter={this.setBranchFilter}
                    branches={branches}
                />
                <div style={colStyles.flex}>
                    <div style={colStyles.leftCol}>
                        {dailyReturns.map(record => (
                            <div key={uuid()} style={colStyles.singleCol}>
                                <ReturnReportPerBranch
                                    dailyReturnsPerBranch={record}
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

export default compose(connect(mapStateToProps))(ReturnReport);
