import { calculator, capitalize, reverse, analyzeArr } from "./testing.js"


test("Capitalize should return first character capitalize", () => {
    let string = 'hello';
    let result = capitalize(string);
    expect(result).toMatch(/Hello/);
})


test('Returned string should be reversed', () => {
    expect(reverse('car')).toMatch(/rac/)
})

test('Calculator must perform all operations', () => {
    expect(calculator('+', 2, 3)).toBe(5);
    expect(calculator('-', 2, 3)).toBe(-1);
    expect(calculator('*', 2, 3)).toBe(6);
    expect(calculator('/', 6, 2)).toBe(3);
})

test('Array must return a valid object with specified information', () => {
    expect(analyzeArr([1,2,3,4,5])).toEqual({average: 3, min: 1, max: 5, length: 5})
})
