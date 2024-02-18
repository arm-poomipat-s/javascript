// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.eats);

//prototype can chain but it should not be a circle
// เขียน proprty ทับ propoty ที่ไม่ต้องการได้
// for จะ loop ไปหา proporty ที่อ้างอิงมาด้วย

// let head = {
//     glass: 1
// };

// let table = {
//     pen: 3
// };

// let bed = {
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     money: 2000
// };

// table.__proto__ = head;
// bed.__proto__ =table;
// pockets.__proto__ = bed;

//F prototype 

// let animal = {
//     eats: true
// }

// function Rabbit(name) {
//     this.name = name;
    
// }

// Rabbit.prototype = animal;



// let rabbit = new Rabbit("White rabbit");
// console.log(rabbit.name);
// console.log(rabbit.eats);

//modern prototype

// let animal = {
//     eats: true
// };

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// });

// console.log(rabbit.jumps);
// console.log(rabbit.eats);

let dictionary = Object.create(null, {
    toString: {
        value(){
            return Object.keys(this).join();
        }
    }
});


