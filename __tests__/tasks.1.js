const rewire = require("rewire");

describe('1. Updater', () => {
    test('`determiner` variable exists', () => {
        const determiner = rewire('../index').__get__('determiner')
        expect(determiner).toBeDefined()
    })
    test('value of `determiner` is between -100 and 100', () => {
        const determiner = rewire('../index').__get__('determiner');
        expect(determiner).toBeGreaterThanOrEqual(-100);
        expect(determiner).toBeLessThanOrEqual(100);
    })
    test('`x` variable exists', () => {
        const x = rewire('../index').__get__('x')
        expect(x).toBeDefined()
    })
    test('value of `x` is corectly assigned depending on `determiner`', () => {
        const determiner = rewire('../index').__get__('determiner');
        const x = rewire('../index').__get__('x')
        expect(x).toMatch(determiner < 0 ? /Less than 0/i : /Greater or equal to 0/i)
    })
});