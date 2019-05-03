import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Tracks from '../../containers/Artists/Tracks/Tracks';

class SearchArtist extends Component {
    state = { artistQuery: '',
        artist: null,
        tracks: {},
        msgError: '',
        apiAdress: 'https://spotify-api-wrapper.appspot.com/'
    };

    updateArtistQuery = (event) => {
        this.setState({ artistQuery: event.target.value });
    }

    findArtist = () => {
        const artist = this.state.artistQuery;

        if (artist.trim().length === 0) {
            const msgError = 'The name of the artist cannot be empty';
            this.setState({msgError});
            return false;
        }

        this.getArtist(artist);
    }

    hanldeKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.findArtist();
        }
    }

    getArtist = (artist) => {
        const apiCallFunction =  `${this.state.apiAdress}artist/${artist}`;

        fetch(apiCallFunction)
            .then(response => response.json())
            .then(artistData => {
                if (artistData.artists.total > 0) {
                    const artist = artistData.artists.items[0];

                    this.setState({ artist });
                    this.getTracks(artist.id);
                }
            })
            .catch(err => {
                if (err) console.log('Error', err);
            });
    }   

    getTracks = (artistId) => {
        const apiCallFunction = `${this.state.apiAdress}artist/${artistId}/top-tracks`;

        fetch(apiCallFunction)
            .then(response => response.json())
            .then(json => {
                this.setState({tracks: json.tracks})
                console.log('this.state.tracks', this.state.tracks[9].album.name);
            })
            .catch(error => alert(error.message));
    }

    render() {
        console.log('this.state', this.state);
        return (
            <Aux>
                <div className="row">
                    <h2>Music Master</h2>
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4">
                        <input 
                            onChange={ this.updateArtistQuery }
                            onKeyPress = { this.hanldeKeyPress }
                            type="text" 
                            placeholder="Search for an artist"
                        />
                    </div>
                    <div className="input-field col s4 offset-s4">
                        <button 
                            onClick = { this.findArtist }
                            className="btn green darken-3">Search</button>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default SearchArtist;