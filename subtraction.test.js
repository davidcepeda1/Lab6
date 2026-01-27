const sub = require('./subtraction');

test('Resta de 10 - 4 to equal 6', () => {
    expect(sub(10, 4)).toBe(5);
});