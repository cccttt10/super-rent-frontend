import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        background:
            'linear-gradient(45deg, #0DBC79 30%, #10AB8F 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(16, 171, 143, 0.1)'
    },
    label: {
        textTransform: 'uppercase'
    }
})(Button);

export default StyledButton;
