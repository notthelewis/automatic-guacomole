import React from 'react';
import ElemOne from './ElemOne';
import Model from './Model';

function App() {
    let [ state, setState ] = React.useState({
        show_model: false,
        // These two will be populated when show_model === true
        nhs_num: null,
        patient_id: null
    });

    function clickHandler(param) {
        setState({...param});
    }

    return (
        <>
            { state.show_model === true &&
                <Model
                    patient_object={state}
                    clickHandler={clickHandler}
                />
            }
            <ElemOne clickHandler={clickHandler}/>
        </>
    )

}

export default App;
