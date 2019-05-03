import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import SearchArtist from '../SearchArtist/SearchArtist';

class Main extends Component {
    render() {
        return (
            <Aux>
                <SearchArtist />
            </Aux>
        );
    }
}

export default Main;