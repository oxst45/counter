import {counterReducer, incrementValueAC, resetValueAC} from "./counter-reducer";

test('The current value should be correctly incremented.', () => {

    // 1. Тестовые данные:
    let currentValue = 4;

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(currentValue, incrementValueAC())

    // 3. Проверка результата:
    expect(currentValue).toBe(5)

})

test('The value should be reset.', () => {
    // 1. Тестовые данные:
    let currentValue = 7;

    // 2. Вызов тестируемой функции:
    const newState = counterReducer(currentValue, resetValueAC())

    // 3. Проверка результата:
    expect(currentValue).toBe(0)
})