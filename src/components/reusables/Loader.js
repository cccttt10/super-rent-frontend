import React from 'react';
import { Loading } from 'react-admin';

const Loader = props => (
    <Loading
        loadingPrimary="Please wait..."
        loadingSecondary="Server is working hard.."
    />
);

export default Loader;