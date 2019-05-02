import React from 'react';

const navigationItem = (props) => (
    <li className= {props.isActive}>
        {/* <NavLink to={props.link} exact={props.exact}>
            {props.children}
        </NavLink> */}
    </li>
);

export default navigationItem;

