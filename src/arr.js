import React from 'react';
import {UserContextConsumer} from './app';

export const Arr = ({items}) => (
    <div>
        {items}
        <UserContextConsumer>
            {({message}) => (message)}
        </UserContextConsumer>
    </div>
);
