const rewire = require("rewire");

beforeAll(() => {
    console.log = jest.fn();
})

describe('2. New Variables', () => {
    test('`updater` variable exists', () => {
        const updater = rewire('../index').__get__('updater');
        expect(updater).toBeDefined()
    })
    test('value of `updater` is correctly assigned depending on `determiner`', () => {
        const updater = rewire('../index').__get__('updater');
        const determiner = rewire('../index').__get__('determiner')
        expect(updater).toMatch(determiner >= 0 ? /Greater or equal to 0/i : /Less than 0/i)
    })
    test('`message` is printed to the console depending on `determiner`', () => {
        const determiner = rewire('../index').__get__('determiner')
        require('../index')
        expect(console.log.mock.calls.map(call => call.join(" ")).join(" ")).toMatch(determiner >= 0 ? /message: Positive Integer/i : /[\s\S]/i)
    })
    test('`updater` is printed to the console in the correct format', () => {
        const updater = rewire('../index').__get__('updater');
        require('../index')
        expect(console.log.mock.calls.map(call => call.join(" ")).join(" ")).toMatch(`updater: ${updater}`)
    })
});