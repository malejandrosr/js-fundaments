function greeting(name) {
    // console.log(arguments);
    // console.log('Hola ' + name);
    return [1,2];

    // esto nunca se va a ejecutar
    console.log('Code here');
}

const greetingTwo = function (name) {
    console.log('Hola ' + name);
}

const greetingArrow = () => {
    console.log('Hola arrow');
};

const greetingArrowTwo = (name) => {
    console.log('Hola arrow ' + name);
};

const returnedValFromThis = greeting('Alejandro', 40, true, 'Costa Rica');

// greetingTwo('Luis');

// greetingArrow();
// greetingArrowTwo('Alejandro');

function add(a, b) {
    return a + b;
}

// const addTwo = (a, b) => {
//     return a + b;
// }

const addTwo = (a, b) => a + b;

function getRandom() {
    return Math.random();
}

const getRandomTwo = () => Math.random();

console.log(getRandomTwo());