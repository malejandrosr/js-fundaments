class Person {
    static _count = 0;

    static get count() {
        return `There are ${Person._count} instances of Person class`;
    }

    static message() {
        console.log(this.code);
        console.log('Hello from Person class');
    }

    name = '';
    code = '';
    phrase = '';
    food = '';

    constructor(name = 'No name', code = 'No code', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._count++;
    }

    /**
     * @param {string} food
     * @returns {void}
     */
    set setFavoriteFood(food) {
        this.food = food.toUpperCase();
    }

    /**
     * @returns {string}
     */
    get getFavoriteFood() {
        return `The favorite food of ${this.name} is ${this.food}`;
    }

    whoAmI() {
        console.log(`I'm ${this.name} and my code is ${this.code}`);
    }

    myPhrase() {
        this.whoAmI();

        console.log(`${this.code} says: ${this.phrase}`);
    }
}

const per1 = new Person('Peter Parker', 'Spiderman', 'I\'m your friendly neighborhood Spiderman');
// const per2 = new Person('Tony Stark', 'Ironman', 'I\'m Ironman');

console.log({
    per1,
    // per2,
});

per1.myPhrase();
// per2.myPhrase();

per1.setFavoriteFood = 'Strawberry pie from Aunt May';
// per2.setFavoriteFood = 'Cheeseburger from Burger King';

console.log(per1.getFavoriteFood);
console.log(per1);
// console.log(per2);

console.log('Static count:', Person._count);
console.log('Static count:', Person.count);
Person.message();

Person.externalProp = 'This is an external property';

console.log(Person.externalProp);
console.log(Person);