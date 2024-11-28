const {
    appendNumber,
    setOperation,
    calculateResult,
    clearDisplay,
    display,
    getCurrentNumber,
    getPreviousNumber,
    getOperation
} = require('./test');

describe('Calculator Functions', () => {
    beforeEach(() => {
        clearDisplay();
    });

    test('appendNumber should append a number to currentNumber', () => {
        appendNumber('5');
        expect(getCurrentNumber()).toBe('5');
        expect(display.value).toBe('5');
    });

    test('setOperation should set the operation and move currentNumber to previousNumber', () => {
        appendNumber('5');
        setOperation('+');
        expect(getPreviousNumber()).toBe('5');
        expect(getCurrentNumber()).toBe('');
        expect(getOperation()).toBe('+');
    });

    test('calculateResult should calculate the result of the operation', () => {
        appendNumber('5');
        setOperation('+');
        appendNumber('3');
        calculateResult();
        expect(getCurrentNumber()).toBe('8');
        expect(display.value).toBe('8');
    });

    test('clearDisplay should clear all values', () => {
        appendNumber('5');
        setOperation('+');
        clearDisplay();
        expect(getCurrentNumber()).toBe('');
        expect(getPreviousNumber()).toBe('');
        expect(getOperation()).toBe(null);
        expect(display.value).toBe('');
    });
});