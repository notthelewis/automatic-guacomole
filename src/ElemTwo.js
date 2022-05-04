import React from 'react';

function ElemTwo({ s, clickHandler}) {
    if (s === true) {
        return(
            <>
                <h1> Hello from element two </h1>
                <button onClick={clickHandler}> Change elements? </button>
            </>
        );
    }
}

export default ElemTwo;
