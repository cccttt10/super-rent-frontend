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

    if (moment(values.fromDate).isBefore(moment().startOf('day')))
        errors.fromDate = [ 'Start date cannot be in the past' ];

    if (moment(values.fromDate).isAfter('2020-12-01'))
        errors.fromDate = [ 'Start date cannot be after 2020-12-01' ];

    if (moment(values.toDate).isAfter('2020-12-01'))
        errors.toDate = [ 'End date cannot be after 2020-12-01' ];
    return errors;
};

export default validateReservation;
