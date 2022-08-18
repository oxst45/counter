export const INC_CURRENT_VALUE = 'INC-CURRENT-VALUE'
export const RESET_VALUE = 'RESET-VALUE'
export const SET_MAX_VALUE = 'SET-MAX-VALUE'
export const SET_START_VALUE = 'SET_START_VALUE'
export const SET_COUNTER = 'SET_COUNTER'
export const DISABLE_INC = 'DISABLE-INC'

export type ActionType =
    incrementValueAT |
    resetValueAT |
    setMaxValueAT |
    setStartValueAT |
    setCounterAT |
    disableIncAT

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
// export type disableIncAT = ReturnType<typeof disableIncAC>
// export type setCounterAT = ReturnType<typeof setCounterAC>
export type setCounterAT = {
    type: typeof SET_COUNTER
    startValue: number
    maxValue: number
}
export type disableIncAT = {
    type: typeof DISABLE_INC
}

const initialState = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0,
    isIncDisabled: false
}
export type CounterStateType = typeof initialState
export const counterReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case INC_CURRENT_VALUE:
            return { ...state, currentValue: state.currentValue + 1 };
        case RESET_VALUE:
            return { ...state, currentValue: 0, maxValue: 0, startValue: 0 };
        case SET_MAX_VALUE:
            return { ...state, maxValue: action.maxValue };
        case SET_START_VALUE:
            return { ...state, startValue: action.startValue };
        case SET_COUNTER:
            return { ...state, maxValue: action.maxValue, startValue: action.startValue, currentValue: action.startValue, isIncDisabled: false }
        case DISABLE_INC:
            return { ...state, isIncDisabled: true}
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
export const setCounterAC = (startValue: number, maxValue: number): setCounterAT => {
    return {
        type: SET_COUNTER,
        startValue,
        maxValue
    }
}
export const disableIncAC = (): disableIncAT => {
    return {
        type: DISABLE_INC,
    }
}