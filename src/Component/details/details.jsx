import React from 'react';
import { Link } from 'react-router-dom';


function Details(props) {
    return (
        <div id='detail'> 
            <h2>You are Logged in..!</h2>
            <Link to="fullDetails"><button type='submit'>Details</button></Link>
        </div>
    );
}

export default Details;