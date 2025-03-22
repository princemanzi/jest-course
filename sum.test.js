// const sum = require('./sum')
// test('adds 1 and 2 to equals 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });


// test('object assignment', () => {
//     const data = { one: 1 }
//     data  ['two'] = 2
//     expect(data).toEqual({one: 1, two: 2 });
// });


// test('null is falsy', () => {
//     const n = undefined; //null, 0, undefined, false
//     expect(n).toBeFalsy();
// });

// test('1 to be truly', () => {
//     const b = 1;
//     expect(b).toBeTruthy(); 
// });



// const myFunction = require('./sum')
// test('throws error for non numbers', () => {
//     expect(() => {
//         myFunction(null);
//     }).toThrow();
// })

const fetchData = require('./sum')
test('The data is cutie pie', done => {
    function callback(data) {
        try {
            expect(data).toBe('cutie pie');
            done();
        } catch (error) {
            done(error)
        }
    }

    fetchData(callback);
});