import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import UserProfile from '../components/UserProfile';
import UploadPage from '../components/UploadPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/profile" component={UserProfile}/>
                <Route path="/upload" component={UploadPage}/>
                <Route component={NotFoundPage} />
            </Switch>
            </div>
    </BrowserRouter>
);

export default AppRouter;