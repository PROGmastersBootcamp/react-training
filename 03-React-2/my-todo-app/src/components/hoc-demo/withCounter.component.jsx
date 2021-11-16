import React, {useState} from "react";

const withCounter = (Component) => () => {

    const [counter, setCounter] = useState(0);

    const handleEvent = () => {
        setCounter(c => c + 1);
    }

    return (
        <Component
            counter={counter}
            handleEvent={handleEvent}
        />
    )
};

export default withCounter;
