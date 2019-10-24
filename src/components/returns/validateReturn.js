const validateReturn = values => {
    const errors = {};
    if (!values.rentId)
        errors.rentId = [ 'You must specify a rent ID' ];
    if (!values.date) errors.date = [ 'You must specify a date' ];
    return errors;
};

export default validateReturn;
