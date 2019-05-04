import React from 'react';
import IconElement from '../../UI/Icon/Icon';
import Aux from '../../../hoc/Aux/Aux';

const track = (props) => (
    <Aux>
        <div className="track col s12 m3 l3">
            <div className="row">
                <div className="col s12 m12 l12">
                    <img src={props.albumImage} className="circle responsive-img" alt={`${props.albumTitle} - ${props.trackTitle}`} />
                </div>
                <div className="audioCtrls col s12 m12 l12">
                    <IconElement 
                        iconSize={'medium'}
                        isHidden={true}
                        iconName = "pause_circle_filled"
                        audio = {props.onClick(props.previewUrl)}
                    />
                    <IconElement 
                        iconSize={'medium'}
                        isHidden={props.previewUrl !== null ? true : false}
                        iconName = "remove_circle"
                        audio = {null}
                    />
                    <IconElement 
                        iconSize={'medium'}
                        isHidden={props.previewUrl === null ? true : false }
                        iconName = "play_circle_filled"
                        audio = {props.onClick(props.previewUrl)}
                    />
                    
                </div>
            </div>
            <div className="row">
                {props.albumTitle}
            </div>
            <div className="row">
                {props.trackTitle}
            </div>
            
        </div>
    </Aux>
);

export default track;