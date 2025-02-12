const gt = (a, b) => (a > b) ? a : b;

const haveMembership = (member) => (member) ? '2 Dólares' : '10 Dólares';

console.log(gt(20, 15));
console.log(haveMembership(false));

const friend = false;
const friendsArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')(),
    gt(10, 15),
];
console.log(friendsArr);

const note = 82.5; // A+, A, B+
const grade = note >= 95 ? 'A+' : 
            note >= 90 ? 'A' : 
            note >= 85 ? 'B+' :
            note >= 80 ? 'B' : 
            note >= 75 ? 'C+' : 
            note >= 70 ? 'C' : 'F';

console.log({ note, grade });
