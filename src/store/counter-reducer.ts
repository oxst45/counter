export const INC_CURRENT_VALUE = 'INC-CURRENT-VALUE'
export const RESET_VALUE = 'RESET-VALUE'

export type ActionType = incrementValueAT | resetValueAT

export type incrementValueAT = {
    type: typeof INC_CURRENT_VALUE
}
export type resetValueAT = {
    type: typeof RESET_VALUE
}
export const counterReducer = (currentValue: number, action: ActionType) => {

    switch (action.type) {
        case INC_CURRENT_VALUE:
            return currentValue += 1;
        case RESET_VALUE:
            return currentValue = 0;
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