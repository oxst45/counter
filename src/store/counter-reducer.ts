export const INC_CURRENT_VALUE = 'INC-CURRENT-VALUE'
export const RESET_VALUE = 'RESET-VALUE'

export type ActionType = incrementValueAT | resetValueAT

export type incrementValueAT = {
    type: typeof INC_CURRENT_VALUE
}
export type resetValueAT = {
    type: typeof RESET_VALUE
}
const initialState = {
    currentValue: 0
}
export const counterReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case INC_CURRENT_VALUE:
            return {...state, currentValue: state.currentValue + 1};
        case RESET_VALUE:
            return {...state, currentValue: 0};
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
        type: RESET_VALUE,
    }
}