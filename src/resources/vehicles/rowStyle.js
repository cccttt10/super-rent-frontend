import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const rowStyle = (record, index, defaultStyle = {}) => {
    if (record.status === 'available')
        return {
            ...defaultStyle,
            borderLeftColor: green[500],
            borderLeftWidth: 15,
            borderLeftStyle: 'solid',
        };
    if (record.status === 'rented')
        return {
            ...defaultStyle,
            borderLeftColor: orange[500],
            borderLeftWidth: 15,
            borderLeftStyle: 'solid',
        };
    if (record.status === 'maintenance')
        return {
            ...defaultStyle,
            borderLeftColor: red[500],
            borderLeftWidth: 15,
            borderLeftStyle: 'solid',
        };
    return defaultStyle;
};

export default rowStyle;
