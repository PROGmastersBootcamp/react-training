import React from 'react';
import withCounter from "./withCounter.component";

const ButtonClickComponent = (props) => {

    return (
        <div>
            <button onClick={props.handleEvent}>
                This button was clicked {props.counter} times
            </button>
        </div>
    );
};

export default withCounter(ButtonClickComponent);

