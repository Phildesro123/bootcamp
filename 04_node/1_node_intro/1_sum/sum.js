// In this exercise we will build a command line utility for
// summing numbers.
//
// sum.js should take optional command line arguments, parse the
// arguments into numbers and return their sum. Use
// **`process.argv`** to read command line arguments.
//
// ex. node sum.js 1 2
// > 3
// ex. node sum.js 2 3 4 5
// > 14
// ex. node sum.js 2 -5 3
// > 0
//
// If no command line arguments are specified, you should ask the
// user for 2 numbers and print their sum.
//
// ex. node sum.js
// > Enter first number?
// > 1
// > Enter second number?
// > 4
// > 5
//

// Example code for reading command line arguments:
console.log('Command line arguments', process.argv.slice(2));

function sumList(list) {
    function sumListRec(l, tot) {
        if (l.length == 0) return tot;
        else return sumListRec(l.slice(1), tot + parseInt(l[0]));
    }
    return sumListRec(list, 0);
};


// Example code for getting input from the user
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let getNumber = function(curr) {
    return new Promise(function(resolve, reject) {
        rl.question("Enter a number: ", function(num) {
            resolve(curr + parseInt(num));
        });

    });
};

getNumber(0).then(function(result) {
    return getNumber(result);
}).then(function(result) {
    console.log("The sum is " + result);
    rl.close();
});











if (process.argv.length > 2) {
    console.log("The sum is ", sumList(process.argv.slice(2)));
}