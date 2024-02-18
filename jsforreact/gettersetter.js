// let user = {
//     name: "jhon",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// console.log(user.fullName);
// user.fullName = "Alice Cooper";
// console.log(user.name);
// console.log(user.surname);
// console.log(user.fullName);

// let user = {
//     name: "Jhon",
//     surname: "Smith"
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// });

// console.log(user.fullName);

// for (let key in user) console.log(key);


function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let jhon = new User("jhon", new Date(1992, 6, 1));

console.log(jhon.birthday);
console.log(jhon.age);


