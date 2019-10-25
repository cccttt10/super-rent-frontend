import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';

import customers from '../resources/customers';
import vehicles from '../resources/vehicles';
import reservations from '../resources/reservations';
import rents from '../resources/rents';
import returns from '../resources/returns';

import SubMenu from './SubMenu';

class Menu extends Component {
    state = {
        menuRents: false,
        menuReturns: false
    };

    static propTypes = {
        onMenuClick: PropTypes.func
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

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
                    handleToggle={() =>
                        this.handleToggle('menuRents')}
                    isOpen={this.state.menuRents}
                    sidebarIsOpen={open}
                    name="Rents"
                    icon={<rents.icon />}
                >
                    <MenuItemLink
                        to={`/rents`}
                        primaryText={`All Rents`}
                        leftIcon={<rents.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/dailyrents`}
                        primaryText={`Today's Rents`}
                        leftIcon={<rents.icon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>

                <SubMenu
                    handleToggle={() =>
                        this.handleToggle('menuReturns')}
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
                        to={`/dailyreturns`}
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

const enhance = compose(withRouter, connect(mapStateToProps, {}));

export default enhance(Menu);
