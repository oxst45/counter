import React, { ChangeEvent } from 'react';

import './App.css';
import {
    incrementValueAC,
    resetValueAC, setCounterAC,
    setMaxValueAC,
    setStartValueAC,
    StateType
} from "./store/counter-reducer";
import { useDispatch, useSelector } from "react-redux";



function App() {

    let currentValue = useSelector<StateType, number>(state => state.currentValue)
    let maxValue = useSelector<StateType, number>(state => state.maxValue)
    let startValue = useSelector<StateType, number>(state => state.startValue)

    const dispatch = useDispatch();

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        maxValue = Number(e.currentTarget.value)

    }

    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
        startValue = Number(e.currentTarget.value)

    }
    const onSetButtonClick = () => {
        dispatch(setCounterAC(startValue, maxValue))
        console.log(maxValue)
    }
    const onIncClick = () => {
        dispatch(incrementValueAC())
    }
    const onIncResetClick = () => {
        dispatch(resetValueAC())
    }
    return (
        <div>
            <div className="settings">
                <div className="settings__interface">
                    <div className="settings__max-value">
                        <p>Max value</p>
                        <input type="number" value={maxValue} onChange={onMaxValueChange} disabled={maxValue < 0} />
                        {(maxValue < 0) ? <p>The counter works only with natural numbers!</p> : <p></p>}
                    </div>
                    <div className="settings__start-value">
                        <p>Start value</p>
                        <input type="number" value={startValue} onChange={onStartValueChange} disabled={startValue < 0} />
                        {(maxValue < 0) ? <p>The counter works only with natural numbers!</p> : <p></p>}
                        {(startValue >= maxValue) ? <p>The Start value should be smaller than the max value!</p> : <p></p>}
                    </div>
                </div>
                <div className="settings__set-button">
                    <button onClick={onSetButtonClick}>
                        Set counter
                    </button>
                </div>
            </div>
            <div className="inc">
                <div className="inc__interface">
                    {/*<input type="number" disabled value={currentValue}/>*/}
                    {currentValue}
                </div>
                <div className="inc__buttons">
                    <button className="inc__inc-but"
                        onClick={onIncClick}
                        disabled={currentValue === maxValue || startValue >= maxValue || startValue < 0 || maxValue < 0}>
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
