let games = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];
console.log('Largo:', games.length);

let first = games[0];
let last = games[games.length - 1];

console.log({ first, last });

games.forEach((element, index, arr) => {
    console.log({ element, index, arr });
});

let newLength = games.push('F-Zero');

console.log({ newLength, games });

newLength = games.unshift('Fire Emblem');
console.log({ newLength, games });

let gameDeleted = games.pop();
console.log({ gameDeleted, games });

let position = 1;
console.log(games);
let gamesDeleted = games.splice(position, 2);

console.log({ gamesDeleted, games });

let metroidIndex = games.indexOf('Metroid');
console.log({ metroidIndex });