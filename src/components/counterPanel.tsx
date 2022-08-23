import React from 'react';
import {CounterStateType, incrementValueAC, resetValueAC} from "../store/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {Button, Flex} from "@chakra-ui/react";
import {Output} from "./output";

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
        <Flex direction="column" background="gray.100" rounded={8} justifyContent="center" alignItems="center">
            <Output/>
            <Button fontSize="xl" className="inc__inc-but"
                    onClick={onIncClick}
                    disabled={counterState.isIncDisabled ||
                        counterState.currentValue === counterState.maxValue ||
                        counterState.startValue >= counterState.maxValue ||
                        counterState.startValue < 0 ||
                        counterState.maxValue < 0}>
                inc
            </Button>
            <Button fontSize="xl" className="inc__reset-but" onClick={onIncResetClick}
                    disabled={counterState.isIncDisabled
                        || !counterState.currentValue
                        || counterState.currentValue === counterState.startValue}>
                reset
            </Button>
        </Flex>
    );
}

export default CounterPanel;