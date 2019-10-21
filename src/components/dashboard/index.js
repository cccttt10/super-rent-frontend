import React, { Component } from 'react';
import {
    GET_LIST,
    withDataProvider
} from 'react-admin';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import TodayRents from './TodayRents';
import * as moment from 'moment';


const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' }
};

class Dashboard extends Component {
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
        this.fetchRents();
    }

    async fetchRents() {
        const today = moment().format('YYYY-MM-DD');
        const { dataProvider } = this.props;
        const { data: todayRents } = await dataProvider(
            GET_LIST,
            'rents',
            {
                filter: { fromDate: today },
                sort: { field: 'toDate', order: 'ASC' },
                pagination: { page: 1, perPage: 100 }
            }
        );
        const numTodayRents = todayRents.reduce(nb => ++nb, 0);
        this.setState({ todayRents, numTodayRents });
    }

    render() {
        const { todayRents, numTodayRents } = this.state;
        return (
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    {/* <div style={styles.flex}>
                        <MonthlyRevenue value={revenue} />
                        <NbNewOrders value={nbNewOrders} />
                    </div>
                    <div style={styles.singleCol}>
                        <Welcome />
                    </div>
                    <div style={styles.singleCol}>
                        <PendingOrders
                            orders={pendingOrders}
                            customers={pendingOrdersCustomers}
                        />
                    </div> */}
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <TodayRents
                            num={numTodayRents}
                            rents={todayRents}
                        />
                        {/* <NewCustomers
                            nb={nbNewCustomers}
                            visitors={newCustomers}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    version: state.admin.ui.viewVersion
});

export default compose(connect(mapStateToProps), withDataProvider)(
    Dashboard
);
