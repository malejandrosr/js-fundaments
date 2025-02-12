let a = 10;
let b = 10;

a = 30;

console.log({ a, b });

let juan = { name: 'Juan' };
let ana = { ...juan };
ana.name = 'Ana';

console.log({ juan, ana });

const changeName = ({ ...person }) => {
    person.name = 'Alex';
    return person;
};

let peter = { name: 'Peter' };
let alex = changeName(peter);

console.log({ peter, alex });

// arreglos
const fruits = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otherFruitsSpread = [ ...fruits ];
console.timeEnd('spread');

console.time('slice');
const otherFruits = fruits.slice();
console.timeEnd('slice');

otherFruits.push('Mango');

console.table({ fruits, otherFruits });