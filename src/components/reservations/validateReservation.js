import * as moment from 'moment';

const validateReservation = values => {
    const errors = {};
    if (!values.vehicleTypeName)
        errors.vehicleTypeName = [
            'You must specify a vehicle type'
        ];

    if (!values.driversLicence)
        errors.driversLicence = [ 'You must specify a customer' ];

    if (!values.fromDate)
        errors.fromDate = [ 'You must specify a start date' ];

    if (!values.toDate)
        errors.toDate = [ 'You must specify an end date' ];

    if (!moment(values.toDate).isSameOrAfter(values.fromDate))
        errors.toDate = [
            'The end date must be greater or equal than the start date'
        ];

    return errors;
};

export default validateReservation;
