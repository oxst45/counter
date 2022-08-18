import {counterReducer} from "./counter-reducer";
import {combineReducers, createStore} from "redux";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
export const appStore = createStore(counterReducer);