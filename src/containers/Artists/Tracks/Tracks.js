import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Track from '../../../components/Artist/Track/Track';

class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        playingPreviewUrl: null
    }

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing){
            audio.play();
            this.setState({ playing:true , audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing:false });
            } else {
                audio.play();
                this.setState({audio, playingPreviewUrl: previewUrl});
            }
        }
    }

    trackIcon = track => {
        if (this.state.playing && this.state.playingPreviewUrl === ''){}
    }

    render() {
        const allTracks = this.props.tracks.map((track, index) => {
            console.log('track preview', track.preview_url);
            return (<Track 
                        key = {track.id}
                        albumImage = {track.album.images[1].url}
                        albumTitle = {track.album.name}
                        trackTitle = {track.name}
                        trackDuration = {track.duration}
                        previewUrl = {track.preview_url}
                        onClick = {this.playAudio}
                   />
            );
        });
        
        
        return (
            <Aux>
                <div className="row">
                    {allTracks}
                </div>
                
            </Aux>
        );
    }
}

export default Tracks;