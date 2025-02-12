// function createPerson(name, lastname) {
//     return { name, lastname };
// }

const createPerson = (name, lastname) => ({ name, lastname });

const person = createPerson('Alejandro', 'Salgado');

console.log(person);

// function printArgs() {
//     console.log(arguments);
// }

const printArgs = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
};

const [married, live, name, greeting] = printArgs(10, true, false, 'Alejandro', 'Hola');
console.log({ married, live, name, greeting });

const { lastname: newLastname } = createPerson('Alejandro', 'Salgado');
console.log({ newLastname });

const alex = {
    name: 'Alejandro',
    codeName: 'Ironman',
    live: false,
    age: 40,
    suites: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const printProperties = ({ name, codeName, age = 15, live, suites }) => {
    console.log({ name, codeName, age, live, suites });
};


printProperties(alex);


