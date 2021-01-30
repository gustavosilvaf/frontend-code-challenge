import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MyProfile } from './pages/MyProfile';

export const Routes = () => <BrowserRouter>
    <Switch>
        <Route path="/" component={MyProfile} />
    </Switch>
</BrowserRouter>