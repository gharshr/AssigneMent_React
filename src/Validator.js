import React from 'react';

function Validator(props) {
    console.log(props.hidden)
    return (
        <p hidden={props.hidden}>{props.displayMessage}</p>
    )
}

export default Validator