function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!")
}

greet("Prince", sayGoodbye);


function myName(name, callback) {
    console.log(`Hello your name is ${name}!`)
    callback();
}

function nameConfirmation() {
    console.log("is that so?");
}

myName("Prince", nameConfirmation);


