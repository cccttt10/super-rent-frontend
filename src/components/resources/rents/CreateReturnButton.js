import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../reusables/StyledButton';

const CreateReturnButton = ({ record }) => {
    if (!record.isReturned) {
        return (
            <StyledButton
                component={Link}
                to={{
                    pathname: '/returns/create',
                    search: '?rentId=' + record.id
                }}
            >
                Return
            </StyledButton>
        );
    } else return <span />;
};

export default CreateReturnButton;
