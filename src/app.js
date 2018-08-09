import React from 'react';
import {Arr} from './arr';

const UserContext = React.createContext();
const user = [1, 2, 3];

export const App = () => (
    <UserContext.Provider value={{
        message: user
    }}>
        <Arr items={'test'} />
    </UserContext.Provider>
);

export const UserContextConsumer = UserContext.Consumer;
