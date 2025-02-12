// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videogames = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videogames });
console.log(videogames[0]);

let thingsArr = [
    true,
    123,
    'Alejandro',
    1 + 2,
    function () {},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',
    ]],
];
// console.log(thingsArr);
// console.log(thingsArr[0]);
// console.log(thingsArr[2]);
console.log(thingsArr[7][4][1]);