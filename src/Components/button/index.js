import React, {Fragment} from 'react';

const Button = props => {
    return (
        <Fragment>
            <button onClick={props.onClick}>Create new game</button>
        </Fragment>
    );
};

export default Button;