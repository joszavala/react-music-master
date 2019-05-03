import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Track from '../../../components/Artist/Track/Track';

class Tracks extends Component {
    render() {
        return (
            <Aux>
                {console.log(this.props.tracks)}
            </Aux>
        );
    }
}

export default Tracks;