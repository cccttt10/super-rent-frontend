import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SunIcon from '@material-ui/icons/WbSunny';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeTheme } from './actions';

class ThemeButton extends Component {
    render() {
        const { theme, changeTheme } = this.props;
        return (
            <Tooltip title="Toggle Theme">
                <IconButton
                    color="inherit"
                    onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    <SunIcon color="inherit" />
                </IconButton>
            </Tooltip>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(
    mapStateToProps,
    {
        changeTheme
    }
)(ThemeButton);
