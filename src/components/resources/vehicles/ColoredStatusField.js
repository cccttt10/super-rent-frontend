import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import React from 'react';
import { TextField } from 'react-admin';

const coloredStyles = {
    available: { color: green[500] },
    rented: { color: orange[500] },
    maintenance: { color: red[500] }
};

const ColoredStatusField = withStyles(coloredStyles)(({ classes, ...props }) => (
    <TextField
        className={classnames({
            [classes.available]: props.record[props.source] === 'available',
            [classes.rented]: props.record[props.source] === 'rented',
            [classes.maintenance]: props.record[props.source] === 'maintenance'
        })}
        {...props}
    />
));

ColoredStatusField.defaultProps = TextField.defaultProps;

export default ColoredStatusField;
