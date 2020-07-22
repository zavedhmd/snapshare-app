import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>Error 404! Page Not Found</h3>
        <p>It seems you have navigated to a link we don't support as of now</p>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;