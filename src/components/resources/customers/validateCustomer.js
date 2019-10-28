const validateCustomer = values => {
    const errors = {};

    if (!values.driversLicence)
        errors.driversLicence = [`You must enter your driver's licence`];

    if (!values.phone) errors.phone = ['You must enter your phone number'];

    if (!values.name) errors.name = ['You must specify your name'];

    if (!/^\d{7}$/.test(values.driversLicence))
        errors.driversLicence = [`Driver's licence must be 7 digits`];

    if (!/^\d{10}$/.test(values.phone))
        errors.phone = ['Phone number must be 10 digits'];

    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.name))
        errors.name = ['Name contains illegal characters '];
    return errors;
};

export default validateCustomer;
