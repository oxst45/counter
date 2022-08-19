import React from 'react';
import {CounterStateType, incrementValueAC, resetValueAC} from "../store/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";

function CounterPanel() {

    const dispatch = useDispatch();

    const counterState = useSelector<RootStateType, CounterStateType>(state => state.counter)

    const onIncClick = () => {
        dispatch(incrementValueAC())
    }
    const onIncResetClick = () => {
        dispatch(resetValueAC())
    }
    return (
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
    );
}

export default CounterPanel;