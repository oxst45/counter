import {counterReducer} from "./counter-reducer";
import {createStore} from "redux";


export const appStore = createStore(counterReducer);