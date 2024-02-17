// let user = {
//     name: "jhon",
//     age: 30,
// }

// user.height = 170,
// console.log(user);
// delete user.height
// console.log(user)
// console.log(user["name"]);

// let human = {
//     name: "arm",
//     age: 28,
//     house: "elio",
//     isSingle: true,
//     isSmart: 5
// }

// // console.log("isSingle" in human);

// for (key in human) {
//     console.log(key);
//     console.log(human[key]);
// }

// let pName= "age";

// let obj = {
//     [pName]: 28
// }

// console.log(obj)

// let fruit = "apple";
// let bag = {}

// bag[fruit] = 5;

// console.log(bag);

// let obj = {}


// while(( name = prompt("Enter a key: ")) !=="stop") {
//   let value = prompt("Enter value: ");
//   obj[name] = value;
// }

// console.log(obj);

// let obj = {}


// while(( name = prompt("Enter a key: ")) !=="stop") {
//   let value = prompt("Enter value: ");
//   if (value > 1) name = name + "s"
  
//   obj[name] = value;
// }

// console.log(obj);

// let obj = {}

// obj.name = "arm"
// obj.lastname ="zzz"

// obj.boy=obj.name;
// delete obj.name;

// console.log(obj);

// let user = {
//     name: "jhon",
//     age: 30,
// }

// let arm = {};

// console.log(Object.keys(arm).length);
// console.log(Object.keys(user).length);

// let isEnty = (obj) => {
//     if (Object.keys(obj).length !== 0) {
//         return true
//     } 
    
//     return false
  
// }

// console.log(isEnty(user));
// console.log(isEnty(arm));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum= (obj) => {
//     let total = 0;

//     for (key in obj) {
//         total += obj[key];
//     }

//     return total;
// }

// console.log(sum(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

let multiplyNummeric = (obj, times) => {
    for (key in obj) {

        if (typeof(obj[key]) !== 'number') continue;

        obj[key] *= times
        
    }

    return obj;
}

console.log(multiplyNummeric(menu, 7));


