import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const CreateReservationButton = ({ record }) => {
    if (record.status === 'available') {
        return (
            <StyledButton
                component={Link}
                to={{
                    pathname: '/rents/create',
                    search: '?vehicleLicence=' + record.id
                }}
            >
                Rent
            </StyledButton>
        );
    }
    else return <></>;
};

export default CreateReservationButton;
