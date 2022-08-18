import React, {ChangeEvent} from 'react';

import './App.css';
import {
    CounterStateType,
    disableIncAC,
    incrementValueAC,
    resetValueAC, setCounterAC,
    setMaxValueAC,
    setStartValueAC,
} from "./store/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";


function App() {
    const counterState = useSelector<RootStateType, CounterStateType>(state => state.counter)
    // const currentValue = useSelector<StateType, number>(state => state.currentValue)
    // const maxValue = useSelector<StateType, number>(state => state.maxValue)
    // const startValue = useSelector<StateType, number>(state => state.startValue)
    // const isIncDisabled = useSelector<StateType, boolean>(state => state.isIncDisabled)

    const dispatch = useDispatch();

    let newMaxValue = counterState.maxValue;
    console.log(newMaxValue, counterState.maxValue)
    let newStartValue = counterState.startValue;

    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        newMaxValue = Number(e.currentTarget.value)
        dispatch(setMaxValueAC(newMaxValue))
    }

    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        newStartValue = Number(e.currentTarget.value)
        dispatch(setStartValueAC(newStartValue))
    }
    const onSetButtonClick = () => {
        dispatch(setCounterAC(newMaxValue, newStartValue))
    }
    const onIncClick = () => {
        dispatch(incrementValueAC())
    }
    const onIncResetClick = () => {
        dispatch(resetValueAC())
    }
    const onMaxValueFocusHandler = () => {
        dispatch(disableIncAC())
    }
    const onStartValueFocusHandler = () => {
        dispatch(disableIncAC())
    }
    return (
        <div>
            <div className="settings">
                <div className="settings__interface">
                    <div className="settings__max-value">
                        <p>Max value</p>
                        <input type="number" value={newMaxValue} onChange={onMaxValueChange}
                               onFocus={onMaxValueFocusHandler}/>
                        {(counterState.maxValue < 0) ? <p>The counter works only with natural numbers!</p> : <p></p>}
                    </div>
                    <div className="settings__start-value">
                        <p>Start value</p>
                        <input type="number" value={counterState.startValue} onChange={onStartValueChange}
                               onFocus={onStartValueFocusHandler}/>
                        {(counterState.startValue < 0) ? <p>The counter works only with natural numbers!</p> : <p></p>}
                        {(counterState.startValue >= counterState.maxValue) ?
                            <p>The Start value should be smaller than the max value!</p> :
                            <p></p>}
                    </div>
                </div>
                <div className="settings__set-button">
                    <button onClick={onSetButtonClick} disabled={counterState.maxValue < 0}>
                        Set counter
                    </button>
                </div>
            </div>
            <div className="inc">
                <div className="inc__interface">
                    {/*<input type="number" disabled value={currentValue}/>*/}
                    {counterState.currentValue}
                </div>
                <div className="inc__buttons">
                    <button className="inc__inc-but"
                            onClick={onIncClick}
                            disabled={counterState.isIncDisabled ||
                                counterState.currentValue === counterState.maxValue ||
                                counterState.startValue >= counterState.maxValue ||
                                counterState.startValue < 0 ||
                                counterState.maxValue < 0}>
                        inc
                    </button>
                    <button className="inc__reset-but" onClick={onIncResetClick}
                            disabled={counterState.isIncDisabled || !counterState.currentValue}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
