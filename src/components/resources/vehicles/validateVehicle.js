const validateVehicle = values => {
    const errors = {};

    if (!values.vehicleLicence)
        errors.vehicleLicence = [ 'You must enter vehicle licence' ];

    if (!values.status)
        errors.status = [ 'You must set vehicle status' ];

    if (!values.make) errors.make = [ 'You must set vehicle make' ];

    if (!values.model)
        errors.model = [ 'You must set vehicle model' ];

    if (!values.year) errors.year = [ 'You must set vehicle year' ];

    if (!values.color)
        errors.color = [ 'You must set vehicle color' ];

    if (!values.vehicleTypeName)
        errors.vehicleTypeName = [
            'You must specify a vehicle type'
        ];

    if (!values.location)
        errors.location = [ 'You must set vehicle location' ];

    if (!values.city) errors.city = [ 'You must set vehicle city' ];

    if (!/^\d{7}$/.test(values.vehicleLicence))
        errors.vehicleLicence = [ 'Licence must be 7 digits' ];

    if (!/^(19|20)\d{2}$/.test(values.year))
        errors.year = [
            'Year must be 1900 ~ 2099, and contain no illegal characters'
        ];

    return errors;
};

export default validateVehicle;
