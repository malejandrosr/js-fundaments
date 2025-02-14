class Rectangle {
    #area = 0;

    constructor(height, width) {
        this.height = height;
        this.width = width;

        this.#area = height * width;
    }

    #calculateArea() {
        console.log(this.#area * 2);
    }
}

const rec = new Rectangle(10, 20);

// rec.#area = 200;
// rec.#calculateArea(); // 400

console.log(rec); // 200