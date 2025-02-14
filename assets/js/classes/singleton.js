class Singleton {
    static instance; // this is undefined
    name = '';

    constructor(name = '') {
        if (!!Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }
}

const singleton = new Singleton('Singleton');
const singleton2 = new Singleton('Singleton 2');
const singleton3 = new Singleton('Singleton 3');

console.log(`Instance #1: ${singleton.name}`); // Instance: Singleton
console.log(`Instance #2: ${singleton2.name}`); // Instance: Singleton 2
console.log(`Instance #3: ${singleton3.name}`); // Instance: Singleton 3