import React from 'react';

function ElemTwo({ s, clickHandler}) {
    function elemTwoHandler() {
        clickHandler(false, 2, 1337);
    }

    if (s === true) {
        return(
            <>
                <h1> Hello from element two </h1>
                <button onClick={elemTwoHandler}> Change elements? </button>
            </>
        );
    }
}

export default ElemTwo;
