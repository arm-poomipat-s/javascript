// let arr = new Array();
// let arrs = [];

// let fruits = ["Apple", "Orange", "Plum"];

// fruits[2] = 'Pear'

// console.log(fruits);

// fruits[3] = "mango";

// console.log(fruits);

// console.log(fruits.length);

// let arr = ['Apple', {name: 'Jhon'}, true, function () {console.log("Hello")}];

// let fruits = ['Apple', 'Banana'];

// fruits.push('Oragne');
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.push('Coconut');
// console.log(fruits);
// fruits.unshift('Rambotan');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

let arr = ['Apple', 'Orange', 'Pear'];

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element);
// });

// for (let key in arr) {
//     console.log(arr[key]);
// }

// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// styles[1] = 'Classics';
// styles.shift();
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

function sumInput(value) {
    total = 0;
    while(typeof(value) !== 'string') {
        total += value;
    } 

    return total;
}

sumInput(7);
sumInput(8);
sumInput("Hello");