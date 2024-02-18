// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }
// }

// let user = new User("arm");

// console.log(user.name);
// user.sayHi();

//method ของ class ไม่เจอใน for in 

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let rabbit = new Rabbit("White rabbit", 5);

console.log(rabbit.name);
rabbit.run(200);
rabbit.stop();

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.stop();

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }

// let rabbit = new Rabbit("White Rabbit");

// console.log(rabbit);
// rabbit.hide();
// rabbit.run(400);

// let rabbit = new Animal("rabbit");

// console.log(rabbit.name);
// console.log(rabbit.speed);

// rabbit.run(100);
// rabbit.stop();