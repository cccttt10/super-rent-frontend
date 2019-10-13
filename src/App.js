import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
// import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider(
    'http://localhost:3300'
);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="customers" list={ListGuesser} />
        <Resource name="vehicles" list={ListGuesser} />
    </Admin>
);

export default App;
