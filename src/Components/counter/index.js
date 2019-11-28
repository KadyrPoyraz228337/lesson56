import React, {Fragment} from 'react';

const Counter = props => {
    let counter = 0;
    props.items.forEach(item => item.isClick ?  counter++ : null );
    return (
        <Fragment>
            <h5>
                Tries: {counter}
            </h5>
        </Fragment>
    );
};

export default Counter;