import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { AppBar } from 'react-admin';

import ThemeButton from '../themes/ThemeButton';
import Logo from './Logo';

const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    spacer: {
        flex: 1
    }
};

const CustomAppBar = ({ classes, ...props }) => (
    <AppBar {...props}>
        <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            id="react-admin-title"
        />
        <Logo />
        <span className={classes.spacer} />
        <ThemeButton />
        {/* <Tooltip  title="Toggle Theme">
            <IconButton color="inherit">
                <SunIcon color="white" />
            </IconButton>
        </Tooltip> */}
        {/* <span className={classes.spacer} /> */}
    </AppBar>
);

export default withStyles(styles)(CustomAppBar);
