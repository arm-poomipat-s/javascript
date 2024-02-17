// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("arm");

// console.log(user.name);

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         console.log(this.name);
//     }
// }

// let user1 = new User("arm");

// user1.sayHi();

// function Cal() {
//     this.read = function(n1, n2) {
//         this.num1 = n1;
//         this.num2 = n2;
//     };
//     this.sum = function () {
//         return this.num1 + this.num2
//     };
//     this.mul = function () {
//         return this.num1 * this.num2
//     }
//  }

//  let calculator1 = new Cal();
//  calculator1.read(15, 70);
//  console.log(calculator1.sum());
//  console.log(calculator1.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(updateValue) {
        this.value += updateValue;
    }
}

let banana = new Accumulator(100);
banana.read(70);

console.log(banana);