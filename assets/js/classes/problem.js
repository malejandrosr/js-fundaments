const per1 = {
    name: 'Alejandro',
    age: 30,

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

const per2 = {
    name: 'Luis',
    age: 25,

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

// this will be called with the new keyword
function Person(name, age) {
    console.log('Executed the function');

    this.name = name;
    this.age = age;

    this.print = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const per3 = new Person('Alejandro', 30);
per3.print();
const per4 = new Person('Melisa', 25);
per4.print();