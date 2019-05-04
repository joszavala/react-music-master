import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const iconElement = (props) => (
    <Aux>
        <i className={`${props.iconSize} material-icons`} onClick={props.audio} hidden = {props.isHidden ? 'hidden' : null}>{props.iconName}</i>
    </Aux>
);

export default iconElement; 