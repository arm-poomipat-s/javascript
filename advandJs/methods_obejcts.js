// let user = {
//     name: "Jhon",
//     age: 30,
// };

// user.sayHi = function() {
//     console.log("Hello")
// }

// user = {
//     sayHi: function() {
//         console.log("Hello")
//     },
//     name: "arm"

// }

// user = {
//     sayHi() {
//         console.log("Hello")
//     },
//     name: "arm"

// }

// console.log(user.sayHi());

// let user = {
//     name: "arm",
//     age: 28,

//     sayHi() {
//         console.log(this.name);
//     }
// }

// console.log(user.sayHi());

// let user = {
//     name: "jhon"
// }

// let admin = {
//     name: "admin"
// }

// function sayHi() {
//     console.log(this.name);
// }

// user.sayHi = sayHi;
// admin.sayHi = sayHi;

// user.sayHi();

// admin.sayHi();

// let user = {
//     name: "jhon",
//     go: function() { console.log(this,name)}
// }

// (user.go)()

// function makeUser() {
//     return {
//         name: "Jhon",
//         ref: this
//     }
// }

// let user = makeUser();

// console.log(user.ref.name)

let calculator = {
    read: function(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    },
    sum: function () {
        return this.num1 + this.num2
    },
    mul: function () {
        return this.num1 * this.num2
    }
}

// calculator.read(7,8);
// console.log(calculator.sum());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return ladder;
    },
    down() {
        this.step--;
        return ladder;
    },
    showStep() {
        console.log(this.step);
    }
}

ladder.up().up().down();

ladder.showStep()
