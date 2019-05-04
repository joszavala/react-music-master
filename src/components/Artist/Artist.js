import React from 'react';

const artist = (props) => (
    <div className="row">
        <div className="col s12 m4 l4 offset-m4 offset-l4">
            <div className="profileImage row">
                <img src={props.profileImage} className="circle responsive-img" alt={ props.artistName }/>
            </div>
            <div className="row">
                <b>{props.artistName}</b>
            </div>
            <div className="row">
                <div className="col s12 m4 l4">
                    <b>Genres</b>
                </div>
                <div className="col s12 m8 l8">
                    <em>{ props.artistGenres }</em>
                </div>
            </div>
            
            
        </div>
    </div>
);

export default artist;