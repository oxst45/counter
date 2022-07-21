import {counterReducer, incrementValueAC, resetValueAC} from "./counter-reducer";

test('The current value should be correctly incremented.', () => {

    // 1. Тестовые данные:
    const initialState = {
        currentValue: 4
    }

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, incrementValueAC())

    // 3. Проверка результата:
    expect(newState.currentValue).toBe(5)

})

test('The value should be reset.', () => {
    // 1. Тестовые данные:
    const initialState = {
        currentValue: 7
    }


    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, resetValueAC())

    // 3. Проверка результата:
    expect(newState.currentValue).toBe(0)
})