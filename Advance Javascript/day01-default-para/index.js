// function sum(a = 20,b=30) {

//     let result = a + b
//     console.log(result)
// }
// sum()

// function sum(a,b,...args) {
//     console.log(a+b)
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     }
//     console.log( total);
// }

// sum(1, 2, 3,2,4,6,7,8,4,5,);

// const odd = [1,3,5];
// const even = [2,4,6]
// const combined = [...even, 24,44,67, ...odd];
// console.log(combined);

// let obj1 = {name:"a",age:25}
// let obj2 = {name:"2",age:245}
// let obj3 = {...obj1 ,...obj2}
// console.log(obj3)


// Destructring
let arr = [2,1,3,4,56]
// let newVar =  arr[2]
// let cs =  arr[3]
// let ncssewVar =  arr[1]

let  [w, v,c ,e] = arr
let  [a, , ,d] = arr
let  [a,b,...rest] = arr
 console.log(rest)

let obj1 = {name : "john", lastName : "doe", age:25,gender : "male"}

let {name:firstName,lastName,...rest} = obj1

console.log(firstName)
console.log(lastName)
console.log(rest)
