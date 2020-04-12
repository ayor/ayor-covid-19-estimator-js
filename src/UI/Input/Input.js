import React from 'react';
import Aux from '../../Hoc/Auxilliary'
const inputComponent = props => {
    let inputComponent = null;
    let Options = props.options.map(el=>
    <option value={el.value}>{el.name}</option>
        );
    switch (props.inputType) {
        case 'input':
            inputComponent = <input type={props.type} name={props.name} data={props.data} value={props.property} />
            break;
        case 'select':
            inputComponent = <select>
                {Options}
            </select>
            break;

        default:
            inputComponent
            break;
    }
};

export default inputComponent