import React from 'react';
import ElemOne from './ElemOne';
import ElemTwo from './ElemTwo';
function App() {
    let [ state, setState ] = React.useState(false);

    function clickHandler(param, patient_id, nhs_num) {
        setState(param);
        alert(`patientID: ${patient_id}, nhs_num: ${nhs_num}`);
    }

    return (
        <>
            <ElemOne s={state} clickHandler={clickHandler}/>
            <ElemTwo s={state} clickHandler={clickHandler}/>
        </>
    )

}

export default App;
