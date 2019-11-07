import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import { connect } from 'react-redux';

import { darkTheme, lightTheme } from '../themes/themes';
import AppBar from './AppBar';
import Menu from './Menu';

const CustomSidebar = props => <Sidebar {...props} size={200} />;
const CustomLayout = props => (
    <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} menu={Menu} />
);

export default connect(
    state => ({
        theme: state.theme === 'dark' ? darkTheme : lightTheme
    }),
    {}
)(CustomLayout);

// export default CustomLayout;
