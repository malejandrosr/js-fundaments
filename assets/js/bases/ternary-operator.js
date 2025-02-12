const day = 1;
const currentTime = 10;

let openTime;
let message;

// if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//     console.log('Fin de semana');

//     openTime = 9;
// } else {
//     console.log('Entre semana');

//     openTime = 11;
// }

openTime = ([0, 6].includes(day)) ? 9 : 11;

// if (currentTime >= openTime) {
//     message = 'Esta Abierto';
// } else {
//     message = `Esta cerrado, hoy abrimos a las ${openTime}`;
// }

message = (currentTime >= openTime) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${openTime}`;

console.log({ openTime, message });