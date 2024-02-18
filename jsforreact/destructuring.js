// // let arr = ["Ilya", "Kantor"];

// // let [fname, lname] = arr;

// // console.log(fname);
// // console.log(lname);

// // let [fname, , title] = ["julius", "Caesar", "Consul", "of the Roman Republic"];

// // console.log(title);

// // let user = {
// //     name: "jhon",
// //     age: 30
// // };

// // for (let [key, value] of Object.entries(user)) {
// //     console.log(`${key}: ${value}`);
// // }

// // let movie = ["julius", "Caesar", "Consul", "of the Roman Republic"];

// // let [fname, ...rest] = movie;
// // // console.log(rest);

// // //default value
// // let [name="Guest", username ="Anonymous"] = ['Julius'];

// // console.log(name);
// // console.log(username);

// // let options = {
// //     // title: "Menu",
// //     width: 100,
// //     height: 200
// // };

// // let {title: t = "Oragne", width: w, height: h} = options

// // console.log(t);
// // console.log(w);
// // console.log(h);

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {title, ...rest} = options

// console.log(rest);

// let user = {
//     name: "jhon",
//     year: 30
// }

// let {name} = user;
// console.log(typeof(name));
// let {year: age} = user;
// console.log(age);
// let {isAdmin = false} = user;
// console.log(isAdmin)

let salaries = {
    "jhon": 100,
    "Pete": 900,
    "Mary": 700
};

function topSalary(s) {
    if(!s || Object.entries(s).length == 0) {
        return null
    }

    let maxValue = []

    for (let [name, value] of Object.entries(s)) {
        maxValue.push(value);
    }

    let max = Math.max(...maxValue);

    for (key in s) {
        if (s[key] == max) {
            return key;
        }
    }
    

}


console.log(topSalary(salaries));