import React from 'react';
import withCounter from "./withCounter.component";

const HoverTextComponent = (props) => {

    return (
        <div>
            <h1 onMouseOver={props.handleEvent}>
                This text has been hovered {props.counter} times
            </h1>
        </div>
    );
};

export default withCounter(HoverTextComponent);
