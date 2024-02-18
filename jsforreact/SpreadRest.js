//Rest paremeter
function showName (fname, lname, ...titles) {
    // console.log(fname +' '+ lname);

    // console.log(titles);
}
//Rest ควนอยู่หลังสุดเสมอ

showName("Juluis", "Caesar", "Consul", "Imperator");

//Spread

let arr = [3, 5, 1];

// console.log(...arr);
// console.log(Math.max(...arr));

let array1 = [3, 5, 1];
let array2 = [8, 9, 15];

let merged = [0, ...array1, 7, ...array2];
console.log(merged);