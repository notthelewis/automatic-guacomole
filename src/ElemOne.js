import React from 'react';

function ElemOne({ s, clickHandler }) {
    function elemOneHandler() {
        clickHandler(true, 1, 42069);
    }
    if (s === false) {
        return(
            <>
                <h1> Hello from element one </h1>
                <button onClick={elemOneHandler}> Change elements? </button>
            </>
        );
    }
}

export default ElemOne;
