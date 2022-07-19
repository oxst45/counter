import React, {useState} from 'react';

import './App.css';

function App() {

    let [currentValue, setCurrentValue] = useState(0);
    const onIncClick = () => {
        // currentValue += 1;
        setCurrentValue(currentValue += 1)
    }
    const onIncResetClick = () => {
        setCurrentValue(0)
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
                    <button className="inc__reset-but" onClick={onIncResetClick}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
