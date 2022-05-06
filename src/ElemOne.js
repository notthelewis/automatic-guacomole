import React from 'react';

function ElemOne({ clickHandler }) {
    function elemOneHandler() {
        clickHandler({
            show_model: true,
            nhs_num: 9999,
            patient_id: 1
        });
    }

    return(
        <>
           <h1> Hello from element one </h1>
           <button onClick={elemOneHandler}> Show model </button>
        </>
    );
}

export default ElemOne;
