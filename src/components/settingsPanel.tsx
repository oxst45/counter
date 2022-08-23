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
import {Flex, Input, Text, Button} from '@chakra-ui/react';

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
        <Flex direction="column"  rounded={8}  justifyContent="center" alignItems="center">
                    <Text fontSize="xl">Max value</Text>
                    <input type="number" value={counterState.maxValue} onChange={onMaxValueChange}/>

                    <Text fontSize="xl">Start value</Text>
                    <input type="number" value={counterState.startValue} onChange={onStartValueChange}/>

                <Button fontSize="xl" onClick={onSetButtonClick}
                        disabled={counterState.maxValue < 0
                            || counterState.startValue < 0
                            || counterState.startValue > counterState.maxValue
                            || counterState.isSetDisabled}>
                    Set counter
                </Button>

        </Flex>
    );
}

