import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Artist from '../Artist/Artist';
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
                }else{
                    this.setState({artist : null, tracks: {}});
                }
            })
            .catch(err => {
                if (err) console.log('Error', err);
            });
    }   

    getTracks = (artistId) => {
        const apiCallFunction = `${this.state.apiAdress}artist/${artistId}/top-tracks`;
        console.log(this.state.tracks);
        fetch(apiCallFunction)
            .then(response => response.json())
            .then(json => {
                this.setState({tracks: json.tracks})
            })
            .catch(error => alert(error.message));
    }

    render() {
        console.log('this.state', this.state);
        const artist = this.state.artist;
        const tracks = this.state.tracks;
        
        let artistContainer  = null;
        let tracksContainer = null;

        if (artist !== null) {
            artistContainer = (<Artist 
                profileImage = { artist.images[1].url }
                artistName = { artist.name }
                artistGenres = { artist.genres.join(', ') }
            />);
                        
            if(tracks && tracks.length > 0) {
                tracksContainer = (<Tracks tracks={tracks} /> );
            } else { 
                tracksContainer = null;
            }
        } else {
            artistContainer = null;
        }
        
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
                {artistContainer}
                {tracksContainer}
            </Aux>
        )
    }
}

export default SearchArtist;