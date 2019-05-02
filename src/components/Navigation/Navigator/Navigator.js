import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const navigator = (props) =>(
    <header>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo right">Logo</a>
                    <NavigationItems />
                </div>
            </nav>
        </div>      
    </header>
);

export default navigator;