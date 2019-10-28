import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

import customers from '../resources/customers';
import rents from '../resources/rents';
import reservations from '../resources/reservations';
import returns from '../resources/returns';
import vehicles from '../resources/vehicles';
import SubMenu from './SubMenu';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuRents: false,
            menuReturns: false
        };
        this.propTypes = {
            onMenuClick: PropTypes.func
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(menu) {
        this.setState(state => ({ [menu]: !state[menu] }));
    }

    render() {
        let { onMenuClick, open } = this.props;
        return (
            <div>
                <DashboardMenuItem onClick={onMenuClick} />

                <MenuItemLink
                    to={`/customers`}
                    primaryText="Customers"
                    leftIcon={<customers.icon />}
                    onClick={onMenuClick}
                />

                <MenuItemLink
                    to={`/vehicles`}
                    primaryText="Vehicles"
                    leftIcon={<vehicles.icon />}
                    onClick={onMenuClick}
                />

                <MenuItemLink
                    to={`/reservations`}
                    primaryText="Reservations"
                    leftIcon={<reservations.icon />}
                    onClick={onMenuClick}
                />

                <SubMenu
                    handleToggle={() => this.handleToggle('menuRents')}
                    isOpen={this.state.menuRents}
                    sidebarIsOpen={open}
                    name="Rents"
                    icon={<rents.icon />}
                >
                    <MenuItemLink
                        to="/rents"
                        primaryText={`All Rents`}
                        leftIcon={<rents.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to="/reports/rents"
                        primaryText={`Today's Rents`}
                        leftIcon={<rents.icon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>

                <SubMenu
                    handleToggle={() => this.handleToggle('menuReturns')}
                    isOpen={this.state.menuReturns}
                    sidebarIsOpen={open}
                    name="Returns"
                    icon={<returns.icon />}
                >
                    <MenuItemLink
                        to={`/returns`}
                        primaryText={`All Returns`}
                        leftIcon={<returns.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/reports/returns`}
                        primaryText={`Today's Returns`}
                        leftIcon={<returns.icon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    )
);

export default enhance(Menu);
