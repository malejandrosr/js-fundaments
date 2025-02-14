class Person {
    static byObject({ name, lastname, country  }) {
        return new Person(name, lastname, country);
    }

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Lastname: ${this.lastname}, Country: ${this.country}`);
    }
}

const name1 = 'Alejandro',
    lastname1 = 'Salgado',
    country1 = 'Mexico';

const obj1 = {
    name: 'Melisa',
    lastname: 'Segura',
    country: 'México'
};

const person1 = new Person(name1, lastname1, country1);
const person2 = Person.byObject(obj1);

person1.getInfo();
person2.getInfo();