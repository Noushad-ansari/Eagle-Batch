// import  {message,sum,obj}  from './sum.js'
import * as fullObj from './sum.js'
// console.log(message)
console.log(fullObj.message)

console.log(fullObj.sum(2,4))

// sum(2,5)

// console.log(obj)

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum)