import React from 'react';

function ElemOne({ s, clickHandler }) {
    if (s === false) {
        return(
            <>
                <h1> Hello from element one </h1>
                <button onClick={clickHandler}> Change elements? </button>
            </>
        );
    }
}

export default ElemOne;
