import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const track = (props) => (
    <Aux>
        <div col s12 m3 l3>
            <div className="row">
                <img href={props.track.album.images[1]} className="responsive-img" />
            </div>
        </div>
    </Aux>
);

export default track;