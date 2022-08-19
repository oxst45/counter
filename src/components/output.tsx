import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {CounterStateType} from "../store/counter-reducer";

export function Output() {
    const counterState = useSelector<RootStateType, CounterStateType>(state => state.counter)

    let output;
    if (counterState.startValue >= counterState.maxValue) {
        output = <p>The Start value should be smaller than the max value!</p>
    } else if (counterState.startValue < 0 || counterState.maxValue < 0) {
        output = <p>The counter works only with natural numbers!</p>
    } else {
        output = <p>{counterState.currentValue}</p>
    }

    return (
        <div className="inc__interface">
            {output}
        </div>
    )


}
