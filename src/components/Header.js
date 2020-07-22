import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>SNAP-SHARE</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>&nbsp;Home&nbsp;</NavLink>
        <NavLink to="/profile" activeClassName="is-active">&nbsp;Profile&nbsp;</NavLink>
        <NavLink to="/upload" activeClassName="is-active">&nbsp;Upload&nbsp;</NavLink>
    </header>
);

export default Header;