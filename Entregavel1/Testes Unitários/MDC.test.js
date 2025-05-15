// mdc.test.js
const mdc = require('./mdc');

test('MDC de 33 e 66 deve ser 33', () => {
    expect(mdc(33, 66)).toBe(33);
});

test('MDC de 20 e 8 deve ser 4', () => {
    expect(mdc(20, 8)).toBe(4);
});

test('MDC de 17 e 13 deve ser 1', () => {
    expect(mdc(17, 13)).toBe(1);
});
