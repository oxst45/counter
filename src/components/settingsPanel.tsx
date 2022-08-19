import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {
    CounterStateType,
    disableIncAC,
    disableSetAC,
    setCounterAC,
    setMaxValueAC,
    setStartValueAC
} from "../store/counter-reducer";

export function SettingsPanel() {
    const counterState = useSelector<RootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch();


    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        dispatch(setMaxValueAC(newMaxValue))
        dispatch(disableIncAC())
        dispatch(disableSetAC())
    }

    const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value)
        dispatch(setStartValueAC(newStartValue))
        dispatch(disableIncAC())
        dispatch(disableSetAC())
    }
    const onSetButtonClick = () => {
        dispatch(setCounterAC(counterState.maxValue, counterState.startValue))
    }
    return (
        <div>
            <div className="settings__interface">
                <div className="settings__max-value">
                    <p>Max value</p>
                    <input type="number" value={counterState.maxValue} onChange={onMaxValueChange}/>

                </div>
                <div className="settings__start-value">
                    <p>Start value</p>
                    <input type="number" value={counterState.startValue} onChange={onStartValueChange}/>

                </div>
            </div>
            <div className="settings__set-button">
                <button onClick={onSetButtonClick}
                        disabled={counterState.maxValue < 0
                            || counterState.startValue < 0
                            || counterState.startValue > counterState.maxValue
                            || counterState.isSetDisabled}>
                    Set counter
                </button>
            </div>
        </div>
    );
}

