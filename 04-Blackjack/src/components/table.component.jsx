import React from 'react';
import {HandComponent} from "./hand.component";
import {InterfaceComponent} from "./interface.component";

export const TableComponent = () => {

    return (
        <div>
            <HandComponent/>
            <InterfaceComponent/>
            <HandComponent/>
        </div>
    );
}
