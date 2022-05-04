import React from 'react';
import ElemOne from './ElemOne';
import ElemTwo from './ElemTwo';
function App() {
    let [ state, setState ] = React.useState(false);

    function clickHandler() {
        setState(previous => !previous)
    }

    return (
        <>
            <ElemOne s={state} clickHandler={clickHandler}/>
            <ElemTwo s={state} clickHandler={clickHandler}/>
        </>
    )

}

export default App;
