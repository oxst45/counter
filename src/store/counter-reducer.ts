export const INC_CURRENT_VALUE = 'INC-CURRENT-VALUE' as const
export const RESET_VALUE = 'RESET-VALUE' as const
export const SET_MAX_VALUE = 'SET-MAX-VALUE' as const
export const SET_START_VALUE = 'SET_START_VALUE' as const
export const SET_COUNTER = 'SET_COUNTER' as const
export const DISABLE_INC = 'DISABLE-INC' as const
export const DISABLE_SET ='DISABLE-SET' as const

export type ActionType =
    incrementValueAT |
    resetValueAT |
    setMaxValueAT |
    setStartValueAT |
    setCounterAT |
    disableIncAT |
    disableSetAT

export type incrementValueAT = {
    type: typeof INC_CURRENT_VALUE
}
export type resetValueAT = {
    type: typeof RESET_VALUE
}
export type setMaxValueAT = {
    type: typeof SET_MAX_VALUE
    maxValue: number
}
export type setStartValueAT = {
    type: typeof SET_START_VALUE
    startValue: number
}
export type disableSetAT = {
    type: typeof DISABLE_SET
}
// export type disableIncAT = ReturnType<typeof disableIncAC>
export type setCounterAT = ReturnType<typeof setCounterAC>
// export type setCounterAT = {
//     type: typeof SET_COUNTER
//     startValue: number
//     maxValue: number
// }
export type disableIncAT = {
    type: typeof DISABLE_INC
}

const initialState = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0,
    isIncDisabled: false,
    isSetDisabled: true
}
export type CounterStateType = typeof initialState
export const counterReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case INC_CURRENT_VALUE:
            return { ...state, currentValue: state.currentValue + 1 };
        case RESET_VALUE:
            return { ...state, currentValue: 0};
        case SET_MAX_VALUE:
            return { ...state, maxValue: action.maxValue, isSetDisabled: false };
        case SET_START_VALUE:
            return { ...state, startValue: action.startValue, isSetDisabled: false };
        case SET_COUNTER:
            return { ...state, currentValue: action.startValue, isIncDisabled: false }
        case DISABLE_INC:
            return { ...state, isIncDisabled: true}
        case DISABLE_SET:
            return { ...state, isSetDisabled: false}
        default:
            return state;
    }
}

export const incrementValueAC = (): incrementValueAT => {
    return {
        type: INC_CURRENT_VALUE,
    }
}

export const resetValueAC = (): resetValueAT => {
    return {
        type: RESET_VALUE
    }
}

export const setMaxValueAC = (maxValue: number): setMaxValueAT => {
    return {
        type: SET_MAX_VALUE,
        maxValue
    }
}
export const setStartValueAC = (startValue: number): setStartValueAT => {
    return {
        type: SET_START_VALUE,
        startValue
    }
}
export const setCounterAC = (maxValue: number, startValue: number) => {
    return {
        type: SET_COUNTER,
        maxValue,
        startValue
    }
}
export const disableIncAC = (): disableIncAT => {
    return {
        type: DISABLE_INC,
    }
}
export const disableSetAC = (): disableSetAT => {
    return {
        type: DISABLE_SET,
    }
}