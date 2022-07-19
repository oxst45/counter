import React, {useReducer, useState} from 'react';

import './App.css';
import {counterReducer, incrementValueAC, resetValueAC} from "./store/counter-reducer";

function App() {

    let [currentValue, dispatchCurrentValue] = useReducer(counterReducer, 0)

    const onIncClick = () => {
        dispatchCurrentValue(incrementValueAC())
    }
    const onIncResetClick = () => {
        dispatchCurrentValue(resetValueAC())
    }
    const isResetDisabled = () => {
        return currentValue === 0;
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
                    <button className="inc__reset-but" onClick={onIncResetClick} disabled={isResetDisabled()}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
