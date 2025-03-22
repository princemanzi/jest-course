// function sum(a,b) {
//     return a + b;
// }

// module.exports = sum;


// function myFunction(input) {
//     if(typeof input !== 'number') {
//         throw new Error('Invalid input');
//     }; 
// };

// module.exports = myFunction;

function fetchData(callback) {
    setTimeout(() => {
        callback('cutie pie');
    }, 1000);
}

module.exports = fetchData;