// let cars = ["Saab", "Volvo", "BMW"];
// let arr = ["Saab", 25, true,null, {name : "abc",age:12}, {name:"xyz"},function hello(params) {

// }];
//  cars[2] = "maruti"

// console.log(cars)
// console.log(arr[6])
// console.log(typeof(cars))
// let arr = [2,"heloo",true,null,undefined]

// const fruits = ["Banana", "Orange", "Apple", "Mango",25,"h",25,"Saab", "Volvo", "BMW" ,"h",25,"Saab", "Volvo", "BMW","h",25,"Saab", "Volvo", "BMW","h",25,"Saab", "Volvo", "BMW","h",25,"Saab", "Volvo", "BMW","h",25,"Saab", "Volvo", "BMW", 25,true];
// // let length = fruits.length - 1 ;

// console.log(fruits[ fruits.length - 1])

// const arr = [2,3,5,6]
// let length = arr.length 
// console.log(arr[length -1])
// console.log(fruits[35])


// iteration over array
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango"];

// for (let i = 0; s; i++) {
//     console.log(fruits[i])
// }

// const arr = [2, 3, 4, 6, 7, 5, 4, 8]

// for (let i = 0; i <= arr.length; i++) {

//     if (arr[i] % 2 == 0) {
//         console.log(`${arr[i]} is an even number`)
//     } else {
//         console.log(`${arr[i]} is an odd number`)

//     }
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.forEach(function (element) {
//     console.log(element)
// })

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits[20] = "pineple"
// fruits.push("pinple")
// fruits.push("apple")
// fruits.push("bannana")
// console.log(fruits)

// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits)


// var points = new Array(40);
// points[5] = "hello"

// console.log(points)



// ********Array MEthods*******
// push pop method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.toString()) ;
// // console.log(fruits.join(" & ")) ;


// let poppedOut =  fruits.pop()
// console.log(poppedOut)
// console.log(fruits)


// shift & unshift method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let poppedOutValue = fruits.shift();
// console.log(fruits)
// console.log(poppedOutValue)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// fruits.unshift("pineple");

// console.log(fruits)

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];

// const newArray = arr1.concat("hello");
// console.log(newArray)


// splice array method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits)

// slice method
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,4);

// console.log(fruits)
// console.log(citrus)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)

const points = [40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,40, 100, 1,11124,3332,1,655448,333,21,2245, 5, 25, 10,];

points.sort(function(a,b) {
    return a - b
});

let len = points.length
console.log(points[len-1])
console.log(points[0])