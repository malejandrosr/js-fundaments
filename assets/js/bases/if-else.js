let a = 10;

if (a >= 10) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const today = new Date(); // {}
let day = today.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

console.log({ day });

if (day === 0) { // no usar aginación dentro de este bloque
    console.log('Domingo');
} else if (day === 1) {
    console.log('Lunes');
    // if (day === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if (day === 2) {
    console.log('Martes');
} else {
    console.log('No es Domingo, Lunes o Martes');
}

const daysObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
};
const daysArr = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(daysObj[day] || 'Día no definido en obj');
console.log(daysArr[day] || 'Día no definido en arr');