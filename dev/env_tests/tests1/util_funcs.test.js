
const functions = require('../../env_js/util_funcs/util_add');

test('adds 2 + 2 to equal 4' , ( ) => {
    expect(functions.add(2 , 2)).toBe(4)
});
