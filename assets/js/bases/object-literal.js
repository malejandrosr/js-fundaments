const character = {
    name: 'Alejandro',
    codeName: 'Ironman',
    live: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suites: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '10880, 90265',
        location: 'Malibu, California',
    },
    'last-movie': 'Avengers End Game',
};

console.log(character);
console.log('Nombre:', character.name);
console.log('Nombre:', character['name']);
console.log('Edad:', character.age);
console.log('Coords:', character.coords);
console.log('Lat:', character.coords.lat);
console.log('No. trajes:', character.suites.length);
console.log('Último traje:', character.suites[character.suites.length - 1]);

const x = 'live';
console.log('Vivo', character[x]);

console.log('Última película', character["last-movie"]);

// más detalles
delete character.age;

console.log(character);

character.married = true;

const pairEntries = Object.entries(character);
console.log(pairEntries);

Object.freeze(character);

character.money = 1222222222222;
character.married = false;
character.address.location = 'CDMX';
console.log(character);

const properties = Object.getOwnPropertyNames(character);
const values = Object.values(character);
console.log({ properties, values });


