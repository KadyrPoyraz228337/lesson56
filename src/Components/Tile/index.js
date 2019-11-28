import React from 'react';
import "./style.css";

const Tile = props => {
    const tileClass = `tileUp ${props.isClick && 'isClick'}`;
    return (
        <div onClick={props.onClick} className="tile">
            <div className={tileClass}/>
            <div>{props.state && '0'}</div>
        </div>
    );
};

export default Tile;