import React, {useReducer, useState} from 'react';

import './App.css';
import {counterReducer, incrementValueAC, resetValueAC} from "./store/counter-reducer";
import {useDispatch} from "react-redux";

function App() {

    let currentValue = 0;

    const dispatch = useDispatch();

    const onIncClick = () => {
        dispatch(incrementValueAC())
    }
    const onIncResetClick = () => {
        dispatch(resetValueAC())
    }

    return (
        <div>
            {/*<div className="settings">*/}
            {/*    <div className="settings__interface">*/}
            {/*        <div className="settings__max-value">*/}
            {/*            <span></span>*/}
            {/*            <input type="number"/>*/}
            {/*        </div>*/}
            {/*        <div className="settings__start-value">*/}
            {/*            <span></span>*/}
            {/*            <input type="number"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="settings__set-button">*/}
            {/*        <button>*/}

            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="inc">
                <div className="inc__interface">
                    <input type="number" disabled value={currentValue}/>
                </div>
                <div className="inc__buttons">
                    <button className="inc__inc-but" onClick={onIncClick}>
                        inc
                    </button>
                    <button className="inc__reset-but" onClick={onIncResetClick} disabled={!currentValue}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
