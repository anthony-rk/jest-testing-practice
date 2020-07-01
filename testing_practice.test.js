import { capitalizeString } from './testing_practice';
import { reverseString } from './testing_practice';
import { calculator } from './testing_practice';
import { caesarEncryption } from './testing_practice';

test('Capitalizes a word', () => {
    expect(capitalizeString('hello')).toBe('Hello');
});

test('Capitalizes a sentence', () => {
    expect(capitalizeString('hello to the world!')).toBe('Hello to the world!');
});

test('Reverses a string (1 word)', () => {
    expect(reverseString('Automation')).toBe('noitamotuA');
});

test('Reverses a string (sentence)', () => {
    expect(reverseString('Automation is cool!')).toBe('!looc si noitamotuA');
});

test('Adds 2 numbers', () => {
    expect(calculator.add(5, 10)).toBe(15);
});

test('Adds 2 negative numbers', () => {
    expect(calculator.add(-5, -10)).toBe(-15);
});

test('Subtracts 2 numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test('Subtracts 2 negative numbers', () => {
    expect(calculator.subtract(-5, -10)).toBe(5);
});

test('Multiplies 2 numbers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
});

test('Multiplies 2 negative numbers', () => {
    expect(calculator.multiply(-10, -5)).toBe(50);
});

test('Divides 2 numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test('Divides 2 negative numbers', () => {
    expect(calculator.divide(-10, -5)).toBe(2);
});

test('Caesar shifts a word by an offset of 1', () => {
    expect(caesarEncryption('HELLO', 1)).toBe('IFMMP');
});

test('Caesar shifts a word by an offset of >26 (wraps alphabet)', () => {
    expect(caesarEncryption('hello', 27)).toBe('ifmmp');
});

test('Caesar shifts a sentence with punctuation', () => {
    expect(caesarEncryption('Hello, all my friends!', 10)).toBe('Rovvy, kvv wi pbsoxnc!');
});
