import Typography from '@material-ui/core/Typography';
import * as moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';

const CustomDateField = ({ source, record = {}, showTime = false }) => {
    const format = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    const date = moment(record[source]);
    const dateString = date.tz('UTC').format(format);
    return (
        <Typography component="span" variant="body1">
            {dateString}
        </Typography>
    );
    // return <span>{dateString}</span>;
};

CustomDateField.defaultProps = {
    addLabel: true
};

CustomDateField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    showTime: PropTypes.bool
};

export default CustomDateField;
