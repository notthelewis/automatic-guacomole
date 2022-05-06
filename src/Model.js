import React from 'react';

function Model({patient_object, clickHandler}) {

    function closeModel() {
        clickHandler({...patient_object, show_model: false});
    }

    return (
        <div>
            <h1> You have selected: {patient_object.patient_id} </h1>
            <p> Are you sure you want to continue? </p>
            <button onClick={closeModel}> Click to close </button>
        </div>
    )
}


export default Model;
