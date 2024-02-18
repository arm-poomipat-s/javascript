// let arr = ["I", "study", "Javascript"];

// arr.splice(1,1);

// console.log(arr);

// let arr = ["I", "study", "Javascript", "right", "now"];

// arr.splice(0, 3, "Let's", "dance");

// console.log(arr);

// let removed = arr.splice(0, 2);
// console.log(removed);

// console.log(arr.slice(1,3));

// .concat([3,4], [7,8]) = [3,4,7,8] 

// arr.forEach( (value, index, array) => {
//     console.log(`${value}, ${index}, ${array}`);
// })

// let users = [
//     {id:1, name: "jhon"},
//     {id:2, name: "Pete"},
//     {id:3, name: "Mary"}
// ];

// let user = users.find(item => item.id ==1);
// console.log(user.name);

//filter หาค่าที่ต้องการเจอตัวแรกแล้วคืนกลับ

// let arr = ["I", "study", "Javascript", "right", "now"];

// let textLength = arr.map(value => value.length);
// console.log(textLength);

//sort เรียงลำดับ

//reverse() เหมือน sort แต่กลับด้าน

//split , join (String)

// let array1 = [1, 2, 30, 400];

// let array2 = array1.map(value => value*2);
// let array3 = array1.map(value => value.toString());

// console.log(array3);

// let array1 = [1, "1", 2, {}];

// let array2 = array1.map(value => typeof(value));

// console.log(array2);

let array1 = ["apple", "banana", "orange"];
let array2 = array1.map(value => value.toUpperCase());

console.log(array2);