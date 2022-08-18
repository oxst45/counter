import { counterReducer, incrementValueAC, resetValueAC, setMaxValueAC, setStartValueAC } from "./counter-reducer";
test('The start value should be set correctly.', () => {

    // 1. Тестовые данные:
    const initialState = {
        currentValue: 4,
        maxValue: 0,
        startValue: 0,
        isIncDisabled: false
    }

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, setStartValueAC(88))

    // 3. Проверка результата:
    expect(newState.startValue).toBe(88)

})
test('The maximum value should be set correctly.', () => {

    // 1. Тестовые данные:
    const initialState = {
        currentValue: 4,
        maxValue: 0,
        startValue: 0,
        isIncDisabled: false
    }

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, setMaxValueAC(100))

    // 3. Проверка результата:
    expect(newState.maxValue).toBe(100)

})

test('The current value should be correctly incremented.', () => {

    // 1. Тестовые данные:
    const initialState = {
        currentValue: 4,
        maxValue: 0,
        startValue: 0,
        isIncDisabled: false
    }

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, incrementValueAC())

    // 3. Проверка результата:
    expect(newState.currentValue).toBe(5)

})

test('The value should be reset.', () => {
    // 1. Тестовые данные:
    const initialState = {
        currentValue: 7,
        maxValue: 0,
        startValue: 0,
        isIncDisabled: false
    }


    // 2. Вызов тестируемой функции:
    const newState = counterReducer(initialState, resetValueAC())

    // 3. Проверка результата:
    expect(newState.currentValue).toBe(7)
})